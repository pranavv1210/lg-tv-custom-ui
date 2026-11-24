'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const source = fs.readFileSync(
  path.join(__dirname, '..', 'launcher', 'js', 'core', 'focus.js'),
  'utf8',
);

function createHarness() {
  let now = 5000;
  let routerBack = false;
  let platformBackCalls = 0;
  const listeners = {};
  const messages = [];
  const body = {};
  const item = {
    id: 'home-action',
    className: 'focusable',
    disabled: false,
    parentNode: null,
    getAttribute(name) {
      return name === 'data-action' ? 'home:noop' : null;
    },
    setAttribute() {},
    focus() {},
  };
  const zone = {
    className: 'zone',
    parentNode: body,
    getAttribute(name) {
      return name === 'data-zone' ? 'hero' : null;
    },
  };
  item.parentNode = zone;

  class FakeDate extends Date {
    static now() {
      return now;
    }
  }

  const window = {
    Astra: {
      Util: {
        all(selector) {
          if (selector === '[data-zone]') return [zone];
          if (selector === '.focusable') return [item];
          return [];
        },
        addClass() {},
        removeClass() {},
      },
      Rails: { reveal() {} },
      Router: {
        back() {
          const result = routerBack;
          routerBack = false;
          return result;
        },
        current() {
          return 'home';
        },
      },
      Toast: {
        show(message) {
          messages.push(message);
        },
      },
      Platform: {
        back() {
          platformBackCalls += 1;
          return true;
        },
      },
      Actions: { dispatch() {} },
    },
  };
  const document = {
    body,
    addEventListener(name, handler) {
      listeners[name] = handler;
    },
  };

  vm.runInNewContext(source, { window, document, Date: FakeDate });
  window.Astra.Focus.init();

  return {
    press(keyCode) {
      listeners.keydown({
        keyCode,
        repeat: false,
        preventDefault() {},
      });
    },
    advance(milliseconds) {
      now += milliseconds;
    },
    setRouterBack(value) {
      routerBack = value;
    },
    openModal() {
      window.Astra.Focus.openModal();
    },
    closeModal() {
      window.Astra.Focus.closeModal();
    },
    get platformBackCalls() {
      return platformBackCalls;
    },
    get messages() {
      return messages;
    },
  };
}

test('a directional key does not count as the first Back press', () => {
  const harness = createHarness();

  harness.press(38);
  harness.advance(500);
  harness.press(461);

  assert.equal(harness.platformBackCalls, 0);
  assert.equal(harness.messages.length, 1);

  harness.advance(500);
  harness.press(461);

  assert.equal(harness.platformBackCalls, 1);
});

test('navigating back resets the home double-Back window', () => {
  const harness = createHarness();

  harness.press(461);
  harness.advance(500);
  harness.setRouterBack(true);
  harness.press(461);
  harness.advance(100);
  harness.press(461);

  assert.equal(harness.platformBackCalls, 0);
});

test('opening and closing a modal resets the home double-Back window', () => {
  const harness = createHarness();

  harness.press(461);
  harness.advance(500);
  harness.openModal();
  harness.closeModal();
  harness.advance(100);
  harness.press(461);

  assert.equal(harness.platformBackCalls, 0);
});

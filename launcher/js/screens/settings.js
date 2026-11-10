(function (w) {
  "use strict";
  var themes = ["crimson", "blue", "violet"];
  var themeNames = {
    crimson: "Crimson Night",
    blue: "Midnight Blue",
    violet: "Violet Haze"
  };
  function apply() {
    var s = w.Astra.Store;
    document.body.className =
      "theme-" +
      s.get("theme") +
      " motion-" +
      s.get("motion") +
      " quality-" +
      s.get("quality");
    w.Astra.Util.id("setting-theme").innerHTML = themeNames[s.get("theme")];
    w.Astra.Util.id("setting-clock").innerHTML =
      s.get("clock") === "12" ? "12 hour" : "24 hour";
    w.Astra.Util.id("setting-motion").innerHTML =
      s.get("motion").charAt(0).toUpperCase() + s.get("motion").slice(1);
    w.Astra.Util.id("setting-quality").innerHTML =
      s.get("quality") === "max"
        ? "Max quality"
        : s.get("quality").charAt(0).toUpperCase() + s.get("quality").slice(1);
    w.Astra.Clock.update();
  }
  function cycle(key, list) {
    w.Astra.Store.set(key, w.Astra.Util.cycle(list, w.Astra.Store.get(key)));
    apply();
    w.Astra.Toast.show("Setting updated.", "success");
  }
  function appEditor() {
    var apps = w.Astra.Store.get("apps");
    var html =
      "<h2>App collection</h2><p>Edit IDs obtained from your TV. Empty IDs stay unavailable.</p>";
    var i;
    for (i = 0; i < apps.length; i += 1) {
      html +=
        '<div class="edit-row"><label>' +
        w.Astra.Util.escape(apps[i].name) +
        '</label><input class="focusable app-id-input" data-action="input:noop" data-index="' +
        i +
        '" value="' +
        w.Astra.Util.escape(apps[i].id) +
        '"><button class="glass-thin focusable" data-action="app:toggle:' +
        i +
        '">' +
        (apps[i].visible ? "Shown" : "Hidden") +
        '</button><button class="glass-thin focusable" data-action="app:up:' +
        i +
        '">↑</button></div>';
    }
    w.Astra.Modal.open(html, true);
  }
  function saveEditor() {
    var fields = w.Astra.Util.all(".app-id-input");
    var apps = w.Astra.Store.get("apps");
    var i;
    for (i = 0; i < fields.length; i += 1) {
      apps[parseInt(fields[i].getAttribute("data-index"), 10)].id = fields[
        i
      ].value.replace(/^\s+|\s+$/g, "");
    }
    w.Astra.Store.set("apps", apps);
    w.Astra.Home.render();
    w.Astra.Apps.render();
  }
  function diagnostics() {
    var c = w.Astra.Platform.capabilities();
    var html =
      "<h2>About &amp; diagnostics</h2><p><strong>Astra Home 0.4.0</strong><br>Resolution: " +
      c.resolution +
      "<br>webOS bridge: " +
      c.webOS +
      "<br>Luna services: " +
      c.luna +
      "<br>Platform Back: " +
      c.platformBack +
      "<br>Local storage: " +
      c.localStorage +
      "<br>Optional backdrop blur: " +
      c.backdrop +
      " (disabled)<br>Online hint: " +
      c.online +
      "<br>User agent: " +
      w.Astra.Util.escape(c.userAgent) +
      "</p>";
    w.Astra.Modal.open(
      html,
      false,
      '<button class="glass-thin focusable" data-action="diagnostic:probe">Probe app listing</button><button class="glass-thin focusable" data-action="debug:fps">FPS overlay</button>'
    );
  }
  w.Astra.Settings = {
    apply: apply,
    cycle: cycle,
    appEditor: appEditor,
    saveEditor: saveEditor,
    diagnostics: diagnostics,
    themeNames: themeNames
  };
})(window);

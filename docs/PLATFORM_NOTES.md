# webOS 2.0 platform notes

Target: LG 43UF770T-TA, firmware 04.06.25, webOS 2.0 generation.

| API / capability | Exists on 2.0 | Third-party access | Permission | Test method | Result |
|---|---|---|---|---|---|
| webOSTV.js service bridge | Yes | Yes | Per target service | Launch app; inspect console | UNTESTED on TV |
| Application Manager `launch` | Yes | Documented | `application.launcher` | Launch verified Hello TV ID | UNTESTED on 0.3.0 |
| `getAppLoadStatus` | No; 4.0+ | — | — | Not called | Unsupported |
| `listApps` / launch-point listing | Service may respond but ordinary access is likely restricted | Unknown/restricted | Unknown | Diagnostics “Probe app listing” | UNTESTED |
| Connection Manager `getStatus` | Yes | Documented | `network.query` | Header status and panel | UNTESTED on TV |
| `navigator.onLine` events | Web API | Yes | None | Disconnect/reconnect | UNTESTED on TV |
| Input/source switching | Unknown public third-party API | Not verified | Likely restricted | No call made | Unsupported until verified |
| Native system settings launch | No verified public ID/action | Not verified | Unknown | In-app Settings used | Unsupported until verified |
| `webOS.platformBack` / PalmSystem fallback | Yes | Yes | None | Back twice from Home | UNTESTED on TV |
| HTML5 video | Engine capability | Yes, codec-dependent | None | Media test player | UNTESTED on TV |
| Local storage | Web API | Expected | None | Change setting, relaunch | UNTESTED on TV |

## User agent

Desktop QA UA is intentionally not recorded as the television UA. Capture the real value after installation:

```powershell
ares-inspect --device <your-device-name> --app com.pranav.lgtv.launcher --open
```

The app logs `Astra UA: ...` during startup. Paste the observed television string here:

`PENDING — physical-TV inspection required`

## Known app IDs

Netflix `netflix`, YouTube `youtube.leanback.v4`, Prime Video `amazon`, and Hotstar-like IDs are treated as unverified and are not prefilled. Use Settings → App collection after device evidence is obtained.


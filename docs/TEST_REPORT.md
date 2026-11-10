# Test report

Automated syntax, reference, metadata, compatibility, size and packaging checks passed. The local Chrome executable exited without producing headless screenshots or DOM dumps, so interactive desktop status remains **PENDING**. No physical-TV claims are made.

| Feature | Implemented | Desktop-tested | TV-tested | Unsupported / notes |
|---|---:|---:|---:|---|
| Fixed-stage scaling | Yes | Static verified; visual pending | Pending | — |
| Home rails and focus | Yes | Code/static verified | Pending | — |
| Apps screen | Yes | Code/static verified | Pending | Installed-app discovery restricted |
| Media recents | Yes | Code/static verified | Pending | — |
| HTML5 test player | Yes | Not playback-tested | Pending | Codec/device result unknown |
| Three themes | Yes | Code/static verified | Pending | — |
| Clock formats | Yes | Code/static verified | Pending | — |
| Motion levels | Yes | Code/static verified | Pending | — |
| Performance mode | Yes | Code/static verified | Pending | — |
| App ID editor/reorder/visibility | Yes | Code/static verified | Pending | Requires IDs from device evidence |
| Network status | Yes | Failure fallback only | Pending | Detail depends on service response |
| Inputs panel | Yes | Code/static verified | Pending | Switching unsupported until verified |
| Application launch | Yes | Failure path not run | Pending | Hello TV ID verified installed via CLI |
| Back/focus restoration | Yes | Code/static verified | Pending | — |
| FPS overlay | Yes | Not measured | Pending | Measures browser frame cadence |
| ES5 syntax | Yes | Passed `node --check` | — | 23,907 bytes application JS |
| Asset/reference verification | Yes | Passed | — | All referenced files exist |
| Packaging | Yes | Passed | — | 43,042-byte IPK |

## Physical-TV checklist

1. Record the UA from the inspector console.
2. Press every arrow repeatedly and hold each direction.
3. Open every screen and return with Back; verify exact focus restoration.
4. Test LG Back key 461 and desktop fallback keys.
5. Launch Hello TV and record success/failure.
6. Enter evidence-backed streaming IDs and test each launch.
7. Change every setting, relaunch Astra, and verify persistence.
8. Disconnect/reconnect the network and verify status.
9. Run app-listing diagnostics and record the exact response.
10. Toggle FPS overlay in Max and Lite modes; record observed FPS during rapid rail navigation.
11. Test the configured media URL and record codec result.


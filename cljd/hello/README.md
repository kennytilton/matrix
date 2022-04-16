# hello

A new Flutter project.

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://flutter.dev/docs/cookbook)

For help getting started with Flutter, view our
[online documentation](https://flutter.dev/docs), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

## IntelliJ/Cursive (and Flutter DevTools)

1. Install the Flutter plug-in
   * the IntelliJ menu bar `Tools` menu should now show `Flutter`;
   * the Flutter sub-menu includes `Open Flutter DevTools`;
     * `DevTools` doc is [here](https://docs.flutter.dev/development/tools/devtools/overview).
2. For editor support:
   * open `Preferences...` dialog;
   * select `Editor` in left panel;
   * under Editor select `filetypes`;
   * select `Clojure file` in left-side panel of filetypes;
   * in the `File patterns` pane, click `+` to add a new type;
   * enter `*.cljd`;
   * click `Apply` and then `OK`;
   * `.cljd` text should now be formatted as is `.clj` text.

## Print debugging

Below, "do-block" means that code in a `do` wrapper placed around the `:body` property of `(Material.scaffold...` form. 

"post-runapp" means code inserted after the `material/runApp` form.

These work for me:
- (prn "do-block prn OK")
- (dart:core/print "do-block dart-core-print-says-hi")
- (prn "post-runapp> PRN!" :name "It works now!")
- (dart:core/print "post-runapp> dart-core-print-says-hi")

#### Not working:

- Add `["dart:developer" :as dev]` to my `:require`
- that ^^ compiles OK as do `dev/log` forms but, no output from:
  * `(dev/log "dev/log do block")` or
  * `(dev/log "dev/log post runApp")`.

## Tools Debugging
- Add `["dart:developer" :as dev]` to my `:require` (same as above)
- `(dev/debugger)` interrupts execution and shows a "paused" (?) button in DevTools
- `(widgets/debugDumpApp)` kinda works, but I have to figure out how to feed it. Both terminal and DevTools console show:
```shell
flutter: WidgetsFlutterBinding - DEBUG MODE
flutter: <no tree currently mounted\>
```


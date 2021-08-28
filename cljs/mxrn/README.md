
### Setup:

```
$ ( cd react-native && yarn install )
$ ( cd react-native/ios && pod install )
```

### Running:

```
$ make shadow
$ make bundler
$ make ios
```

**Note:** The first time you run the simulator, you must press Command-D and then
click "Disable Fast Refresh". This will disable react-native's automatic
fast-refreshing. Instead, we are manually calling
`helix.experimental.refresh/refresh!` after shadow-cljs recompiles/reloads.

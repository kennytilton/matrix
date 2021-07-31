
## ClojureScript React Native with ShadowCLJS and Helix

An example live-reloading ClojureScript project that combines:

* [react-native](https://facebook.github.io/react-native/)
* [shadow-cljs](http://shadow-cljs.org/)
* [helix](https://github.com/Lokeh/helix)

This uses helix's integration with react-native fast-refresh for the live-reloading,
which works great!

### Setup:

```
$ ( cd react-native && yarn install )
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

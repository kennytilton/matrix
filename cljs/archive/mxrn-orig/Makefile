
init-react-native:
	npx react-native@0.61.5 init MyApp
	mv MyApp react-native
	cd react-native && yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
	cd react-native && echo 'import "./target/index.js";' > index.js

clean:
	rm -rf .shadow-cljs react-native/target

shadow:
	clj -m shadow.cljs.devtools.cli watch dev

repl:
	clj -m shadow.cljs.devtools.cli cljs-repl dev

bundler:
	cd react-native && yarn start --reset-cache

ios:
	cd react-native && yarn ios

import "dart:core" as dc;
import "main.dart" as Ukdmchlcoa_main;
import "../cljd/core.dart" as Ukdmchlcoc_core;
import "package:flutter/material.dart" as f_material;
import "package:flutter/widgets.dart" as f_widgets;
import "package:flutter/painting.dart" as f_painting;
import "dart:developer" as d_developer;

// BEGIN main
dc.dynamic main(){
Ukdmchlcoc_core.prn.$_invoke$1("do-block prn OK", );
dc.print("do-block dart-core-print-says-hi", );
f_material.runApp(f_material.MaterialApp(title: "Welcome to Flutter World", theme: f_material.ThemeData(primarySwatch: f_material.Colors.pink, ), home: f_material.Scaffold(appBar: f_material.AppBar(title: f_widgets.Text((Ukdmchlcoc_core.str.$_invoke$2("hello, world", Ukdmchlcoc_core.rand_int(99999, ), )), ), ), body: f_widgets.Center(child: f_widgets.Text((Ukdmchlcoc_core.str.$_invoke$2("hello, world v.", Ukdmchlcoc_core.rand_int(99999, ), )), style: f_painting.TextStyle(color: f_material.Colors.blue, fontSize: 32.0, ), ), ), ), ), );
Ukdmchlcoc_core.prn.$_invoke$3("post-runapp> PRN!", const Ukdmchlcoc_core.Keyword(null, "name", 2249783175, ), "It works now!", );
dc.print("post-runapp> dart-core-print-says-hi", );
return f_widgets.debugDumpApp();
}

// END main

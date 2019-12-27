define(['dart_sdk', 'packages/firebase_auth_web/firebase_auth_web', 'packages/firebase_core_web/firebase_core_web', 'packages/url_launcher_web/url_launcher_web'], function(dart_sdk, packages__firebase_auth_web__firebase_auth_web, packages__firebase_core_web__firebase_core_web, packages__url_launcher_web__url_launcher_web) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const firebase_auth_web = packages__firebase_auth_web__firebase_auth_web.firebase_auth_web;
  const firebase_core_web = packages__firebase_core_web__firebase_core_web.firebase_core_web;
  const url_launcher_web = packages__url_launcher_web__url_launcher_web.url_launcher_web;
  const generated_plugin_registrant = Object.create(dart.library);
  const CT = Object.create(null);
  generated_plugin_registrant.registerPlugins = function registerPlugins(registry) {
    firebase_auth_web.FirebaseAuthWeb.registerWith(registry.registrarFor(dart.wrapType(firebase_auth_web.FirebaseAuthWeb)));
    firebase_core_web.FirebaseCoreWeb.registerWith(registry.registrarFor(dart.wrapType(firebase_core_web.FirebaseCoreWeb)));
    url_launcher_web.UrlLauncherPlugin.registerWith(registry.registrarFor(dart.wrapType(url_launcher_web.UrlLauncherPlugin)));
    registry.registerMessageHandler();
  };
  dart.trackLibraries("packages/Feltes/generated_plugin_registrant", {
    "package:Feltes/generated_plugin_registrant.dart": generated_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["generated_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;yEAWoC;AACkC,IAApD,+CAAa,AAAS,QAAD,cAAc;AACiB,IAApD,+CAAa,AAAS,QAAD,cAAc;AACqB,IAAtD,gDAAa,AAAS,QAAD,cAAc;AACpB,IAAjC,AAAS,QAAD;EACV","file":"generated_plugin_registrant.ddc.js"}');
  // Exports:
  return {
    generated_plugin_registrant: generated_plugin_registrant
  };
});

//# sourceMappingURL=generated_plugin_registrant.ddc.js.map

define(['dart_sdk', 'packages/url_launcher_platform_interface/method_channel_url_launcher'], function(dart_sdk, packages__url_launcher_platform_interface__method_channel_url_launcher) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const url_launcher_platform_interface = packages__url_launcher_platform_interface__method_channel_url_launcher.url_launcher_platform_interface;
  const url_launcher_web = Object.create(dart.library);
  const $open = dartx.open;
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  const CT = Object.create(null);
  url_launcher_web.UrlLauncherPlugin = class UrlLauncherPlugin extends url_launcher_platform_interface.UrlLauncherPlatform {
    static registerWith(registrar) {
      url_launcher_platform_interface.UrlLauncherPlatform.instance = new url_launcher_web.UrlLauncherPlugin.new();
    }
    openNewWindow(url) {
      return html.window[$open](url, "");
    }
    canLaunch(url) {
      let parsedUrl = core.Uri.tryParse(url);
      if (parsedUrl == null) return FutureOfbool().value(false);
      return FutureOfbool().value(dart.test(parsedUrl.isScheme("http")) || dart.test(parsedUrl.isScheme("https")));
    }
    launch(url, opts) {
      let useSafariVC = opts && 'useSafariVC' in opts ? opts.useSafariVC : null;
      let useWebView = opts && 'useWebView' in opts ? opts.useWebView : null;
      let enableJavaScript = opts && 'enableJavaScript' in opts ? opts.enableJavaScript : null;
      let enableDomStorage = opts && 'enableDomStorage' in opts ? opts.enableDomStorage : null;
      let universalLinksOnly = opts && 'universalLinksOnly' in opts ? opts.universalLinksOnly : null;
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return FutureOfbool().value(this.openNewWindow(url) != null);
    }
  };
  (url_launcher_web.UrlLauncherPlugin.new = function() {
    url_launcher_web.UrlLauncherPlugin.__proto__.new.call(this);
    ;
  }).prototype = url_launcher_web.UrlLauncherPlugin.prototype;
  dart.addTypeTests(url_launcher_web.UrlLauncherPlugin);
  dart.setMethodSignature(url_launcher_web.UrlLauncherPlugin, () => ({
    __proto__: dart.getMethods(url_launcher_web.UrlLauncherPlugin.__proto__),
    openNewWindow: dart.fnType(html.WindowBase, [core.String])
  }));
  dart.setLibraryUri(url_launcher_web.UrlLauncherPlugin, "package:url_launcher_web/url_launcher_web.dart");
  dart.trackLibraries("packages/url_launcher_web/url_launcher_web", {
    "package:url_launcher_web/url_launcher_web.dart": url_launcher_web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["url_launcher_web.dart"],"names":[],"mappings":";;;;;;;;;;;;;wBAYqC;AACiB,MAA9B,+DAAW;IACjC;kBAMqC;AACnC,YAAY,AAAO,oBAAK,GAAG,EAAE;IAC/B;cAG8B;AAClB,sBAAgB,kBAAS,GAAG;AACtC,UAAI,AAAU,SAAD,IAAI,MAAM,4BAA0B;AAEjD,kCAC+B,UAA3B,AAAU,SAAD,UAAU,sBAAW,AAAU,SAAD,UAAU;IACvD;WAIS;UACQ;UACA;UACA;UACA;UACA;UACe;AAE9B,kCAA0B,AAAmB,mBAAL,GAAG,KAAK;IAClD;;;;;EACF","file":"url_launcher_web.ddc.js"}');
  // Exports:
  return {
    url_launcher_web: url_launcher_web
  };
});

//# sourceMappingURL=url_launcher_web.ddc.js.map

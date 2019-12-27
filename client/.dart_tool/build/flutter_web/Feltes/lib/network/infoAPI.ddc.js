define(['dart_sdk', 'packages/firebase_auth/firebase_auth', 'packages/http/http', 'packages/Feltes/models/Info'], function(dart_sdk, packages__firebase_auth__firebase_auth, packages__http__http, packages__Feltes__models__Info) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const firebase_auth = packages__firebase_auth__firebase_auth.firebase_auth;
  const http = packages__http__http.http;
  const Info = packages__Feltes__models__Info.models__Info;
  const infoAPI = Object.create(dart.library);
  const $_get = dartx._get;
  const $length = dartx.length;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  const _getToken = dart.privateName(infoAPI, "_getToken");
  const baseURL = dart.privateName(infoAPI, "InfoAPIHelper.baseURL");
  infoAPI.InfoAPIHelper = class InfoAPIHelper extends core.Object {
    get baseURL() {
      return this[baseURL];
    }
    set baseURL(value) {
      super.baseURL = value;
    }
    [_getToken]() {
      return async.async(core.String, function* _getToken() {
        let user = (yield firebase_auth.FirebaseAuth.instance.currentUser());
        let tokenResult = (yield user.getIdToken());
        return tokenResult.token;
      });
    }
    getInfo() {
      return async.async(Info.Info, (function* getInfo() {
        let url = dart.notNull(this.baseURL) + "info";
        let response = (yield http.get(url));
        if (response.statusCode === 200) {
          let json = MapOfString$dynamic()._check(dart.dsend(convert.jsonDecode(response.body), '_get', ["info"]));
          let info = new Info.Info.new({first: core.String._check(json[$_get]("first")), last: core.String._check(json[$_get]("last")), title: core.String._check(json[$_get]("title")), email: core.String._check(json[$_get]("email")), location: core.String._check(json[$_get]("location")), about: core.String._check(json[$_get]("about")), twitter: core.String._check(json[$_get]("twitter")), linkedIn: core.String._check(json[$_get]("linkedin")), github: core.String._check(json[$_get]("github"))});
          if (json[$length] === 0) {
          }
          return info;
        } else {
          core.print("Failed to get user - Error Code: " + dart.str(response.statusCode));
        }
        return null;
      }).bind(this));
    }
    saveInfo(first, last, title, email, location, about, twitter, linkedin, github) {
      return async.async(core.bool, (function* saveInfo() {
        let url = dart.notNull(this.baseURL) + "info";
        let token = "Bearer " + dart.str(yield this[_getToken]());
        let response = (yield http.post(url, {headers: new (IdentityMapOfString$String()).from(["Authorization", token]), body: new (IdentityMapOfString$dynamic()).from(["first", first, "last", last, "title", title, "email", email, "location", location, "about", about, "twitter", twitter, "linkedin", linkedin, "github", github])}));
        if (response.statusCode === 201) {
          return true;
        }
        core.print("Failed to update info - Error Code: " + dart.str(response.statusCode) + " - " + dart.str(response.body));
        return false;
      }).bind(this));
    }
  };
  (infoAPI.InfoAPIHelper.new = function() {
    this[baseURL] = "https://us-central1-feltes-portfolio.cloudfunctions.net/api/";
    ;
  }).prototype = infoAPI.InfoAPIHelper.prototype;
  dart.addTypeTests(infoAPI.InfoAPIHelper);
  dart.setMethodSignature(infoAPI.InfoAPIHelper, () => ({
    __proto__: dart.getMethods(infoAPI.InfoAPIHelper.__proto__),
    [_getToken]: dart.fnType(async.Future$(core.String), []),
    getInfo: dart.fnType(async.Future$(Info.Info), []),
    saveInfo: dart.fnType(async.Future$(core.bool), [dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic, dart.dynamic])
  }));
  dart.setLibraryUri(infoAPI.InfoAPIHelper, "package:Feltes/network/infoAPI.dart");
  dart.setFieldSignature(infoAPI.InfoAPIHelper, () => ({
    __proto__: dart.getFields(infoAPI.InfoAPIHelper.__proto__),
    baseURL: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/Feltes/network/infoAPI", {
    "package:Feltes/network/infoAPI.dart": infoAPI
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["infoAPI.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IAMe;;;;;;;AAGW;AACT,oBAAO,MAAmB,AAAS;AAClC,2BAAc,MAAM,AAAK,IAAD;AACtC,cAAO,AAAY,YAAD;MACpB;;;AAEoB;AACX,kBAAc,aAAR,gBAAU;AAEd,wBAAW,MAAM,SAAI,GAAG;AAEjC,YAAI,AAAS,AAAW,QAAZ,gBAAe;AACJ,kDAAgC,WAAzB,mBAAW,AAAS,QAAD,iBAAO;AAEjD,qBAAO,6CACH,AAAI,IAAA,QAAC,oCACN,AAAI,IAAA,QAAC,oCACJ,AAAI,IAAA,QAAC,qCACL,AAAI,IAAA,QAAC,wCACF,AAAI,IAAA,QAAC,wCACR,AAAI,IAAA,QAAC,uCACH,AAAI,IAAA,QAAC,0CACJ,AAAI,IAAA,QAAC,yCACP,AAAI,IAAA,QAAC;AAGf,cAAI,AAAK,AAAO,IAAR,cAAW;;AAEnB,gBAAO,KAAI;;AAEqD,UAAhE,WAAM,AAAyD,+CAArB,AAAS,QAAD;;AAGpD,cAAO;MACT;;aAGE,OACA,MACA,OACA,OACA,UACA,OACA,SACA,UACA;AATmB;AAWZ,kBAAc,aAAR,gBAAU;AAEhB,oBAAQ,AAA6B,qBAAnB,MAAM;AAEtB,wBAAW,MAAM,UAAK,GAAG,YAAW,yCAC3C,iBAAiB,KAAK,UACf,0CACP,SAAS,KAAK,EACd,QAAQ,IAAI,EACZ,SAAS,KAAK,EACd,SAAS,KAAK,EACd,YAAY,QAAQ,EACpB,SAAS,KAAK,EACd,WAAW,OAAO,EAClB,YAAY,QAAQ,EACpB,UAAU,MAAM;AAGlB,YAAI,AAAS,AAAW,QAAZ,gBAAe;AACzB,gBAAO;;AAI2E,QADpF,WACI,AAA+E,kDAAxC,AAAS,QAAD,eAAY,iBAAK,AAAS,QAAD;AAC5E,cAAO;MACT;;;;IA3Ea,gBACT;;EA2EN","file":"infoAPI.ddc.js"}');
  // Exports:
  return {
    network__infoAPI: infoAPI
  };
});

//# sourceMappingURL=infoAPI.ddc.js.map

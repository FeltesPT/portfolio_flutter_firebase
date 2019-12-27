define(['dart_sdk', 'packages/http/http'], function(dart_sdk, packages__http__http) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const http = packages__http__http.http;
  const api = Object.create(dart.library);
  const CT = Object.create(null);
  const baseURL = dart.privateName(api, "APIHelper.baseURL");
  api.APIHelper = class APIHelper extends core.Object {
    get baseURL() {
      return this[baseURL];
    }
    set baseURL(value) {
      super.baseURL = value;
    }
    getMyInfo() {
      return async.async(dart.dynamic, (function* getMyInfo() {
        return this.getDataFrom("info");
      }).bind(this));
    }
    getPortfolio() {
      return async.async(dart.dynamic, (function* getPortfolio() {
        return this.getDataFrom("portfolio");
      }).bind(this));
    }
    getDataFrom(endpoint) {
      return async.async(dart.dynamic, (function* getDataFrom() {
        let url = dart.notNull(this.baseURL) + dart.notNull(endpoint);
        let response = (yield http.get(url));
        if (response.statusCode === 200) {
          let data = response.body;
          return convert.jsonDecode(data);
        } else {
          core.print("Failed to get " + dart.str(endpoint) + " - Error Code: " + dart.str(response.statusCode));
        }
      }).bind(this));
    }
  };
  (api.APIHelper.new = function() {
    this[baseURL] = true ? "https://cors-anywhere.herokuapp.com/https://feltes.herokuapp.com/api/" : "https://feltes.herokuapp.com/api/";
    ;
  }).prototype = api.APIHelper.prototype;
  dart.addTypeTests(api.APIHelper);
  dart.setMethodSignature(api.APIHelper, () => ({
    __proto__: dart.getMethods(api.APIHelper.__proto__),
    getMyInfo: dart.fnType(async.Future, []),
    getPortfolio: dart.fnType(async.Future, []),
    getDataFrom: dart.fnType(async.Future, [core.String])
  }));
  dart.setLibraryUri(api.APIHelper, "package:Feltes/network/api.dart");
  dart.setFieldSignature(api.APIHelper, () => ({
    __proto__: dart.getFields(api.APIHelper.__proto__),
    baseURL: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/Feltes/network/api", {
    "package:Feltes/network/api.dart": api
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["api.dart"],"names":[],"mappings":";;;;;;;;;;;;IAMe;;;;;;;AAIG;AACd,cAAO,kBAAY;MACrB;;;AAEmB;AACjB,cAAO,kBAAY;MACrB;;gBAE0B;AAAR;AACT,kBAAc,aAAR,6BAAU,QAAQ;AAEtB,wBAAW,MAAM,SAAI,GAAG;AAEjC,YAAI,AAAS,AAAW,QAAZ,gBAAe;AAClB,qBAAO,AAAS,QAAD;AAEtB,gBAAO,oBAAW,IAAI;;AAE+C,UAArE,WAAM,AAA8D,4BAA9C,QAAQ,iCAAiB,AAAS,QAAD;;MAE3D;;;;IAxBa,gBAAU,OACjB,0EACA;;EAuBR","file":"api.ddc.js"}');
  // Exports:
  return {
    network__api: api
  };
});

//# sourceMappingURL=api.ddc.js.map

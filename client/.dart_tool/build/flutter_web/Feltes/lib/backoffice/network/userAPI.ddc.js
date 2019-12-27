define(['dart_sdk', 'packages/firebase_auth/firebase_auth', 'packages/http/http', 'packages/Feltes/backoffice/models/User'], function(dart_sdk, packages__firebase_auth__firebase_auth, packages__http__http, packages__Feltes__backoffice__models__User) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const firebase_auth = packages__firebase_auth__firebase_auth.firebase_auth;
  const http = packages__http__http.http;
  const User = packages__Feltes__backoffice__models__User.backoffice__models__User;
  const userAPI = Object.create(dart.library);
  const $_get = dartx._get;
  const $add = dartx.add;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let JSArrayOfUser = () => (JSArrayOfUser = dart.constFn(_interceptors.JSArray$(User.User)))();
  let ListOfUser = () => (ListOfUser = dart.constFn(core.List$(User.User)))();
  const CT = Object.create(null);
  const _auth = dart.privateName(userAPI, "_auth");
  const _getToken = dart.privateName(userAPI, "_getToken");
  const baseURL = dart.privateName(userAPI, "UserAPIHelper.baseURL");
  userAPI.UserAPIHelper = class UserAPIHelper extends core.Object {
    get baseURL() {
      return this[baseURL];
    }
    set baseURL(value) {
      super.baseURL = value;
    }
    [_getToken]() {
      return async.async(core.String, (function* _getToken() {
        let user = (yield this[_auth].currentUser());
        let tokenResult = (yield user.getIdToken());
        return tokenResult.token;
      }).bind(this));
    }
    getUsers() {
      return async.async(ListOfUser(), (function* getUsers() {
        let url = dart.notNull(this.baseURL) + "users";
        let token = "Bearer " + dart.str(yield this[_getToken]());
        let response = (yield http.get(url, {headers: new (IdentityMapOfString$String()).from(["Authorization", token])}));
        if (response.statusCode === 200) {
          let usersJSON = MapOfString$dynamic()._check(convert.jsonDecode(response.body));
          let users = JSArrayOfUser().of([]);
          for (let j of core.Iterable._check(usersJSON[$_get]("users"))) {
            let u = new User.User.new({id: core.String._check(dart.dsend(j, '_get', ["uid"])), email: core.String._check(dart.dsend(j, '_get', ["email"])), username: core.String._check(dart.dsend(j, '_get', ["displayName"])), role: core.String._check(dart.dsend(j, '_get', ["role"]))});
            users[$add](u);
          }
          return users;
        } else {
          core.print("Failed to get users - Error Code: " + dart.str(response.statusCode));
        }
        return null;
      }).bind(this));
    }
    getUser(id) {
      return async.async(User.User, (function* getUser() {
        let url = dart.notNull(this.baseURL) + ("users/" + dart.str(id));
        let token = "Bearer " + dart.str(yield this[_getToken]());
        let response = (yield http.get(url, {headers: new (IdentityMapOfString$String()).from(["Authorization", token])}));
        if (response.statusCode === 200) {
          let userJSON = MapOfString$dynamic()._check(convert.jsonDecode(response.body));
          let user = new User.User.new({email: core.String._check(dart.dsend(userJSON[$_get]("user"), '_get', ["email"])), username: core.String._check(dart.dsend(userJSON[$_get]("user"), '_get', ["displayName"])), role: core.String._check(dart.dsend(dart.dsend(userJSON[$_get]("user"), '_get', ["customClaims"]), '_get', ["role"]))});
          return user;
        } else {
          core.print("Failed to get user - Error Code: " + dart.str(response.statusCode));
        }
        return null;
      }).bind(this));
    }
    addUser(opts) {
      let text = opts && 'text' in opts ? opts.text : null;
      let displayName = opts && 'displayName' in opts ? opts.displayName : null;
      let password = opts && 'password' in opts ? opts.password : null;
      let email = opts && 'email' in opts ? opts.email : null;
      let role = opts && 'role' in opts ? opts.role : null;
      return async.async(dart.dynamic, (function* addUser() {
        let url = dart.notNull(this.baseURL) + "users/";
        let token = "Bearer " + dart.str(yield this[_getToken]());
        let response = (yield http.post(url, {headers: new (IdentityMapOfString$String()).from(["Authorization", token]), body: new (IdentityMapOfString$String()).from(["displayName", displayName, "password", password, "email", email, "role", role])}));
        if (response.statusCode === 201) {
          let data = response.body;
          return convert.jsonDecode(data);
        }
        core.print("Failed to update user - Error Code: " + dart.str(response.statusCode));
        return null;
      }).bind(this));
    }
    updateUser(opts) {
      let uid = opts && 'uid' in opts ? opts.uid : null;
      let text = opts && 'text' in opts ? opts.text : null;
      let displayName = opts && 'displayName' in opts ? opts.displayName : null;
      let password = opts && 'password' in opts ? opts.password : null;
      let email = opts && 'email' in opts ? opts.email : null;
      let role = opts && 'role' in opts ? opts.role : null;
      return async.async(core.bool, (function* updateUser() {
        let url = dart.notNull(this.baseURL) + ("users/" + dart.str(uid));
        let token = "Bearer " + dart.str(yield this[_getToken]());
        let response = (yield http.patch(url, {headers: new (IdentityMapOfString$String()).from(["Authorization", token]), body: new (IdentityMapOfString$String()).from(["id", uid, "displayName", displayName, "password", password, "email", email, "role", role])}));
        if (response.statusCode === 204) {
          return true;
        }
        core.print("Failed to update user - Error Code: " + dart.str(response.statusCode));
        return false;
      }).bind(this));
    }
    deleteUser(user) {
      return async.async(core.bool, (function* deleteUser() {
        let url = dart.notNull(this.baseURL) + ("users/" + dart.str(dart.dload(user, 'id')));
        let token = "Bearer " + dart.str(yield this[_getToken]());
        let response = (yield http.delete(url, {headers: new (IdentityMapOfString$String()).from(["Authorization", token])}));
        if (response.statusCode === 204) {
          return true;
        }
        core.print("Failed to Delete user - Error Code: " + dart.str(response.statusCode));
        return false;
      }).bind(this));
    }
  };
  (userAPI.UserAPIHelper.new = function() {
    this[_auth] = firebase_auth.FirebaseAuth.instance;
    this[baseURL] = "https://us-central1-feltes-portfolio.cloudfunctions.net/api/";
    ;
  }).prototype = userAPI.UserAPIHelper.prototype;
  dart.addTypeTests(userAPI.UserAPIHelper);
  dart.setMethodSignature(userAPI.UserAPIHelper, () => ({
    __proto__: dart.getMethods(userAPI.UserAPIHelper.__proto__),
    [_getToken]: dart.fnType(async.Future$(core.String), []),
    getUsers: dart.fnType(async.Future$(core.List$(User.User)), []),
    getUser: dart.fnType(async.Future$(User.User), [core.String]),
    addUser: dart.fnType(async.Future, [], {displayName: core.String, email: core.String, password: core.String, role: core.String, text: core.String}, {}),
    updateUser: dart.fnType(async.Future$(core.bool), [], {displayName: core.String, email: core.String, password: core.String, role: core.String, text: core.String, uid: core.String}, {}),
    deleteUser: dart.fnType(async.Future$(core.bool), [dart.dynamic])
  }));
  dart.setLibraryUri(userAPI.UserAPIHelper, "package:Feltes/backoffice/network/userAPI.dart");
  dart.setFieldSignature(userAPI.UserAPIHelper, () => ({
    __proto__: dart.getFields(userAPI.UserAPIHelper.__proto__),
    [_auth]: dart.finalFieldType(firebase_auth.FirebaseAuth),
    baseURL: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/Feltes/backoffice/network/userAPI", {
    "package:Feltes/backoffice/network/userAPI.dart": userAPI
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["userAPI.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;IASe;;;;;;;AAGW;AACT,oBAAO,MAAM,AAAM;AAClB,2BAAc,MAAM,AAAK,IAAD;AACtC,cAAO,AAAY,YAAD;MACpB;;;AAE2B;AAClB,kBAAc,aAAR,gBAAU;AAEhB,oBAAQ,AAA6B,qBAAnB,MAAM;AAEtB,wBAAW,MAAM,SAAI,GAAG,YAAW,yCAAC,iBAAiB,KAAK;AAEnE,YAAI,AAAS,AAAW,QAAZ,gBAAe;AACJ,uDAAY,mBAAW,AAAS,QAAD;AAEzC,sBAAQ;AAEnB,mBAAS,0BAAK,AAAS,SAAA,QAAC;AACjB,oBAAI,0CACA,WAAD,CAAC,WAAC,oCACE,WAAD,CAAC,WAAC,yCACE,WAAD,CAAC,WAAC,2CACL,WAAD,CAAC,WAAC;AACA,YAAZ,AAAM,KAAD,OAAK,CAAC;;AAGb,gBAAO,MAAK;;AAEqD,UAAjE,WAAM,AAA0D,gDAArB,AAAS,QAAD;;AAGrD,cAAO;MACT;;YAE4B;AAAR;AACX,kBAAc,aAAR,iBAAU,AAAW,oBAAH,EAAE;AAE1B,oBAAQ,AAA6B,qBAAnB,MAAM;AAEtB,wBAAW,MAAM,SAAI,GAAG,YAAW,yCAAC,iBAAiB,KAAK;AAEnE,YAAI,AAAS,AAAW,QAAZ,gBAAe;AACJ,sDAAW,mBAAW,AAAS,QAAD;AAE9C,qBAAO,6CACa,WAAhB,AAAQ,QAAA,QAAC,kBAAQ,yCACE,WAAhB,AAAQ,QAAA,QAAC,kBAAQ,2CACW,WAAhB,WAAhB,AAAQ,QAAA,QAAC,kBAAQ,2BAAgB;AAGzC,gBAAO,KAAI;;AAEqD,UAAhE,WAAM,AAAyD,+CAArB,AAAS,QAAD;;AAGpD,cAAO;MACT;;;UAGS;UACA;UACA;UACA;UACA;AALK;AAOL,kBAAc,aAAR,gBAAU;AAEhB,oBAAQ,AAA6B,qBAAnB,MAAM;AAEtB,wBAAW,MAAM,UAAK,GAAG,YAAW,yCAC3C,iBAAiB,KAAK,UACf,yCACP,eAAe,WAAW,EAC1B,YAAY,QAAQ,EACpB,SAAS,KAAK,EACd,QAAQ,IAAI;AAGd,YAAI,AAAS,AAAW,QAAZ,gBAAe;AAClB,qBAAO,AAAS,QAAD;AAEtB,gBAAO,oBAAW,IAAI;;AAG2C,QAAnE,WAAM,AAA4D,kDAArB,AAAS,QAAD;AACrD,cAAO;MACT;;;UAGS;UACA;UACA;UACA;UACA;UACA;AANc;AAQd,kBAAc,aAAR,iBAAU,AAAY,oBAAJ,GAAG;AAC3B,oBAAQ,AAA6B,qBAAnB,MAAM;AAEtB,wBAAW,MAAM,WAAM,GAAG,YAAW,yCAC5C,iBAAiB,KAAK,UACf,yCACP,MAAM,GAAG,EACT,eAAe,WAAW,EAC1B,YAAY,QAAQ,EACpB,SAAS,KAAK,EACd,QAAQ,IAAI;AAGd,YAAI,AAAS,AAAW,QAAZ,gBAAe;AACzB,gBAAO;;AAG0D,QAAnE,WAAM,AAA4D,kDAArB,AAAS,QAAD;AACrD,cAAO;MACT;;eAEwB;AAAD;AACd,kBAAc,aAAR,iBAAU,AAAkB,oBAAJ,WAAL,IAAI;AAC7B,oBAAQ,AAA6B,qBAAnB,MAAM;AAEtB,wBAAW,MAAM,YAAO,GAAG,YAAW,yCAAC,iBAAiB,KAAK;AAEtE,YAAI,AAAS,AAAW,QAAZ,gBAAe;AACzB,gBAAO;;AAG0D,QAAnE,WAAM,AAA4D,kDAArB,AAAS,QAAD;AACrD,cAAO;MACT;;;;IAvIM,cAAqB;IAEd,gBACT;;EAqIN","file":"userAPI.ddc.js"}');
  // Exports:
  return {
    backoffice__network__userAPI: userAPI
  };
});

//# sourceMappingURL=userAPI.ddc.js.map

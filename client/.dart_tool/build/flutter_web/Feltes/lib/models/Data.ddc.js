define(['dart_sdk', 'packages/firebase_auth/firebase_auth', 'packages/Feltes/backoffice/network/userAPI', 'packages/Feltes/network/infoAPI', 'packages/Feltes/backoffice/models/User', 'packages/Feltes/models/Info', 'packages/flutter/src/foundation/_bitfield_web'], function(dart_sdk, packages__firebase_auth__firebase_auth, packages__Feltes__backoffice__network__userAPI, packages__Feltes__network__infoAPI, packages__Feltes__backoffice__models__User, packages__Feltes__models__Info, packages__flutter__src__foundation___bitfield_web) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const firebase_auth = packages__firebase_auth__firebase_auth.firebase_auth;
  const userAPI = packages__Feltes__backoffice__network__userAPI.backoffice__network__userAPI;
  const infoAPI = packages__Feltes__network__infoAPI.network__infoAPI;
  const User = packages__Feltes__backoffice__models__User.backoffice__models__User;
  const Info = packages__Feltes__models__Info.models__Info;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const Data = Object.create(dart.library);
  const $firstWhere = dartx.firstWhere;
  let UserTobool = () => (UserTobool = dart.constFn(dart.fnType(core.bool, [User.User])))();
  let FutureOrOfbool = () => (FutureOrOfbool = dart.constFn(async.FutureOr$(core.bool)))();
  const CT = Object.create(null);
  const _auth = dart.privateName(Data, "_auth");
  const _firebaseUser = dart.privateName(Data, "_firebaseUser");
  const _allUsers = dart.privateName(Data, "_allUsers");
  const userAPI$ = dart.privateName(Data, "Data.userAPI");
  const infoAPI$ = dart.privateName(Data, "Data.infoAPI");
  Data.Data = class Data extends change_notifier.ChangeNotifier {
    get userAPI() {
      return this[userAPI$];
    }
    set userAPI(value) {
      this[userAPI$] = value;
    }
    get infoAPI() {
      return this[infoAPI$];
    }
    set infoAPI(value) {
      this[infoAPI$] = value;
    }
    isLoggedIn() {
      return async.async(core.bool, (function* isLoggedIn() {
        let user = (yield this[_auth].currentUser());
        if (user != null) {
          this[_firebaseUser] = user;
          return true;
        }
        return false;
      }).bind(this));
    }
    get allUsers() {
      return this[_allUsers];
    }
    get currentUser() {
      return this[_allUsers][$firstWhere](dart.fn(i => i.id == this[_firebaseUser].uid, UserTobool()));
    }
    fetchUsers() {
      return async.async(dart.void, (function* fetchUsers() {
        this[_allUsers] = (yield this.userAPI.getUsers());
        this.notifyListeners();
      }).bind(this));
    }
    deleteUser(user) {
      return async.async(core.bool, (function* deleteUser() {
        let deleted = (yield this.userAPI.deleteUser(user));
        return FutureOrOfbool()._check(deleted);
      }).bind(this));
    }
    addUser(user) {
      return async.async(core.bool, (function* addUser() {
        let added = (yield this.userAPI.addUser({displayName: user.username, password: user.password, email: user.email, role: user.role}));
        this.fetchUsers();
        return added != null;
      }).bind(this));
    }
    signIn(opts) {
      let email = opts && 'email' in opts ? opts.email : null;
      let password = opts && 'password' in opts ? opts.password : null;
      return async.async(firebase_auth.FirebaseUser, (function* signIn() {
        if (email == null || password == null) {
          return null;
        }
        let result = (yield this[_auth].signInWithEmailAndPassword({email: email, password: password}));
        this[_firebaseUser] = result.user;
        return this[_firebaseUser];
      }).bind(this));
    }
    signOut() {
      this[_auth].signOut();
      this[_firebaseUser] = null;
    }
    updateUser(opts) {
      let displayName = opts && 'displayName' in opts ? opts.displayName : null;
      let password = opts && 'password' in opts ? opts.password : null;
      let email = opts && 'email' in opts ? opts.email : null;
      let role = opts && 'role' in opts ? opts.role : null;
      return async.async(core.bool, (function* updateUser() {
        let success = (yield this.userAPI.updateUser({uid: this[_firebaseUser].uid, displayName: displayName, password: password, email: email, role: role}));
        this.fetchUsers();
        return success;
      }).bind(this));
    }
    getInfo() {
      return async.async(Info.Info, (function* getInfo() {
        let info = (yield this.infoAPI.getInfo());
        return info;
      }).bind(this));
    }
    saveInfo(opts) {
      let firstname = opts && 'firstname' in opts ? opts.firstname : null;
      let lastname = opts && 'lastname' in opts ? opts.lastname : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let email = opts && 'email' in opts ? opts.email : null;
      let location = opts && 'location' in opts ? opts.location : null;
      let about = opts && 'about' in opts ? opts.about : null;
      let twitter = opts && 'twitter' in opts ? opts.twitter : null;
      let linkedin = opts && 'linkedin' in opts ? opts.linkedin : null;
      let github = opts && 'github' in opts ? opts.github : null;
      return async.async(core.bool, (function* saveInfo() {
        let success = (yield this.infoAPI.saveInfo(firstname, lastname, title, email, location, about, twitter, linkedin, github));
        return success;
      }).bind(this));
    }
  };
  (Data.Data.new = function() {
    this[_auth] = firebase_auth.FirebaseAuth.instance;
    this[_firebaseUser] = null;
    this[_allUsers] = null;
    this[userAPI$] = new userAPI.UserAPIHelper.new();
    this[infoAPI$] = new infoAPI.InfoAPIHelper.new();
    Data.Data.__proto__.new.call(this);
    ;
  }).prototype = Data.Data.prototype;
  dart.addTypeTests(Data.Data);
  dart.setMethodSignature(Data.Data, () => ({
    __proto__: dart.getMethods(Data.Data.__proto__),
    isLoggedIn: dart.fnType(async.Future$(core.bool), []),
    fetchUsers: dart.fnType(dart.void, []),
    deleteUser: dart.fnType(async.Future$(core.bool), [User.User]),
    addUser: dart.fnType(async.Future$(core.bool), [User.User]),
    signIn: dart.fnType(async.Future$(firebase_auth.FirebaseUser), [], {email: core.String, password: core.String}, {}),
    signOut: dart.fnType(dart.void, []),
    updateUser: dart.fnType(async.Future$(core.bool), [], {displayName: core.String, email: core.String, password: core.String, role: core.String}, {}),
    getInfo: dart.fnType(async.Future$(Info.Info), []),
    saveInfo: dart.fnType(async.Future$(core.bool), [], {about: dart.dynamic, email: dart.dynamic, firstname: dart.dynamic, github: dart.dynamic, lastname: dart.dynamic, linkedin: dart.dynamic, location: dart.dynamic, title: dart.dynamic, twitter: dart.dynamic}, {})
  }));
  dart.setGetterSignature(Data.Data, () => ({
    __proto__: dart.getGetters(Data.Data.__proto__),
    allUsers: core.List$(User.User),
    currentUser: User.User
  }));
  dart.setLibraryUri(Data.Data, "package:Feltes/models/Data.dart");
  dart.setFieldSignature(Data.Data, () => ({
    __proto__: dart.getFields(Data.Data.__proto__),
    [_auth]: dart.fieldType(firebase_auth.FirebaseAuth),
    [_firebaseUser]: dart.fieldType(firebase_auth.FirebaseUser),
    [_allUsers]: dart.fieldType(core.List$(User.User)),
    userAPI: dart.fieldType(userAPI.UserAPIHelper),
    infoAPI: dart.fieldType(infoAPI.InfoAPIHelper)
  }));
  dart.trackLibraries("packages/Feltes/models/Data", {
    "package:Feltes/models/Data.dart": Data
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["Data.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;IAagB;;;;;;IACA;;;;;;;AAES;AACR,oBAAO,MAAM,AAAM;AAEhC,YAAI,IAAI,IAAI;AACU,UAApB,sBAAgB,IAAI;AACpB,gBAAO;;AAGT,cAAO;MACT;;;AAGE,YAAO;IACT;;AAGE,YAAO,AAAU,8BAAW,QAAC,KAAM,AAAE,AAAG,CAAJ,OAAO,AAAc;IAC3D;;AAEe;AACuB,QAApC,mBAAY,MAAM,AAAQ;AACT,QAAjB;MACF;;eAE6B;AAAN;AACb,uBAAU,MAAM,AAAQ,wBAAW,IAAI;AAE/C,uCAAO,OAAO;MAChB;;YAE0B;AAAN;AACV,qBAAQ,MAAM,AAAQ,mCACb,AAAK,IAAD,qBACP,AAAK,IAAD,kBACP,AAAK,IAAD,cACL,AAAK,IAAD;AAEF,QAAZ;AAEA,cAAO,AAAM,MAAD,IAAI;MAClB;;;UAEoC;UAAc;AAAvB;AACzB,YAAI,AAAM,KAAD,IAAI,QAAQ,AAAS,QAAD,IAAI;AAC/B,gBAAO;;AAEE,sBAAS,MAAM,AAAM,+CACrB,KAAK,YAAY,QAAQ;AAET,QAA3B,sBAAgB,AAAO,MAAD;AAEtB,cAAO;MACT;;;AAGiB,MAAf,AAAM;AACc,MAApB,sBAAgB;IAClB;;UAGY;UAAoB;UAAiB;UAAc;AADxC;AAEjB,uBAAU,MAAM,AAAQ,8BACnB,AAAc,sCACN,WAAW,YACd,QAAQ,SACX,KAAK,QACN,IAAI;AAEF,QAAZ;AAEA,cAAO,QAAO;MAChB;;;AAEoB;AACd,oBAAO,MAAM,AAAQ;AAEzB,cAAO,KAAI;MACb;;;UAGE;UACA;UACA;UACA;UACA;UACA;UACA;UACA;UACA;AATmB;AAWf,uBAAU,MAAM,AAAQ,sBAC1B,SAAS,EACT,QAAQ,EACR,KAAK,EACL,KAAK,EACL,QAAQ,EACR,KAAK,EACL,OAAO,EACP,QAAQ,EACR,MAAM;AAGR,cAAO,QAAO;MAChB;;;;IA7Ga,cAAqB;IACrB;IACF;IACG,iBAAU;IACV,iBAAU;;;EA0G1B","file":"Data.ddc.js"}');
  // Exports:
  return {
    models__Data: Data
  };
});

//# sourceMappingURL=Data.ddc.js.map

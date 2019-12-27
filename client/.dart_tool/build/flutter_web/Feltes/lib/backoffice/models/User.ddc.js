define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const User = Object.create(dart.library);
  const CT = Object.create(null);
  const id$ = dart.privateName(User, "User.id");
  const username$ = dart.privateName(User, "User.username");
  const password$ = dart.privateName(User, "User.password");
  const email$ = dart.privateName(User, "User.email");
  const role$ = dart.privateName(User, "User.role");
  User.User = class User extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get username() {
      return this[username$];
    }
    set username(value) {
      super.username = value;
    }
    get password() {
      return this[password$];
    }
    set password(value) {
      super.password = value;
    }
    get email() {
      return this[email$];
    }
    set email(value) {
      super.email = value;
    }
    get role() {
      return this[role$];
    }
    set role(value) {
      super.role = value;
    }
  };
  (User.User.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let username = opts && 'username' in opts ? opts.username : null;
    let password = opts && 'password' in opts ? opts.password : null;
    let email = opts && 'email' in opts ? opts.email : null;
    let role = opts && 'role' in opts ? opts.role : null;
    this[id$] = id;
    this[username$] = username;
    this[password$] = password;
    this[email$] = email;
    this[role$] = role;
    ;
  }).prototype = User.User.prototype;
  dart.addTypeTests(User.User);
  dart.setLibraryUri(User.User, "package:Feltes/backoffice/models/User.dart");
  dart.setFieldSignature(User.User, () => ({
    __proto__: dart.getFields(User.User.__proto__),
    id: dart.finalFieldType(core.String),
    username: dart.finalFieldType(core.String),
    password: dart.finalFieldType(core.String),
    email: dart.finalFieldType(core.String),
    role: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/Feltes/backoffice/models/User", {
    "package:Feltes/backoffice/models/User.dart": User
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["User.dart"],"names":[],"mappings":";;;;;;;;;;;;;IACe;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;QAEF;QAAS;QAAe;QAAe;QAAY;IAAnD;IAAS;IAAe;IAAe;IAAY;;EAAM","file":"User.ddc.js"}');
  // Exports:
  return {
    backoffice__models__User: User
  };
});

//# sourceMappingURL=User.ddc.js.map

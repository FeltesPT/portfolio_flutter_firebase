define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const Info = Object.create(dart.library);
  const CT = Object.create(null);
  const first$ = dart.privateName(Info, "Info.first");
  const last$ = dart.privateName(Info, "Info.last");
  const title$ = dart.privateName(Info, "Info.title");
  const email$ = dart.privateName(Info, "Info.email");
  const location$ = dart.privateName(Info, "Info.location");
  const about$ = dart.privateName(Info, "Info.about");
  const twitter$ = dart.privateName(Info, "Info.twitter");
  const linkedIn$ = dart.privateName(Info, "Info.linkedIn");
  const github$ = dart.privateName(Info, "Info.github");
  Info.Info = class Info extends core.Object {
    get first() {
      return this[first$];
    }
    set first(value) {
      super.first = value;
    }
    get last() {
      return this[last$];
    }
    set last(value) {
      super.last = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get email() {
      return this[email$];
    }
    set email(value) {
      super.email = value;
    }
    get location() {
      return this[location$];
    }
    set location(value) {
      super.location = value;
    }
    get about() {
      return this[about$];
    }
    set about(value) {
      super.about = value;
    }
    get twitter() {
      return this[twitter$];
    }
    set twitter(value) {
      super.twitter = value;
    }
    get linkedIn() {
      return this[linkedIn$];
    }
    set linkedIn(value) {
      super.linkedIn = value;
    }
    get github() {
      return this[github$];
    }
    set github(value) {
      super.github = value;
    }
  };
  (Info.Info.new = function(opts) {
    let first = opts && 'first' in opts ? opts.first : null;
    let last = opts && 'last' in opts ? opts.last : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let email = opts && 'email' in opts ? opts.email : null;
    let location = opts && 'location' in opts ? opts.location : null;
    let about = opts && 'about' in opts ? opts.about : null;
    let twitter = opts && 'twitter' in opts ? opts.twitter : null;
    let linkedIn = opts && 'linkedIn' in opts ? opts.linkedIn : null;
    let github = opts && 'github' in opts ? opts.github : null;
    this[first$] = first;
    this[last$] = last;
    this[title$] = title;
    this[email$] = email;
    this[location$] = location;
    this[about$] = about;
    this[twitter$] = twitter;
    this[linkedIn$] = linkedIn;
    this[github$] = github;
    ;
  }).prototype = Info.Info.prototype;
  dart.addTypeTests(Info.Info);
  dart.setLibraryUri(Info.Info, "package:Feltes/models/Info.dart");
  dart.setFieldSignature(Info.Info, () => ({
    __proto__: dart.getFields(Info.Info.__proto__),
    first: dart.finalFieldType(core.String),
    last: dart.finalFieldType(core.String),
    title: dart.finalFieldType(core.String),
    email: dart.finalFieldType(core.String),
    location: dart.finalFieldType(core.String),
    about: dart.finalFieldType(core.String),
    twitter: dart.finalFieldType(core.String),
    linkedIn: dart.finalFieldType(core.String),
    github: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/Feltes/models/Info", {
    "package:Feltes/models/Info.dart": Info
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["Info.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IACe;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;;QAGN;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IARA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EACL","file":"Info.ddc.js"}');
  // Exports:
  return {
    models__Info: Info
  };
});

//# sourceMappingURL=Info.ddc.js.map

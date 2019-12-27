define(['dart_sdk', 'packages/url_launcher/url_launcher', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/Feltes/screens/components/sectionTitle', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/font_awesome_flutter/font_awesome_flutter'], function(dart_sdk, packages__url_launcher__url_launcher, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__Feltes__screens__components__sectionTitle, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__font_awesome_flutter__font_awesome_flutter) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const url_launcher = packages__url_launcher__url_launcher.url_launcher;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const sectionTitle = packages__Feltes__screens__components__sectionTitle.screens__components__sectionTitle;
  const colors = packages__flutter__material.src__material__colors;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const font_awesome_flutter = packages__font_awesome_flutter__font_awesome_flutter.font_awesome_flutter;
  const footer = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/footer.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 13,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/footer.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/footer.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/footer.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 45,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/footer.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 17,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/footer.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 45,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/footer.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 17,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/footer.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 45,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/footer.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 17,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 17,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/footer.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/footer.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/footer.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/footer.dart"
      });
    }
  });
  const _openTwitter = dart.privateName(footer, "_openTwitter");
  const _openLinkedIn = dart.privateName(footer, "_openLinkedIn");
  const _openGithub = dart.privateName(footer, "_openGithub");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C7;
  let C4;
  let C3;
  let C10;
  let C9;
  let C8;
  let C13;
  let C12;
  let C11;
  let C16;
  let C15;
  let C14;
  let C19;
  let C20;
  let C21;
  let C18;
  let C17;
  let C24;
  let C23;
  let C22;
  let C27;
  let C28;
  let C29;
  let C26;
  let C25;
  let C32;
  let C31;
  let C30;
  let C35;
  let C36;
  let C37;
  let C34;
  let C33;
  let C40;
  let C41;
  let C39;
  let C38;
  let C44;
  let C43;
  let C42;
  let C47;
  let C48;
  let C49;
  let C46;
  let C45;
  const location$ = dart.privateName(footer, "Footer.location");
  const twitter = dart.privateName(footer, "Footer.twitter");
  const linkedIn = dart.privateName(footer, "Footer.linkedIn");
  const github = dart.privateName(footer, "Footer.github");
  footer.Footer = class Footer extends framework.StatelessWidget {
    get location() {
      return this[location$];
    }
    set location(value) {
      super.location = value;
    }
    get twitter() {
      return this[twitter];
    }
    set twitter(value) {
      super.twitter = value;
    }
    get linkedIn() {
      return this[linkedIn];
    }
    set linkedIn(value) {
      super.linkedIn = value;
    }
    get github() {
      return this[github];
    }
    set github(value) {
      super.github = value;
    }
    [_openTwitter]() {
      return async.async(dart.dynamic, (function* _openTwitter() {
        if (dart.test(yield url_launcher.canLaunch(this.twitter))) {
          yield url_launcher.launch(this.twitter);
        } else {
          dart.throw("Could not launch " + dart.str(this.twitter));
        }
      }).bind(this));
    }
    [_openLinkedIn]() {
      return async.async(dart.dynamic, (function* _openLinkedIn() {
        if (dart.test(yield url_launcher.canLaunch(this.linkedIn))) {
          yield url_launcher.launch(this.linkedIn);
        } else {
          dart.throw("Could not launch " + dart.str(this.linkedIn));
        }
      }).bind(this));
    }
    [_openGithub]() {
      return async.async(dart.dynamic, (function* _openGithub() {
        if (dart.test(yield url_launcher.canLaunch(this.github))) {
          yield url_launcher.launch(this.github);
        } else {
          dart.throw("Could not launch " + dart.str(this.github));
        }
      }).bind(this));
    }
    build(context) {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.only({bottom: 40.0, top: 16.0}), decoration: new box_decoration.BoxDecoration.new({color: new ui.Color.new(4281089616)}), child: new basic.Column.new({children: JSArrayOfWidget().of([new sectionTitle.SectionTitle.new({title: "Location", $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new text.Text.new(this.location, {style: new text_style.TextStyle.new({color: colors.Colors.white}), textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new basic.SizedBox.new({height: 16.0, $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), new sectionTitle.SectionTitle.new({title: "Around the web", $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new icon_button.IconButton.new({icon: new icon.Icon.new(font_awesome_flutter.FontAwesomeIcons.twitter, {$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), color: colors.Colors.white, onPressed: dart.bind(this, _openTwitter), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), new icon_button.IconButton.new({icon: new icon.Icon.new(font_awesome_flutter.FontAwesomeIcons.linkedin, {$creationLocationd_0dea112b090073317d4: C22 || CT.C22}), color: colors.Colors.white, onPressed: dart.bind(this, _openLinkedIn), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), new icon_button.IconButton.new({icon: new icon.Icon.new(font_awesome_flutter.FontAwesomeIcons.github, {$creationLocationd_0dea112b090073317d4: C30 || CT.C30}), color: colors.Colors.white, onPressed: dart.bind(this, _openGithub), $creationLocationd_0dea112b090073317d4: C33 || CT.C33})]), $creationLocationd_0dea112b090073317d4: C38 || CT.C38})]), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), $creationLocationd_0dea112b090073317d4: C45 || CT.C45});
    }
  };
  (footer.Footer.new = function(opts) {
    let location = opts && 'location' in opts ? opts.location : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[twitter] = "https://twitter.com/FeltesPt";
    this[linkedIn] = "https://www.linkedin.com/in/feltesPT";
    this[github] = "https://github.com/FeltesPT/";
    this[location$] = location;
    footer.Footer.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = footer.Footer.prototype;
  dart.addTypeTests(footer.Footer);
  dart.setMethodSignature(footer.Footer, () => ({
    __proto__: dart.getMethods(footer.Footer.__proto__),
    [_openTwitter]: dart.fnType(dart.dynamic, []),
    [_openLinkedIn]: dart.fnType(dart.dynamic, []),
    [_openGithub]: dart.fnType(dart.dynamic, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(footer.Footer, "package:Feltes/screens/sections/footer.dart");
  dart.setFieldSignature(footer.Footer, () => ({
    __proto__: dart.getFields(footer.Footer.__proto__),
    location: dart.finalFieldType(core.String),
    twitter: dart.finalFieldType(core.String),
    linkedIn: dart.finalFieldType(core.String),
    github: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/Feltes/screens/sections/footer", {
    "package:Feltes/screens/sections/footer.dart": footer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["footer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASe;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;AAED;AACV,sBAAI,MAAM,uBAAU;AACG,UAArB,MAAM,oBAAO;;AAEoB,UAAjC,WAAM,AAA2B,+BAAR;;MAE7B;;;AAEa;AACX,sBAAI,MAAM,uBAAU;AACI,UAAtB,MAAM,oBAAO;;AAEqB,UAAlC,WAAM,AAA4B,+BAAT;;MAE7B;;;AAEW;AACT,sBAAI,MAAM,uBAAU;AACE,UAApB,MAAM,oBAAO;;AAEmB,UAAhC,WAAM,AAA0B,+BAAP;;MAE7B;;UAG0B;AACxB,YAAO,uCACe,yCAAa,WAAS,oBAC9B,6CACH,iBAAM,sBAER,gCACa,sBAChB,0CACS,mEAET,kBACE,uBACO,qCACS,kCAEK,4EAEvB,gCACU,6DAEV,0CACS,2EAET,sCACuC,yCACnB,sBAChB,sCACQ,kBAAsB,gHACd,0CACH,8EAEb,sCACQ,kBAAsB,iHACd,0CACH,+EAEb,sCACQ,kBAAsB,+GACd,0CACH;IAOzB;;;QA/EmB;;IAGN,gBAAU;IACV,iBAAW;IACX,eAAS;IALH;AAAb;;EAAuB","file":"footer.ddc.js"}');
  // Exports:
  return {
    screens__sections__footer: footer
  };
});

//# sourceMappingURL=footer.ddc.js.map

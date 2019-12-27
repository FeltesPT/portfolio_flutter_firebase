define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/Feltes/network/api', 'packages/Feltes/network/infoAPI', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter_spinkit/flutter_spinkit', 'packages/flutter/material', 'packages/Feltes/screens/sections/homeBanner_web', 'packages/Feltes/screens/sections/portfolio', 'packages/Feltes/screens/sections/about', 'packages/Feltes/screens/sections/contact', 'packages/Feltes/screens/sections/footer', 'packages/Feltes/models/Info'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__Feltes__network__api, packages__Feltes__network__infoAPI, packages__flutter__src__painting___network_image_web, packages__flutter_spinkit__flutter_spinkit, packages__flutter__material, packages__Feltes__screens__sections__homeBanner_web, packages__Feltes__screens__sections__portfolio, packages__Feltes__screens__sections__about, packages__Feltes__screens__sections__contact, packages__Feltes__screens__sections__footer, packages__Feltes__models__Info) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const api = packages__Feltes__network__api.network__api;
  const infoAPI = packages__Feltes__network__infoAPI.network__infoAPI;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const cube_grid = packages__flutter_spinkit__flutter_spinkit.src__cube_grid;
  const colors = packages__flutter__material.src__material__colors;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const homeBanner_web = packages__Feltes__screens__sections__homeBanner_web.screens__sections__homeBanner_web;
  const portfolio = packages__Feltes__screens__sections__portfolio.screens__sections__portfolio;
  const about = packages__Feltes__screens__sections__about.screens__sections__about;
  const contact = packages__Feltes__screens__sections__contact.screens__sections__contact;
  const footer = packages__Feltes__screens__sections__footer.screens__sections__footer;
  const Info = packages__Feltes__models__Info.models__Info;
  const home_web = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextAndintToDecoratedBox = () => (BuildContextAndintToDecoratedBox = dart.constFn(dart.fnType(container.DecoratedBox, [framework.BuildContext, core.int])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 51,
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
        [_Location_column]: 20,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home_web.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 11,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home_web.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home_web.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home_web.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home_web.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home_web.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 19,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 19,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home_web.dart"
      });
    },
    get C26() {
      return C26 = dart.constList([], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home_web.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "about",
        [_Location_column]: 19,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 82,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home_web.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 85,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home_web.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "location",
        [_Location_column]: 19,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home_web.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home_web.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home_web.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home_web.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home_web.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home_web.dart"
      });
    }
  });
  home_web.HomeWeb = class HomeWeb extends framework.StatefulWidget {
    createState() {
      return new home_web._HomeWebState.new();
    }
  };
  (home_web.HomeWeb.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home_web.HomeWeb.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home_web.HomeWeb.prototype;
  dart.addTypeTests(home_web.HomeWeb);
  dart.setMethodSignature(home_web.HomeWeb, () => ({
    __proto__: dart.getMethods(home_web.HomeWeb.__proto__),
    createState: dart.fnType(home_web._HomeWebState, [])
  }));
  dart.setLibraryUri(home_web.HomeWeb, "package:Feltes/screens/home_web.dart");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  let C8;
  let C7;
  let C6;
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C16;
  let C14;
  let C13;
  let C19;
  let C20;
  let C18;
  let C17;
  let C23;
  let C24;
  let C22;
  let C21;
  let C26;
  let C25;
  let C29;
  let C28;
  let C27;
  let C30;
  let C33;
  let C32;
  let C31;
  let C36;
  let C35;
  let C34;
  let C39;
  let C38;
  let C37;
  let C42;
  let C41;
  let C40;
  let C45;
  let C44;
  let C43;
  let C48;
  let C49;
  let C47;
  let C46;
  home_web._HomeWebState = class _HomeWebState extends framework.State$(home_web.HomeWeb) {
    initState() {
      super.initState();
      this.api = new api.APIHelper.new();
      this.infoAPI = new infoAPI.InfoAPIHelper.new();
      this.getData();
    }
    getData() {
      return async.async(dart.void, (function* getData() {
        let data = (yield this.infoAPI.getInfo());
        this.setState(dart.fn(() => {
          this.myInfo = data;
        }, VoidToNull()));
      }).bind(this));
    }
    build(context) {
      if (this.myInfo == null) {
        return new container.Container.new({decoration: new box_decoration.BoxDecoration.new({color: new ui.Color.new(4281089616)}), child: new basic.Center.new({child: new cube_grid.SpinKitCubeGrid.new({itemBuilder: dart.fn((context, index) => new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextAndintToDecoratedBox()), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9});
      }
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({backgroundColor: new ui.Color.new(4281089616), title: new text.Text.new("Feltes", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontFamily: "Poppins", fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), body: new basic.Center.new({child: new container.Container.new({child: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new homeBanner_web.HomeBannerWeb.new({name: dart.str(this.myInfo.first) + " " + dart.str(this.myInfo.last), title: this.myInfo.title, $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), new portfolio.Portfolio.new({$creationLocationd_0dea112b090073317d4: C25 || CT.C25}), new about.About.new({about: this.myInfo.about, $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), new contact.Contact.new({$creationLocationd_0dea112b090073317d4: C30 || CT.C30}), new footer.Footer.new({location: this.myInfo.location, $creationLocationd_0dea112b090073317d4: C31 || CT.C31})]), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C46 || CT.C46});
    }
  };
  (home_web._HomeWebState.new = function() {
    this.api = null;
    this.infoAPI = null;
    this.myInfo = null;
    home_web._HomeWebState.__proto__.new.call(this);
    ;
  }).prototype = home_web._HomeWebState.prototype;
  dart.addTypeTests(home_web._HomeWebState);
  dart.setMethodSignature(home_web._HomeWebState, () => ({
    __proto__: dart.getMethods(home_web._HomeWebState.__proto__),
    getData: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home_web._HomeWebState, "package:Feltes/screens/home_web.dart");
  dart.setFieldSignature(home_web._HomeWebState, () => ({
    __proto__: dart.getFields(home_web._HomeWebState.__proto__),
    api: dart.fieldType(api.APIHelper),
    infoAPI: dart.fieldType(infoAPI.InfoAPIHelper),
    myInfo: dart.fieldType(Info.Info)
  }));
  dart.trackLibraries("packages/Feltes/screens/home_web", {
    "package:Feltes/screens/home_web.dart": home_web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home_web.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAeiC;IAAe;;;;;;EAChD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AASqB,MAAX;AAEW,MAAjB,WAAM;AACmB,MAAzB,eAAU;AACD,MAAT;IACF;;AAEY;AACN,oBAAO,MAAM,AAAQ;AAIvB,QAFF,cAAS;AACM,UAAb,cAAS,IAAI;;MAEjB;;UAG0B;AACxB,UAAI,AAAO,eAAG;AACZ,cAAO,0CACO,6CACH,iBAAM,sBAER,6BAAc,gDACN,SAAc,SAAa,UAC/B,4CACO,6CACI;;AAQ1B,YAAO,oCACG,yCACW,iBAAM,oBAChB,kBACL,kBACO,qCACS,iCACF,qBACF,gIAIV,6BACG,oCACE,+DACE,gCACa,sBAChB,4CACwC,SAA7B,AAAO,qBAAM,eAAG,AAAO,0BACzB,AAAO,4EAEhB,sFACA,4BACS,AAAO,4EAEhB,kFACA,iCACY,AAAO;IAQjC;;;IA3EU;IACI;IACT;;;EA0EP","file":"home_web.ddc.js"}');
  // Exports:
  return {
    screens__home_web: home_web
  };
});

//# sourceMappingURL=home_web.ddc.js.map

define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/Feltes/network/api', 'packages/Feltes/models/project', 'packages/Feltes/screens/components/portfolio_card', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/flutter_spinkit/flutter_spinkit', 'packages/Feltes/screens/components/sectionTitle'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__Feltes__network__api, packages__Feltes__models__project, packages__Feltes__screens__components__portfolio_card, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__flutter_spinkit__flutter_spinkit, packages__Feltes__screens__components__sectionTitle) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const api = packages__Feltes__network__api.network__api;
  const project = packages__Feltes__models__project.models__project;
  const portfolio_card = packages__Feltes__screens__components__portfolio_card.screens__components__portfolio_card;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const colors = packages__flutter__material.src__material__colors;
  const cube_grid = packages__flutter_spinkit__flutter_spinkit.src__cube_grid;
  const sectionTitle = packages__Feltes__screens__components__sectionTitle.screens__components__sectionTitle;
  const portfolio = Object.create(dart.library);
  const $add = dartx.add;
  const $isNotEmpty = dartx.isNotEmpty;
  const $length = dartx.length;
  const $last = dartx.last;
  let JSArrayOfProject = () => (JSArrayOfProject = dart.constFn(_interceptors.JSArray$(project.Project)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfRow = () => (JSArrayOfRow = dart.constFn(_interceptors.JSArray$(basic.Row)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndintToDecoratedBox = () => (BuildContextAndintToDecoratedBox = dart.constFn(dart.fnType(container.DecoratedBox, [framework.BuildContext, core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "project",
        [_Location_column]: 13,
        [_Location_line]: 54,
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
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/portfolio.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "project",
        [_Location_column]: 17,
        [_Location_line]: 63,
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
        [_Location_column]: 15,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/portfolio.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/portfolio.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/portfolio.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 11,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/portfolio.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/portfolio.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/portfolio.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/portfolio.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/portfolio.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/portfolio.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 7,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/sections/portfolio.dart"
      });
    }
  });
  portfolio.Portfolio = class Portfolio extends framework.StatefulWidget {
    createState() {
      return new portfolio._PortfolioState.new();
    }
  };
  (portfolio.Portfolio.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    portfolio.Portfolio.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = portfolio.Portfolio.prototype;
  dart.addTypeTests(portfolio.Portfolio);
  dart.setMethodSignature(portfolio.Portfolio, () => ({
    __proto__: dart.getMethods(portfolio.Portfolio.__proto__),
    createState: dart.fnType(portfolio._PortfolioState, [])
  }));
  dart.setLibraryUri(portfolio.Portfolio, "package:Feltes/screens/sections/portfolio.dart");
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
  let C9;
  let C7;
  let C6;
  let C12;
  let C11;
  let C10;
  let C15;
  let C14;
  let C13;
  let C18;
  let C17;
  let C16;
  let C21;
  let C22;
  let C23;
  let C20;
  let C19;
  let C26;
  let C27;
  let C25;
  let C24;
  let C30;
  let C31;
  let C29;
  let C28;
  let C34;
  let C33;
  let C32;
  let C37;
  let C38;
  let C39;
  let C36;
  let C35;
  portfolio._PortfolioState = class _PortfolioState extends framework.State$(portfolio.Portfolio) {
    initState() {
      super.initState();
      this.api = new api.APIHelper.new();
      this.getData();
    }
    getData() {
      return async.async(dart.void, (function* getData() {
        let data = (yield this.api.getPortfolio());
        let projects = JSArrayOfProject().of([]);
        for (let projInfo of core.Iterable._check(data)) {
          let proj = new project.Project.new({title: core.String._check(dart.dsend(projInfo, '_get', ["name"])), description: core.String._check(dart.dsend(projInfo, '_get', ["description"])), imageName: core.String._check(dart.dsend(projInfo, '_get', ["photo"])), url: core.String._check(dart.dsend(projInfo, '_get', ["url"]))});
          projects[$add](proj);
        }
        this.setState(dart.fn(() => {
          this.myProjects = projects;
        }, VoidToNull()));
      }).bind(this));
    }
    createList(numInRow) {
      let list = JSArrayOfRow().of([]);
      for (let project of this.myProjects) {
        if (dart.test(list[$isNotEmpty]) && dart.notNull(list[$last].children[$length]) <= dart.notNull(numInRow) - 1) {
          list[$last].children[$add](new portfolio_card.PortfolioCard.new({project: project, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}));
        } else {
          list[$add](new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new portfolio_card.PortfolioCard.new({project: project, $creationLocationd_0dea112b090073317d4: C3 || CT.C3})]), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}));
        }
      }
      return list;
    }
    build(context) {
      let isBigScreen = dart.notNull(media_query.MediaQuery.of(context).size.width) > 1200;
      let isMediumScreen = dart.notNull(media_query.MediaQuery.of(context).size.width) > 800 && !isBigScreen;
      let isTinnyScreen = dart.notNull(media_query.MediaQuery.of(context).size.width) < 400;
      let numInRow = isBigScreen ? 4 : isMediumScreen ? 3 : isTinnyScreen ? 1 : 2;
      if (this.myProjects == null) {
        return new container.Container.new({constraints: new box.BoxConstraints.new({minHeight: 400.0}), decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.white}), child: new basic.Center.new({child: new cube_grid.SpinKitCubeGrid.new({itemBuilder: dart.fn((context, index) => new container.DecoratedBox.new({decoration: new box_decoration.BoxDecoration.new({color: new ui.Color.new(4281089616)}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), BuildContextAndintToDecoratedBox()), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19});
      }
      return new container.Container.new({constraints: new box.BoxConstraints.new({maxWidth: 1200.0}), padding: new edge_insets.EdgeInsets.all(16.0), child: new basic.Column.new({children: JSArrayOfWidget().of([new sectionTitle.SectionTitle.new({title: "Portfolio", color: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: this.createList(numInRow), $creationLocationd_0dea112b090073317d4: C28 || CT.C28})]), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35});
    }
  };
  (portfolio._PortfolioState.new = function() {
    this.api = null;
    this.myProjects = null;
    portfolio._PortfolioState.__proto__.new.call(this);
    ;
  }).prototype = portfolio._PortfolioState.prototype;
  dart.addTypeTests(portfolio._PortfolioState);
  dart.setMethodSignature(portfolio._PortfolioState, () => ({
    __proto__: dart.getMethods(portfolio._PortfolioState.__proto__),
    getData: dart.fnType(dart.void, []),
    createList: dart.fnType(core.List$(basic.Row), [core.int]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(portfolio._PortfolioState, "package:Feltes/screens/sections/portfolio.dart");
  dart.setFieldSignature(portfolio._PortfolioState, () => ({
    __proto__: dart.getFields(portfolio._PortfolioState.__proto__),
    api: dart.fieldType(api.APIHelper),
    myProjects: dart.fieldType(core.List$(project.Project))
  }));
  dart.trackLibraries("packages/Feltes/screens/sections/portfolio", {
    "package:Feltes/screens/sections/portfolio.dart": portfolio
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["portfolio.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAYmC;IAAiB;;;;;;EACpD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAQqB,MAAX;AAEW,MAAjB,WAAM;AACG,MAAT;IACF;;AAEY;AACN,oBAAO,MAAM,AAAI;AAEP,uBAAW;AACzB,iBAAS,iCAAY,IAAI;AACnB,qBAAO,mDACQ,WAAR,QAAQ,WAAC,2CACK,WAAR,QAAQ,WAAC,gDACH,WAAR,QAAQ,WAAC,oCACP,WAAR,QAAQ,WAAC;AAEA,UAAlB,AAAS,QAAD,OAAK,IAAI;;AAKjB,QAFF,cAAS;AACc,UAArB,kBAAa,QAAQ;;MAEzB;;eAEyB;AACb,iBAAO;AAEjB,eAAS,UAAW;AAClB,sBAAI,AAAK,IAAD,kBAAyC,aAA1B,AAAK,AAAK,AAAS,IAAf,8BAAkC,aAAT,QAAQ,IAAG;AAK5D,UAJD,AAAK,AAAK,AAAS,IAAf,uBACF,+CACW,OAAO;;AAanB,UATD,AAAK,IAAD,OACF,sCACuC,yCACnB,sBAChB,+CACW,OAAO;;;AAQ5B,YAAO,KAAI;IACb;UAG0B;AACnB,wBAAgD,aAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe;AAClD,2BACiC,AAAM,aAA7B,AAAY,AAAK,0BAAd,OAAO,gBAAe,QAAQ,WAAW;AACtD,0BAAkD,aAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe;AAErD,qBAAW,WAAW,GAAG,IAAI,cAAc,GAAG,IAAI,aAAa,GAAG,IAAI;AAE1E,UAAI,AAAW,mBAAG;AAChB,cAAO,2CACQ,uCACA,qBAED,6CAA4B,8BACjC,6BAAc,gDACN,SAAc,SAAa,UAC/B,4CACO,6CACH,iBAAM;;AAQzB,YAAO,2CACQ,sCACD,mBAEQ,+BAAI,cACjB,gCACa,sBAChB,0CACS,oBACO,8EAEhB,yCACuC,yCAC3B,gBAAW,QAAQ;IAKvC;;;IAtGU;IACI;;;EAsGhB","file":"portfolio.ddc.js"}');
  // Exports:
  return {
    screens__sections__portfolio: portfolio
  };
});

//# sourceMappingURL=portfolio.ddc.js.map

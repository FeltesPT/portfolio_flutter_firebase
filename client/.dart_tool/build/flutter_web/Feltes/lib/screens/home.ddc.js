define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/Feltes/network/api', 'packages/Feltes/network/infoAPI', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter_spinkit/flutter_spinkit', 'packages/flutter/material', 'packages/font_awesome_flutter/icon_data', 'packages/Feltes/backoffice/backoffice', 'packages/Feltes/screens/sections/homeBanner', 'packages/Feltes/screens/sections/portfolio', 'packages/Feltes/screens/sections/about', 'packages/Feltes/screens/sections/contact', 'packages/Feltes/screens/sections/footer', 'packages/Feltes/models/Info'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__Feltes__network__api, packages__Feltes__network__infoAPI, packages__flutter__src__painting___network_image_web, packages__flutter_spinkit__flutter_spinkit, packages__flutter__material, packages__font_awesome_flutter__icon_data, packages__Feltes__backoffice__backoffice, packages__Feltes__screens__sections__homeBanner, packages__Feltes__screens__sections__portfolio, packages__Feltes__screens__sections__about, packages__Feltes__screens__sections__contact, packages__Feltes__screens__sections__footer, packages__Feltes__models__Info) {
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
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const icon_data = packages__flutter__src__widgets__actions.src__widgets__icon_data;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const sliver = packages__flutter__src__widgets__actions.src__widgets__sliver;
  const api = packages__Feltes__network__api.network__api;
  const infoAPI = packages__Feltes__network__infoAPI.network__infoAPI;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const cube_grid = packages__flutter_spinkit__flutter_spinkit.src__cube_grid;
  const colors = packages__flutter__material.src__material__colors;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const page = packages__flutter__material.src__material__page;
  const flexible_space_bar = packages__flutter__material.src__material__flexible_space_bar;
  const icon_data$ = packages__font_awesome_flutter__icon_data.icon_data;
  const login = packages__Feltes__backoffice__backoffice.backoffice__login;
  const homeBanner = packages__Feltes__screens__sections__homeBanner.screens__sections__homeBanner;
  const portfolio = packages__Feltes__screens__sections__portfolio.screens__sections__portfolio;
  const about = packages__Feltes__screens__sections__about.screens__sections__about;
  const contact = packages__Feltes__screens__sections__contact.screens__sections__contact;
  const footer = packages__Feltes__screens__sections__footer.screens__sections__footer;
  const Info = packages__Feltes__models__Info.models__Info;
  const home = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextAndintToDecoratedBox = () => (BuildContextAndintToDecoratedBox = dart.constFn(dart.fnType(container.DecoratedBox, [framework.BuildContext, core.int])))();
  let BuildContextToLogin = () => (BuildContextToLogin = dart.constFn(dart.fnType(login.Login, [framework.BuildContext])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 53,
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
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 11,
        [_Location_line]: 51,
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
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 50,
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
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 50,
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
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 71,
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
        [_Location_column]: 18,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: icon_data$.IconDataSolid.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: "font_awesome_flutter",
        [IconData_fontFamily]: "FontAwesomeSolid",
        [IconData_codePoint]: 62198
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: null,
        [Icon_size]: null,
        [Icon_icon]: C18 || CT.C18
      });
    },
    get C20() {
      return C20 = dart.constList([], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 15,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 15,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24, C25 || CT.C25], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 15,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "background",
        [_Location_column]: 13,
        [_Location_line]: 97,
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
        [_Location_column]: 26,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 11,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "forceElevated",
        [_Location_column]: 11,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 11,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pinned",
        [_Location_column]: 11,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "expandedHeight",
        [_Location_column]: 11,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flexibleSpace",
        [_Location_column]: 11,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "about",
        [_Location_column]: 17,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "location",
        [_Location_column]: 17,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "delegate",
        [_Location_column]: 11,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "slivers",
        [_Location_column]: 7,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/home.dart"
      });
    }
  });
  home.Home = class Home extends framework.StatefulWidget {
    createState() {
      return new home._HomeState.new();
    }
  };
  (home.Home.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home.Home.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.Home.prototype;
  dart.addTypeTests(home.Home);
  dart.setMethodSignature(home.Home, () => ({
    __proto__: dart.getMethods(home.Home.__proto__),
    createState: dart.fnType(home._HomeState, [])
  }));
  dart.setLibraryUri(home.Home, "package:Feltes/screens/home.dart");
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
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  const Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  const Icon_color = dart.privateName(icon, "Icon.color");
  const Icon_size = dart.privateName(icon, "Icon.size");
  const IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  const IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  const IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  const IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  let C18;
  const Icon_icon = dart.privateName(icon, "Icon.icon");
  let C17;
  let C20;
  let C19;
  let C23;
  let C24;
  let C25;
  let C22;
  let C21;
  let C28;
  let C29;
  let C27;
  let C26;
  let C32;
  let C31;
  let C30;
  let C35;
  let C36;
  let C37;
  let C38;
  let C39;
  let C40;
  let C41;
  let C42;
  let C34;
  let C33;
  let C43;
  let C46;
  let C45;
  let C44;
  let C47;
  let C50;
  let C49;
  let C48;
  let C53;
  let C52;
  let C51;
  let C56;
  let C55;
  let C54;
  let C59;
  let C58;
  let C57;
  home._HomeState = class _HomeState extends framework.State$(home.Home) {
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
      return new scaffold.Scaffold.new({body: new scroll_view.CustomScrollView.new({slivers: JSArrayOfWidget().of([new app_bar.SliverAppBar.new({elevation: 6.0, forceElevated: true, backgroundColor: new ui.Color.new(4281089616), title: new text.Text.new("Feltes", {style: new text_style.TextStyle.new({color: colors.Colors.white, fontFamily: "Poppins", fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), actions: JSArrayOfWidget().of([new icon_button.IconButton.new({icon: C17 || CT.C17, tooltip: "Backoffice", onPressed: dart.fn(() => {
                    navigator.Navigator.push(dart.dynamic, context, new page.MaterialPageRoute.new({fullscreenDialog: true, builder: dart.fn(context => new login.Login.new({$creationLocationd_0dea112b090073317d4: C19 || CT.C19}), BuildContextToLogin())}));
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C21 || CT.C21})]), pinned: true, expandedHeight: 210.0, flexibleSpace: new flexible_space_bar.FlexibleSpaceBar.new({background: new homeBanner.HomeBanner.new({name: dart.str(this.myInfo.first) + " " + dart.str(this.myInfo.last), title: this.myInfo.title, $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), new sliver.SliverList.new({delegate: new sliver.SliverChildListDelegate.new(JSArrayOfWidget().of([new portfolio.Portfolio.new({$creationLocationd_0dea112b090073317d4: C43 || CT.C43}), new about.About.new({about: this.myInfo.about, $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), new contact.Contact.new({$creationLocationd_0dea112b090073317d4: C47 || CT.C47}), new footer.Footer.new({location: this.myInfo.location, $creationLocationd_0dea112b090073317d4: C48 || CT.C48})])), $creationLocationd_0dea112b090073317d4: C51 || CT.C51})]), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57});
    }
  };
  (home._HomeState.new = function() {
    this.api = null;
    this.infoAPI = null;
    this.myInfo = null;
    home._HomeState.__proto__.new.call(this);
    ;
  }).prototype = home._HomeState.prototype;
  dart.addTypeTests(home._HomeState);
  dart.setMethodSignature(home._HomeState, () => ({
    __proto__: dart.getMethods(home._HomeState.__proto__),
    getData: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home._HomeState, "package:Feltes/screens/home.dart");
  dart.setFieldSignature(home._HomeState, () => ({
    __proto__: dart.getFields(home._HomeState.__proto__),
    api: dart.fieldType(api.APIHelper),
    infoAPI: dart.fieldType(infoAPI.InfoAPIHelper),
    myInfo: dart.fieldType(Info.Info)
  }));
  dart.trackLibraries("packages/Feltes/screens/home", {
    "package:Feltes/screens/home.dart": home
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiB8B;IAAY;;;;;;EAC1C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AASqB,MAAX;AAEW,MAAjB,WAAM;AACmB,MAAzB,eAAU;AACD,MAAT;IACF;;AAEY;AACN,oBAAO,MAAM,AAAQ;AAIvB,QAFF,cAAS;AACM,UAAb,cAAS,IAAI;;MAEjB;;UAG0B;AACxB,UAAI,AAAO,eAAG;AACZ,cAAO,0CACO,6CACH,iBAAM,sBAER,6BAAc,gDACN,SAAc,SAAa,UAC/B,4CACO,6CACI;;AAQ1B,YAAO,kCACG,+CACS,sBACf,yCACa,oBACI,uBACE,iBAAM,oBAChB,kBACL,kBACO,qCACS,iCACF,qBACF,0EAGG,sBACf,8DAEW,yBACE;AASR,oBARS,uCACR,OAAO,EACP,kDACoB,eACT,QAAC,WACD;uGAOX,sBACQ,sBACD,yDACD,qCAC4B,SAA7B,AAAO,qBAAM,eAAG,AAAO,0BACzB,AAAO,8LAIpB,qCACY,uCACR,sBACE,sFACA,4BACS,AAAO,4EAEhB,kFACA,iCACY,AAAO;IAO/B;;;IAjGU;IACI;IACT;;;EAgGP","file":"home.ddc.js"}');
  // Exports:
  return {
    screens__home: home
  };
});

//# sourceMappingURL=home.ddc.js.map

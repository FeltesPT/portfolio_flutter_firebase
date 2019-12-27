define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/provider/provider', 'packages/Feltes/models/Data', 'packages/flutter/material', 'packages/Feltes/backoffice/screens/info', 'packages/Feltes/backoffice/screens/users_list', 'packages/Feltes/backoffice/screens/profile_screen', 'packages/font_awesome_flutter/font_awesome_flutter', 'packages/flutter/src/painting/_network_image_web', 'packages/modal_progress_hud/modal_progress_hud', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/gestures/arena', 'packages/Feltes/utils/constants', 'packages/Feltes/backoffice/components/rounded_button'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__provider__provider, packages__Feltes__models__Data, packages__flutter__material, packages__Feltes__backoffice__screens__info, packages__Feltes__backoffice__screens__users_list, packages__Feltes__backoffice__screens__profile_screen, packages__font_awesome_flutter__font_awesome_flutter, packages__flutter__src__painting___network_image_web, packages__modal_progress_hud__modal_progress_hud, packages__flutter__src__rendering__animated_size, packages__flutter__src__gestures__arena, packages__Feltes__utils__constants, packages__Feltes__backoffice__components__rounded_button) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const bottom_navigation_bar_item = packages__flutter__src__widgets__actions.src__widgets__bottom_navigation_bar_item;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const provider = packages__provider__provider.src__provider;
  const consumer = packages__provider__provider.src__consumer;
  const Data = packages__Feltes__models__Data.models__Data;
  const page = packages__flutter__material.src__material__page;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const bottom_navigation_bar = packages__flutter__material.src__material__bottom_navigation_bar;
  const colors = packages__flutter__material.src__material__colors;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const text_field = packages__flutter__material.src__material__text_field;
  const info = packages__Feltes__backoffice__screens__info.backoffice__screens__info;
  const users_list = packages__Feltes__backoffice__screens__users_list.backoffice__screens__users_list;
  const profile_screen = packages__Feltes__backoffice__screens__profile_screen.backoffice__screens__profile_screen;
  const font_awesome_flutter = packages__font_awesome_flutter__font_awesome_flutter.font_awesome_flutter;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const _network_image_web = packages__flutter__src__painting___network_image_web.src__painting___network_image_web;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const modal_progress_hud = packages__modal_progress_hud__modal_progress_hud.modal_progress_hud;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const constants = packages__Feltes__utils__constants.utils__constants;
  const rounded_button = packages__Feltes__backoffice__components__rounded_button.backoffice__components__rounded_button;
  const backoffice = Object.create(dart.library);
  const login = Object.create(dart.library);
  let BuildContextToLogin = () => (BuildContextToLogin = dart.constFn(dart.fnType(login.Login, [framework.BuildContext])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ConsumerOfData = () => (ConsumerOfData = dart.constFn(consumer.Consumer$(Data.Data)))();
  let JSArrayOfBottomNavigationBarItem = () => (JSArrayOfBottomNavigationBarItem = dart.constFn(_interceptors.JSArray$(bottom_navigation_bar_item.BottomNavigationBarItem)))();
  let BuildContextAndDataAndWidgetToScaffold = () => (BuildContextAndDataAndWidgetToScaffold = dart.constFn(dart.fnType(scaffold.Scaffold, [framework.BuildContext, Data.Data, framework.Widget])))();
  let BuildContextToBackoffice = () => (BuildContextToBackoffice = dart.constFn(dart.fnType(backoffice.Backoffice, [framework.BuildContext])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 21,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 78,
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
        [_Location_column]: 14,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 78,
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
        [_Location_column]: 12,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 45,
        [_Location_line]: 95,
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
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 45,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 45,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 45,
        [_Location_line]: 110,
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
        [_Location_column]: 23,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 45,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "currentIndex",
        [_Location_column]: 13,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fixedColor",
        [_Location_column]: 13,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 13,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 13,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bottomNavigationBar",
        [_Location_column]: 11,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 11,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 11,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60, C61 || CT.C61], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C63 || CT.C63,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/backoffice.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/login.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/login.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 13,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/login.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 23,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 23,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 23,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75, C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/login.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/login.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 23,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 23,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 23,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84, C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/login.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/login.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 23,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92, C93 || CT.C93, C94 || CT.C94], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/login.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98, C99 || CT.C99], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/login.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102, C103 || CT.C103], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/login.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inAsyncCall",
        [_Location_column]: 15,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.constList([C106 || CT.C106, C107 || CT.C107], widget_inspector._Location);
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C105 || CT.C105,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/login.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 13,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110, C111 || CT.C111], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/login.dart"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 11,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 11,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114, C115 || CT.C115, C116 || CT.C116], widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C113 || CT.C113,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/login.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C118 || CT.C118,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/login.dart"
      });
    }
  });
  backoffice.Backoffice = class Backoffice extends framework.StatefulWidget {
    createState() {
      return new backoffice._BackofficeState.new();
    }
  };
  (backoffice.Backoffice.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    backoffice.Backoffice.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = backoffice.Backoffice.prototype;
  dart.addTypeTests(backoffice.Backoffice);
  dart.setMethodSignature(backoffice.Backoffice, () => ({
    __proto__: dart.getMethods(backoffice.Backoffice.__proto__),
    createState: dart.fnType(backoffice._BackofficeState, [])
  }));
  dart.setLibraryUri(backoffice.Backoffice, "package:Feltes/backoffice/backoffice.dart");
  const _currentIndex = dart.privateName(backoffice, "_currentIndex");
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  const _onItemTapped = dart.privateName(backoffice, "_onItemTapped");
  let C2;
  let C3;
  let C4;
  let C7;
  let C6;
  let C5;
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
  let C18;
  let C17;
  let C22;
  let C21;
  let C20;
  let C25;
  let C24;
  let C23;
  let C28;
  let C27;
  let C26;
  let C31;
  let C30;
  let C29;
  let C34;
  let C33;
  let C32;
  let C37;
  let C36;
  let C35;
  let C40;
  let C39;
  let C38;
  let C43;
  let C42;
  let C41;
  let C46;
  let C47;
  let C48;
  let C49;
  let C45;
  let C44;
  let C52;
  let C51;
  let C50;
  let C55;
  let C56;
  let C54;
  let C53;
  let C59;
  let C60;
  let C61;
  let C58;
  let C57;
  let C64;
  let C63;
  let C62;
  backoffice._BackofficeState = class _BackofficeState extends framework.State$(backoffice.Backoffice) {
    checkUser() {
      return async.async(dart.void, (function* checkUser() {
        if (!dart.test(yield provider.Provider.of(Data.Data, this.context, {listen: false}).isLoggedIn())) {
          navigator.Navigator.pushReplacement(dart.dynamic, core.Object, this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => new login.Login.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextToLogin())}));
        } else {
          provider.Provider.of(Data.Data, this.context, {listen: false}).fetchUsers();
        }
      }).bind(this));
    }
    [_onItemTapped](index) {
      this.setState(dart.fn(() => {
        this[_currentIndex] = index;
        switch (this[_currentIndex]) {
          case 0:
          {
            this.title = "Backoffice";
            break;
          }
          case 1:
          {
            this.title = "Info";
            break;
          }
          case 2:
          {
            this.title = "Portfolio";
            break;
          }
          case 3:
          {
            this.title = "Users";
            break;
          }
          case 4:
          {
            this.title = "User Details";
            break;
          }
          default:
          {
            break;
          }
        }
      }, VoidToNull()));
    }
    getWidget() {
      switch (this[_currentIndex]) {
        case 0:
        {
          return this.emptyView();
        }
        case 1:
        {
          return new info.Info.new({$creationLocationd_0dea112b090073317d4: C2 || CT.C2});
        }
        case 3:
        {
          return new users_list.UsersList.new({$creationLocationd_0dea112b090073317d4: C3 || CT.C3});
        }
        case 4:
        {
          return new profile_screen.ProfileScreen.new({$creationLocationd_0dea112b090073317d4: C4 || CT.C4});
          break;
        }
        default:
        {
          return new text.Text.new("Backoffice", {$creationLocationd_0dea112b090073317d4: C5 || CT.C5});
        }
      }
    }
    emptyView() {
      return new basic.Center.new({child: new text.Text.new("Nothing to show", {$creationLocationd_0dea112b090073317d4: C8 || CT.C8}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
    }
    build(context) {
      this.checkUser();
      return new (ConsumerOfData()).new({builder: dart.fn((context, data, child) => new scaffold.Scaffold.new({bottomNavigationBar: new bottom_navigation_bar.BottomNavigationBar.new({currentIndex: this[_currentIndex], onTap: dart.bind(this, _onItemTapped), fixedColor: colors.Colors.white, items: JSArrayOfBottomNavigationBarItem().of([new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(font_awesome_flutter.FontAwesomeIcons.home, {$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), title: new text.Text.new("Home", {$creationLocationd_0dea112b090073317d4: C17 || CT.C17}), backgroundColor: new ui.Color.new(4281089616)}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(font_awesome_flutter.FontAwesomeIcons.info, {$creationLocationd_0dea112b090073317d4: C20 || CT.C20}), title: new text.Text.new("Info", {$creationLocationd_0dea112b090073317d4: C23 || CT.C23}), backgroundColor: new ui.Color.new(4281089616)}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(font_awesome_flutter.FontAwesomeIcons.images, {$creationLocationd_0dea112b090073317d4: C26 || CT.C26}), title: new text.Text.new("Portfolio", {$creationLocationd_0dea112b090073317d4: C29 || CT.C29}), backgroundColor: new ui.Color.new(4281089616)}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(font_awesome_flutter.FontAwesomeIcons.users, {$creationLocationd_0dea112b090073317d4: C32 || CT.C32}), title: new text.Text.new("Users", {$creationLocationd_0dea112b090073317d4: C35 || CT.C35}), backgroundColor: new ui.Color.new(4281089616)}), new bottom_navigation_bar_item.BottomNavigationBarItem.new({icon: new icon.Icon.new(font_awesome_flutter.FontAwesomeIcons.user, {$creationLocationd_0dea112b090073317d4: C38 || CT.C38}), title: new text.Text.new("Profile", {$creationLocationd_0dea112b090073317d4: C41 || CT.C41}), backgroundColor: new ui.Color.new(4281089616)})]), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), appBar: new app_bar.AppBar.new({title: new text.Text.new(this.title, {$creationLocationd_0dea112b090073317d4: C50 || CT.C50}), backgroundColor: new ui.Color.new(4281089616), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), body: this.getWidget(), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), BuildContextAndDataAndWidgetToScaffold()), $creationLocationd_0dea112b090073317d4: C62 || CT.C62});
    }
  };
  (backoffice._BackofficeState.new = function() {
    this[_currentIndex] = 0;
    this.title = "";
    backoffice._BackofficeState.__proto__.new.call(this);
    ;
  }).prototype = backoffice._BackofficeState.prototype;
  dart.addTypeTests(backoffice._BackofficeState);
  dart.setMethodSignature(backoffice._BackofficeState, () => ({
    __proto__: dart.getMethods(backoffice._BackofficeState.__proto__),
    checkUser: dart.fnType(dart.void, []),
    [_onItemTapped]: dart.fnType(dart.void, [core.int]),
    getWidget: dart.fnType(framework.Widget, []),
    emptyView: dart.fnType(basic.Center, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(backoffice._BackofficeState, "package:Feltes/backoffice/backoffice.dart");
  dart.setFieldSignature(backoffice._BackofficeState, () => ({
    __proto__: dart.getFields(backoffice._BackofficeState.__proto__),
    [_currentIndex]: dart.fieldType(core.int),
    title: dart.fieldType(core.String)
  }));
  login.Login = class Login extends framework.StatefulWidget {
    createState() {
      return new login._LoginState.new();
    }
  };
  (login.Login.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    login.Login.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = login.Login.prototype;
  dart.addTypeTests(login.Login);
  dart.setMethodSignature(login.Login, () => ({
    __proto__: dart.getMethods(login.Login.__proto__),
    createState: dart.fnType(login._LoginState, [])
  }));
  dart.setLibraryUri(login.Login, "package:Feltes/backoffice/login.dart");
  let C65;
  let C68;
  let C67;
  let C66;
  let C71;
  let C70;
  let C69;
  let C74;
  let C75;
  let C76;
  let C77;
  let C73;
  let C72;
  let C80;
  let C79;
  let C78;
  let C83;
  let C84;
  let C85;
  let C86;
  let C82;
  let C81;
  let C89;
  let C88;
  let C87;
  let C92;
  let C93;
  let C94;
  let C91;
  let C90;
  let C97;
  let C98;
  let C99;
  let C96;
  let C95;
  let C102;
  let C103;
  let C101;
  let C100;
  let C106;
  let C107;
  let C105;
  let C104;
  let C110;
  let C111;
  let C109;
  let C108;
  let C114;
  let C115;
  let C116;
  let C113;
  let C112;
  let C119;
  let C118;
  let C117;
  login._LoginState = class _LoginState extends framework.State$(login.Login) {
    checkUser() {
      return async.async(dart.void, (function* checkUser() {
        if (dart.test(yield provider.Provider.of(Data.Data, this.context, {listen: false}).isLoggedIn())) {
          this.userLoggedIn();
        }
      }).bind(this));
    }
    login() {
      return async.async(dart.void, (function* login() {
        this.setState(dart.fn(() => {
          this.isLoading = true;
        }, VoidToNull()));
        let user = (yield provider.Provider.of(Data.Data, this.context).signIn({email: this.email, password: this.password}));
        if (user != null) {
          this.userLoggedIn();
        } else {
          this.setState(dart.fn(() => {
            this.isLoading = false;
          }, VoidToNull()));
        }
      }).bind(this));
    }
    userLoggedIn() {
      navigator.Navigator.pushReplacement(dart.dynamic, core.Object, this.context, new page.MaterialPageRoute.new({builder: dart.fn(context => new backoffice.Backoffice.new({$creationLocationd_0dea112b090073317d4: C65 || CT.C65}), BuildContextToBackoffice())}));
    }
    build(context) {
      this.checkUser();
      return new (ConsumerOfData()).new({builder: dart.fn((context, data, child) => new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Feltes - Backoffice", {$creationLocationd_0dea112b090073317d4: C66 || CT.C66}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), backgroundColor: colors.Colors.white, body: new container.Container.new({decoration: new box_decoration.BoxDecoration.new({image: new decoration_image.DecorationImage.new({image: new _network_image_web.NetworkImage.new("https://source.unsplash.com/1600x900/?technology"), fit: box_fit.BoxFit.fitHeight})}), child: new modal_progress_hud.ModalProgressHUD.new({inAsyncCall: this.isLoading, child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: 24.0}), child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new text_field.TextField.new({textAlign: ui.TextAlign.center, keyboardType: text_input.TextInputType.emailAddress, onChanged: dart.fn(value => {
                        this.email = value;
                      }, StringToNull()), decoration: constants.kTextInputDecoration.copyWith({hintText: "Enter your Email"}), $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), new basic.SizedBox.new({height: 8.0, $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), new text_field.TextField.new({textAlign: ui.TextAlign.center, obscureText: true, onChanged: dart.fn(value => {
                        this.password = value;
                      }, StringToNull()), decoration: constants.kTextInputDecoration.copyWith({hintText: "Enter your passsword"}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), new basic.SizedBox.new({height: 24.0, $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), new rounded_button.RoundedButton.new({title: "Log In", color: colors.Colors.lightBlueAccent, onPressed: dart.fn(() => {
                        this.login();
                      }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C90 || CT.C90})]), $creationLocationd_0dea112b090073317d4: C95 || CT.C95}), $creationLocationd_0dea112b090073317d4: C100 || CT.C100}), $creationLocationd_0dea112b090073317d4: C104 || CT.C104}), $creationLocationd_0dea112b090073317d4: C108 || CT.C108}), $creationLocationd_0dea112b090073317d4: C112 || CT.C112}), BuildContextAndDataAndWidgetToScaffold()), $creationLocationd_0dea112b090073317d4: C117 || CT.C117});
    }
  };
  (login._LoginState.new = function() {
    this.isLoading = false;
    this.email = null;
    this.password = null;
    login._LoginState.__proto__.new.call(this);
    ;
  }).prototype = login._LoginState.prototype;
  dart.addTypeTests(login._LoginState);
  dart.setMethodSignature(login._LoginState, () => ({
    __proto__: dart.getMethods(login._LoginState.__proto__),
    checkUser: dart.fnType(dart.void, []),
    login: dart.fnType(dart.void, []),
    userLoggedIn: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(login._LoginState, "package:Feltes/backoffice/login.dart");
  dart.setFieldSignature(login._LoginState, () => ({
    __proto__: dart.getFields(login._LoginState.__proto__),
    isLoading: dart.fieldType(core.bool),
    email: dart.fieldType(core.String),
    password: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/Feltes/backoffice/backoffice", {
    "package:Feltes/backoffice/backoffice.dart": backoffice,
    "package:Feltes/backoffice/login.dart": login
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["backoffice.dart","login.dart"],"names":[],"mappings":"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","file":"backoffice.ddc.js"}');
  // Exports:
  return {
    backoffice__backoffice: backoffice,
    backoffice__login: login
  };
});

//# sourceMappingURL=backoffice.ddc.js.map

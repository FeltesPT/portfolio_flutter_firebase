define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/provider/provider', 'packages/Feltes/models/Data', 'packages/modal_progress_hud/modal_progress_hud', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__provider__provider, packages__Feltes__models__Data, packages__modal_progress_hud__modal_progress_hud, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const snack_bar = packages__flutter__material.src__material__snack_bar;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const dropdown = packages__flutter__material.src__material__dropdown;
  const icons = packages__flutter__material.src__material__icons;
  const material_button = packages__flutter__material.src__material__material_button;
  const colors = packages__flutter__material.src__material__colors;
  const provider = packages__provider__provider.src__provider;
  const consumer = packages__provider__provider.src__consumer;
  const Data = packages__Feltes__models__Data.models__Data;
  const modal_progress_hud = packages__modal_progress_hud__modal_progress_hud.modal_progress_hud;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const profile_screen = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ConsumerOfData = () => (ConsumerOfData = dart.constFn(consumer.Consumer$(Data.Data)))();
  let DropdownButtonOfString = () => (DropdownButtonOfString = dart.constFn(dropdown.DropdownButton$(core.String)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let DropdownMenuItemOfString = () => (DropdownMenuItemOfString = dart.constFn(dropdown.DropdownMenuItem$(core.String)))();
  let StringToDropdownMenuItemOfString = () => (StringToDropdownMenuItemOfString = dart.constFn(dart.fnType(DropdownMenuItemOfString(), [core.String])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndDataAndWidgetToModalProgressHUD = () => (BuildContextAndDataAndWidgetToModalProgressHUD = dart.constFn(dart.fnType(modal_progress_hud.ModalProgressHUD, [framework.BuildContext, Data.Data, framework.Widget])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 18,
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
        [_Location_column]: 14,
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 5,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 5,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 5,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 5,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 8,
        [EdgeInsets_right]: 8,
        [EdgeInsets_top]: 8,
        [EdgeInsets_left]: 8
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 21,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 21,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 21,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 21,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 38,
        [_Location_line]: 108,
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
        [_Location_column]: 27,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 120,
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
        [_Location_column]: 32,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 25,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C34 || CT.C34,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 118,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 21,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 21,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "iconSize",
        [_Location_column]: 21,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 21,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 21,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 21,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 21,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50, C51 || CT.C51, C52 || CT.C52, C53 || CT.C53], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 133,
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
        [_Location_column]: 28,
        [_Location_line]: 133,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 21,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 21,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 21,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60, C61 || CT.C61, C62 || CT.C62], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65], widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C64 || CT.C64,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 84,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C71 || CT.C71,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inAsyncCall",
        [_Location_column]: 11,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/profile_screen.dart"
      });
    }
  });
  profile_screen.ProfileScreen = class ProfileScreen extends framework.StatefulWidget {
    createState() {
      return new profile_screen._ProfileScreenState.new();
    }
  };
  (profile_screen.ProfileScreen.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    profile_screen.ProfileScreen.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = profile_screen.ProfileScreen.prototype;
  dart.addTypeTests(profile_screen.ProfileScreen);
  dart.setMethodSignature(profile_screen.ProfileScreen, () => ({
    __proto__: dart.getMethods(profile_screen.ProfileScreen.__proto__),
    createState: dart.fnType(profile_screen._ProfileScreenState, [])
  }));
  dart.setLibraryUri(profile_screen.ProfileScreen, "package:Feltes/backoffice/screens/profile_screen.dart");
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
  let C4;
  let C3;
  let C9;
  let C8;
  let C7;
  let C12;
  let C13;
  let C11;
  let C10;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C14;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C26;
  let C24;
  let C23;
  let C29;
  let C28;
  let C27;
  let C32;
  let C31;
  let C30;
  let C35;
  let C36;
  let C34;
  let C33;
  let C39;
  let C40;
  let C41;
  let C42;
  let C43;
  let C44;
  let C38;
  let C37;
  let C47;
  let C46;
  let C45;
  let C50;
  let C51;
  let C52;
  let C53;
  let C49;
  let C48;
  let C56;
  let C55;
  let C54;
  let C59;
  let C60;
  let C61;
  let C62;
  let C58;
  let C57;
  let C65;
  let C64;
  let C63;
  let C68;
  let C69;
  let C67;
  let C66;
  let C72;
  let C71;
  let C70;
  let C75;
  let C76;
  let C74;
  let C73;
  let C79;
  let C78;
  let C77;
  profile_screen._ProfileScreenState = class _ProfileScreenState extends framework.State$(profile_screen.ProfileScreen) {
    initState() {
      super.initState();
      this.isLoading = true;
    }
    getUser() {
      return async.async(dart.void, (function* getUser() {
        let user = provider.Provider.of(Data.Data, this.context, {listen: false}).currentUser;
        this.nameController = new editable_text.TextEditingController.new({text: user.username});
        this.emailController = new editable_text.TextEditingController.new({text: user.email});
        this.passwordController = new editable_text.TextEditingController.new();
        this.role = user.role === "" ? "user" : user.role;
        this.setState(dart.fn(() => {
          this.isLoading = false;
        }, VoidToNull()));
      }).bind(this));
    }
    save() {
      return async.async(dart.void, (function* save() {
        this.setState(dart.fn(() => {
          this.isLoading = true;
        }, VoidToNull()));
        let success = (yield provider.Provider.of(Data.Data, this.context).updateUser({displayName: this.nameController.text, password: this.passwordController.text, email: this.emailController.text, role: this.role}));
        if (dart.test(success)) {
          core.print("Saved successfully");
          scaffold.Scaffold.of(this.context).showSnackBar(this.successSnackBar);
        } else {
          core.print("Not saved successfully");
          scaffold.Scaffold.of(this.context).showSnackBar(this.failSnackBar);
        }
        this.setState(dart.fn(() => {
          this.isLoading = false;
        }, VoidToNull()));
      }).bind(this));
    }
    build(context) {
      this.getUser();
      return new (ConsumerOfData()).new({builder: dart.fn((context, data, child) => new modal_progress_hud.ModalProgressHUD.new({inAsyncCall: this.isLoading, child: new container.Container.new({child: new basic.Padding.new({padding: C14 || CT.C14, child: new basic.Column.new({children: JSArrayOfWidget().of([new text_field.TextField.new({controller: this.nameController, decoration: new input_decorator.InputDecoration.new({labelText: "Your username."}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), new text_field.TextField.new({controller: this.emailController, decoration: new input_decorator.InputDecoration.new({labelText: "Your email"}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), new text_field.TextField.new({controller: this.passwordController, decoration: new input_decorator.InputDecoration.new({labelText: "Update password"}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), new (DropdownButtonOfString()).new({value: this.role, icon: new icon.Icon.new(icons.Icons.arrow_downward, {$creationLocationd_0dea112b090073317d4: C27 || CT.C27}), iconSize: 24.0, elevation: 16, onChanged: dart.fn(newValue => {
                      this.setState(dart.fn(() => {
                        this.role = newValue;
                      }, VoidToNull()));
                    }, StringToNull()), items: JSArrayOfString().of(["", "admin", "manager", "user"])[$map](DropdownMenuItemOfString(), dart.fn(value => new (DropdownMenuItemOfString()).new({value: value, child: new text.Text.new(value, {$creationLocationd_0dea112b090073317d4: C30 || CT.C30}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), StringToDropdownMenuItemOfString()))[$toList](), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), new material_button.MaterialButton.new({child: new text.Text.new("Save", {$creationLocationd_0dea112b090073317d4: C45 || CT.C45}), color: new ui.Color.new(4281089616), textColor: colors.Colors.white, onPressed: dart.fn(() => {
                      this.save();
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), new material_button.MaterialButton.new({child: new text.Text.new("Logout", {$creationLocationd_0dea112b090073317d4: C54 || CT.C54}), color: colors.Colors.red, textColor: colors.Colors.white, onPressed: dart.fn(() => {
                      data.signOut();
                      navigator.Navigator.pop(core.Object, context);
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C57 || CT.C57})]), $creationLocationd_0dea112b090073317d4: C63 || CT.C63}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), BuildContextAndDataAndWidgetToModalProgressHUD()), $creationLocationd_0dea112b090073317d4: C77 || CT.C77});
    }
  };
  (profile_screen._ProfileScreenState.new = function() {
    this.isLoading = null;
    this.successSnackBar = new snack_bar.SnackBar.new({content: new text.Text.new("Saved successfully.", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), duration: new core.Duration.new({seconds: 2}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    this.failSnackBar = new snack_bar.SnackBar.new({content: new text.Text.new("Failed to save details.", {$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), duration: new core.Duration.new({seconds: 2}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
    this.role = null;
    this.nameController = null;
    this.emailController = null;
    this.passwordController = null;
    profile_screen._ProfileScreenState.__proto__.new.call(this);
    ;
  }).prototype = profile_screen._ProfileScreenState.prototype;
  dart.addTypeTests(profile_screen._ProfileScreenState);
  dart.setMethodSignature(profile_screen._ProfileScreenState, () => ({
    __proto__: dart.getMethods(profile_screen._ProfileScreenState.__proto__),
    getUser: dart.fnType(dart.void, []),
    save: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(profile_screen._ProfileScreenState, "package:Feltes/backoffice/screens/profile_screen.dart");
  dart.setFieldSignature(profile_screen._ProfileScreenState, () => ({
    __proto__: dart.getFields(profile_screen._ProfileScreenState.__proto__),
    isLoading: dart.fieldType(core.bool),
    successSnackBar: dart.finalFieldType(snack_bar.SnackBar),
    failSnackBar: dart.finalFieldType(snack_bar.SnackBar),
    role: dart.fieldType(core.String),
    nameController: dart.fieldType(editable_text.TextEditingController),
    emailController: dart.fieldType(editable_text.TextEditingController),
    passwordController: dart.fieldType(editable_text.TextEditingController)
  }));
  dart.trackLibraries("packages/Feltes/backoffice/screens/profile_screen", {
    "package:Feltes/backoffice/screens/profile_screen.dart": profile_screen
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["profile_screen.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAUuC;IAAqB;;;;;;EAC5D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqBqB,MAAX;AAEU,MAAhB,iBAAY;IACd;;AAEY;AACL,mBAAgB,AAAiC,gCAAxB,uBAAiB;AAEY,QAA3D,sBAAiB,mDAA4B,AAAK,IAAD;AACQ,QAAzD,uBAAkB,mDAA4B,AAAK,IAAD;AACN,QAA5C,0BAAqB;AACsB,QAA3C,YAAO,AAAK,AAAK,IAAN,UAAS,KAAK,SAAS,AAAK,IAAD;AAIpC,QAFF,cAAS;AACU,UAAjB,iBAAY;;MAEhB;;;AAES;AAGL,QAFF,cAAS;AACS,UAAhB,iBAAY;;AAGV,uBAAU,MAAe,AAAkB,gCAAT,uCACrB,AAAe,oCAClB,AAAmB,qCACtB,AAAgB,iCACjB;AAEV,sBAAI,OAAO;AACkB,UAA3B,WAAM;AAC4C,UAAzC,AAAY,qBAAT,2BAAsB;;AAEH,UAA/B,WAAM;AACyC,UAAtC,AAAY,qBAAT,2BAAsB;;AAKlC,QAFF,cAAS;AACU,UAAjB,iBAAY;;MAEhB;;UAG0B;AACf,MAAT;AAEA,YAAO,sCACI,SAAC,SAAS,MAAM,UAChB,0DACQ,uBACN,oCACE,sDAEE,gCACa,sBAChB,0CACc,iCACA,oDACC,6EAGf,0CACc,kCACA,oDACC,yEAGf,0CACc,qCACA,oDACC,8EAGf,2CACS,iBACD,kBAAW,gGACP,iBACC,eACA,QAAQ;AAGf,sBAFF,cAAS;AACQ,wBAAf,YAAO,QAAQ;;+CAGJ,AACV,AAKF,sBANa,IAAI,SAAS,WAAW,2CACL,QAAQ,SAClC,6CACE,KAAK,SACL,kBAAK,KAAK,+NAIvB,+CACS,kBAAK,yEACL,iBAAM,wBACK,gCACP;AACH,sBAAN;+FAGJ,+CACS,kBAAK,2EACE,8BACI,gCACP;AACK,sBAAd,AAAK,IAAD;AACkB,sBAAZ,qCAAI,OAAO;;IAUzC;;;IArIK;IAEC,uBAAkB,qCACb,kBAAK,yFACJ,gCAAkB;IAExB,oBAAe,qCACV,kBAAK,6FACJ,gCAAkB;IAGvB;IACe;IACA;IACA;;;EAwHxB","file":"profile_screen.ddc.js"}');
  // Exports:
  return {
    backoffice__screens__profile_screen: profile_screen
  };
});

//# sourceMappingURL=profile_screen.ddc.js.map

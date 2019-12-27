define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/cupertino/action_sheet', 'packages/provider/provider', 'packages/Feltes/models/Data', 'packages/modal_progress_hud/modal_progress_hud', 'packages/Feltes/backoffice/components/add_user_screen', 'packages/Feltes/backoffice/models/User', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__cupertino__action_sheet, packages__provider__provider, packages__Feltes__models__Data, packages__modal_progress_hud__modal_progress_hud, packages__Feltes__backoffice__components__add_user_screen, packages__Feltes__backoffice__models__User, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const snack_bar = packages__flutter__material.src__material__snack_bar;
  const dialog = packages__flutter__material.src__material__dialog;
  const theme = packages__flutter__material.src__material__theme;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const colors = packages__flutter__material.src__material__colors;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const divider = packages__flutter__material.src__material__divider;
  const floating_action_button = packages__flutter__material.src__material__floating_action_button;
  const icons = packages__flutter__material.src__material__icons;
  const bottom_sheet = packages__flutter__material.src__material__bottom_sheet;
  const platform = packages__flutter__src__foundation___bitfield_web.src__foundation__platform;
  const dialog$ = packages__flutter__src__cupertino__action_sheet.src__cupertino__dialog;
  const provider = packages__provider__provider.src__provider;
  const consumer = packages__provider__provider.src__consumer;
  const Data = packages__Feltes__models__Data.models__Data;
  const modal_progress_hud = packages__modal_progress_hud__modal_progress_hud.modal_progress_hud;
  const add_user_screen = packages__Feltes__backoffice__components__add_user_screen.backoffice__components__add_user_screen;
  const User = packages__Feltes__backoffice__models__User.backoffice__models__User;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const users_list = Object.create(dart.library);
  const $length = dartx.length;
  const $elementAt = dartx.elementAt;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextToStatelessWidget = () => (BuildContextToStatelessWidget = dart.constFn(dart.fnType(framework.StatelessWidget, [framework.BuildContext])))();
  let BuildContextAndintToColumn = () => (BuildContextAndintToColumn = dart.constFn(dart.fnType(basic.Column, [framework.BuildContext, core.int])))();
  let ConsumerOfData = () => (ConsumerOfData = dart.constFn(consumer.Consumer$(Data.Data)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let BuildContextToAddUser = () => (BuildContextToAddUser = dart.constFn(dart.fnType(add_user_screen.AddUser, [framework.BuildContext])))();
  let BuildContextAndDataAndWidgetToModalProgressHUD = () => (BuildContextAndDataAndWidgetToModalProgressHUD = dart.constFn(dart.fnType(modal_progress_hud.ModalProgressHUD, [framework.BuildContext, Data.Data, framework.Widget])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 21,
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
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 5,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 5,
        [_Location_line]: 22,
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
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 25,
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
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 5,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 5,
        [_Location_line]: 26,
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
        [_Location_line]: 24,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 42,
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
        [_Location_column]: 22,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 47,
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
        [_Location_column]: 21,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 46,
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
        [_Location_column]: 24,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 45,
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
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 53,
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
        [_Location_column]: 26,
        [_Location_line]: 53,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 19,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 61,
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
        [_Location_column]: 26,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 60,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 15,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 15,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 26,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 73,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C56 || CT.C56,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 81,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 19,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 31,
        [_Location_line]: 88,
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
        [_Location_column]: 26,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 15,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 15,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 145,
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
        [_Location_column]: 22,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 146,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 15,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 15,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onLongPress",
        [_Location_column]: 15,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86, C87 || CT.C87, C88 || CT.C88], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 151,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 142,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 7,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 7,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 138,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 33,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 169,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onSave",
        [_Location_column]: 21,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 173,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 15,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 15,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107, C108 || CT.C108, C109 || CT.C109], widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C106 || CT.C106,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 167,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C111 || CT.C111,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C115 || CT.C115,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 182,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "floatingActionButton",
        [_Location_column]: 13,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 13,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119, C120 || CT.C120], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C118 || CT.C118,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inAsyncCall",
        [_Location_column]: 11,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/users_list.dart"
      });
    }
  });
  users_list.UsersList = class UsersList extends framework.StatefulWidget {
    createState() {
      return new users_list._UsersListState.new();
    }
  };
  (users_list.UsersList.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    users_list.UsersList.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = users_list.UsersList.prototype;
  dart.addTypeTests(users_list.UsersList);
  dart.setMethodSignature(users_list.UsersList, () => ({
    __proto__: dart.getMethods(users_list.UsersList.__proto__),
    createState: dart.fnType(users_list._UsersListState, [])
  }));
  dart.setLibraryUri(users_list.UsersList, "package:Feltes/backoffice/screens/users_list.dart");
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
  let C32;
  let C33;
  let C30;
  let C29;
  let C36;
  let C35;
  let C34;
  let C39;
  let C40;
  let C38;
  let C37;
  let C43;
  let C44;
  let C45;
  let C42;
  let C41;
  let C48;
  let C47;
  let C46;
  let C51;
  let C50;
  let C49;
  let C54;
  let C53;
  let C52;
  let C57;
  let C56;
  let C55;
  let C60;
  let C59;
  let C58;
  let C63;
  let C64;
  let C65;
  let C62;
  let C61;
  let C68;
  let C67;
  let C66;
  let C71;
  let C72;
  let C70;
  let C69;
  let C75;
  let C76;
  let C77;
  let C74;
  let C73;
  let C80;
  let C79;
  let C78;
  let C83;
  let C82;
  let C81;
  let C86;
  let C87;
  let C88;
  let C85;
  let C84;
  let C91;
  let C90;
  let C89;
  let C94;
  let C93;
  let C92;
  let C97;
  let C98;
  let C96;
  let C95;
  let C101;
  let C100;
  let C99;
  let C104;
  let C103;
  let C102;
  let C107;
  let C108;
  let C109;
  let C106;
  let C105;
  let C112;
  let C113;
  let C111;
  let C110;
  let C116;
  let C115;
  let C114;
  let C119;
  let C120;
  let C118;
  let C117;
  let C123;
  let C124;
  let C122;
  let C121;
  let C127;
  let C126;
  let C125;
  users_list._UsersListState = class _UsersListState extends framework.State$(users_list.UsersList) {
    initState() {
      super.initState();
      this.isLoading = false;
    }
    confirmDelete(user) {
      dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(_ => dart.equals(theme.Theme.of(this.context).platform, platform.TargetPlatform.iOS) ? new dialog$.CupertinoAlertDialog.new({title: new text.Text.new("Delete the user?", {$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), content: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.ListBody.new({children: JSArrayOfWidget().of([new text.Text.new("Do you really want to delete this user?", {$creationLocationd_0dea112b090073317d4: C17 || CT.C17})]), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("Delete", {$creationLocationd_0dea112b090073317d4: C26 || CT.C26}), textColor: colors.Colors.red, onPressed: dart.fn(() => {
                this.delete(user);
                navigator.Navigator.of(this.context).pop(core.Object);
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), new flat_button.FlatButton.new({child: new text.Text.new("Cancel", {$creationLocationd_0dea112b090073317d4: C34 || CT.C34}), onPressed: dart.fn(() => {
                navigator.Navigator.of(this.context).pop(core.Object);
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C37 || CT.C37})]), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}) : new dialog.AlertDialog.new({title: new text.Text.new("Delete the user?", {$creationLocationd_0dea112b090073317d4: C46 || CT.C46}), content: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.ListBody.new({children: JSArrayOfWidget().of([new text.Text.new("Do you really want to delete this user?", {$creationLocationd_0dea112b090073317d4: C49 || CT.C49})]), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new("Cancel", {$creationLocationd_0dea112b090073317d4: C58 || CT.C58}), textColor: colors.Colors.red, onPressed: dart.fn(() => {
                navigator.Navigator.of(this.context).pop(core.Object);
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), new flat_button.FlatButton.new({child: new text.Text.new("Delete", {$creationLocationd_0dea112b090073317d4: C66 || CT.C66}), onPressed: dart.fn(() => {
                this.delete(user);
                navigator.Navigator.of(this.context).pop(core.Object);
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C69 || CT.C69})]), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), BuildContextToStatelessWidget()), barrierDismissible: true});
    }
    delete(user) {
      return async.async(dart.void, (function* $delete() {
        this.setState(dart.fn(() => {
          this.isLoading = true;
        }, VoidToNull()));
        let success = (yield provider.Provider.of(Data.Data, this.context).deleteUser(user));
        if (dart.test(success)) {
          provider.Provider.of(Data.Data, this.context).fetchUsers();
          scaffold.Scaffold.of(this.context).showSnackBar(this.successSnackBar);
        } else {
          scaffold.Scaffold.of(this.context).showSnackBar(this.failSnackBar);
        }
        this.setState(dart.fn(() => {
          this.isLoading = false;
        }, VoidToNull()));
      }).bind(this));
    }
    save(user) {
      return async.async(dart.void, (function* save() {
        this.setState(dart.fn(() => {
          this.isLoading = true;
        }, VoidToNull()));
        let success = (yield provider.Provider.of(Data.Data, this.context).addUser(user));
        if (dart.test(success)) {
          scaffold.Scaffold.of(this.context).showSnackBar(this.successSnackBar);
        } else {
          scaffold.Scaffold.of(this.context).showSnackBar(this.failSnackBar);
        }
        this.setState(dart.fn(() => {
          this.isLoading = false;
        }, VoidToNull()));
      }).bind(this));
    }
    viewWithUsers(users) {
      return new scroll_view.ListView.builder({itemCount: users[$length], itemBuilder: dart.fn((context, index) => {
          let user = users[$elementAt](index);
          return new basic.Column.new({children: JSArrayOfWidget().of([new list_tile.ListTile.new({title: new text.Text.new(dart.str(user.username), {$creationLocationd_0dea112b090073317d4: C78 || CT.C78}), subtitle: new text.Text.new(dart.str(user.email), {$creationLocationd_0dea112b090073317d4: C81 || CT.C81}), onLongPress: dart.fn(() => {
                  this.confirmDelete(user);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), new divider.Divider.new({height: 2.0, $creationLocationd_0dea112b090073317d4: C89 || CT.C89})]), $creationLocationd_0dea112b090073317d4: C92 || CT.C92});
        }, BuildContextAndintToColumn()), $creationLocationd_0dea112b090073317d4: C95 || CT.C95});
    }
    build(context) {
      return new (ConsumerOfData()).new({builder: dart.fn((context, data, child) => new modal_progress_hud.ModalProgressHUD.new({inAsyncCall: this.isLoading, child: new scaffold.Scaffold.new({floatingActionButton: new floating_action_button.FloatingActionButton.new({backgroundColor: colors.Colors.lightBlueAccent, child: new icon.Icon.new(icons.Icons.add, {$creationLocationd_0dea112b090073317d4: C99 || CT.C99}), onPressed: dart.fn(() => {
                bottom_sheet.showModalBottomSheet(dart.dynamic, {context: context, builder: dart.fn(context => new add_user_screen.AddUser.new({onSave: dart.fn(user => {
                      this.save(User.User._check(user));
                      navigator.Navigator.pop(core.Object, context);
                    }, dynamicToNull()), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), BuildContextToAddUser())});
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C105 || CT.C105}), body: new container.Container.new({child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(8.0), child: this.viewWithUsers(data.allUsers), $creationLocationd_0dea112b090073317d4: C110 || CT.C110}), $creationLocationd_0dea112b090073317d4: C114 || CT.C114}), $creationLocationd_0dea112b090073317d4: C117 || CT.C117}), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), BuildContextAndDataAndWidgetToModalProgressHUD()), $creationLocationd_0dea112b090073317d4: C125 || CT.C125});
    }
  };
  (users_list._UsersListState.new = function() {
    this.isLoading = null;
    this.successSnackBar = new snack_bar.SnackBar.new({content: new text.Text.new("Saved successfully", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), duration: new core.Duration.new({seconds: 2}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    this.failSnackBar = new snack_bar.SnackBar.new({content: new text.Text.new("Not saved.", {$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), duration: new core.Duration.new({seconds: 2}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
    users_list._UsersListState.__proto__.new.call(this);
    ;
  }).prototype = users_list._UsersListState.prototype;
  dart.addTypeTests(users_list._UsersListState);
  dart.setMethodSignature(users_list._UsersListState, () => ({
    __proto__: dart.getMethods(users_list._UsersListState.__proto__),
    confirmDelete: dart.fnType(dart.void, [User.User]),
    delete: dart.fnType(dart.void, [User.User]),
    save: dart.fnType(dart.void, [User.User]),
    viewWithUsers: dart.fnType(framework.Widget, [core.List$(User.User)]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(users_list._UsersListState, "package:Feltes/backoffice/screens/users_list.dart");
  dart.setFieldSignature(users_list._UsersListState, () => ({
    __proto__: dart.getFields(users_list._UsersListState.__proto__),
    isLoading: dart.fieldType(core.bool),
    successSnackBar: dart.finalFieldType(snack_bar.SnackBar),
    failSnackBar: dart.finalFieldType(snack_bar.SnackBar)
  }));
  dart.trackLibraries("packages/Feltes/backoffice/screens/users_list", {
    "package:Feltes/backoffice/screens/users_list.dart": users_list
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["users_list.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAamC;IAAiB;;;;;;EACpD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgBqB,MAAX;AAEW,MAAjB,iBAAY;IACd;kBAEwB;AA6DrB,MA5DD,0CACW,uBACA,QAAC,KAAiC,YAArB,AAAY,eAAT,wBAAoC,+BACvD,6CACS,kBACL,uFAEO,+DACA,kCACa,sBAChB,kBAAK,kOAIM,sBACf,uCACS,kBAAK,+EACM,8BACP;AACG,gBAAZ,YAAO,IAAI;AACgB,gBAAjB,AAAY,uBAAT;yFAGjB,uCACS,kBAAK,+EACD;AACkB,gBAAjB,AAAY,uBAAT;qJAKrB,mCACS,kBACL,uFAEO,+DACA,kCACa,sBAChB,kBAAK,kOAIM,sBACf,uCACS,kBAAK,+EACM,8BACP;AACkB,gBAAjB,AAAY,uBAAT;yFAGjB,uCACS,kBAAK,+EACD;AACG,gBAAZ,YAAO,IAAI;AACgB,gBAAjB,AAAY,uBAAT;0MAKP;IAExB;WAEiB;AAAN;AAGP,QAFF,cAAS;AACS,UAAhB,iBAAY;;AAGV,uBAAU,MAAe,AAAkB,gCAAT,yBAAoB,IAAI;AAE9D,sBAAI,OAAO;AAC8B,UAA9B,AAAkB,gCAAT;AACgC,UAAzC,AAAY,qBAAT,2BAAsB;;AAEa,UAAtC,AAAY,qBAAT,2BAAsB;;AAKlC,QAFF,cAAS;AACU,UAAjB,iBAAY;;MAEhB;;SAEe;AAAN;AAGL,QAFF,cAAS;AACS,UAAhB,iBAAY;;AAGV,uBAAU,MAAe,AAAkB,gCAAT,sBAAiB,IAAI;AAE3D,sBAAI,OAAO;AACyC,UAAzC,AAAY,qBAAT,2BAAsB;;AAEa,UAAtC,AAAY,qBAAT,2BAAsB;;AAKlC,QAFF,cAAS;AACU,UAAjB,iBAAY;;MAEhB;;kBAEgC;AAC9B,YAAgB,8CACH,AAAM,KAAD,wBACH,SAAc,SAAa;AACjC,qBAAO,AAAM,KAAD,aAAW,KAAK;AACjC,gBAAO,iCACa,sBAChB,mCACS,kBAAuB,SAAf,AAAK,IAAD,gFACT,kBAAoB,SAAZ,AAAK,IAAD,gFACT;AACQ,kBAAnB,mBAAc,IAAI;2FAGtB,iCACU;;IAMpB;UAG0B;AACxB,YAAO,sCACI,SAAC,SAAS,MAAM,UAChB,0DACQ,uBACN,iDACiB,sEACI,sCACjB,kBAAW,sFACP;AASR,gBARD,0DACW,OAAO,WACP,QAAC,WAAY,yCACZ,QAAC;AACG,sBAAV,2BAAK,IAAI;AACa,sBAAZ,qCAAI,OAAO;;iGAMzB,oCACG,gCACe,+BAAI,aACjB,mBAAc,AAAK,IAAD;IAOvC;;;IA9KK;IAEC,uBAAkB,qCACb,kBAAK,wFACJ,gCAAkB;IAExB,oBAAe,qCACV,kBAAK,gFACJ,gCAAkB;;;EAuKhC","file":"users_list.ddc.js"}');
  // Exports:
  return {
    backoffice__screens__users_list: users_list
  };
});

//# sourceMappingURL=users_list.ddc.js.map

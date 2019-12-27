define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/provider/provider', 'packages/Feltes/models/Data', 'packages/modal_progress_hud/modal_progress_hud', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__provider__provider, packages__Feltes__models__Data, packages__modal_progress_hud__modal_progress_hud, packages__flutter__src__painting___network_image_web, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const snack_bar = packages__flutter__material.src__material__snack_bar;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const material_button = packages__flutter__material.src__material__material_button;
  const colors = packages__flutter__material.src__material__colors;
  const provider = packages__provider__provider.src__provider;
  const consumer = packages__provider__provider.src__consumer;
  const Data = packages__Feltes__models__Data.models__Data;
  const modal_progress_hud = packages__modal_progress_hud__modal_progress_hud.modal_progress_hud;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const info = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ConsumerOfData = () => (ConsumerOfData = dart.constFn(consumer.Consumer$(Data.Data)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndDataAndWidgetToContainer = () => (BuildContextAndDataAndWidgetToContainer = dart.constFn(dart.fnType(container.Container, [framework.BuildContext, Data.Data, framework.Widget])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 27,
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
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 5,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 5,
        [_Location_line]: 28,
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
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 31,
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
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "content",
        [_Location_column]: 5,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 5,
        [_Location_line]: 32,
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
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 27,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autocorrect",
        [_Location_column]: 27,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 27,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableSuggestions",
        [_Location_column]: 27,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 27,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 27,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autocorrect",
        [_Location_column]: 27,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 27,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableSuggestions",
        [_Location_column]: 27,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 27,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 27,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autocorrect",
        [_Location_column]: 27,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 27,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableSuggestions",
        [_Location_column]: 27,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 27,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 117,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 27,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autocorrect",
        [_Location_column]: 27,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 27,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableSuggestions",
        [_Location_column]: 27,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 27,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 27,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autocorrect",
        [_Location_column]: 27,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 27,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableSuggestions",
        [_Location_column]: 27,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 27,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 27,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autocorrect",
        [_Location_column]: 27,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 27,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "minLines",
        [_Location_column]: 27,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 27,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 27,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52, C53 || CT.C53, C54 || CT.C54, C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 27,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autocorrect",
        [_Location_column]: 27,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 27,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableSuggestions",
        [_Location_column]: 27,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 27,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60, C61 || CT.C61, C62 || CT.C62, C63 || CT.C63], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 27,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autocorrect",
        [_Location_column]: 27,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 27,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableSuggestions",
        [_Location_column]: 27,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 27,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67, C68 || CT.C68, C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 163,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 27,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autocorrect",
        [_Location_column]: 27,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 27,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enableSuggestions",
        [_Location_column]: 27,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 27,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74, C75 || CT.C75, C76 || CT.C76, C77 || CT.C77], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 172,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80, C81 || CT.C81], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 27,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 27,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 181,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 98,
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
        [_Location_column]: 28,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 21,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92, C93 || CT.C93], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 15,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "inAsyncCall",
        [_Location_column]: 13,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C104 || CT.C104,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 90,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C111 || CT.C111,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/screens/info.dart"
      });
    }
  });
  info.Info = class Info extends framework.StatefulWidget {
    createState() {
      return new info._InfoState.new();
    }
  };
  (info.Info.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    info.Info.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = info.Info.prototype;
  dart.addTypeTests(info.Info);
  dart.setMethodSignature(info.Info, () => ({
    __proto__: dart.getMethods(info.Info.__proto__),
    createState: dart.fnType(info._InfoState, [])
  }));
  dart.setLibraryUri(info.Info, "package:Feltes/backoffice/screens/info.dart");
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
  let C17;
  let C18;
  let C19;
  let C20;
  let C15;
  let C14;
  let C23;
  let C24;
  let C25;
  let C26;
  let C27;
  let C22;
  let C21;
  let C30;
  let C31;
  let C32;
  let C33;
  let C34;
  let C29;
  let C28;
  let C37;
  let C38;
  let C39;
  let C40;
  let C41;
  let C36;
  let C35;
  let C44;
  let C45;
  let C46;
  let C47;
  let C48;
  let C43;
  let C42;
  let C51;
  let C52;
  let C53;
  let C54;
  let C55;
  let C56;
  let C50;
  let C49;
  let C59;
  let C60;
  let C61;
  let C62;
  let C63;
  let C58;
  let C57;
  let C66;
  let C67;
  let C68;
  let C69;
  let C70;
  let C65;
  let C64;
  let C73;
  let C74;
  let C75;
  let C76;
  let C77;
  let C72;
  let C71;
  let C80;
  let C81;
  let C79;
  let C78;
  let C84;
  let C85;
  let C86;
  let C83;
  let C82;
  let C89;
  let C88;
  let C87;
  let C92;
  let C93;
  let C91;
  let C90;
  let C96;
  let C95;
  let C94;
  let C99;
  let C98;
  let C97;
  let C102;
  let C101;
  let C100;
  let C105;
  let C106;
  let C104;
  let C103;
  let C109;
  let C108;
  let C107;
  let C112;
  let C111;
  let C110;
  info._InfoState = class _InfoState extends framework.State$(info.Info) {
    initState() {
      super.initState();
      this.isLoading = true;
      this.getInfo();
    }
    getInfo() {
      return async.async(dart.void, (function* getInfo() {
        let info = (yield provider.Provider.of(Data.Data, this.context, {listen: false}).getInfo());
        this.firstnameController.text = info.first;
        this.lastnameController.text = info.last;
        this.titleController.text = info.title;
        this.emailController.text = info.email;
        this.locationController.text = info.location;
        this.aboutController.text = info.about;
        this.twitterController.text = info.twitter;
        this.linkedinController.text = info.linkedIn;
        this.githubController.text = info.github;
        this.setState(dart.fn(() => {
          this.isLoading = false;
        }, VoidToNull()));
      }).bind(this));
    }
    save() {
      return async.async(dart.void, (function* save() {
        let success = (yield provider.Provider.of(Data.Data, this.context, {listen: false}).saveInfo({firstname: this.firstnameController.text, lastname: this.lastnameController.text, title: this.titleController.text, email: this.emailController.text, location: this.locationController.text, about: this.aboutController.text, twitter: this.twitterController.text, linkedin: this.linkedinController.text, github: this.githubController.text}));
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
    build(context) {
      return new (ConsumerOfData()).new({builder: dart.fn((context, data, child) => new container.Container.new({child: new modal_progress_hud.ModalProgressHUD.new({inAsyncCall: this.isLoading, child: new scaffold.Scaffold.new({body: new single_child_scroll_view.SingleChildScrollView.new({child: new container.Container.new({child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(8.0), child: new basic.Column.new({children: JSArrayOfWidget().of([new text_field.TextField.new({controller: this.firstnameController, autocorrect: true, textCapitalization: text_input.TextCapitalization.words, enableSuggestions: true, decoration: new input_decorator.InputDecoration.new({labelText: "First Name"}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new text_field.TextField.new({controller: this.lastnameController, autocorrect: true, textCapitalization: text_input.TextCapitalization.words, enableSuggestions: true, decoration: new input_decorator.InputDecoration.new({labelText: "Last Name"}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), new text_field.TextField.new({controller: this.titleController, autocorrect: true, textCapitalization: text_input.TextCapitalization.words, enableSuggestions: true, decoration: new input_decorator.InputDecoration.new({labelText: "Professional Title"}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), new text_field.TextField.new({controller: this.emailController, autocorrect: false, textCapitalization: text_input.TextCapitalization.none, enableSuggestions: true, decoration: new input_decorator.InputDecoration.new({labelText: "Email"}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), new text_field.TextField.new({controller: this.locationController, autocorrect: true, textCapitalization: text_input.TextCapitalization.words, enableSuggestions: true, decoration: new input_decorator.InputDecoration.new({labelText: "Location"}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), new text_field.TextField.new({controller: this.aboutController, autocorrect: true, textCapitalization: text_input.TextCapitalization.sentences, minLines: 1, maxLines: 10, decoration: new input_decorator.InputDecoration.new({labelText: "About"}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), new text_field.TextField.new({controller: this.twitterController, autocorrect: true, textCapitalization: text_input.TextCapitalization.words, enableSuggestions: true, decoration: new input_decorator.InputDecoration.new({labelText: "Twitter URL"}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), new text_field.TextField.new({controller: this.linkedinController, autocorrect: true, textCapitalization: text_input.TextCapitalization.words, enableSuggestions: true, decoration: new input_decorator.InputDecoration.new({labelText: "LinkedIn URL"}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), new text_field.TextField.new({controller: this.githubController, autocorrect: true, textCapitalization: text_input.TextCapitalization.words, enableSuggestions: true, decoration: new input_decorator.InputDecoration.new({labelText: "Github URL"}), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), new material_button.MaterialButton.new({color: new ui.Color.new(4281089616), child: new text.Text.new("Save", {style: new text_style.TextStyle.new({color: colors.Colors.white}), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), onPressed: dart.fn(() => {
                            this.save();
                          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C82 || CT.C82})]), $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), $creationLocationd_0dea112b090073317d4: C90 || CT.C90}), $creationLocationd_0dea112b090073317d4: C94 || CT.C94}), $creationLocationd_0dea112b090073317d4: C97 || CT.C97}), $creationLocationd_0dea112b090073317d4: C100 || CT.C100}), $creationLocationd_0dea112b090073317d4: C103 || CT.C103}), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), BuildContextAndDataAndWidgetToContainer()), $creationLocationd_0dea112b090073317d4: C110 || CT.C110});
    }
  };
  (info._InfoState.new = function() {
    this.firstnameController = new editable_text.TextEditingController.new();
    this.lastnameController = new editable_text.TextEditingController.new();
    this.titleController = new editable_text.TextEditingController.new();
    this.emailController = new editable_text.TextEditingController.new();
    this.locationController = new editable_text.TextEditingController.new();
    this.aboutController = new editable_text.TextEditingController.new();
    this.twitterController = new editable_text.TextEditingController.new();
    this.linkedinController = new editable_text.TextEditingController.new();
    this.githubController = new editable_text.TextEditingController.new();
    this.isLoading = null;
    this.successSnackBar = new snack_bar.SnackBar.new({content: new text.Text.new("Saved successfully", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), duration: new core.Duration.new({seconds: 2}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    this.failSnackBar = new snack_bar.SnackBar.new({content: new text.Text.new("Not saved.", {$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), duration: new core.Duration.new({seconds: 2}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
    info._InfoState.__proto__.new.call(this);
    ;
  }).prototype = info._InfoState.prototype;
  dart.addTypeTests(info._InfoState);
  dart.setMethodSignature(info._InfoState, () => ({
    __proto__: dart.getMethods(info._InfoState.__proto__),
    getInfo: dart.fnType(dart.void, []),
    save: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(info._InfoState, "package:Feltes/backoffice/screens/info.dart");
  dart.setFieldSignature(info._InfoState, () => ({
    __proto__: dart.getFields(info._InfoState.__proto__),
    firstnameController: dart.finalFieldType(editable_text.TextEditingController),
    lastnameController: dart.finalFieldType(editable_text.TextEditingController),
    titleController: dart.finalFieldType(editable_text.TextEditingController),
    emailController: dart.finalFieldType(editable_text.TextEditingController),
    locationController: dart.finalFieldType(editable_text.TextEditingController),
    aboutController: dart.finalFieldType(editable_text.TextEditingController),
    twitterController: dart.finalFieldType(editable_text.TextEditingController),
    linkedinController: dart.finalFieldType(editable_text.TextEditingController),
    githubController: dart.finalFieldType(editable_text.TextEditingController),
    isLoading: dart.fieldType(core.bool),
    successSnackBar: dart.finalFieldType(snack_bar.SnackBar),
    failSnackBar: dart.finalFieldType(snack_bar.SnackBar)
  }));
  dart.trackLibraries("packages/Feltes/backoffice/screens/info", {
    "package:Feltes/backoffice/screens/info.dart": info
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["info.dart"],"names":[],"mappings":"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","file":"info.ddc.js"}');
  // Exports:
  return {
    backoffice__screens__info: info
  };
});

//# sourceMappingURL=info.ddc.js.map

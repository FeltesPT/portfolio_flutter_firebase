define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const colors = packages__flutter__material.src__material__colors;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const colors$ = packages__flutter__src__painting___network_image_web.src__painting__colors;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const modal_barrier = packages__flutter__src__widgets__actions.src__widgets__modal_barrier;
  const modal_progress_hud = Object.create(dart.library);
  const $add = dartx.add;
  const $plus = dartx['+'];
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294638330.0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294309365.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4293848814.0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292927712.0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4292269782.0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4290624957.0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4288585374.0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4285887861.0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284572001.0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282532418.0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4281348144.0
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280361249.0
      });
    },
    get C1() {
      return C1 = dart.constMap(core.int, ui.Color, [50, C2 || CT.C2, 100, C3 || CT.C3, 200, C4 || CT.C4, 300, C5 || CT.C5, 350, C6 || CT.C6, 400, C7 || CT.C7, 500, C8 || CT.C8, 600, C9 || CT.C9, 700, C10 || CT.C10, 800, C11 || CT.C11, 850, C12 || CT.C12, 900, C13 || CT.C13]);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [Color_value]: 4288585374.0,
        [ColorSwatch__swatch]: C1 || CT.C1
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: progress_indicator.CircularProgressIndicator.prototype,
        [Widget_key]: null,
        [ProgressIndicator_semanticsValue]: null,
        [ProgressIndicator_semanticsLabel]: null,
        [ProgressIndicator_valueColor]: null,
        [ProgressIndicator_backgroundColor]: null,
        [ProgressIndicator_value]: null,
        [CircularProgressIndicator_strokeWidth]: 4
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 42,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/modal_progress_hud/modal_progress_hud.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "left",
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "top",
        [_Location_column]: 11,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/modal_progress_hud/modal_progress_hud.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "dismissible",
        [_Location_column]: 35,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 61,
        [_Location_line]: 64,
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
        [_Location_column]: 22,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/modal_progress_hud/modal_progress_hud.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 11,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/modal_progress_hud/modal_progress_hud.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 72,
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
        [_Location_column]: 16,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/modal_progress_hud/modal_progress_hud.dart"
      });
    }
  });
  const Color_value = dart.privateName(ui, "Color.value");
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C1;
  const ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  let C0;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const ProgressIndicator_semanticsValue = dart.privateName(progress_indicator, "ProgressIndicator.semanticsValue");
  const ProgressIndicator_semanticsLabel = dart.privateName(progress_indicator, "ProgressIndicator.semanticsLabel");
  const ProgressIndicator_valueColor = dart.privateName(progress_indicator, "ProgressIndicator.valueColor");
  const ProgressIndicator_backgroundColor = dart.privateName(progress_indicator, "ProgressIndicator.backgroundColor");
  const ProgressIndicator_value = dart.privateName(progress_indicator, "ProgressIndicator.value");
  const CircularProgressIndicator_strokeWidth = dart.privateName(progress_indicator, "CircularProgressIndicator.strokeWidth");
  let C14;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C17;
  let C16;
  let C15;
  let C20;
  let C21;
  let C22;
  let C19;
  let C18;
  let C25;
  let C26;
  let C24;
  let C23;
  let C29;
  let C30;
  let C28;
  let C27;
  let C33;
  let C32;
  let C31;
  const inAsyncCall$ = dart.privateName(modal_progress_hud, "ModalProgressHUD.inAsyncCall");
  const opacity$ = dart.privateName(modal_progress_hud, "ModalProgressHUD.opacity");
  const color$ = dart.privateName(modal_progress_hud, "ModalProgressHUD.color");
  const progressIndicator$ = dart.privateName(modal_progress_hud, "ModalProgressHUD.progressIndicator");
  const offset$ = dart.privateName(modal_progress_hud, "ModalProgressHUD.offset");
  const dismissible$ = dart.privateName(modal_progress_hud, "ModalProgressHUD.dismissible");
  const child$ = dart.privateName(modal_progress_hud, "ModalProgressHUD.child");
  modal_progress_hud.ModalProgressHUD = class ModalProgressHUD extends framework.StatelessWidget {
    get inAsyncCall() {
      return this[inAsyncCall$];
    }
    set inAsyncCall(value) {
      super.inAsyncCall = value;
    }
    get opacity() {
      return this[opacity$];
    }
    set opacity(value) {
      super.opacity = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get progressIndicator() {
      return this[progressIndicator$];
    }
    set progressIndicator(value) {
      super.progressIndicator = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get dismissible() {
      return this[dismissible$];
    }
    set dismissible(value) {
      super.dismissible = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      let widgetList = JSArrayOfWidget().of([]);
      widgetList[$add](this.child);
      if (dart.test(this.inAsyncCall)) {
        let layOutProgressIndicator = null;
        if (this.offset == null)
          layOutProgressIndicator = new basic.Center.new({child: this.progressIndicator, $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
        else {
          layOutProgressIndicator = new basic.Positioned.new({child: this.progressIndicator, left: this.offset.dx, top: this.offset.dy, $creationLocationd_0dea112b090073317d4: C18 || CT.C18});
        }
        let modal = JSArrayOfWidget().of([new basic.Opacity.new({child: new modal_barrier.ModalBarrier.new({dismissible: this.dismissible, color: this.color, $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), opacity: this.opacity, $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), layOutProgressIndicator]);
        widgetList = widgetList[$plus](modal);
      }
      return new basic.Stack.new({children: widgetList, $creationLocationd_0dea112b090073317d4: C31 || CT.C31});
    }
  };
  (modal_progress_hud.ModalProgressHUD.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let inAsyncCall = opts && 'inAsyncCall' in opts ? opts.inAsyncCall : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : 0.3;
    let color = opts && 'color' in opts ? opts.color : C0 || CT.C0;
    let progressIndicator = opts && 'progressIndicator' in opts ? opts.progressIndicator : C14 || CT.C14;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let dismissible = opts && 'dismissible' in opts ? opts.dismissible : false;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[inAsyncCall$] = inAsyncCall;
    this[opacity$] = opacity;
    this[color$] = color;
    this[progressIndicator$] = progressIndicator;
    this[offset$] = offset;
    this[dismissible$] = dismissible;
    this[child$] = child;
    if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/modal_progress_hud/modal_progress_hud.dart", 43, 16, "child != null");
    if (!(inAsyncCall != null)) dart.assertFailed(null, "org-dartlang-app:///packages/modal_progress_hud/modal_progress_hud.dart", 44, 16, "inAsyncCall != null");
    modal_progress_hud.ModalProgressHUD.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = modal_progress_hud.ModalProgressHUD.prototype;
  dart.addTypeTests(modal_progress_hud.ModalProgressHUD);
  dart.setMethodSignature(modal_progress_hud.ModalProgressHUD, () => ({
    __proto__: dart.getMethods(modal_progress_hud.ModalProgressHUD.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(modal_progress_hud.ModalProgressHUD, "package:modal_progress_hud/modal_progress_hud.dart");
  dart.setFieldSignature(modal_progress_hud.ModalProgressHUD, () => ({
    __proto__: dart.getFields(modal_progress_hud.ModalProgressHUD.__proto__),
    inAsyncCall: dart.finalFieldType(core.bool),
    opacity: dart.finalFieldType(core.double),
    color: dart.finalFieldType(ui.Color),
    progressIndicator: dart.finalFieldType(framework.Widget),
    offset: dart.finalFieldType(ui.Offset),
    dismissible: dart.finalFieldType(core.bool),
    child: dart.finalFieldType(framework.Widget)
  }));
  dart.trackLibraries("packages/modal_progress_hud/modal_progress_hud", {
    "package:modal_progress_hud/modal_progress_hud.dart": modal_progress_hud
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["modal_progress_hud.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyBa;;;;;;IACE;;;;;;IACD;;;;;;IACC;;;;;;IACA;;;;;;IACF;;;;;;IACE;;;;;;UAgBa;AACX,uBAAa;AACL,MAArB,AAAW,UAAD,OAAK;AACf,oBAAI;AACK;AACP,YAAI,AAAO,eAAG;AAC8C,UAA1D,0BAA0B,6BAAc;;AAMvC,UAJD,0BAA0B,iCACjB,8BACD,AAAO,qBACR,AAAO;;AAGV,oBAAQ,sBACR,8BACS,iDAA0B,yBAAoB,8EAChD,uEAEX,uBAAuB;AAEN,QAAnB,aAAA,AAAW,UAAD,QAAI,KAAK;;AAErB,YAAW,gCACC,UAAU;IAExB;;;QAvCM;QACW;QACV;QACA;QACA;QACA;QACA;QACU;;IANA;IACV;IACA;IACA;IACA;IACA;IACU;UACJ,AAAM,KAAD,IAAI;UACT,AAAY,WAAD,IAAI;AACtB,uEAAW,GAAG;;EAAC","file":"modal_progress_hud.ddc.js"}');
  // Exports:
  return {
    modal_progress_hud: modal_progress_hud
  };
});

//# sourceMappingURL=modal_progress_hud.ddc.js.map

define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const sectionTitle = Object.create(dart.library);
  const $toUpperCase = dartx.toUpperCase;
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/components/sectionTitle.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/screens/components/sectionTitle.dart"
      });
    }
  });
  const Color_value = dart.privateName(ui, "Color.value");
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C3;
  let C4;
  let C2;
  let C1;
  let C7;
  let C8;
  let C6;
  let C5;
  const title$ = dart.privateName(sectionTitle, "SectionTitle.title");
  const color$ = dart.privateName(sectionTitle, "SectionTitle.color");
  sectionTitle.SectionTitle = class SectionTitle extends framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    build(context) {
      return new container.Container.new({margin: new edge_insets.EdgeInsets.only({bottom: 8.0}), child: new text.Text.new(this.title[$toUpperCase](), {style: new text_style.TextStyle.new({fontSize: 20.0, fontWeight: ui.FontWeight.w500, color: this.color}), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
    }
  };
  (sectionTitle.SectionTitle.new = function(opts) {
    let title = opts && 'title' in opts ? opts.title : null;
    let color = opts && 'color' in opts ? opts.color : C0 || CT.C0;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    this[color$] = color;
    sectionTitle.SectionTitle.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sectionTitle.SectionTitle.prototype;
  dart.addTypeTests(sectionTitle.SectionTitle);
  dart.setMethodSignature(sectionTitle.SectionTitle, () => ({
    __proto__: dart.getMethods(sectionTitle.SectionTitle.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(sectionTitle.SectionTitle, "package:Feltes/screens/components/sectionTitle.dart");
  dart.setFieldSignature(sectionTitle.SectionTitle, () => ({
    __proto__: dart.getFields(sectionTitle.SectionTitle.__proto__),
    title: dart.finalFieldType(core.String),
    color: dart.finalFieldType(ui.Color)
  }));
  dart.trackLibraries("packages/Feltes/screens/components/sectionTitle", {
    "package:Feltes/screens/components/sectionTitle.dart": sectionTitle
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sectionTitle.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKe;;;;;;IACD;;;;;;UAGc;AACxB,YAAO,sCACc,yCAAa,cACzB,kBACL,AAAM,oCACC,wCACK,kBACa,2BAChB;IAIf;;;QAlBmC;QAAY;;IAAZ;IAAY;AAAzC;;EAA+D","file":"sectionTitle.ddc.js"}');
  // Exports:
  return {
    screens__components__sectionTitle: sectionTitle
  };
});

//# sourceMappingURL=sectionTitle.ddc.js.map

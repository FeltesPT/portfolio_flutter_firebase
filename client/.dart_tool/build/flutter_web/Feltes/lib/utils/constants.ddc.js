define(['dart_sdk', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__painting___network_image_web, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const colors = packages__flutter__src__painting___network_image_web.src__painting__colors;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const colors$ = packages__flutter__material.src__material__colors;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const input_border = packages__flutter__material.src__material__input_border;
  const constants = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: ui.FontWeight.prototype,
        [FontWeight_index]: 6
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4286634239.0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282434815.0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278235391.0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278227434.0
      });
    },
    get C3() {
      return C3 = dart.constMap(core.int, ui.Color, [100, C4 || CT.C4, 200, C5 || CT.C5, 400, C6 || CT.C6, 700, C7 || CT.C7]);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: colors$.MaterialAccentColor.prototype,
        [Color_value]: 4282434815.0,
        [ColorSwatch__swatch]: C3 || CT.C3
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: C1 || CT.C1,
        [TextStyle_fontSize]: 18,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C2 || CT.C2,
        [TextStyle_inherit]: true
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name$]: "BorderStyle.none",
        index: 0
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080.0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C12 || CT.C12,
        [BorderSide_width]: 0,
        [BorderSide_color]: C13 || CT.C13
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: borders.BorderStyle.prototype,
        [_name$]: "BorderStyle.solid",
        index: 1
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C15 || CT.C15,
        [BorderSide_width]: 2,
        [BorderSide_color]: C2 || CT.C2
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: box_border.Border.prototype,
        [Border_left]: C11 || CT.C11,
        [Border_bottom]: C11 || CT.C11,
        [Border_right]: C11 || CT.C11,
        [Border_top]: C14 || CT.C14
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: box_decoration.BoxDecoration.prototype,
        [BoxDecoration_shape]: C9 || CT.C9,
        [BoxDecoration_backgroundBlendMode]: null,
        [BoxDecoration_gradient]: null,
        [BoxDecoration_boxShadow]: null,
        [BoxDecoration_borderRadius]: null,
        [BoxDecoration_border]: C10 || CT.C10,
        [BoxDecoration_image]: null,
        [BoxDecoration_color]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C15 || CT.C15,
        [BorderSide_width]: 1,
        [BorderSide_color]: C13 || CT.C13
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ui.Radius.prototype,
        [Radius_y]: 32,
        [Radius_x]: 32
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: border_radius.BorderRadius.prototype,
        [BorderRadius_bottomRight]: C20 || CT.C20,
        [BorderRadius_bottomLeft]: C20 || CT.C20,
        [BorderRadius_topRight]: C20 || CT.C20,
        [BorderRadius_topLeft]: C20 || CT.C20
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: input_border.OutlineInputBorder.prototype,
        [InputBorder_borderSide]: C18 || CT.C18,
        [OutlineInputBorder_borderRadius]: C19 || CT.C19,
        [OutlineInputBorder_gapPadding]: 4
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4286755327.0
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4282682111.0
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280908287.0
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4280902399.0
      });
    },
    get C24() {
      return C24 = dart.constMap(core.int, ui.Color, [100, C25 || CT.C25, 200, C26 || CT.C26, 400, C27 || CT.C27, 700, C28 || CT.C28]);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: colors$.MaterialAccentColor.prototype,
        [Color_value]: 4282682111.0,
        [ColorSwatch__swatch]: C24 || CT.C24
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C15 || CT.C15,
        [BorderSide_width]: 1,
        [BorderSide_color]: C23 || CT.C23
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: input_border.OutlineInputBorder.prototype,
        [InputBorder_borderSide]: C22 || CT.C22,
        [OutlineInputBorder_borderRadius]: C19 || CT.C19,
        [OutlineInputBorder_gapPadding]: 4
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: borders.BorderSide.prototype,
        [BorderSide_style]: C15 || CT.C15,
        [BorderSide_width]: 2,
        [BorderSide_color]: C23 || CT.C23
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: input_border.OutlineInputBorder.prototype,
        [InputBorder_borderSide]: C30 || CT.C30,
        [OutlineInputBorder_borderRadius]: C19 || CT.C19,
        [OutlineInputBorder_gapPadding]: 4
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4294967295.0
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 10,
        [EdgeInsets_right]: 20,
        [EdgeInsets_top]: 10,
        [EdgeInsets_left]: 20
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        [InputDecoration_alignLabelWithHint]: null,
        [InputDecoration_semanticCounterText]: null,
        [InputDecoration_enabled]: true,
        [InputDecoration_border]: C17 || CT.C17,
        [InputDecoration_enabledBorder]: C21 || CT.C21,
        [InputDecoration_disabledBorder]: null,
        [InputDecoration_focusedErrorBorder]: null,
        [InputDecoration_focusedBorder]: C29 || CT.C29,
        [InputDecoration_errorBorder]: null,
        [InputDecoration_hoverColor]: null,
        [InputDecoration_focusColor]: null,
        [InputDecoration_fillColor]: C31 || CT.C31,
        [InputDecoration_filled]: true,
        [InputDecoration_counterStyle]: null,
        [InputDecoration_counter]: null,
        [InputDecoration_counterText]: null,
        [InputDecoration_suffixStyle]: null,
        [InputDecoration_suffixText]: null,
        [InputDecoration_suffix]: null,
        [InputDecoration_suffixIcon]: null,
        [InputDecoration_prefixStyle]: null,
        [InputDecoration_prefixText]: null,
        [InputDecoration_prefix]: null,
        [InputDecoration_prefixIcon]: null,
        [InputDecoration_isCollapsed]: false,
        [InputDecoration_contentPadding]: C32 || CT.C32,
        [InputDecoration_isDense]: null,
        [InputDecoration_hasFloatingPlaceholder]: true,
        [InputDecoration_errorMaxLines]: null,
        [InputDecoration_errorStyle]: null,
        [InputDecoration_errorText]: null,
        [InputDecoration_hintMaxLines]: null,
        [InputDecoration_hintStyle]: null,
        [InputDecoration_hintText]: "Enter a value",
        [InputDecoration_helperMaxLines]: null,
        [InputDecoration_helperStyle]: null,
        [InputDecoration_helperText]: null,
        [InputDecoration_labelStyle]: null,
        [InputDecoration_labelText]: null,
        [InputDecoration_icon]: null
      });
    }
  });
  const TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  const TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  const TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  const TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  const TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  const TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  const TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  const TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  const TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  const TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  const TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  const TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  const TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  const TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  const TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  const FontWeight_index = dart.privateName(ui, "FontWeight.index");
  let C1;
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  const Color_value = dart.privateName(ui, "Color.value");
  let C4;
  let C5;
  let C6;
  let C7;
  let C3;
  const ColorSwatch__swatch = dart.privateName(colors, "ColorSwatch._swatch");
  let C2;
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C0;
  const _name = dart.privateName(box_border, "_name");
  let C9;
  const BoxDecoration_shape = dart.privateName(box_decoration, "BoxDecoration.shape");
  const BoxDecoration_backgroundBlendMode = dart.privateName(box_decoration, "BoxDecoration.backgroundBlendMode");
  const BoxDecoration_gradient = dart.privateName(box_decoration, "BoxDecoration.gradient");
  const BoxDecoration_boxShadow = dart.privateName(box_decoration, "BoxDecoration.boxShadow");
  const BoxDecoration_borderRadius = dart.privateName(box_decoration, "BoxDecoration.borderRadius");
  const _name$ = dart.privateName(borders, "_name");
  let C12;
  const BorderSide_style = dart.privateName(borders, "BorderSide.style");
  const BorderSide_width = dart.privateName(borders, "BorderSide.width");
  let C13;
  const BorderSide_color = dart.privateName(borders, "BorderSide.color");
  let C11;
  const Border_left = dart.privateName(box_border, "Border.left");
  const Border_bottom = dart.privateName(box_border, "Border.bottom");
  const Border_right = dart.privateName(box_border, "Border.right");
  let C15;
  let C14;
  const Border_top = dart.privateName(box_border, "Border.top");
  let C10;
  const BoxDecoration_border = dart.privateName(box_decoration, "BoxDecoration.border");
  const BoxDecoration_image = dart.privateName(box_decoration, "BoxDecoration.image");
  const BoxDecoration_color = dart.privateName(box_decoration, "BoxDecoration.color");
  let C8;
  const InputDecoration_alignLabelWithHint = dart.privateName(input_decorator, "InputDecoration.alignLabelWithHint");
  const InputDecoration_semanticCounterText = dart.privateName(input_decorator, "InputDecoration.semanticCounterText");
  const InputDecoration_enabled = dart.privateName(input_decorator, "InputDecoration.enabled");
  let C18;
  const InputBorder_borderSide = dart.privateName(input_border, "InputBorder.borderSide");
  const Radius_y = dart.privateName(ui, "Radius.y");
  const Radius_x = dart.privateName(ui, "Radius.x");
  let C20;
  const BorderRadius_bottomRight = dart.privateName(border_radius, "BorderRadius.bottomRight");
  const BorderRadius_bottomLeft = dart.privateName(border_radius, "BorderRadius.bottomLeft");
  const BorderRadius_topRight = dart.privateName(border_radius, "BorderRadius.topRight");
  const BorderRadius_topLeft = dart.privateName(border_radius, "BorderRadius.topLeft");
  let C19;
  const OutlineInputBorder_borderRadius = dart.privateName(input_border, "OutlineInputBorder.borderRadius");
  const OutlineInputBorder_gapPadding = dart.privateName(input_border, "OutlineInputBorder.gapPadding");
  let C17;
  const InputDecoration_border = dart.privateName(input_decorator, "InputDecoration.border");
  let C25;
  let C26;
  let C27;
  let C28;
  let C24;
  let C23;
  let C22;
  let C21;
  const InputDecoration_enabledBorder = dart.privateName(input_decorator, "InputDecoration.enabledBorder");
  const InputDecoration_disabledBorder = dart.privateName(input_decorator, "InputDecoration.disabledBorder");
  const InputDecoration_focusedErrorBorder = dart.privateName(input_decorator, "InputDecoration.focusedErrorBorder");
  let C30;
  let C29;
  const InputDecoration_focusedBorder = dart.privateName(input_decorator, "InputDecoration.focusedBorder");
  const InputDecoration_errorBorder = dart.privateName(input_decorator, "InputDecoration.errorBorder");
  const InputDecoration_hoverColor = dart.privateName(input_decorator, "InputDecoration.hoverColor");
  const InputDecoration_focusColor = dart.privateName(input_decorator, "InputDecoration.focusColor");
  let C31;
  const InputDecoration_fillColor = dart.privateName(input_decorator, "InputDecoration.fillColor");
  const InputDecoration_filled = dart.privateName(input_decorator, "InputDecoration.filled");
  const InputDecoration_counterStyle = dart.privateName(input_decorator, "InputDecoration.counterStyle");
  const InputDecoration_counter = dart.privateName(input_decorator, "InputDecoration.counter");
  const InputDecoration_counterText = dart.privateName(input_decorator, "InputDecoration.counterText");
  const InputDecoration_suffixStyle = dart.privateName(input_decorator, "InputDecoration.suffixStyle");
  const InputDecoration_suffixText = dart.privateName(input_decorator, "InputDecoration.suffixText");
  const InputDecoration_suffix = dart.privateName(input_decorator, "InputDecoration.suffix");
  const InputDecoration_suffixIcon = dart.privateName(input_decorator, "InputDecoration.suffixIcon");
  const InputDecoration_prefixStyle = dart.privateName(input_decorator, "InputDecoration.prefixStyle");
  const InputDecoration_prefixText = dart.privateName(input_decorator, "InputDecoration.prefixText");
  const InputDecoration_prefix = dart.privateName(input_decorator, "InputDecoration.prefix");
  const InputDecoration_prefixIcon = dart.privateName(input_decorator, "InputDecoration.prefixIcon");
  const InputDecoration_isCollapsed = dart.privateName(input_decorator, "InputDecoration.isCollapsed");
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C32;
  const InputDecoration_contentPadding = dart.privateName(input_decorator, "InputDecoration.contentPadding");
  const InputDecoration_isDense = dart.privateName(input_decorator, "InputDecoration.isDense");
  const InputDecoration_hasFloatingPlaceholder = dart.privateName(input_decorator, "InputDecoration.hasFloatingPlaceholder");
  const InputDecoration_errorMaxLines = dart.privateName(input_decorator, "InputDecoration.errorMaxLines");
  const InputDecoration_errorStyle = dart.privateName(input_decorator, "InputDecoration.errorStyle");
  const InputDecoration_errorText = dart.privateName(input_decorator, "InputDecoration.errorText");
  const InputDecoration_hintMaxLines = dart.privateName(input_decorator, "InputDecoration.hintMaxLines");
  const InputDecoration_hintStyle = dart.privateName(input_decorator, "InputDecoration.hintStyle");
  const InputDecoration_hintText = dart.privateName(input_decorator, "InputDecoration.hintText");
  const InputDecoration_helperMaxLines = dart.privateName(input_decorator, "InputDecoration.helperMaxLines");
  const InputDecoration_helperStyle = dart.privateName(input_decorator, "InputDecoration.helperStyle");
  const InputDecoration_helperText = dart.privateName(input_decorator, "InputDecoration.helperText");
  const InputDecoration_labelStyle = dart.privateName(input_decorator, "InputDecoration.labelStyle");
  const InputDecoration_labelText = dart.privateName(input_decorator, "InputDecoration.labelText");
  const InputDecoration_icon = dart.privateName(input_decorator, "InputDecoration.icon");
  let C16;
  dart.defineLazy(constants, {
    /*constants.kSendButtonTextStyle*/get kSendButtonTextStyle() {
      return C0 || CT.C0;
    },
    /*constants.kMessageContainerDecoration*/get kMessageContainerDecoration() {
      return C8 || CT.C8;
    },
    /*constants.kTextInputDecoration*/get kTextInputDecoration() {
      return C16 || CT.C16;
    }
  });
  dart.trackLibraries("packages/Feltes/utils/constants", {
    "package:Feltes/utils/constants.dart": constants
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["constants.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAEM,8BAAoB;;;MAMpB,qCAA2B;;;MAM3B,8BAAoB","file":"constants.ddc.js"}');
  // Exports:
  return {
    utils__constants: constants
  };
});

//# sourceMappingURL=constants.ddc.js.map

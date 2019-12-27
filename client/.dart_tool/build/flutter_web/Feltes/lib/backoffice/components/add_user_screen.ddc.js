define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/Feltes/backoffice/models/User', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__Feltes__backoffice__models__User, packages__flutter__src__painting___network_image_web, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const User = packages__Feltes__backoffice__models__User.backoffice__models__User;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const dropdown = packages__flutter__material.src__material__dropdown;
  const icons = packages__flutter__material.src__material__icons;
  const material_button = packages__flutter__material.src__material__material_button;
  const colors = packages__flutter__material.src__material__colors;
  const add_user_screen = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  let DropdownButtonOfString = () => (DropdownButtonOfString = dart.constFn(dropdown.DropdownButton$(core.String)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let DropdownMenuItemOfString = () => (DropdownMenuItemOfString = dart.constFn(dropdown.DropdownMenuItem$(core.String)))();
  let StringToDropdownMenuItemOfString = () => (StringToDropdownMenuItemOfString = dart.constFn(dart.fnType(DropdownMenuItemOfString(), [core.String])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 13,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 13,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/components/add_user_screen.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 13,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 13,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/components/add_user_screen.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "obscureText",
        [_Location_column]: 13,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 13,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 13,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/components/add_user_screen.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 30,
        [_Location_line]: 58,
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
        [_Location_column]: 19,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/components/add_user_screen.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 70,
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
        [_Location_column]: 24,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/components/add_user_screen.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 17,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 70,
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
        [_Location_column]: 22,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/components/add_user_screen.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "value",
        [_Location_column]: 13,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "isExpanded",
        [_Location_column]: 13,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "iconSize",
        [_Location_column]: 13,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 13,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 13,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "items",
        [_Location_column]: 13,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/components/add_user_screen.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 75,
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
        [_Location_column]: 20,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/components/add_user_screen.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 13,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/components/add_user_screen.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 35,
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
        [_Location_column]: 14,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/components/add_user_screen.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/Feltes/backoffice/components/add_user_screen.dart"
      });
    }
  });
  const onSave$ = dart.privateName(add_user_screen, "AddUser.onSave");
  const user$ = dart.privateName(add_user_screen, "AddUser.user");
  add_user_screen.AddUser = class AddUser extends framework.StatefulWidget {
    get onSave() {
      return this[onSave$];
    }
    set onSave(value) {
      super.onSave = value;
    }
    get user() {
      return this[user$];
    }
    set user(value) {
      super.user = value;
    }
    createState() {
      return new add_user_screen._AddUserState.new();
    }
  };
  (add_user_screen.AddUser.new = function(opts) {
    let onSave = opts && 'onSave' in opts ? opts.onSave : null;
    let user = opts && 'user' in opts ? opts.user : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onSave$] = onSave;
    this[user$] = user;
    add_user_screen.AddUser.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = add_user_screen.AddUser.prototype;
  dart.addTypeTests(add_user_screen.AddUser);
  dart.setMethodSignature(add_user_screen.AddUser, () => ({
    __proto__: dart.getMethods(add_user_screen.AddUser.__proto__),
    createState: dart.fnType(add_user_screen._AddUserState, [])
  }));
  dart.setLibraryUri(add_user_screen.AddUser, "package:Feltes/backoffice/components/add_user_screen.dart");
  dart.setFieldSignature(add_user_screen.AddUser, () => ({
    __proto__: dart.getFields(add_user_screen.AddUser.__proto__),
    onSave: dart.finalFieldType(core.Function),
    user: dart.finalFieldType(User.User)
  }));
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C7;
  let C5;
  let C4;
  let C10;
  let C11;
  let C12;
  let C9;
  let C8;
  let C15;
  let C14;
  let C13;
  let C18;
  let C17;
  let C16;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C30;
  let C31;
  let C24;
  let C23;
  let C34;
  let C33;
  let C32;
  let C37;
  let C38;
  let C39;
  let C40;
  let C36;
  let C35;
  let C43;
  let C42;
  let C41;
  let C46;
  let C47;
  let C45;
  let C44;
  add_user_screen._AddUserState = class _AddUserState extends framework.State$(add_user_screen.AddUser) {
    initState() {
      super.initState();
      if (this.widget.user != null) {
        this.nameController.text = this.widget.user.username;
        this.emailController.text = this.widget.user.email;
        this.role = this.widget.user.role;
      }
    }
    build(context) {
      return new container.Container.new({padding: new edge_insets.EdgeInsets.all(16.0), child: new basic.Column.new({children: JSArrayOfWidget().of([new text_field.TextField.new({controller: this.nameController, decoration: new input_decorator.InputDecoration.new({labelText: "Your username."}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new text_field.TextField.new({controller: this.emailController, decoration: new input_decorator.InputDecoration.new({labelText: "Your email"}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new text_field.TextField.new({obscureText: true, controller: this.passwordController, decoration: new input_decorator.InputDecoration.new({labelText: "Update password"}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), new (DropdownButtonOfString()).new({value: this.role, isExpanded: true, icon: new icon.Icon.new(icons.Icons.arrow_downward, {$creationLocationd_0dea112b090073317d4: C13 || CT.C13}), iconSize: 24.0, elevation: 16, onChanged: dart.fn(newValue => {
                this.setState(dart.fn(() => {
                  this.role = newValue;
                }, VoidToNull()));
              }, StringToNull()), items: JSArrayOfString().of(["user", "manager", "admin"])[$map](DropdownMenuItemOfString(), dart.fn(value => new (DropdownMenuItemOfString()).new({value: value, child: new text.Text.new(value, {$creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), StringToDropdownMenuItemOfString()))[$toList](), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), new material_button.MaterialButton.new({child: new text.Text.new("Save", {$creationLocationd_0dea112b090073317d4: C32 || CT.C32}), color: new ui.Color.new(4281089616), textColor: colors.Colors.white, onPressed: dart.fn(() => {
                dart.dsend(this.widget, 'onSave', [new User.User.new({username: this.nameController.text, email: this.emailController.text, password: this.passwordController.text, role: this.role})]);
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C35 || CT.C35})]), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44});
    }
  };
  (add_user_screen._AddUserState.new = function() {
    this.nameController = new editable_text.TextEditingController.new();
    this.passwordController = new editable_text.TextEditingController.new();
    this.emailController = new editable_text.TextEditingController.new();
    this.role = null;
    add_user_screen._AddUserState.__proto__.new.call(this);
    ;
  }).prototype = add_user_screen._AddUserState.prototype;
  dart.addTypeTests(add_user_screen._AddUserState);
  dart.setMethodSignature(add_user_screen._AddUserState, () => ({
    __proto__: dart.getMethods(add_user_screen._AddUserState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(add_user_screen._AddUserState, "package:Feltes/backoffice/components/add_user_screen.dart");
  dart.setFieldSignature(add_user_screen._AddUserState, () => ({
    __proto__: dart.getFields(add_user_screen._AddUserState.__proto__),
    nameController: dart.finalFieldType(editable_text.TextEditingController),
    passwordController: dart.finalFieldType(editable_text.TextEditingController),
    emailController: dart.finalFieldType(editable_text.TextEditingController),
    role: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/Feltes/backoffice/components/add_user_screen", {
    "package:Feltes/backoffice/components/add_user_screen.dart": add_user_screen
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["add_user_screen.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKiB;;;;;;IACJ;;;;;;;AAGoB;IAAe;;;QALtB;QAAa;;IAAb;IAAa;AAArC;;EAA2C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgBxB,MAAX;AAEN,UAAI,AAAO,oBAAQ;AACyB,QAA1C,AAAe,2BAAO,AAAO,AAAK;AACM,QAAxC,AAAgB,4BAAO,AAAO,AAAK;AACZ,QAAvB,YAAO,AAAO,AAAK;;IAEvB;UAG0B;AACxB,YAAO,uCACe,+BAAI,cACjB,gCACa,sBAChB,0CACc,iCACA,oDACC,2EAGf,0CACc,kCACA,oDACC,uEAGf,2CACe,kBACD,qCACA,oDACC,4EAGf,2CACS,uBACK,YACN,kBAAW,gGACP,iBACC,eACA,QAAQ;AAGf,gBAFF,cAAS;AACQ,kBAAf,YAAO,QAAQ;;yCAGJ,AACV,AAKF,sBANa,QAAQ,WAAW,4CACA,QAAQ,SAClC,6CACE,KAAK,SACL,kBAAK,KAAK,+NAIvB,+CACS,kBAAK,yEACL,iBAAM,wBACK,gCACP;AAQR,gBAPM,WAAP,wBACE,6BACY,AAAe,iCAClB,AAAgB,qCACb,AAAmB,oCACvB;;IAQtB;;;IA9E4B,sBAAiB;IACjB,0BAAqB;IACrB,uBAAkB;IACvC;;;EA4ET","file":"add_user_screen.ddc.js"}');
  // Exports:
  return {
    backoffice__components__add_user_screen: add_user_screen
  };
});

//# sourceMappingURL=add_user_screen.ddc.js.map

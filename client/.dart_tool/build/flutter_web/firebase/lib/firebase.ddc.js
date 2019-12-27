define(['dart_sdk', 'packages/firebase/src/app'], function(dart_sdk, packages__firebase__src__app) {
  'use strict';
  const core = dart_sdk.core;
  const js_util = dart_sdk.js_util;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__firebase__src__app.src__utils;
  const js$ = packages__firebase__src__app.src__js;
  const app = packages__firebase__src__app.src__app;
  const auth = packages__firebase__src__app.src__auth;
  const database = packages__firebase__src__app.src__database;
  const storage = packages__firebase__src__app.src__storage;
  const firestore = packages__firebase__src__app.src__firestore;
  const functions = packages__firebase__src__app.src__functions;
  const analytics = Object.create(dart.library);
  const top_level = Object.create(dart.library);
  const performance = Object.create(dart.library);
  const messaging = Object.create(dart.library);
  const firebase = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  let ExpandoOfAnalytics = () => (ExpandoOfAnalytics = dart.constFn(core.Expando$(analytics.Analytics)))();
  let dynamicToApp = () => (dynamicToApp = dart.constFn(dart.fnType(app.App, [dart.dynamic])))();
  let ExpandoOfPerformance = () => (ExpandoOfPerformance = dart.constFn(core.Expando$(performance.Performance)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let ObjectTodynamic = () => (ObjectTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.Object])))();
  let StreamControllerOfPayload = () => (StreamControllerOfPayload = dart.constFn(async.StreamController$(messaging.Payload)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StreamControllerOfNull = () => (StreamControllerOfNull = dart.constFn(async.StreamController$(core.Null)))();
  let StreamOfNull = () => (StreamOfNull = dart.constFn(async.Stream$(core.Null)))();
  let ExpandoOfMessaging = () => (ExpandoOfMessaging = dart.constFn(core.Expando$(messaging.Messaging)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(utils.dartify, ObjectTodynamic());
    }
  });
  analytics.Analytics = class Analytics extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.analytics.Analytics, "firebase.analytics.Analytics")) {
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = analytics.Analytics._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new analytics.Analytics._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    logEvent(eventName, eventParams, options) {
      if (options === void 0) options = null;
      if (options != null) {
        this.jsObject.logEvent(eventName, utils.jsify(eventParams), options.jsObject);
      } else {
        this.jsObject.logEvent(eventName, utils.jsify(eventParams));
      }
    }
    setAnalyticsCollectionEnabled(enabled) {
      this.jsObject.setAnalyticsCollectionEnabled(enabled);
    }
    setCurrentScreen(screenName, options) {
      if (options === void 0) options = null;
      if (options != null) {
        this.jsObject.setCurrentScreen(screenName, options.jsObject);
      } else {
        this.jsObject.setCurrentScreen(screenName);
      }
    }
    setUserId(id, options) {
      if (options === void 0) options = null;
      if (options != null) {
        this.jsObject.setUserId(id, options.jsObject);
      } else {
        this.jsObject.setUserId(id);
      }
    }
    setUserProperties(properties, options) {
      if (options === void 0) options = null;
      if (options != null) {
        this.jsObject.setUserProperties(properties.jsObject, options.jsObject);
      } else {
        this.jsObject.setUserProperties(properties.jsObject);
      }
    }
  };
  (analytics.Analytics._fromJsObject = function(jsObject) {
    analytics.Analytics.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = analytics.Analytics.prototype;
  dart.addTypeTests(analytics.Analytics);
  dart.setMethodSignature(analytics.Analytics, () => ({
    __proto__: dart.getMethods(analytics.Analytics.__proto__),
    logEvent: dart.fnType(dart.void, [core.String, core.Map], [analytics.AnalyticsCallOptions]),
    setAnalyticsCollectionEnabled: dart.fnType(dart.void, [core.bool]),
    setCurrentScreen: dart.fnType(dart.void, [core.String], [analytics.AnalyticsCallOptions]),
    setUserId: dart.fnType(dart.void, [core.String], [analytics.AnalyticsCallOptions]),
    setUserProperties: dart.fnType(dart.void, [analytics.CustomParams], [analytics.AnalyticsCallOptions])
  }));
  dart.setLibraryUri(analytics.Analytics, "package:firebase/src/analytics.dart");
  dart.defineLazy(analytics.Analytics, {
    /*analytics.Analytics._expando*/get _expando() {
      return new (ExpandoOfAnalytics()).new();
    }
  });
  analytics.AnalyticsCallOptions = class AnalyticsCallOptions extends js$.JsObjectWrapper$(dart.anonymousJSType("AnalyticsCallOptionsJsImpl")) {
    get global() {
      return this.jsObject.global;
    }
    set global(t) {
      this.jsObject.global = t;
    }
  };
  (analytics.AnalyticsCallOptions._fromJsObject = function(jsObject) {
    analytics.AnalyticsCallOptions.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = analytics.AnalyticsCallOptions.prototype;
  dart.addTypeTests(analytics.AnalyticsCallOptions);
  dart.setGetterSignature(analytics.AnalyticsCallOptions, () => ({
    __proto__: dart.getGetters(analytics.AnalyticsCallOptions.__proto__),
    global: core.bool
  }));
  dart.setSetterSignature(analytics.AnalyticsCallOptions, () => ({
    __proto__: dart.getSetters(analytics.AnalyticsCallOptions.__proto__),
    global: core.bool
  }));
  dart.setLibraryUri(analytics.AnalyticsCallOptions, "package:firebase/src/analytics.dart");
  analytics.CustomParams = class CustomParams extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.analytics.CustomParams, "firebase.analytics.CustomParams")) {};
  (analytics.CustomParams._fromJsObject = function(jsObject) {
    analytics.CustomParams.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = analytics.CustomParams.prototype;
  dart.addTypeTests(analytics.CustomParams);
  dart.setLibraryUri(analytics.CustomParams, "package:firebase/src/analytics.dart");
  const message$ = dart.privateName(top_level, "FirebaseJsNotLoadedException.message");
  top_level.FirebaseJsNotLoadedException = class FirebaseJsNotLoadedException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "FirebaseJsNotLoadedException: " + dart.str(this.message);
    }
  };
  (top_level.FirebaseJsNotLoadedException.new = function(message) {
    this[message$] = message;
    ;
  }).prototype = top_level.FirebaseJsNotLoadedException.prototype;
  dart.addTypeTests(top_level.FirebaseJsNotLoadedException);
  top_level.FirebaseJsNotLoadedException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(top_level.FirebaseJsNotLoadedException, "package:firebase/src/top_level.dart");
  dart.setFieldSignature(top_level.FirebaseJsNotLoadedException, () => ({
    __proto__: dart.getFields(top_level.FirebaseJsNotLoadedException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(top_level.FirebaseJsNotLoadedException, ['toString']);
  top_level.initializeApp = function initializeApp(opts) {
    let apiKey = opts && 'apiKey' in opts ? opts.apiKey : null;
    let authDomain = opts && 'authDomain' in opts ? opts.authDomain : null;
    let databaseURL = opts && 'databaseURL' in opts ? opts.databaseURL : null;
    let projectId = opts && 'projectId' in opts ? opts.projectId : null;
    let storageBucket = opts && 'storageBucket' in opts ? opts.storageBucket : null;
    let messagingSenderId = opts && 'messagingSenderId' in opts ? opts.messagingSenderId : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let measurementId = opts && 'measurementId' in opts ? opts.measurementId : null;
    let appId = opts && 'appId' in opts ? opts.appId : null;
    name == null ? name = "[DEFAULT]" : null;
    try {
      return app.App.getInstance(dart.global.firebase.initializeApp({apiKey: apiKey, authDomain: authDomain, databaseURL: databaseURL, projectId: projectId, storageBucket: storageBucket, messagingSenderId: messagingSenderId, measurementId: measurementId, appId: appId}, name));
    } catch (e$) {
      let e = dart.getThrown(e$);
      if (dart.test(top_level._firebaseNotLoaded(e))) {
        dart.throw(new top_level.FirebaseJsNotLoadedException.new("firebase.js must be loaded."));
      }
      dart.rethrow(e$);
    }
  };
  top_level.app = function app$(name) {
    if (name === void 0) name = null;
    let jsObject = name != null ? dart.global.firebase.app(name) : dart.global.firebase.app();
    return app.App.getInstance(jsObject);
  };
  top_level.auth = function auth$(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.auth(app.jsObject) : dart.global.firebase.auth();
    return auth.Auth.getInstance(jsObject);
  };
  top_level.database = function database$(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.database(app.jsObject) : dart.global.firebase.database();
    return database.Database.getInstance(jsObject);
  };
  top_level.storage = function storage$(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.storage(app.jsObject) : dart.global.firebase.storage();
    return storage.Storage.getInstance(jsObject);
  };
  top_level.firestore = function firestore$(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.firestore(app.jsObject) : dart.global.firebase.firestore();
    return firestore.Firestore.getInstance(jsObject);
  };
  top_level.functions = function functions$(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.functions(app.jsObject) : dart.global.firebase.functions();
    return functions.Functions.getInstance(jsObject);
  };
  top_level.messaging = function messaging$(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.messaging(app.jsObject) : dart.global.firebase.messaging();
    return messaging.Messaging.getInstance(jsObject);
  };
  top_level.analytics = function analytics$(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.analytics(app.jsObject) : dart.global.firebase.analytics();
    return analytics.Analytics.getInstance(jsObject);
  };
  top_level.performance = function performance$(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.performance(app.jsObject) : dart.global.firebase.performance();
    return performance.Performance.getInstance(jsObject);
  };
  top_level._firebaseNotLoaded = function _firebaseNotLoaded(error) {
    if (core.NoSuchMethodError.is(error)) {
      return true;
    }
    if (dart.dtest(js_util.hasProperty(error, "message"))) {
      let message = js_util.getProperty(error, "message");
      return dart.equals(message, "firebase is not defined") || dart.equals(message, "Can't find variable: firebase");
    }
    return false;
  };
  dart.copyProperties(top_level, {
    get apps() {
      return dart.global.firebase.apps[$map](app.App, dart.fn(e => app.App.getInstance(dart.lazyJSType(() => dart.global.firebase.app.App, "firebase.app.App")._check(e)), dynamicToApp()))[$toList]();
    }
  });
  dart.defineLazy(top_level, {
    /*top_level._defaultAppName*/get _defaultAppName() {
      return "[DEFAULT]";
    }
  });
  performance.Performance = class Performance extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.analytics.Performance, "firebase.analytics.Performance")) {
    static getInstance(jsObject) {
      let t4, t3, t2, t1;
      if (jsObject == null) {
        return null;
      }
      t1 = performance.Performance._expando;
      t2 = jsObject;
      t3 = t1._get(t2);
      return t3 == null ? (t4 = new performance.Performance._fromJsObject(jsObject), t1._set(t2, t4), t4) : t3;
    }
    trace(traceName) {
      return new performance.Trace.fromJsObject(this.jsObject.trace(traceName));
    }
  };
  (performance.Performance._fromJsObject = function(jsObject) {
    performance.Performance.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = performance.Performance.prototype;
  dart.addTypeTests(performance.Performance);
  dart.setMethodSignature(performance.Performance, () => ({
    __proto__: dart.getMethods(performance.Performance.__proto__),
    trace: dart.fnType(performance.Trace, [core.String])
  }));
  dart.setLibraryUri(performance.Performance, "package:firebase/src/performance.dart");
  dart.defineLazy(performance.Performance, {
    /*performance.Performance._expando*/get _expando() {
      return new (ExpandoOfPerformance()).new();
    }
  });
  performance.Trace = class Trace extends js$.JsObjectWrapper$(dart.anonymousJSType("TraceJsImpl")) {
    getAttribute(attr) {
      return this.jsObject.getAttribute(attr);
    }
    getAttributes() {
      return MapOfString$dynamic()._check(utils.dartify(this.jsObject.getAttributes()));
    }
    getMetric(metricName) {
      return this.jsObject.getMetric(metricName);
    }
    incrementMetric(metricName, num) {
      if (num === void 0) num = null;
      if (num != null) {
        this.jsObject.incrementMetric(metricName, num);
      } else {
        this.jsObject.incrementMetric(metricName);
      }
    }
    putAttribute(attr, value) {
      this.jsObject.putAttribute(attr, value);
    }
    removeAttribute(attr) {
      this.jsObject.removeAttribute(attr);
    }
    start() {
      this.jsObject.start();
    }
    stop() {
      this.jsObject.stop();
    }
  };
  (performance.Trace.fromJsObject = function(jsObject) {
    performance.Trace.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = performance.Trace.prototype;
  dart.addTypeTests(performance.Trace);
  dart.setMethodSignature(performance.Trace, () => ({
    __proto__: dart.getMethods(performance.Trace.__proto__),
    getAttribute: dart.fnType(core.String, [core.String]),
    getAttributes: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    getMetric: dart.fnType(core.int, [core.String]),
    incrementMetric: dart.fnType(dart.void, [core.String], [core.int]),
    putAttribute: dart.fnType(dart.void, [core.String, core.String]),
    removeAttribute: dart.fnType(dart.void, [core.String]),
    start: dart.fnType(dart.void, []),
    stop: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(performance.Trace, "package:firebase/src/performance.dart");
  const _onMessageController = dart.privateName(messaging, "_onMessageController");
  const _onTokenRefresh = dart.privateName(messaging, "_onTokenRefresh");
  const _onBackgroundMessage = dart.privateName(messaging, "_onBackgroundMessage");
  let C0;
  const _createOnMessageStream = dart.privateName(messaging, "_createOnMessageStream");
  const _createBackgroundMessagedStream = dart.privateName(messaging, "_createBackgroundMessagedStream");
  const _createNullStream = dart.privateName(messaging, "_createNullStream");
  messaging.Messaging = class Messaging extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.messaging.Messaging, "firebase.messaging.Messaging")) {
    static getInstance(jsObject) {
      let t4, t3, t2, t1;
      if (jsObject == null) {
        return null;
      }
      t1 = messaging.Messaging._expando;
      t2 = jsObject;
      t3 = t1._get(t2);
      return t3 == null ? (t4 = new messaging.Messaging._fromJsObject(jsObject), t1._set(t2, t4), t4) : t3;
    }
    static isSupported() {
      return dart.global.firebase.messaging.isSupported();
    }
    usePublicVapidKey(key) {
      this.jsObject.usePublicVapidKey(key);
    }
    useServiceWorker(registration) {
      this.jsObject.useServiceWorker(registration);
    }
    deleteToken(token) {
      this.jsObject.deleteToken(token);
    }
    requestPermission() {
      return async.async(dart.dynamic, (function* requestPermission() {
        yield utils.handleThenable(dart.void, this.jsObject.requestPermission()).then(dart.dynamic, C0 || CT.C0);
      }).bind(this));
    }
    getToken() {
      return utils.handleThenable(core.String, this.jsObject.getToken());
    }
    get onMessage() {
      return this[_createOnMessageStream](this[_onMessageController]);
    }
    get onBackgroundMessage() {
      return this[_createBackgroundMessagedStream](this[_onBackgroundMessage]);
    }
    get onTokenRefresh() {
      return this[_createNullStream](this[_onTokenRefresh]);
    }
    [_createOnMessageStream](controller) {
      if (controller == null) {
        controller = StreamControllerOfPayload().broadcast({sync: true});
        let nextWrapper = js.allowInterop(dynamicToNull(), dart.fn(payload => {
          controller.add(new messaging.Payload._fromJsObject(dart.anonymousJSType("PayloadJsImpl")._check(payload)));
        }, dynamicToNull()));
        let errorWrapper = js.allowInterop(dynamicToNull(), dart.fn(e => {
          controller.addError(e);
        }, dynamicToNull()));
        this.jsObject.onMessage(nextWrapper, errorWrapper);
      }
      return controller.stream;
    }
    [_createBackgroundMessagedStream](controller) {
      if (controller == null) {
        controller = StreamControllerOfPayload().broadcast({sync: true});
        let nextWrapper = js.allowInterop(dynamicToNull(), dart.fn(payload => {
          controller.add(new messaging.Payload._fromJsObject(dart.anonymousJSType("PayloadJsImpl")._check(payload)));
        }, dynamicToNull()));
        this.jsObject.setBackgroundMessageHandler(nextWrapper);
      }
      return controller.stream;
    }
    [_createNullStream](controller) {
      if (controller == null) {
        let nextWrapper = js.allowInterop(dynamicToNull(), dart.fn(_ => null, dynamicToNull()));
        let errorWrapper = js.allowInterop(dynamicToNull(), dart.fn(e => {
          controller.addError(e);
        }, dynamicToNull()));
        let onSnapshotUnsubscribe = null;
        const startListen = () => {
          onSnapshotUnsubscribe = this.jsObject.onTokenRefresh(nextWrapper, errorWrapper);
        };
        dart.fn(startListen, VoidTovoid());
        function stopListen() {
          onSnapshotUnsubscribe();
          onSnapshotUnsubscribe = null;
        }
        dart.fn(stopListen, VoidTovoid());
        controller = StreamControllerOfNull().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return StreamOfNull()._check(controller.stream);
    }
  };
  (messaging.Messaging._fromJsObject = function(jsObject) {
    this[_onMessageController] = null;
    this[_onTokenRefresh] = null;
    this[_onBackgroundMessage] = null;
    messaging.Messaging.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = messaging.Messaging.prototype;
  dart.addTypeTests(messaging.Messaging);
  dart.setMethodSignature(messaging.Messaging, () => ({
    __proto__: dart.getMethods(messaging.Messaging.__proto__),
    usePublicVapidKey: dart.fnType(dart.void, [core.String]),
    useServiceWorker: dart.fnType(dart.void, [dart.dynamic]),
    deleteToken: dart.fnType(dart.void, [core.String]),
    requestPermission: dart.fnType(async.Future, []),
    getToken: dart.fnType(async.Future$(core.String), []),
    [_createOnMessageStream]: dart.fnType(async.Stream$(messaging.Payload), [async.StreamController$(messaging.Payload)]),
    [_createBackgroundMessagedStream]: dart.fnType(async.Stream$(messaging.Payload), [async.StreamController$(messaging.Payload)]),
    [_createNullStream]: dart.fnType(async.Stream$(core.Null), [async.StreamController])
  }));
  dart.setGetterSignature(messaging.Messaging, () => ({
    __proto__: dart.getGetters(messaging.Messaging.__proto__),
    onMessage: async.Stream$(messaging.Payload),
    onBackgroundMessage: async.Stream$(messaging.Payload),
    onTokenRefresh: async.Stream$(core.Null)
  }));
  dart.setLibraryUri(messaging.Messaging, "package:firebase/src/messaging.dart");
  dart.setFieldSignature(messaging.Messaging, () => ({
    __proto__: dart.getFields(messaging.Messaging.__proto__),
    [_onMessageController]: dart.fieldType(async.StreamController$(messaging.Payload)),
    [_onTokenRefresh]: dart.fieldType(async.StreamController$(core.Null)),
    [_onBackgroundMessage]: dart.fieldType(async.StreamController$(messaging.Payload))
  }));
  dart.defineLazy(messaging.Messaging, {
    /*messaging.Messaging._expando*/get _expando() {
      return new (ExpandoOfMessaging()).new();
    }
  });
  messaging.Notification = class Notification extends js$.JsObjectWrapper$(dart.anonymousJSType("NotificationJsImpl")) {
    get title() {
      return this.jsObject.title;
    }
    get body() {
      return this.jsObject.body;
    }
    get clickAction() {
      return this.jsObject.click_action;
    }
    get icon() {
      return this.jsObject.icon;
    }
  };
  (messaging.Notification._fromJsObject = function(jsObject) {
    messaging.Notification.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = messaging.Notification.prototype;
  dart.addTypeTests(messaging.Notification);
  dart.setGetterSignature(messaging.Notification, () => ({
    __proto__: dart.getGetters(messaging.Notification.__proto__),
    title: core.String,
    body: core.String,
    clickAction: core.String,
    icon: core.String
  }));
  dart.setLibraryUri(messaging.Notification, "package:firebase/src/messaging.dart");
  messaging.Payload = class Payload extends js$.JsObjectWrapper$(dart.anonymousJSType("PayloadJsImpl")) {
    get notification() {
      return new messaging.Notification._fromJsObject(this.jsObject.notification);
    }
    get collapseKey() {
      return this.jsObject.collapse_key;
    }
    get from() {
      return this.jsObject.from;
    }
    get data() {
      return MapOfString$dynamic()._check(utils.dartify(this.jsObject.data));
    }
  };
  (messaging.Payload._fromJsObject = function(jsObject) {
    messaging.Payload.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = messaging.Payload.prototype;
  dart.addTypeTests(messaging.Payload);
  dart.setGetterSignature(messaging.Payload, () => ({
    __proto__: dart.getGetters(messaging.Payload.__proto__),
    notification: messaging.Notification,
    collapseKey: core.String,
    from: core.String,
    data: core.Map$(core.String, dart.dynamic)
  }));
  dart.setLibraryUri(messaging.Payload, "package:firebase/src/messaging.dart");
  dart.trackLibraries("packages/firebase/firebase", {
    "package:firebase/src/analytics.dart": analytics,
    "package:firebase/src/top_level.dart": top_level,
    "package:firebase/src/performance.dart": performance,
    "package:firebase/src/messaging.dart": messaging,
    "package:firebase/firebase.dart": firebase
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/analytics.dart","src/top_level.dart","src/performance.dart","src/messaging.dart"],"names":[],"mappings":"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","file":"firebase.ddc.js"}');
  // Exports:
  return {
    src__analytics: analytics,
    src__top_level: top_level,
    src__performance: performance,
    src__messaging: messaging,
    firebase: firebase
  };
});

//# sourceMappingURL=firebase.ddc.js.map

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-contact-contact-module"], {
  /***/
  "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js":
  /*!************************************************************!*\
    !*** ./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js ***!
    \************************************************************/

  /*! exports provided: RECAPTCHA_BASE_URL, RECAPTCHA_LANGUAGE, RECAPTCHA_NONCE, RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY, ReCaptchaV3Service, RecaptchaComponent, RecaptchaFormsModule, RecaptchaLoaderService, RecaptchaModule, RecaptchaV3Module, RecaptchaValueAccessorDirective, ɵa */

  /***/
  function node_modulesNgRecaptchaFesm2015NgRecaptchaJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RECAPTCHA_BASE_URL", function () {
      return RECAPTCHA_BASE_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RECAPTCHA_LANGUAGE", function () {
      return RECAPTCHA_LANGUAGE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RECAPTCHA_NONCE", function () {
      return RECAPTCHA_NONCE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RECAPTCHA_SETTINGS", function () {
      return RECAPTCHA_SETTINGS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RECAPTCHA_V3_SITE_KEY", function () {
      return RECAPTCHA_V3_SITE_KEY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReCaptchaV3Service", function () {
      return ReCaptchaV3Service;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecaptchaComponent", function () {
      return RecaptchaComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecaptchaFormsModule", function () {
      return RecaptchaFormsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecaptchaLoaderService", function () {
      return RecaptchaLoaderService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecaptchaModule", function () {
      return RecaptchaModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecaptchaV3Module", function () {
      return RecaptchaV3Module;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecaptchaValueAccessorDirective", function () {
      return RecaptchaValueAccessorDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return RecaptchaCommonModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    const RECAPTCHA_LANGUAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('recaptcha-language');
    const RECAPTCHA_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('recaptcha-base-url');
    const RECAPTCHA_NONCE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('recaptcha-nonce-tag');

    function loadScript(renderMode, onLoaded, urlParams, url, nonce) {
      window.ng2recaptchaloaded = () => {
        onLoaded(grecaptcha);
      };

      const script = document.createElement('script');
      script.innerHTML = '';
      const baseUrl = url || 'https://www.google.com/recaptcha/api.js';
      script.src = "".concat(baseUrl, "?render=").concat(renderMode, "&onload=ng2recaptchaloaded").concat(urlParams);

      if (nonce) {
        // tslint:disable-next-line:no-any Remove "any" cast once we upgrade Angular to 7 and TypeScript along with it
        script.nonce = nonce;
      }

      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    let RecaptchaLoaderService = RecaptchaLoaderService_1 = class RecaptchaLoaderService {
      constructor( // tslint:disable-next-line:no-any
      platformId, language, baseUrl, nonce) {
        this.platformId = platformId;
        this.language = language;
        this.baseUrl = baseUrl;
        this.nonce = nonce;
        this.init();
        this.ready = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId) ? RecaptchaLoaderService_1.ready.asObservable() : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])();
      }
      /** @internal */


      init() {
        if (RecaptchaLoaderService_1.ready) {
          return;
        }

        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
          const subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
          RecaptchaLoaderService_1.ready = subject;
          const langParam = this.language ? '&hl=' + this.language : '';
          loadScript('explicit', grecaptcha => subject.next(grecaptcha), langParam, this.baseUrl, this.nonce);
        }
      }

    };
    /**
     * @internal
     * @nocollapse
     */

    RecaptchaLoaderService.ready = null;
    RecaptchaLoaderService = RecaptchaLoaderService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_LANGUAGE)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_BASE_URL)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_NONCE)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, String, String, String])], RecaptchaLoaderService);
    var RecaptchaLoaderService_1;
    const RECAPTCHA_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('recaptcha-settings');
    let nextId = 0;
    let RecaptchaComponent = class RecaptchaComponent {
      constructor(elementRef, loader, zone, settings) {
        this.elementRef = elementRef;
        this.loader = loader;
        this.zone = zone;
        this.id = "ngrecaptcha-".concat(nextId++);
        this.resolved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        if (settings) {
          this.siteKey = settings.siteKey;
          this.theme = settings.theme;
          this.type = settings.type;
          this.size = settings.size;
          this.badge = settings.badge;
        }
      }

      ngAfterViewInit() {
        this.subscription = this.loader.ready.subscribe(grecaptcha => {
          if (grecaptcha != null && grecaptcha.render instanceof Function) {
            this.grecaptcha = grecaptcha;
            this.renderRecaptcha();
          }
        });
      }

      ngOnDestroy() {
        // reset the captcha to ensure it does not leave anything behind
        // after the component is no longer needed
        this.grecaptchaReset();

        if (this.subscription) {
          this.subscription.unsubscribe();
        }
      }
      /**
       * Executes the invisible recaptcha.
       * Does nothing if component's size is not set to "invisible".
       */


      execute() {
        if (this.size !== 'invisible') {
          return;
        }

        if (this.widget != null) {
          this.grecaptcha.execute(this.widget);
        } else {
          // delay execution of recaptcha until it actually renders
          this.executeRequested = true;
        }
      }

      reset() {
        if (this.widget != null) {
          if (this.grecaptcha.getResponse(this.widget)) {
            // Only emit an event in case if something would actually change.
            // That way we do not trigger "touching" of the control if someone does a "reset"
            // on a non-resolved captcha.
            this.resolved.emit(null);
          }

          this.grecaptchaReset();
        }
      }
      /** @internal */


      expired() {
        this.resolved.emit(null);
      }
      /** @internal */


      captchaResponseCallback(response) {
        this.resolved.emit(response);
      }
      /** @internal */


      grecaptchaReset() {
        if (this.widget != null) {
          this.zone.runOutsideAngular(() => this.grecaptcha.reset(this.widget));
        }
      }
      /** @internal */


      renderRecaptcha() {
        this.widget = this.grecaptcha.render(this.elementRef.nativeElement, {
          badge: this.badge,
          callback: response => {
            this.zone.run(() => this.captchaResponseCallback(response));
          },
          'expired-callback': () => {
            this.zone.run(() => this.expired());
          },
          sitekey: this.siteKey,
          size: this.size,
          tabindex: this.tabIndex,
          theme: this.theme,
          type: this.type
        });

        if (this.executeRequested === true) {
          this.executeRequested = false;
          this.execute();
        }
      }

    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.id'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RecaptchaComponent.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], RecaptchaComponent.prototype, "siteKey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], RecaptchaComponent.prototype, "theme", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], RecaptchaComponent.prototype, "type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], RecaptchaComponent.prototype, "size", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], RecaptchaComponent.prototype, "tabIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], RecaptchaComponent.prototype, "badge", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], RecaptchaComponent.prototype, "resolved", void 0);
    RecaptchaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      exportAs: 'reCaptcha',
      selector: 're-captcha',
      template: ""
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_SETTINGS)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], RecaptchaLoaderService, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], Object])], RecaptchaComponent);
    let RecaptchaCommonModule = class RecaptchaCommonModule {};
    RecaptchaCommonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [RecaptchaComponent],
      exports: [RecaptchaComponent]
    })], RecaptchaCommonModule);
    let RecaptchaModule = RecaptchaModule_1 = class RecaptchaModule {
      // We need this to maintain backwards-compatibility with v4. Removing this will be a breaking change
      static forRoot() {
        return RecaptchaModule_1;
      }

    };
    RecaptchaModule = RecaptchaModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [RecaptchaComponent],
      imports: [RecaptchaCommonModule],
      providers: [RecaptchaLoaderService]
    })], RecaptchaModule);
    var RecaptchaModule_1;
    const RECAPTCHA_V3_SITE_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('recaptcha-v3-site-key');
    /**
     * The main service for working with reCAPTCHA v3 APIs.
     *
     * Use the `execute` method for executing a single action, and
     * `onExecute` observable for listening to all actions at once.
     */

    let ReCaptchaV3Service = class ReCaptchaV3Service {
      constructor(zone, siteKey, // tslint:disable-next-line:no-any
      platformId, baseUrl, nonce) {
        /** @internal */
        this.onLoadComplete = grecaptcha => {
          this.grecaptcha = grecaptcha;

          if (this.actionBacklog && this.actionBacklog.length > 0) {
            this.actionBacklog.forEach(([action, subject]) => this.executeActionWithSubject(action, subject));
            this.actionBacklog = undefined;
          }
        };

        this.zone = zone;
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId);
        this.siteKey = siteKey;
        this.nonce = nonce;
        this.baseUrl = baseUrl;
        this.init();
      }

      get onExecute() {
        if (!this.onExecuteSubject) {
          this.onExecuteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.onExecuteObservable = this.onExecuteSubject.asObservable();
        }

        return this.onExecuteObservable;
      }
      /**
       * Executes the provided `action` with reCAPTCHA v3 API.
       * Use the emitted token value for verification purposes on the backend.
       *
       * For more information about reCAPTCHA v3 actions and tokens refer to the official documentation at
       * https://developers.google.com/recaptcha/docs/v3.
       *
       * @param {string} action the action to execute
       * @returns {Observable<string>} an `Observable` that will emit the reCAPTCHA v3 string `token` value whenever ready.
       * The returned `Observable` completes immediately after emitting a value.
       */


      execute(action) {
        const subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();

        if (this.isBrowser) {
          if (!this.grecaptcha) {
            // todo: add to array of later executions
            if (!this.actionBacklog) {
              this.actionBacklog = [];
            }

            this.actionBacklog.push([action, subject]);
          } else {
            this.executeActionWithSubject(action, subject);
          }
        }

        return subject.asObservable();
      }
      /** @internal */


      executeActionWithSubject(action, subject) {
        this.zone.runOutsideAngular(() => {
          // tslint:disable-next-line:no-any
          this.grecaptcha.execute(this.siteKey, {
            action
          }).then(token => {
            this.zone.run(() => {
              subject.next(token);
              subject.complete();

              if (this.onExecuteSubject) {
                this.onExecuteSubject.next({
                  action,
                  token
                });
              }
            });
          });
        });
      }
      /** @internal */


      init() {
        if (this.isBrowser) {
          if ('grecaptcha' in window) {
            this.grecaptcha = grecaptcha;
          } else {
            loadScript(this.siteKey, this.onLoadComplete, '', this.baseUrl, this.nonce);
          }
        }
      }

    };
    ReCaptchaV3Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_V3_SITE_KEY)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_BASE_URL)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(RECAPTCHA_NONCE)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], String, Object, String, String])], ReCaptchaV3Service);
    let RecaptchaV3Module = class RecaptchaV3Module {};
    RecaptchaV3Module = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      providers: [ReCaptchaV3Service]
    })], RecaptchaV3Module);
    let RecaptchaValueAccessorDirective = RecaptchaValueAccessorDirective_1 = class RecaptchaValueAccessorDirective {
      constructor(host) {
        this.host = host;
      }

      writeValue(value) {
        if (!value) {
          this.host.reset();
        }
      }

      registerOnChange(fn) {
        this.onChange = fn;
      }

      registerOnTouched(fn) {
        this.onTouched = fn;
      }

      onResolve($event) {
        if (this.onChange) {
          this.onChange($event);
        }

        if (this.onTouched) {
          this.onTouched();
        }
      }

    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('resolved', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], RecaptchaValueAccessorDirective.prototype, "onResolve", null);
    RecaptchaValueAccessorDirective = RecaptchaValueAccessorDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      providers: [{
        multi: true,
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
        // tslint:disable-next-line:no-forward-ref
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => RecaptchaValueAccessorDirective_1)
      }],
      // tslint:disable-next-line:directive-selector
      selector: 're-captcha[formControlName],re-captcha[formControl],re-captcha[ngModel]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [RecaptchaComponent])], RecaptchaValueAccessorDirective);
    var RecaptchaValueAccessorDirective_1;
    let RecaptchaFormsModule = class RecaptchaFormsModule {};
    RecaptchaFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [RecaptchaValueAccessorDirective],
      exports: [RecaptchaValueAccessorDirective],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], RecaptchaCommonModule]
    })], RecaptchaFormsModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng-recaptcha.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/contact-form/contact-form.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/contact-form/contact-form.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesContactContactFormContactFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <h1 class=\"page-title\"><b>Contact Form</b></h1>\n  <div class=\"content\">\n    <form [formGroup]=\"contactForm\" (ngSubmit)=\"submitMessage()\">\n      <div class=\"form-group\">\n        <label for=\"name\">Name*</label>\n        <input id=\"name\" type=\"text\" class=\"form-control\" formControlName=\"name\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\n        <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.name.errors.required\">Name is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email*</label>\n        <input id=\"email\" type=\"email\" class=\"form-control\" formControlName=\"email\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.email.errors.required\">Email is required</div>\n          <div *ngIf=\"f.email.errors.email\">Invalid email</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"subject\">Subject*</label>\n        <input id=\"subject\" type=\"text\" class=\"form-control\" formControlName=\"subject\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.subject.errors }\">\n        <div *ngIf=\"submitted && f.subject.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.subject.errors.required\">Subject is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"message\">Message*</label>\n        <textarea rows=\"5\" id=\"message\" type=\"text\" class=\"form-control\" formControlName=\"message\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.message.errors }\"></textarea>\n        <div *ngIf=\"submitted && f.message.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.message.errors.required\">Message is required</div>\n        </div>\n        <br>\n        <small>\n          <p>This site is protected by reCAPTCHA and the Google\n            <a href=\"https://policies.google.com/privacy\">Privacy Policy</a> and\n            <a href=\"https://policies.google.com/terms\">Terms of Service</a> apply.\n          </p>\n        </small>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\">Send message</button>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/contact.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/contact.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"custom-padding\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-8\">\n        <app-contact-form></app-contact-form>\n      </div>\n      <div class=\"col-sm-4\">\n        <h1 class=\"page-title\">Contact</h1>\n        <div class=\"content\">\n          <span property=\"dc:title\" content=\"Contact\" class=\"rdf-meta element-hidden\"></span>\n          <p>Honoursvereniging Ockham<br>University of Twente<br>KVK 08209433</p>\n          <p>De Bastille (postvak 47)<br>Postbus 217<br>7500 AE, Enschede</p>\n          <p>Visiting Adress:<br>Technohal TL1334C<br>Hallenweg 5<br>7522NH Enschede<br><br>E-mail:<br><a href=\"mailto:Board@hvockham.nl\">Board@hvockham.nl</a><br><a href=\"mailto:Secretary@hvockham.nl\">Secretary@hvockham.nl</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/core/services/contact.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/services/contact.service.ts ***!
    \**************************************************/

  /*! exports provided: ContactService */

  /***/
  function srcAppCoreServicesContactServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactService", function () {
      return ContactService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let ContactService = class ContactService {
      constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = '/api/v1/contact';
      }

      sendMessage(obj) {
        return this.httpClient.post(this.baseUrl, obj, {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        });
      }

    };

    ContactService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ContactService);
    /***/
  },

  /***/
  "./src/app/modules/contact/contact-form/contact-form.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/contact/contact-form/contact-form.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesContactContactFormContactFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#submit {\n  margin-top: 20px;\n  margin-bottom: 40px;\n}\n\n.alert {\n  max-width: 595px;\n}\n\nsmall {\n  font-weight: lighter;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbGJhbmRpL0Rlc2t0b3AvRGVzaWduIFByb2plY3Qvb2NraGFtLWZyb250ZW5kL3NyYy9hcHAvbW9kdWxlcy9jb250YWN0L2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY29udGFjdC9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvbnRhY3QvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdWJtaXQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uYWxlcnQge1xuICBtYXgtd2lkdGg6IDU5NXB4O1xufVxuXG5zbWFsbCB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuIiwiI3N1Ym1pdCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5hbGVydCB7XG4gIG1heC13aWR0aDogNTk1cHg7XG59XG5cbnNtYWxsIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/contact/contact-form/contact-form.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/modules/contact/contact-form/contact-form.component.ts ***!
    \************************************************************************/

  /*! exports provided: ContactFormComponent */

  /***/
  function srcAppModulesContactContactFormContactFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function () {
      return ContactFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_core_services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/contact.service */
    "./src/app/core/services/contact.service.ts");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */


    var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-recaptcha */
    "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);

    let ContactFormComponent = class ContactFormComponent {
      constructor(contactService, notifierService, reCaptchaV3Service) {
        this.contactService = contactService;
        this.notifierService = notifierService;
        this.reCaptchaV3Service = reCaptchaV3Service;
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
          subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.submitted = false;
      }

      ngOnInit() {}

      get f() {
        return this.contactForm.controls;
      }

      submitMessage() {
        this.submitted = true;

        if (this.contactForm.invalid) {
          return;
        }

        this.reCaptchaV3Service.execute('contact').subscribe(token => {
          const payload = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.contactForm.value);
          payload.recaptcha_token = token;
          this.contactService.sendMessage(payload).subscribe(() => {
            this.submitted = false;
            this.contactForm.reset();
            this.notifierService.notify('default', 'You message has been sent.');
          }, () => this.notifierService.notify('error', 'Something went wrong, please try again later.'));
        });
      }

    };

    ContactFormComponent.ctorParameters = () => [{
      type: src_app_core_services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]
    }, {
      type: angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]
    }, {
      type: ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["ReCaptchaV3Service"]
    }];

    ContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/contact-form/contact-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-form.component.scss */
      "./src/app/modules/contact/contact-form/contact-form.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"], angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["ReCaptchaV3Service"]])], ContactFormComponent);
    /***/
  },

  /***/
  "./src/app/modules/contact/contact-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/contact/contact-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ContactRoutingModule */

  /***/
  function srcAppModulesContactContactRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactRoutingModule", function () {
      return ContactRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contact.component */
    "./src/app/modules/contact/contact.component.ts");

    const routes = [{
      path: '',
      component: _contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    }];
    let ContactRoutingModule = class ContactRoutingModule {};
    ContactRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/contact/contact.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/modules/contact/contact.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/contact/contact.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/modules/contact/contact.component.ts ***!
    \******************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppModulesContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ContactComponent = class ContactComponent {
      constructor() {}

      ngOnInit() {}

    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/contact/contact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/modules/contact/contact.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ContactComponent);
    /***/
  },

  /***/
  "./src/app/modules/contact/contact.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/contact/contact.module.ts ***!
    \***************************************************/

  /*! exports provided: ContactModule */

  /***/
  function srcAppModulesContactContactModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactModule", function () {
      return ContactModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _contact_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact-routing.module */
    "./src/app/modules/contact/contact-routing.module.ts");
    /* harmony import */


    var _contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact.component */
    "./src/app/modules/contact/contact.component.ts");
    /* harmony import */


    var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact-form/contact-form.component */
    "./src/app/modules/contact/contact-form/contact-form.component.ts");
    /* harmony import */


    var ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-recaptcha */
    "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");

    let ContactModule = class ContactModule {};
    ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_6__["ContactFormComponent"]],
      exports: [_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _contact_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContactRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["RecaptchaV3Module"]],
      providers: [{
        provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["RECAPTCHA_V3_SITE_KEY"],
        useValue: '6Lf0e98UAAAAAMh4Xsu8b5iIr40bmnYT4KfpS4ID'
      }]
    })], ContactModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-contact-contact-module-es5.js.map
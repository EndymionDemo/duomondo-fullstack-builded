"use strict";
(self["webpackChunkendymion_demo"] = self["webpackChunkendymion_demo"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/register/register.component */ 4689);
/* harmony import */ var _pages_collections_collections_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/collections/collections.component */ 5044);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ 424);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ 1391);
/* harmony import */ var _guards_url_reader_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/url-reader.guard */ 1245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;








const routes = [{
  path: '',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent
}, {
  path: 'register',
  component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent
}, {
  path: 'collections/:accountId',
  component: _pages_collections_collections_component__WEBPACK_IMPORTED_MODULE_1__.CollectionsComponent,
  canActivate: [_guards_url_reader_guard__WEBPACK_IMPORTED_MODULE_4__.UrlReaderGuard, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;


class AppComponent {
  constructor() {
    this.title = 'endymion-demo';
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/register/register.component */ 4689);
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/error.interceptor */ 5151);
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ 6644);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _pages_collections_collections_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/collections/collections.component */ 5044);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ 424);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ 7913);
/* harmony import */ var _interceptors_real_ip_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptors/real-ip.interceptor */ 5797);
var _class;














class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
    useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_3__.ErrorInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
    useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_4__.JwtInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
    useClass: _interceptors_real_ip_interceptor__WEBPACK_IMPORTED_MODULE_8__.RealIpInterceptor,
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.LOCALE_ID,
    useValue: "it-IT"
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent, _pages_collections_collections_component__WEBPACK_IMPORTED_MODULE_5__.CollectionsComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule]
  });
})();

/***/ }),

/***/ 7913:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/message.service */ 6288);
var _class;




const _c0 = function (a1) {
  return ["/collections", a1];
};
class FooterComponent {
  constructor(authService, router, messageService) {
    this.authService = authService;
    this.router = router;
    this.messageService = messageService;
    this.user = this.authService.getUser();
    this.indizioSelezionato = -1;
    this.subs = [];
    this.subs.push(this.messageService.message$.subscribe(message => {
      if (message.channel == 'indizio-selezionato') {
        this.indizioSelezionato = message.payload.indizioId;
      }
    }));
  }
  getScan(userId) {
    return this.indizioSelezionato != -1 ? `/scan.html?indizio=${this.indizioSelezionato}` : `/collections/${userId}`;
  }
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
_class = FooterComponent;
_class.ɵfac = function FooterComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-footer"]],
  decls: 5,
  vars: 4,
  consts: [[1, "footer"], [1, "button-container"], [3, "href"], ["src", "../../assets/images/scansiona.png", 1, "scan"], ["src", "../../assets/images/tab-collezione.png", 1, "show-collection", 3, "routerLink"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.getScan(ctx.user.id), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx.user.id));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: [".footer[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 100px;\n  width: 100%;\n  height: 70px;\n  padding: 5px 0;\n  background-color: #351d53;\n  justify-content: center;\n}\n.footer[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  background-color: #351d53;\n}\n.footer[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 70px;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi8uLi8uLi9MdWlnaSUyMFNlbnphbWljaS9SZXBvL0FSLVByb2plY3RzL0RFTU8lMjBFbmR5bWlvbi9EdW9tb25kby9mcm9udGVuZC9zcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQ1JpQjtFRFNqQix1QkFBQTtBRURKO0FGRUk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkNmYTtBQ2VyQjtBRkNRO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FFQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL2Nzcy92YXJpYWJsZXMuc2Nzcyc7XHJcbi5mb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1wcmltYXJ5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAuYnV0dG9uLWNvbnRhaW5lcntcclxuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXByaW1hcnk7XHJcbiAgICAgICAgYSwgaW1ne1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkYnV0dG9uLXByaW1hcnk6IHdoaXRlO1xyXG4kYnV0dG9uLXByaW1hcnktYmFja2dyb3VuZDogIzUyOTc1NjtcclxuXHJcbiRiYWNrZ3JvdW5kLXByaW1hcnk6ICMzNTFkNTM7XHJcbiRiYWNrZ3JvdW5kLXNlY29uZGFyeTogI2ZmZmZmZjtcclxuJHRleHQtcHJpbWFyeTogI2Y0Yjk0ZjtcclxuJHRleHQtc2Vjb25kYXJ5OiAjZmZmZmZmO1xyXG4iLCIuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTFkNTM7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZvb3RlciAuYnV0dG9uLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTFkNTM7XG59XG4uZm9vdGVyIC5idXR0b24tY29udGFpbmVyIGEsIC5mb290ZXIgLmJ1dHRvbi1jb250YWluZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogNzBweDtcbiAgd2lkdGg6IGF1dG87XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1391:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 2333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.authService.isAuthenticated()) return true;
    this.router.navigateByUrl('/register');
    return false;
  }
}
_class = AuthGuard;
_class.ɵfac = function AuthGuard_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1245:
/*!********************************************!*\
  !*** ./src/app/guards/url-reader.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UrlReaderGuard: () => (/* binding */ UrlReaderGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class UrlReaderGuard {
  canActivate(route, state) {
    var url = window.location.href;
    const host = window.location.host;
    const protocol = window.location.protocol + '//';
    url = url.replace(host, '');
    url = url.replace(protocol, '');
    localStorage.setItem('url', url);
    return true;
  }
}
_class = UrlReaderGuard;
_class.ɵfac = function UrlReaderGuard_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5151:
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorInterceptor: () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;




class ErrorInterceptor {
  constructor(router) {
    this.router = router;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(evt => {}, error => {
      if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse) {
        console.log('errore ', error);
        if (error.status == 401) {
          this.router.navigateByUrl('/login');
        } else if (error.status == 403) {
          this.router.navigateByUrl('/not-authorized');
        } else if (error.message.toLowerCase().includes('unknown error')) {
          this.router.navigateByUrl('/unknown-error');
        }
      }
      (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
}
_class = ErrorInterceptor;
_class.ɵfac = function ErrorInterceptor_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 6644:
/*!*************************************************!*\
  !*** ./src/app/interceptors/jwt.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtInterceptor: () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 2333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;






class JwtInterceptor {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  intercept(request, next) {
    if (this.authService.isAuthenticated()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getJWT()}`
        }
      });
    }
    return next.handle(request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(evt => {}, error => {
      if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse) {
        if (error.status == 401) {
          if (error.message == 'Expired Token') {
            this.authService.logout();
            window.location.href = localStorage.getItem('url');
          }
        }
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
      }
    }));
  }
}
_class = JwtInterceptor;
_class.ɵfac = function JwtInterceptor_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 5797:
/*!*****************************************************!*\
  !*** ./src/app/interceptors/real-ip.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RealIpInterceptor: () => (/* binding */ RealIpInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class RealIpInterceptor {
  constructor() {}
  intercept(request, next) {
    request = request.clone({
      url: request.url.replace('localhost', window.location.hostname)
    });
    return next.handle(request);
  }
}
_class = RealIpInterceptor;
_class.ɵfac = function RealIpInterceptor_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 5044:
/*!************************************************************!*\
  !*** ./src/app/pages/collections/collections.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionsComponent: () => (/* binding */ CollectionsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _collections_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collections.service */ 4741);
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/message.service */ 6288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/footer/footer.component */ 7913);
var _class;







function CollectionsComponent_div_1_div_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " In Cerca del ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CollectionsComponent_div_1_div_3_span_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Collezionato");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CollectionsComponent_div_1_div_3_span_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CollectionsComponent_div_1_div_3_span_4_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const indizio_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.seleziona(indizio_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Trovalo!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    "collezionato": a0,
    "trovalo": a1,
    "non-selezionabile": a2
  };
};
function CollectionsComponent_div_1_div_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CollectionsComponent_div_1_div_3_span_4_span_1_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CollectionsComponent_div_1_div_3_span_4_span_2_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const indizio_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](3, _c0, indizio_r3.collezionato, !indizio_r3.collezionato, !indizio_r3.selezionabile));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", indizio_r3.collezionato);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !indizio_r3.collezionato && !indizio_r3.selezionato);
  }
}
const _c1 = function (a0) {
  return {
    "selezionato": a0
  };
};
function CollectionsComponent_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CollectionsComponent_div_1_div_3_span_1_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CollectionsComponent_div_1_div_3_span_4_Template, 3, 7, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const indizio_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, indizio_r3.selezionato));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", indizio_r3.selezionato);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](indizio_r3.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !indizio_r3.selezionato);
  }
}
function CollectionsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CollectionsComponent_div_1_div_3_Template, 5, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const coll_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](coll_r1.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", coll_r1.indizi);
  }
}
class CollectionsComponent {
  constructor(route, apiService, messageService) {
    this.route = route;
    this.apiService = apiService;
    this.messageService = messageService;
    this.accountId$ = this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(params => parseInt(params["accountId"])));
    this.accountId$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(accountId => this.apiService.get_collection$(accountId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      if (response.success) {
        var collezione = response.data;
        collezione.indizi = collezione.indizi.map(indizio => {
          let map_indizio = {
            ...indizio,
            selezionato: false,
            selezionabile: true
          };
          if (map_indizio.collezionato) {
            map_indizio.selezionabile = false;
          }
          return map_indizio;
        });
        var indizio_selezionato = collezione.indizi.find(indizio => indizio.selezionabile);
        collezione.indizi = collezione.indizi.map(indizio => {
          indizio.selezionabile = indizio.indizioId == indizio_selezionato?.indizioId;
          return indizio;
        });
        this.collection = collezione;
        return collezione;
      } else {
        return 'Errore Caricamento Collezione Spiritelli';
      }
    })).subscribe(r => r);
  }
  seleziona(indizio) {
    if (indizio.selezionabile) {
      this.collection.indizi.forEach(indi => indi.selezionato = false);
      indizio.selezionato = true;
      this.messageService.sendMessage('indizio-selezionato', indizio);
    }
  }
}
_class = CollectionsComponent;
_class.ɵfac = function CollectionsComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_collections_service__WEBPACK_IMPORTED_MODULE_0__.CollectionsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-collections"]],
  decls: 3,
  vars: 1,
  consts: [[1, "row"], ["class", "list-container", 4, "ngIf"], [1, "list-container"], [1, "title"], ["class", "indizio", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "indizio", 3, "ngClass"], ["class", "cerca", 4, "ngIf"], [1, "nome-indizio"], ["class", "stato-indizio", 3, "ngClass", 4, "ngIf"], [1, "cerca"], [1, "stato-indizio", 3, "ngClass"], [4, "ngIf"], ["class", "trovalo", 3, "click", 4, "ngIf"], [1, "trovalo", 3, "click"]],
  template: function CollectionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CollectionsComponent_div_1_Template, 4, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.collection);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
  styles: [".list-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 50px auto 0;\n  padding-bottom: 150px;\n}\n.list-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  text-align: center;\n  font-size: 48px;\n}\n.list-container[_ngcontent-%COMP%]   .indizio[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 2px solid #ffffff;\n  margin: 15px 0;\n  padding: 15px;\n  font-size: x-large;\n  border-radius: 20px;\n  box-shadow: 0px 3px 2px #ffffff;\n  color: #f4b94f;\n  background-color: #ffffff;\n}\n.list-container[_ngcontent-%COMP%]   .indizio[_ngcontent-%COMP%]   .stato-indizio[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 10px;\n  padding: 3px 15px;\n}\n.list-container[_ngcontent-%COMP%]   .indizio[_ngcontent-%COMP%]   .stato-indizio[_ngcontent-%COMP%]   .trovalo[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.list-container[_ngcontent-%COMP%]   .indizio[_ngcontent-%COMP%]   .stato-indizio.non-selezionabile[_ngcontent-%COMP%] {\n  background-color: gray;\n  color: #ffffff;\n}\n.list-container[_ngcontent-%COMP%]   .indizio[_ngcontent-%COMP%]   .stato-indizio.non-selezionabile[_ngcontent-%COMP%]   .trovalo[_ngcontent-%COMP%] {\n  background-color: gray;\n  color: #ffffff;\n}\n.list-container[_ngcontent-%COMP%]   .indizio[_ngcontent-%COMP%]   .stato-indizio.non-selezionabile[_ngcontent-%COMP%]   .trovalo[_ngcontent-%COMP%]:hover {\n  cursor: not-allowed;\n}\n.list-container[_ngcontent-%COMP%]   .indizio[_ngcontent-%COMP%]   .stato-indizio.collezionato.non-selezionabile[_ngcontent-%COMP%] {\n  background-color: green;\n  color: #ffffff;\n}\n.list-container[_ngcontent-%COMP%]   .indizio.selezionato[_ngcontent-%COMP%] {\n  border: 4px dotted #351d53;\n  justify-content: center;\n}\n.list-container[_ngcontent-%COMP%]   .indizio[_ngcontent-%COMP%]   .cerca[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.trovalo[_ngcontent-%COMP%] {\n  background-color: red;\n  color: #ffffff;\n}\n\n.collezionato[_ngcontent-%COMP%] {\n  background-color: green;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29sbGVjdGlvbnMvY29sbGVjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi8uLi8uLi9MdWlnaSUyMFNlbnphbWljaS9SZXBvL0FSLVByb2plY3RzL0RFTU8lMjBFbmR5bWlvbi9EdW9tb25kby9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2NvbGxlY3Rpb25zL2NvbGxlY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0FKO0FEQ0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NSO0FEQ0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxjRWxCTztFRm1CUCx5QkVwQmU7QURxQnZCO0FEQVE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0VaO0FEQWdCO0VBQ0ksZUFBQTtBQ0VwQjtBRENZO0VBQ0ksc0JBQUE7RUFDQSxjRTlCQztBRCtCakI7QURDZ0I7RUFDSSxzQkFBQTtFQUNBLGNFbENIO0FEbUNqQjtBREFvQjtFQUNJLG1CQUFBO0FDRXhCO0FERVk7RUFDSSx1QkFBQTtFQUNBLGNFMUNDO0FEMENqQjtBREdRO0VBQ0ksMEJBQUE7RUFDQSx1QkFBQTtBQ0RaO0FER1E7RUFDSSxrQkFBQTtBQ0RaOztBRE1BO0VBQ0kscUJBQUE7RUFDQSxjRXpEYTtBRHNEakI7O0FES0E7RUFDSSx1QkFBQTtFQUNBLGNFN0RhO0FEMkRqQiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9jc3MvdmFyaWFibGVzLnNjc3MnO1xyXG4ubGlzdC1jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjo1MHB4IGF1dG8gMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcclxuICAgIC50aXRsZXtcclxuICAgICAgICBtYXJnaW4tdG9wOjEwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDQ4cHhcclxuICAgIH1cclxuICAgIC5pbmRpemlve1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHRleHQtc2Vjb25kYXJ5O1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAycHggJHRleHQtc2Vjb25kYXJ5O1xyXG4gICAgICAgIGNvbG9yOiAkdGV4dC1wcmltYXJ5O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXNlY29uZGFyeTtcclxuICAgICAgICAuc3RhdG8taW5kaXppb3tcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggMTVweDtcclxuICAgICAgICAgICAgLnRyb3ZhbG97XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLm5vbi1zZWxlemlvbmFiaWxle1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkdGV4dC1zZWNvbmRhcnk7XHJcblxyXG4gICAgICAgICAgICAgICAgLnRyb3ZhbG97XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuY29sbGV6aW9uYXRvLm5vbi1zZWxlemlvbmFiaWxle1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICAgICAgICBjb2xvcjokdGV4dC1zZWNvbmRhcnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5zZWxlemlvbmF0b3tcclxuICAgICAgICAgICAgYm9yZGVyOiA0cHggZG90dGVkICRiYWNrZ3JvdW5kLXByaW1hcnk7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VyY2F7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbi50cm92YWxve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgY29sb3I6ICR0ZXh0LXNlY29uZGFyeVxyXG59XHJcbi5jb2xsZXppb25hdG97XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiR0ZXh0LXNlY29uZGFyeVxyXG59IiwiLmxpc3QtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogNTBweCBhdXRvIDA7XG4gIHBhZGRpbmctYm90dG9tOiAxNTBweDtcbn1cbi5saXN0LWNvbnRhaW5lciAudGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQ4cHg7XG59XG4ubGlzdC1jb250YWluZXIgLmluZGl6aW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIG1hcmdpbjogMTVweCAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMnB4ICNmZmZmZmY7XG4gIGNvbG9yOiAjZjRiOTRmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmxpc3QtY29udGFpbmVyIC5pbmRpemlvIC5zdGF0by1pbmRpemlvIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAzcHggMTVweDtcbn1cbi5saXN0LWNvbnRhaW5lciAuaW5kaXppbyAuc3RhdG8taW5kaXppbyAudHJvdmFsbzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5saXN0LWNvbnRhaW5lciAuaW5kaXppbyAuc3RhdG8taW5kaXppby5ub24tc2VsZXppb25hYmlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmxpc3QtY29udGFpbmVyIC5pbmRpemlvIC5zdGF0by1pbmRpemlvLm5vbi1zZWxlemlvbmFiaWxlIC50cm92YWxvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ubGlzdC1jb250YWluZXIgLmluZGl6aW8gLnN0YXRvLWluZGl6aW8ubm9uLXNlbGV6aW9uYWJpbGUgLnRyb3ZhbG86aG92ZXIge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmxpc3QtY29udGFpbmVyIC5pbmRpemlvIC5zdGF0by1pbmRpemlvLmNvbGxlemlvbmF0by5ub24tc2VsZXppb25hYmlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5saXN0LWNvbnRhaW5lciAuaW5kaXppby5zZWxlemlvbmF0byB7XG4gIGJvcmRlcjogNHB4IGRvdHRlZCAjMzUxZDUzO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5saXN0LWNvbnRhaW5lciAuaW5kaXppbyAuY2VyY2Ege1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi50cm92YWxvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNvbGxlemlvbmF0byB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogI2ZmZmZmZjtcbn0iLCIkYnV0dG9uLXByaW1hcnk6IHdoaXRlO1xyXG4kYnV0dG9uLXByaW1hcnktYmFja2dyb3VuZDogIzUyOTc1NjtcclxuXHJcbiRiYWNrZ3JvdW5kLXByaW1hcnk6ICMzNTFkNTM7XHJcbiRiYWNrZ3JvdW5kLXNlY29uZGFyeTogI2ZmZmZmZjtcclxuJHRleHQtcHJpbWFyeTogI2Y0Yjk0ZjtcclxuJHRleHQtc2Vjb25kYXJ5OiAjZmZmZmZmO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4741:
/*!**********************************************************!*\
  !*** ./src/app/pages/collections/collections.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionsService: () => (/* binding */ CollectionsService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;



class CollectionsService {
  constructor(http) {
    this.http = http;
    this.get_collection$ = accountId => this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/collezione/user/${accountId}`);
  }
}
_class = CollectionsService;
_class.ɵfac = function CollectionsService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 424:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/footer/footer.component */ 7913);
var _class;


class HomeComponent {}
_class = HomeComponent;
_class.ɵfac = function HomeComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-home"]],
  decls: 5,
  vars: 0,
  consts: [[1, "row", "mt-5", "flex-column"], [1, "header", "text-center"], [1, "logo-container"], ["src", "../../assets/images/duomondo-logo.png"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4689:
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5357);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2607);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.service */ 5248);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
var _class;






function RegisterComponent_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const anno_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", anno_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](anno_r1);
  }
}
const _c0 = function (a0) {
  return {
    "margin-top": a0
  };
};
const _c1 = function (a0, a1) {
  return {
    "error-message": a0,
    "box-privacy": a1
  };
};
const _c2 = function (a0) {
  return {
    "checked": a0
  };
};
class RegisterComponent {
  constructor(apiService, router) {
    this.apiService = apiService;
    this.router = router;
    this.labelText = `Qual è la tua età`;
    this.anni = [];
    this.currentStep = 0;
    this.hideEta = false;
    this.hideNickName = true;
    this.hidePassword = true;
    this.hidePrivacy = true;
    this.hideButton = false;
    this.showMessage = false;
    this.error = false;
    this.privacy = false;
    this.user = {
      eta: 12,
      nickname: '',
      password: ''
    };
    this.accepPrivacy = false;
    this.message = '';
    this.verifyNickS = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
    this.registerUserS = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
    this.registerUser$ = this.registerUserS.asObservable();
    this.verifyNick$ = this.verifyNickS.asObservable();
    this.showMessage$ = this.verifyNick$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.skip)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(nickname => this.apiService.nicknameIsFree$(nickname)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
      if (response.success == true && response.data == true) this.step();else if (response.message == 'Not Available') {
        this.currentStep -= 2;
        this.step();
        this.message = 'Nickname già in uso';
        this.error = true;
        this.showMessage = true;
      } else {
        this.currentStep -= 2;
        this.step();
        this.message = 'Errore comunicazione, riprova';
        this.error = true;
        this.showMessage = true;
      }
      return response.data;
    })).subscribe(r => r);
    this.userRegistered$ = this.registerUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.skip)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(user => this.apiService.register$(user)), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(response => {
      if (response.success == true) {
        return this.apiService.login$(this.user);
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(response);
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
      if (response.success == true) {
        this.router.navigate(['collections', response.data.id]);
      }
      return response;
    })).subscribe(r => r);
    for (var i = 6; i <= 99; i++) {
      this.anni.push(i);
    }
  }
  onNicknameClick() {
    this.user.nickname = '';
    this.message = '';
    this.showMessage = false;
  }
  onPrivacyClick() {
    this.accepPrivacy = !this.accepPrivacy;
    this.hideButton = !this.accepPrivacy;
  }
  step() {
    this.currentStep++;
    switch (this.currentStep) {
      case 0:
        //start enter eta
        this.labelText = 'Qual è la tua età';
        break;
      case 1:
        // enter nickname
        this.labelText = 'Segli un nickname';
        this.hideEta = true;
        this.hideNickName = false;
        this.error = false;
        this.message = '';
        this.showMessage = false;
        break;
      case 2:
        //verify nickname
        this.verifyNickS.next(this.user.nickname);
        break;
      case 3:
        //password
        this.labelText = 'scegli una password';
        this.hideNickName = true;
        this.hidePassword = false;
        break;
      case 4:
        this.labelText = '';
        this.message = `Informativa sulla privacy \n 
                            durante il gioco con duomondo, duomondo srl raccoglie dati
                            dagli utenti per ottimizzare la loro esperienza di gioco. \n\r
                            I sistemi che raccolgono dati e i motivi per cui vengono
                            raccolti sono indicatgi di seguito: \n`;
        this.hidePassword = true;
        this.hideButton = true;
        this.hidePrivacy = false;
        this.privacy = true;
        this.showMessage = true;
        break;
      case 5:
        this.registerUserS.next(this.user);
        break;
    }
  }
}
_class = RegisterComponent;
_class.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_register_service__WEBPACK_IMPORTED_MODULE_0__.RegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-register"]],
  decls: 19,
  vars: 22,
  consts: [[1, "row", "mt-5", "flex-column"], [1, "header"], [1, "logo-container"], ["src", "../../assets/images/duomondo-logo.png"], [1, "body", 3, "ngStyle"], ["id", "eta", "name", "eta", 3, "ngModel", "hidden", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "name", "nickname", "placeholder", "-------", 3, "ngModel", "hidden", "ngModelChange", "click"], ["type", "password", "name", "password", "placeholder", "-------", 3, "ngModel", "hidden", "ngModelChange"], [3, "ngClass", "hidden"], [1, "checkbox-container", 3, "hidden"], [1, "checkbox-privacy", 3, "ngClass", "click"], [3, "click"], [1, "button-primary", 3, "hidden", "click"], [3, "value"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "select", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_select_ngModelChange_7_listener($event) {
        return ctx.user.eta = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RegisterComponent_option_8_Template, 2, 2, "option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.user.nickname = $event;
      })("click", function RegisterComponent_Template_input_click_9_listener() {
        return ctx.onNicknameClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.user.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10)(14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_div_click_14_listener() {
        return ctx.onPrivacyClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_label_click_15_listener() {
        return ctx.onPrivacyClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Accetto");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_17_listener() {
        return ctx.step();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " invia ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.hideButton ? "50px" : "inherit"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.labelText);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.eta)("hidden", ctx.hideEta);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.anni);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.nickname)("hidden", ctx.hideNickName);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.password)("hidden", ctx.hidePassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](17, _c1, ctx.error, ctx.privacy))("hidden", !ctx.showMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.hidePrivacy);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c2, ctx.accepPrivacy));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.hideButton);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel],
  styles: ["*[_ngcontent-%COMP%] {\n  font-size: 48px;\n  text-transform: uppercase;\n}\n\n.header[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: auto;\n}\n\n.logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n}\n\n.body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 600px;\n  margin: auto;\n  margin-top: 150px;\n  text-align: center;\n}\n.body[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  color: #f4b94f;\n  font-size: 40px;\n}\n.body[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 30px 0;\n  width: 80px;\n  height: 80px;\n  border-radius: 20px;\n  color: #ffffff;\n  border-color: #ffffff;\n  border-width: 3px;\n  background-color: #351d53;\n  -webkit-appearance: none;\n          appearance: none;\n  outline: none;\n  text-align: center;\n}\n.body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body[_ngcontent-%COMP%]   .box-privacy[_ngcontent-%COMP%] {\n  font-size: 35px;\n  color: #f4b94f;\n  background-color: #5b3349;\n  padding: 20px;\n  border-radius: 50px;\n  text-align: left;\n  height: 400px;\n}\n.body[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]   .checkbox-privacy[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 30px 0;\n  width: 80px;\n  height: 80px;\n  border-radius: 20px;\n  border-color: #ffffff;\n  border-width: 3px;\n  border-style: solid;\n}\n.body[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]   .checkbox-privacy.checked[_ngcontent-%COMP%]::after {\n  content: \"V\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 27px;\n}\n.body[_ngcontent-%COMP%]   .checkbox-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi8uLi8uLi9MdWlnaSUyMFNlbnphbWljaS9SZXBvL0FSLVByb2plY3RzL0RFTU8lMjBFbmR5bWlvbi9EdW9tb25kby9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQ1I7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJOztFQUVJLGNFcEJPO0VGcUJQLGVBQUE7QUNFUjtBREFJOztFQUVJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0U1QlM7RUY2QlQscUJFN0JTO0VGOEJULGlCQUFBO0VBQ0EseUJFbENhO0VGbUNiLHdCQUFBO1VBQUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNFUjtBREFJO0VBQ0ksV0FBQTtBQ0VSO0FEQUk7RUFDSSxlQUFBO0VBQ0EsY0UxQ087RUYyQ1AseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNFUjtBREFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VSO0FERFE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJFM0RLO0VGNERMLGlCQUFBO0VBQ0EsbUJBQUE7QUNHWjtBRERnQjtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0dwQjtBREVRO0VBQ0ksY0UxRUs7RUYyRUwsaUJBQUE7QUNBWiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbip7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5sb2dvLWNvbnRhaW5lcntcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgfVxyXG59XHJcbi5ib2R5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGFiZWwsXHJcbiAgICAuZXJyb3ItbWVzc2FnZXtcclxuICAgICAgICBjb2xvcjogJHRleHQtcHJpbWFyeTtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcbiAgICBzZWxlY3QsXHJcbiAgICBpbnB1dHtcclxuICAgICAgICBtYXJnaW46IDMwcHggMDtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBjb2xvcjogJHRleHQtc2Vjb25kYXJ5O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRleHQtc2Vjb25kYXJ5O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXByaW1hcnk7XHJcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOjEwMCVcclxuICAgIH1cclxuICAgIC5ib3gtcHJpdmFjeXtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0LXByaW1hcnk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzViMzM0OTtcclxuICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB9XHJcbiAgICAuY2hlY2tib3gtY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC5jaGVja2JveC1wcml2YWN5e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR0ZXh0LXNlY29uZGFyeTtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICYuY2hlY2tlZHtcclxuICAgICAgICAgICAgICAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdWJztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgIGNvbG9yOiR0ZXh0LXNlY29uZGFyeTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiKiB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhlYWRlciB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxvZ28tY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4uYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib2R5IGxhYmVsLFxuLmJvZHkgLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogI2Y0Yjk0ZjtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuLmJvZHkgc2VsZWN0LFxuLmJvZHkgaW5wdXQge1xuICBtYXJnaW46IDMwcHggMDtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTFkNTM7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib2R5IGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm9keSAuYm94LXByaXZhY3kge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjZjRiOTRmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWIzMzQ5O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuLmJvZHkgLmNoZWNrYm94LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJvZHkgLmNoZWNrYm94LWNvbnRhaW5lciAuY2hlY2tib3gtcHJpdmFjeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAzMHB4IDA7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG4uYm9keSAuY2hlY2tib3gtY29udGFpbmVyIC5jaGVja2JveC1wcml2YWN5LmNoZWNrZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJWXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMjdweDtcbn1cbi5ib2R5IC5jaGVja2JveC1jb250YWluZXIgbGFiZWwge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59IiwiJGJ1dHRvbi1wcmltYXJ5OiB3aGl0ZTtcclxuJGJ1dHRvbi1wcmltYXJ5LWJhY2tncm91bmQ6ICM1Mjk3NTY7XHJcblxyXG4kYmFja2dyb3VuZC1wcmltYXJ5OiAjMzUxZDUzO1xyXG4kYmFja2dyb3VuZC1zZWNvbmRhcnk6ICNmZmZmZmY7XHJcbiR0ZXh0LXByaW1hcnk6ICNmNGI5NGY7XHJcbiR0ZXh0LXNlY29uZGFyeTogI2ZmZmZmZjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5248:
/*!****************************************************!*\
  !*** ./src/app/pages/register/register.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterService: () => (/* binding */ RegisterService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;




class RegisterService {
  constructor(http) {
    this.http = http;
    this.nicknameIsFree$ = nickname => this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/user/nickname/${nickname}`);
    this.register$ = user => this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth/register`, user);
    this.login$ = user => this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth/login`, user, {
      observe: 'response'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
      const tok = resp.headers.get('X-Token');
      localStorage.setItem('jwt', tok);
      localStorage.setItem('user', JSON.stringify({
        id: resp?.body?.data.id,
        nickname: resp?.body?.data.nickName
      }));
      return {
        success: resp?.body?.success,
        data: resp?.body?.data,
        message: resp?.body?.message
      };
    }));
  }
}
_class = RegisterService;
_class.ɵfac = function RegisterService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2333:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
var _class;




class AuthService {
  constructor(http) {
    this.http = http;
    this.accountUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.accountUpdate$ = this.accountUpdate.asObservable();
  }
  isAuthenticated() {
    let jwt = localStorage.getItem('jwt');
    return jwt != null && jwt != undefined;
  }
  saveJWT(jwt) {
    localStorage.setItem('jwt', jwt);
  }
  getJWT() {
    return localStorage.getItem('jwt');
  }
  saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
    this.accountUpdate.next(user);
  }
  getUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
  login(credenziali) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/auth/login', credenziali, {
      observe: 'response'
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(resp => {
      const tok = resp.headers.get('X-Token');
      localStorage.setItem('jwt', tok);
      return resp;
    }));
  }
  register(account) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + '/auth/register', account);
  }
  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    this.accountUpdate.next({});
  }
  saveCredentials(credenziali) {
    localStorage.setItem('credenziali', JSON.stringify(credenziali));
  }
  getCredentials() {
    return JSON.parse(localStorage.getItem('credenziali'));
  }
  sendUpdate(data) {
    this.accountUpdate.next(data);
  }
}
_class = AuthService;
_class.ɵfac = function AuthService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6288:
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageService: () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


class MessageService {
  constructor() {
    this.messageS = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.message$ = this.messageS.asObservable();
  }
  sendMessage(channel, payload) {
    this.messageS.next({
      channel,
      payload
    });
  }
}
_class = MessageService;
_class.ɵfac = function MessageService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'http://localhost:3001/api'
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
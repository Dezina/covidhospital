function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\" routerLink=\"/\">Covid hospitals</a>\n      <button class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myMenu\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div class=\"navbar-collapse collapse\" id=\"myMenu\">\n      <ul class=\"nav navbar-nav\" *ngIf=\"status\">\n        <li><a href=\"#\" routerLink=\"/home\">Home</a></li>\n\n      </ul>\n      <ul class=\"navbar-nav navbar-center nav\" *ngIf=\"dashboard\">\n        <li><a href=\"#\" routerLink=\"/covid\">Dashboard</a></li>\n      </ul>\n      <ul class=\"navbar-nav navbar-right nav\" *ngIf=\"!status\">\n        <li><a href=\"#\" routerLink=\"/login\">Login</a></li>\n      </ul>\n      <ul class=\"navbar-nav navbar-right nav\" *ngIf=\"status\">\n        <li><strong>Hi, {{ username }}</strong></li>\n        <li><a href=\"#\" (click)=\"logout()\">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n\n  <router-outlet></router-outlet>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/batmanhospital/batmanhospital.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/batmanhospital/batmanhospital.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBatmanhospitalBatmanhospitalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-12\" *ngFor=\"let x of patients | batman\">\n        <div class=\"progress progress-striped active\">\n            <div class=\"progress-bar\" style=\"width: 100%\"></div>\n        </div>\n        <h3>Admit Patient</h3>\n        <div class=\"col-md-12 card\">\n            <form (ngSubmit)=\"onSubmit(x)\">\n                <div class=\"form-group col-md-3\">\n                    <label>Id</label>\n                    <input type=\"text\" name=\"id\" class=\"form-control highlight\" [(ngModel)]=\"x._id\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Name</label>\n                    <input type=\"text\" name=\"name\" class=\"form-control highlight\" [(ngModel)]=\"x.name\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Contact</label>\n                    <input type=\"url\" class=\"form-control highlight\" name=\"contact\" [(ngModel)]=\"x.contact\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Address</label>\n                    <input type=\"text\" class=\"form-control highlight\" name=\"address\" [(ngModel)]=\"x.address\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Symptom</label>\n                    <input type=\"text\" class=\"form-control\" name=\"symptom\" [(ngModel)]=\"x.symptom\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Description</label>\n                    <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"x.description\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Pincode</label>\n                    <input type=\"text\" class=\"form-control\" name=\"pincode\" [(ngModel)]=\"x.pincode\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Area</label>\n                    <input type=\"text\" class=\"form-control\" name=\"area\" [(ngModel)]=\"x.area\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Hospital</label>\n                    <input type=\"text\" class=\"form-control highlight\" name=\"hospital\" [(ngModel)]=\"x.hospital\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Ambulance</label>\n                    <input type=\"text\" class=\"form-control highlight\" name=\"ambulance\" [(ngModel)]=\"x.ambulance\"\n                        required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Admitted</label>\n                    <input type=\"text\" class=\"form-control highlight\" name=\"admitted\" [(ngModel)]=\"x.admitted\" required>\n                </div>\n                <div class=\"form-group col-md-3\" style=\"padding-top: 25px;\">\n\n                    <input type=\"submit\" class=\"btn btn-primary\" value=\"Admit Patient\">\n                </div>\n            </form>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/catwomanhospital/catwomanhospital.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catwomanhospital/catwomanhospital.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCatwomanhospitalCatwomanhospitalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-12\" *ngFor=\"let x of patients | catwoman\">\n        <div class=\"progress progress-striped active\">\n            <div class=\"progress-bar\" style=\"width: 100%\"></div>\n        </div>\n        <h3>Admit Patient</h3>\n        <div class=\"col-md-12 card\">\n            <form (ngSubmit)=\"onSubmit(x)\">\n                <div class=\"form-group col-md-3\">\n                    <label>Id</label>\n                    <input type=\"text\" name=\"id\" class=\"form-control highlight\" [(ngModel)]=\"x._id\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Name</label>\n                    <input type=\"text\" name=\"name\" class=\"form-control highlight\" [(ngModel)]=\"x.name\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Contact</label>\n                    <input type=\"url\" class=\"form-control highlight\" name=\"contact\" [(ngModel)]=\"x.contact\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Address</label>\n                    <input type=\"text\" class=\"form-control highlight\" name=\"address\" [(ngModel)]=\"x.address\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Symptom</label>\n                    <input type=\"text\" class=\"form-control\" name=\"symptom\" [(ngModel)]=\"x.symptom\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Description</label>\n                    <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"x.description\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Pincode</label>\n                    <input type=\"text\" class=\"form-control\" name=\"pincode\" [(ngModel)]=\"x.pincode\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Area</label>\n                    <input type=\"text\" class=\"form-control\" name=\"area\" [(ngModel)]=\"x.area\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Hospital</label>\n                    <input type=\"text\" class=\"form-control highlight\" name=\"hospital\" [(ngModel)]=\"x.hospital\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Ambulance</label>\n                    <input type=\"text\" class=\"form-control highlight\" name=\"ambulance\" [(ngModel)]=\"x.ambulance\"\n                        required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Admitted</label>\n                    <input type=\"text\" class=\"form-control highlight\" name=\"admitted\" [(ngModel)]=\"x.admitted\" required>\n                </div>\n                <div class=\"form-group col-md-3\" style=\"padding-top: 25px;\">\n\n                    <input type=\"submit\" class=\"btn btn-primary\" value=\"Admit Patient\">\n                </div>\n            </form>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/covid/covid.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/covid/covid.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCovidCovidComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <mat-tab-group color=\"warn\">\n            <mat-tab label=\"Batman Hospital\" color=\"accent\">\n                <app-batmanhospital></app-batmanhospital>\n            </mat-tab>\n            <mat-tab label=\"Robin Hospital\">\n                <app-robinhospital></app-robinhospital>\n            </mat-tab>\n            <mat-tab label=\"Catwoman Hospital\">\n                <app-catwomanhospital></app-catwomanhospital>\n            </mat-tab>\n            <mat-tab label=\"Superman Hospital\">\n                <app-supermanhospital></app-supermanhospital>\n            </mat-tab>\n        </mat-tab-group>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <mat-toolbar color=\"warn\">Gotham Municipal Corporation &nbsp;&nbsp;&nbsp;<i class=\"far fa-hospital\"\n                style=\"color: yellowgreen; width: 100px;\"></i>&nbsp;&nbsp;&nbsp; covid-19 hospitals\n        </mat-toolbar>\n        <div class=\"col-md-3\">\n            <mat-card>\n                <mat-card-title>Batman Hospital</mat-card-title>\n                <img mat-card-lg-image style=\"width: 230px; height: 200px;\"\n                    src=\"https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2020/03/26/PTI25-03-2020_000136B-min-1585229704.jpg?itok=vJMaG890\">\n            </mat-card>\n        </div>\n        <div class=\"col-md-3\">\n            <mat-card>\n                <mat-card-title>Robin Hospital</mat-card-title>\n                <img mat-card-lg-image style=\"width: 230px; height: 200px;\"\n                    src=\"https://img.etimg.com/thumb/width-640,height-480,imgsize-235749,resizemode-1,msid-75466815/maharashtra-issues-directives-to-hospitals-as-covid-19-cases-mount.jpg\">\n            </mat-card>\n        </div>\n        <div class=\"col-md-3\">\n            <mat-card>\n                <mat-card-title>Catwoman Hospital</mat-card-title>\n                <img mat-card-lg-image style=\"width: 230px; height: 200px;\"\n                    src=\"https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/03/26/11/NHS.jpg?w968h681\">\n            </mat-card>\n        </div>\n        <div class=\"col-md-3\">\n            <mat-card>\n                <mat-card-title>Superman Hospital</mat-card-title>\n                <img mat-card-lg-image style=\"width: 230px; height: 200px;\"\n                    src=\"https://staticblog.virtualvocations.com/2020/04/iStock-1208116440-1030x687.jpg\">\n            </mat-card>\n        </div>\n\n        <div class=\"col-md-8 col-md-offset-2\" style=\"padding: 17px; margin-left: 26%;\">\n            <img mat-card-lg-image style=\"width: 530px; height: 300px;\" class=\"\n            zoom\"\n                src=\"https://img.freepik.com/free-vector/coronavirus-prevention-tips-concept_23-2148500672.jpg?size=626&ext=jpg\">\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\" *ngIf=\"status\">\n    <div class=\"col-md-6 col-md-offset-3\">\n        <h3 class=\"well text-center\">\n            Login\n        </h3>\n        <form #login=\"ngForm\" (ngSubmit)=\"onLogin(login.value)\" autocomplete=\"off\">\n            <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"text\" name=\"username\" ngModel #username=\"ngModel\" class=\"form-control\">\n            </div>\n\n            <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" name=\"password\" ngModel #password=\"ngModel\" class=\"form-control\">\n            </div>\n\n            <div class=\"form-group\">\n                <input type=\"submit\" value=\"Login\" class=\"btn btn-primary\">\n\n                <input (click)=\"toggleStatus()\" class=\"btn btn-default pull-right\" value=\"Signup\">\n                <p style=\"padding: 5px;\" class=\"pull-right\">New User?</p>\n            </div>\n        </form>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"!status\">\n    <div class=\"col-md-8 col-md-offset-2\">\n        <h3 class=\"well text-center\">\n            Sign up\n        </h3>\n        <form #signup=\"ngForm\" (ngSubmit)=\"onSignup(signup.value)\">\n            <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"text\" name=\"username\" ngModel #username=\"ngModel\" class=\"form-control\">\n            </div>\n\n            <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" name=\"password\" ngModel #password=\"ngModel\" class=\"form-control\">\n            </div>\n\n            <div class=\"form-group\">\n                <label>Phone</label>\n                <input type=\"number\" name=\"phone\" ngModel #phone=\"ngModel\" class=\"form-control\">\n            </div>\n\n            <div class=\"form-group\">\n                <input type=\"submit\" value=\"Signup\" class=\"btn btn-info\">\n                <button (click)=\"toggleStatus()\" class=\"btn btn-link\">Login</button>\n            </div>\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/robinhospital/robinhospital.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/robinhospital/robinhospital.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRobinhospitalRobinhospitalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-12\" *ngFor=\"let x of patients | robin\">\n        <div class=\"progress progress-striped active\">\n            <div class=\"progress-bar\" style=\"width: 100%\"></div>\n        </div>\n        <h3>Admit Patient</h3>\n        <div class=\"col-md-12 card\">\n            <form (ngSubmit)=\"onSubmit(x)\">\n                <div class=\"form-group col-md-3\">\n                    <label>Id</label>\n                    <input type=\"text\" name=\"id\" class=\"form-control highlight\" [(ngModel)]=\"x._id\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Name</label>\n                    <input type=\"text\" name=\"name\" class=\"form-control highlight\" [(ngModel)]=\"x.name\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Contact</label>\n                    <input type=\"url\" class=\"form-control highlight\" name=\"contact\" [(ngModel)]=\"x.contact\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Address</label>\n                    <input type=\"text\" class=\"form-control highlight\" name=\"address\" [(ngModel)]=\"x.address\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Symptom</label>\n                    <input type=\"text\" class=\"form-control\" name=\"symptom\" [(ngModel)]=\"x.symptom\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Description</label>\n                    <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"x.description\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Pincode</label>\n                    <input type=\"text\" class=\"form-control\" name=\"pincode\" [(ngModel)]=\"x.pincode\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Area</label>\n                    <input type=\"text\" class=\"form-control\" name=\"area\" [(ngModel)]=\"x.area\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Hospital</label>\n                    <input type=\"text\" class=\"form-control highlight\" name=\"hospital\" [(ngModel)]=\"x.hospital\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Ambulance</label>\n                    <input type=\"text\" class=\"form-control highlight\" name=\"ambulance\" [(ngModel)]=\"x.ambulance\"\n                        required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Admitted</label>\n                    <input type=\"text\" class=\"form-control highlight\" name=\"admitted\" [(ngModel)]=\"x.admitted\" required>\n                </div>\n                <div class=\"form-group col-md-3\" style=\"padding-top: 25px;\">\n\n                    <input type=\"submit\" class=\"btn btn-primary\" value=\"Admit Patient\">\n                </div>\n            </form>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/supermanhospital/supermanhospital.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/supermanhospital/supermanhospital.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSupermanhospitalSupermanhospitalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-12\" *ngFor=\"let x of patients | superman\">\n        <div class=\"progress progress-striped active\">\n            <div class=\"progress-bar\" style=\"width: 100%\"></div>\n        </div>\n        <h3>Admit Patient</h3>\n        <div class=\"col-md-12 card\">\n            <form (ngSubmit)=\"onSubmit(x)\">\n                <div class=\"form-group col-md-3\">\n                    <label>Id</label>\n                    <input type=\"text\" name=\"id\" class=\"form-control highlight\" [(ngModel)]=\"x._id\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Name</label>\n                    <input type=\"text\" name=\"name\" class=\"form-control highlight\" [(ngModel)]=\"x.name\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Contact</label>\n                    <input type=\"url\" class=\"form-control highlight\" name=\"contact\" [(ngModel)]=\"x.contact\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Address</label>\n                    <input type=\"text\" class=\"form-control highlight\" name=\"address\" [(ngModel)]=\"x.address\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Symptom</label>\n                    <input type=\"text\" class=\"form-control\" name=\"symptom\" [(ngModel)]=\"x.symptom\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Description</label>\n                    <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"x.description\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Pincode</label>\n                    <input type=\"text\" class=\"form-control\" name=\"pincode\" [(ngModel)]=\"x.pincode\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Area</label>\n                    <input type=\"text\" class=\"form-control\" name=\"area\" [(ngModel)]=\"x.area\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Hospital</label>\n                    <input type=\"text\" class=\"form-control highlight\" name=\"hospital\" [(ngModel)]=\"x.hospital\" required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Ambulance</label>\n                    <input type=\"text\" class=\"form-control highlight\" name=\"ambulance\" [(ngModel)]=\"x.ambulance\"\n                        required>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label>Admitted</label>\n                    <input type=\"text\" class=\"form-control highlight\" name=\"admitted\" [(ngModel)]=\"x.admitted\" required>\n                </div>\n                <div class=\"form-group col-md-3\" style=\"padding-top: 25px;\">\n\n                    <input type=\"submit\" class=\"btn btn-primary\" value=\"Admit Patient\">\n                </div>\n            </form>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/userpage/userpage.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userpage/userpage.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserpageUserpageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2\">\n            <div class=\"jumbotron\">\n                <h3 class=\"text-center\">\n                    Admit the patient in the nearby hospital\n                </h3>\n            </div>\n\n            <form class=\"form-horizontal\" #patient=\"ngForm\" (ngSubmit)=\"addPatient(patient.value)\" autocomplete=\"off\">\n                <fieldset>\n                    <legend>Patients info</legend>\n                    <div class=\"form-group \">\n                        <label for=\"inputName\" class=\"col-lg-4 control-label\">Name</label>\n                        <div class=\"col-lg-8\">\n                            <input type=\"text\" class=\"form-control\" name=\"name\" ngModel #name=\"ngModel\"\n                                placeholder=\"Name\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"inputContact\" class=\"col-lg-4 control-label\">Contact</label>\n                        <div class=\"col-lg-8\">\n                            <input type=\"text\" class=\"form-control\" name=\"contact\" ngModel #contact=\"ngModel\"\n                                placeholder=\"Phone\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"inputAddress\" class=\"col-lg-4 control-label\">Address</label>\n                        <div class=\"col-lg-8\">\n                            <input type=\"text\" class=\"form-control\" name=\"address\" ngModel #address=\"ngModel\"\n                                placeholder=\"Address\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"select\" class=\"col-lg-4 control-label\">Select any one symptom</label>\n                        <div class=\"col-lg-8\">\n                            <select class=\"form-control\" name=\"symptom\" ngModel #symptom=\"ngModel\"\n                                aria-placeholder=\"Symptom\">\n                                <option>Fever</option>\n                                <option>Breathlessness</option>\n                                <option>Cold</option>\n                                <option>Cough</option>\n                            </select>\n\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"textArea\" class=\"col-lg-4 control-label\">Case description</label>\n                        <div class=\"col-lg-8\">\n                            <textarea class=\"form-control\" rows=\"3\" name=\"description\" ngModel\n                                #description=\"ngModel\"></textarea>\n                            <span class=\"help-block\">Describe the patients condition\n                            </span>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"inputPin\" class=\"col-lg-4 control-label\">Area Pincode</label>\n                        <div class=\"col-lg-8\">\n                            <input type=\"text\" class=\"form-control\" name=\"pincode\" ngModel #pincode=\"ngModel\"\n                                placeholder=\"Nearby area pincode\" (keyup)=\"onKey($event)\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"inputt\" class=\"col-lg-4 control-label\">Area</label>\n                        <div class=\"col-lg-8\">\n                            <input type=\"text\" class=\"form-control\" name=\"area\" [(ngModel)]=\"area\">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"hospital\" class=\"col-lg-4 control-label\">Hospital</label>\n                        <div class=\"col-lg-8\">\n                            <input type=\"text\" class=\"form-control\" name=\"hospital\" [(ngModel)]=\"hospital\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"ambulance\" class=\"col-lg-4 control-label\">Ambulance</label>\n                        <div class=\"col-lg-8\">\n                            <input type=\"text\" class=\"form-control\" name=\"ambulance\" [(ngModel)]=\"ambulance\">\n                        </div>\n                    </div>\n\n                    <!-- <div class=\"form-group\">\n                        <label class=\"col-lg-2 control-label\">Radios</label>\n                        <div class=\"col-lg-10\">\n                            <div class=\"radio\">\n                                <label>\n                                    <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"option1\"\n                                        checked=\"\">\n                                    Option one is this\n                                </label>\n                            </div>\n                            <div class=\"radio\">\n                                <label>\n                                    <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"option2\">\n                                    Option two can be something else\n                                </label>\n                            </div>\n                        </div>\n                    </div> -->\n\n                    <div class=\"form-group\">\n                        <button type=\"reset\" class=\"btn btn-danger\">Cancel</button>\n                        &nbsp;&nbsp;&nbsp;\n                        <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary\">\n                    </div>\n                </fieldset>\n            </form>\n            <!-- <input (keyup)=\"onKey($event)\">\n            <p>{{pin}}</p>\n            <p>{{area}}</p>\n            <p>{{hospital}}</p>\n            <p>{{ambulance}}</p> -->\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _covid_covid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./covid/covid.component */
    "./src/app/covid/covid.component.ts");
    /* harmony import */


    var _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./userpage/userpage.component */
    "./src/app/userpage/userpage.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'userpage',
      component: _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_6__["UserpageComponent"]
    }, {
      path: 'covid',
      component: _covid_covid_component__WEBPACK_IMPORTED_MODULE_5__["CovidComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Covid hospitals';
        this.status = false;
        this.dashboard = false;
        this.username = localStorage.getItem('useremail');
        this.phone = localStorage.getItem('userphone');
        this.auth();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "auth",
        value: function auth() {
          console.log('app', localStorage.getItem('err_code'));
          console.log('app', localStorage.getItem('useremail'));
          console.log('app', localStorage.getItem('userphone'));
          var num = Number(localStorage.getItem('err_code'));

          if (num === 200 && localStorage.getItem('useremail') === 'admin@admin.com') {
            this.dashboard = true;
          }

          if (num === 200) {
            this.status = true;
          } else {
            this.status = false;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('err_code');
          localStorage.removeItem('useremail');
          localStorage.removeItem('userphone');
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _covid_covid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./covid/covid.component */
    "./src/app/covid/covid.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _services_users_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./userpage/userpage.component */
    "./src/app/userpage/userpage.component.ts");
    /* harmony import */


    var _batmanhospital_batmanhospital_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./batmanhospital/batmanhospital.component */
    "./src/app/batmanhospital/batmanhospital.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _pipes_batman_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pipes/batman.pipe */
    "./src/app/pipes/batman.pipe.ts");
    /* harmony import */


    var _pipes_robin_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pipes/robin.pipe */
    "./src/app/pipes/robin.pipe.ts");
    /* harmony import */


    var _pipes_catwoman_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pipes/catwoman.pipe */
    "./src/app/pipes/catwoman.pipe.ts");
    /* harmony import */


    var _pipes_superman_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pipes/superman.pipe */
    "./src/app/pipes/superman.pipe.ts");
    /* harmony import */


    var _robinhospital_robinhospital_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./robinhospital/robinhospital.component */
    "./src/app/robinhospital/robinhospital.component.ts");
    /* harmony import */


    var _catwomanhospital_catwomanhospital_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./catwomanhospital/catwomanhospital.component */
    "./src/app/catwomanhospital/catwomanhospital.component.ts");
    /* harmony import */


    var _supermanhospital_supermanhospital_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./supermanhospital/supermanhospital.component */
    "./src/app/supermanhospital/supermanhospital.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _covid_covid_component__WEBPACK_IMPORTED_MODULE_8__["CovidComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_11__["UserpageComponent"], _batmanhospital_batmanhospital_component__WEBPACK_IMPORTED_MODULE_12__["BatmanhospitalComponent"], _pipes_batman_pipe__WEBPACK_IMPORTED_MODULE_18__["BatmanPipe"], _pipes_robin_pipe__WEBPACK_IMPORTED_MODULE_19__["RobinPipe"], _pipes_catwoman_pipe__WEBPACK_IMPORTED_MODULE_20__["CatwomanPipe"], _pipes_superman_pipe__WEBPACK_IMPORTED_MODULE_21__["SupermanPipe"], _robinhospital_robinhospital_component__WEBPACK_IMPORTED_MODULE_22__["RobinhospitalComponent"], _catwomanhospital_catwomanhospital_component__WEBPACK_IMPORTED_MODULE_23__["CatwomanhospitalComponent"], _supermanhospital_supermanhospital_component__WEBPACK_IMPORTED_MODULE_24__["SupermanhospitalComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"]],
      providers: [_services_users_service__WEBPACK_IMPORTED_MODULE_10__["UsersService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/batmanhospital/batmanhospital.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/batmanhospital/batmanhospital.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBatmanhospitalBatmanhospitalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".highlight {\r\n    background-color: darkkhaki;\r\n}\r\n.card {\r\nbackground-color: rgb(224, 224, 148);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0bWFuaG9zcGl0YWwvYmF0bWFuaG9zcGl0YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvYmF0bWFuaG9zcGl0YWwvYmF0bWFuaG9zcGl0YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWdobGlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2toYWtpO1xyXG59XHJcbi5jYXJkIHtcclxuYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMjI0LCAxNDgpO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/batmanhospital/batmanhospital.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/batmanhospital/batmanhospital.component.ts ***!
    \************************************************************/

  /*! exports provided: BatmanhospitalComponent */

  /***/
  function srcAppBatmanhospitalBatmanhospitalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BatmanhospitalComponent", function () {
      return BatmanhospitalComponent;
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


    var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BatmanhospitalComponent =
    /*#__PURE__*/
    function () {
      function BatmanhospitalComponent(obj, router) {
        _classCallCheck(this, BatmanhospitalComponent);

        this.obj = obj;
        this.router = router;
      }

      _createClass(BatmanhospitalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.obj.getpatients().subscribe(function (res) {
            console.log(res);
            _this.patients = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(data) {
          var _this2 = this;

          console.log(data);
          this.obj.updatepatient(data).subscribe(function (res) {
            console.log(res);

            _this2.router.navigate(['/covid']);
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return BatmanhospitalComponent;
    }();

    BatmanhospitalComponent.ctorParameters = function () {
      return [{
        type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    BatmanhospitalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-batmanhospital',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./batmanhospital.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/batmanhospital/batmanhospital.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./batmanhospital.component.css */
      "./src/app/batmanhospital/batmanhospital.component.css")).default]
    })], BatmanhospitalComponent);
    /***/
  },

  /***/
  "./src/app/catwomanhospital/catwomanhospital.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/catwomanhospital/catwomanhospital.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCatwomanhospitalCatwomanhospitalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".highlight {\r\n    background-color: darkkhaki;\r\n}\r\n.card {\r\nbackground-color: rgb(224, 224, 148);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0d29tYW5ob3NwaXRhbC9jYXR3b21hbmhvc3BpdGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2NhdHdvbWFuaG9zcGl0YWwvY2F0d29tYW5ob3NwaXRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJra2hha2k7XHJcbn1cclxuLmNhcmQge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjQsIDE0OCk7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/catwomanhospital/catwomanhospital.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/catwomanhospital/catwomanhospital.component.ts ***!
    \****************************************************************/

  /*! exports provided: CatwomanhospitalComponent */

  /***/
  function srcAppCatwomanhospitalCatwomanhospitalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatwomanhospitalComponent", function () {
      return CatwomanhospitalComponent;
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


    var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CatwomanhospitalComponent =
    /*#__PURE__*/
    function () {
      function CatwomanhospitalComponent(obj, router) {
        _classCallCheck(this, CatwomanhospitalComponent);

        this.obj = obj;
        this.router = router;
      }

      _createClass(CatwomanhospitalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.obj.getpatients().subscribe(function (res) {
            console.log(res);
            _this3.patients = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(data) {
          var _this4 = this;

          console.log(data);
          this.obj.updatepatient(data).subscribe(function (res) {
            console.log(res);

            _this4.router.navigate(['/covid']);
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return CatwomanhospitalComponent;
    }();

    CatwomanhospitalComponent.ctorParameters = function () {
      return [{
        type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    CatwomanhospitalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-catwomanhospital',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./catwomanhospital.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/catwomanhospital/catwomanhospital.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./catwomanhospital.component.css */
      "./src/app/catwomanhospital/catwomanhospital.component.css")).default]
    })], CatwomanhospitalComponent);
    /***/
  },

  /***/
  "./src/app/covid/covid.component.css":
  /*!*******************************************!*\
    !*** ./src/app/covid/covid.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCovidCovidComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tab {\r\n    background-color: floralwhite;\r\n    font-size: larger;\r\n    color: orangered;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY292aWQvY292aWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY292aWQvY292aWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZmxvcmFsd2hpdGU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/covid/covid.component.ts":
  /*!******************************************!*\
    !*** ./src/app/covid/covid.component.ts ***!
    \******************************************/

  /*! exports provided: CovidComponent */

  /***/
  function srcAppCovidCovidComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CovidComponent", function () {
      return CovidComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CovidComponent =
    /*#__PURE__*/
    function () {
      function CovidComponent() {
        _classCallCheck(this, CovidComponent);
      }

      _createClass(CovidComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CovidComponent;
    }();

    CovidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-covid',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./covid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/covid/covid.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./covid.component.css */
      "./src/app/covid/covid.component.css")).default]
    })], CovidComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".zoom {\r\n  padding: 10px;\r\n  background-color: rgb(157, 218, 157);\r\n  transition: transform .2s; /* Animation */\r\n  width: 160px;\r\n  height: 160px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.zoom:hover {\r\n  transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLHlCQUF5QixFQUFFLGNBQWM7RUFDekMsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCLEVBQUUscUZBQXFGO0FBQzlHIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuem9vbSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU3LCAyMTgsIDE1Nyk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yczsgLyogQW5pbWF0aW9uICovXHJcbiAgd2lkdGg6IDE2MHB4O1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi56b29tOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IC8qICgxNTAlIHpvb20gLSBOb3RlOiBpZiB0aGUgem9vbSBpcyB0b28gbGFyZ2UsIGl0IHdpbGwgZ28gb3V0c2lkZSBvZiB0aGUgdmlld3BvcnQpICovXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(obj, router) {
        _classCallCheck(this, LoginComponent);

        this.obj = obj;
        this.router = router;
        this.status = true;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleStatus",
        value: function toggleStatus() {
          this.status = !this.status;
        }
      }, {
        key: "onLogin",
        value: function onLogin(data) {
          var _this5 = this;

          console.log(data);
          this.obj.userLogin(data).subscribe(function (res) {
            console.log(res);
            localStorage.setItem("useremail", res.data.email);
            localStorage.setItem("userphone", res.data.phone);
            localStorage.setItem('err_code', res.error_code);
            console.log('err_code', localStorage.getItem('err_code'));

            if (res.data.email === 'admin@admin.com') {
              console.log('Ambulance driver', data);

              _this5.router.navigate(['/covid']);
            } else {
              console.log('user', data);

              _this5.router.navigate(['/userpage']);
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onSignup",
        value: function onSignup(data) {
          var _this6 = this;

          console.log(data);
          this.obj.userSignup(data).subscribe(function (res) {
            console.log(res);

            _this6.router.navigate(['/']);
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pipes/batman.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/batman.pipe.ts ***!
    \**************************************/

  /*! exports provided: BatmanPipe */

  /***/
  function srcAppPipesBatmanPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BatmanPipe", function () {
      return BatmanPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BatmanPipe =
    /*#__PURE__*/
    function () {
      function BatmanPipe() {
        _classCallCheck(this, BatmanPipe);
      }

      _createClass(BatmanPipe, [{
        key: "transform",
        value: function transform(data) {
          if (!data) return [];
          return data.filter(function (it) {
            return it.hospital.includes('Batman Hospital');
          });
        }
      }]);

      return BatmanPipe;
    }();

    BatmanPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'batman'
    })], BatmanPipe);
    /***/
  },

  /***/
  "./src/app/pipes/catwoman.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipes/catwoman.pipe.ts ***!
    \****************************************/

  /*! exports provided: CatwomanPipe */

  /***/
  function srcAppPipesCatwomanPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatwomanPipe", function () {
      return CatwomanPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CatwomanPipe =
    /*#__PURE__*/
    function () {
      function CatwomanPipe() {
        _classCallCheck(this, CatwomanPipe);
      }

      _createClass(CatwomanPipe, [{
        key: "transform",
        value: function transform(data) {
          if (!data) return [];
          return data.filter(function (it) {
            return it.hospital.includes('Catwoman Hospital');
          });
        }
      }]);

      return CatwomanPipe;
    }();

    CatwomanPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'catwoman'
    })], CatwomanPipe);
    /***/
  },

  /***/
  "./src/app/pipes/robin.pipe.ts":
  /*!*************************************!*\
    !*** ./src/app/pipes/robin.pipe.ts ***!
    \*************************************/

  /*! exports provided: RobinPipe */

  /***/
  function srcAppPipesRobinPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RobinPipe", function () {
      return RobinPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RobinPipe =
    /*#__PURE__*/
    function () {
      function RobinPipe() {
        _classCallCheck(this, RobinPipe);
      }

      _createClass(RobinPipe, [{
        key: "transform",
        value: function transform(data) {
          if (!data) return [];
          return data.filter(function (it) {
            return it.hospital.includes('Robin Hospital');
          });
        }
      }]);

      return RobinPipe;
    }();

    RobinPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'robin'
    })], RobinPipe);
    /***/
  },

  /***/
  "./src/app/pipes/superman.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/pipes/superman.pipe.ts ***!
    \****************************************/

  /*! exports provided: SupermanPipe */

  /***/
  function srcAppPipesSupermanPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupermanPipe", function () {
      return SupermanPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SupermanPipe =
    /*#__PURE__*/
    function () {
      function SupermanPipe() {
        _classCallCheck(this, SupermanPipe);
      }

      _createClass(SupermanPipe, [{
        key: "transform",
        value: function transform(data) {
          if (!data) return [];
          return data.filter(function (it) {
            return it.hospital.includes('Superman Hospital');
          });
        }
      }]);

      return SupermanPipe;
    }();

    SupermanPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'superman'
    })], SupermanPipe);
    /***/
  },

  /***/
  "./src/app/robinhospital/robinhospital.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/robinhospital/robinhospital.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRobinhospitalRobinhospitalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".highlight {\r\n    background-color: darkkhaki;\r\n}\r\n.card {\r\nbackground-color: rgb(224, 224, 148);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9iaW5ob3NwaXRhbC9yb2Jpbmhvc3BpdGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL3JvYmluaG9zcGl0YWwvcm9iaW5ob3NwaXRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJra2hha2k7XHJcbn1cclxuLmNhcmQge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjQsIDE0OCk7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/robinhospital/robinhospital.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/robinhospital/robinhospital.component.ts ***!
    \**********************************************************/

  /*! exports provided: RobinhospitalComponent */

  /***/
  function srcAppRobinhospitalRobinhospitalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RobinhospitalComponent", function () {
      return RobinhospitalComponent;
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


    var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RobinhospitalComponent =
    /*#__PURE__*/
    function () {
      function RobinhospitalComponent(obj, router) {
        _classCallCheck(this, RobinhospitalComponent);

        this.obj = obj;
        this.router = router;
      }

      _createClass(RobinhospitalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.obj.getpatients().subscribe(function (res) {
            console.log(res);
            _this7.patients = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(data) {
          var _this8 = this;

          console.log(data);
          this.obj.updatepatient(data).subscribe(function (res) {
            console.log(res);

            _this8.router.navigate(['/covid']);
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return RobinhospitalComponent;
    }();

    RobinhospitalComponent.ctorParameters = function () {
      return [{
        type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    RobinhospitalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-robinhospital',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./robinhospital.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/robinhospital/robinhospital.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./robinhospital.component.css */
      "./src/app/robinhospital/robinhospital.component.css")).default]
    })], RobinhospitalComponent);
    /***/
  },

  /***/
  "./src/app/services/users.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/users.service.ts ***!
    \*******************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppServicesUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
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

    var UsersService =
    /*#__PURE__*/
    function () {
      function UsersService(http) {
        _classCallCheck(this, UsersService);

        this.http = http;
        this.url = 'https://covidrestapi.herokuapp.com';
      }

      _createClass(UsersService, [{
        key: "userSignup",
        value: function userSignup(data) {
          var body = {
            email: data.username,
            password: data.password,
            phone: data.phone
          };
          return this.http.post(this.url + '/covid/api/users/signup', body);
        }
      }, {
        key: "userLogin",
        value: function userLogin(data) {
          var body = {
            email: data.username,
            password: data.password
          };
          return this.http.post(this.url + '/covid/api/users/login', body);
        }
      }, {
        key: "addPatient",
        value: function addPatient(data) {
          var body = {
            name: data.name,
            contact: data.contact,
            address: data.address,
            symptom: data.symptom,
            description: data.description,
            pincode: data.pincode,
            area: data.area,
            hospital: data.hospital,
            ambulance: data.ambulance
          };
          return this.http.post(this.url + '/covid/api/addpatient', body);
        }
      }, {
        key: "getpatients",
        value: function getpatients() {
          return this.http.get(this.url + '/covid/api/patients');
        }
      }, {
        key: "updatepatient",
        value: function updatepatient(data) {
          var body = {
            _id: data._id,
            name: data.name,
            contact: data.contact,
            address: data.address,
            symptom: data.symptom,
            description: data.description,
            pincode: data.pincode,
            area: data.area,
            hospital: data.hospital,
            ambulance: data.ambulance,
            admitted: data.admitted
          };
          return this.http.patch(this.url + '/covid/api/updatepatient/:_id', body);
        }
      }]);

      return UsersService;
    }();

    UsersService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UsersService);
    /***/
  },

  /***/
  "./src/app/supermanhospital/supermanhospital.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/supermanhospital/supermanhospital.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSupermanhospitalSupermanhospitalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".highlight {\r\n    background-color: darkkhaki;\r\n}\r\n.card {\r\nbackground-color: rgb(224, 224, 148);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwZXJtYW5ob3NwaXRhbC9zdXBlcm1hbmhvc3BpdGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL3N1cGVybWFuaG9zcGl0YWwvc3VwZXJtYW5ob3NwaXRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJra2hha2k7XHJcbn1cclxuLmNhcmQge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI0LCAyMjQsIDE0OCk7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/supermanhospital/supermanhospital.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/supermanhospital/supermanhospital.component.ts ***!
    \****************************************************************/

  /*! exports provided: SupermanhospitalComponent */

  /***/
  function srcAppSupermanhospitalSupermanhospitalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupermanhospitalComponent", function () {
      return SupermanhospitalComponent;
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


    var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SupermanhospitalComponent =
    /*#__PURE__*/
    function () {
      function SupermanhospitalComponent(obj, router) {
        _classCallCheck(this, SupermanhospitalComponent);

        this.obj = obj;
        this.router = router;
      }

      _createClass(SupermanhospitalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.obj.getpatients().subscribe(function (res) {
            console.log(res);
            _this9.patients = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(data) {
          var _this10 = this;

          console.log(data);
          this.obj.updatepatient(data).subscribe(function (res) {
            console.log(res);

            _this10.router.navigate(['/covid']);
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return SupermanhospitalComponent;
    }();

    SupermanhospitalComponent.ctorParameters = function () {
      return [{
        type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SupermanhospitalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-supermanhospital',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./supermanhospital.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/supermanhospital/supermanhospital.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./supermanhospital.component.css */
      "./src/app/supermanhospital/supermanhospital.component.css")).default]
    })], SupermanhospitalComponent);
    /***/
  },

  /***/
  "./src/app/userpage/userpage.component.css":
  /*!*************************************************!*\
    !*** ./src/app/userpage/userpage.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserpageUserpageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJwYWdlL3VzZXJwYWdlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/userpage/userpage.component.ts":
  /*!************************************************!*\
    !*** ./src/app/userpage/userpage.component.ts ***!
    \************************************************/

  /*! exports provided: UserpageComponent */

  /***/
  function srcAppUserpageUserpageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserpageComponent", function () {
      return UserpageComponent;
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


    var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserpageComponent =
    /*#__PURE__*/
    function () {
      function UserpageComponent(obj, router) {
        _classCallCheck(this, UserpageComponent);

        this.obj = obj;
        this.router = router;
        this.pin = '';
        this.batman = ['AMB1', 'AMB2'];
        this.catwoman = ['AMC1', 'AMC2'];
        this.superman = ['AMS1', 'AMS2'];
      }

      _createClass(UserpageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //check if there is no user logged in
          if (localStorage.getItem('err_code') === null && localStorage.getItem('useremail') === null) {
            this.router.navigate(['/login']);
          }
        }
      }, {
        key: "shuffle",
        value: function shuffle(array) {
          var currentIndex = array.length,
              temporaryValue,
              randomIndex;

          while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array[0];
        }
      }, {
        key: "onKey",
        value: function onKey(event) {
          this.pin = event.target.value;

          if (this.pin === '403200') {
            this.area = 'North';
            this.hospital = 'Batman Hospital';
            this.ambulance = this.shuffle(this.batman);
          } else if (this.pin === '403201') {
            this.area = 'East';
            this.hospital = 'Robin Hospital';
            this.ambulance = 'AMR1';
          } else if (this.pin === '403202') {
            this.area = 'South';
            this.hospital = 'Catwoman Hospital';
            this.ambulance = this.shuffle(this.catwoman);
          } else if (this.pin === '403203') {
            this.area = 'West';
            this.hospital = 'Superman Hospital';
            this.ambulance = this.shuffle(this.superman);
          }
        }
      }, {
        key: "addPatient",
        value: function addPatient(data) {
          var _this11 = this;

          console.log(data);
          this.obj.addPatient(data).subscribe(function (res) {
            console.log(res);
            alert(res.message);

            _this11.router.navigate(['/dashboard']);
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return UserpageComponent;
    }();

    UserpageComponent.ctorParameters = function () {
      return [{
        type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    UserpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userpage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./userpage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/userpage/userpage.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./userpage.component.css */
      "./src/app/userpage/userpage.component.css")).default]
    })], UserpageComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Angular8\NgCovid-19\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
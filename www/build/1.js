webpackJsonp([1],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProfileAddressModule\", function() { return ProfileAddressModule; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_address__ = __webpack_require__(335);\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\n\nvar ProfileAddressModule = /** @class */ (function () {\n    function ProfileAddressModule() {\n    }\n    ProfileAddressModule = __decorate([\n        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"I\" /* NgModule */])({\n            declarations: [\n                __WEBPACK_IMPORTED_MODULE_2__profile_address__[\"a\" /* ProfileAddressPage */],\n            ],\n            imports: [\n                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__[\"f\" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_address__[\"a\" /* ProfileAddressPage */])\n            ],\n            exports: [\n                __WEBPACK_IMPORTED_MODULE_2__profile_address__[\"a\" /* ProfileAddressPage */]\n            ]\n        })\n    ], ProfileAddressModule);\n    return ProfileAddressModule;\n}());\n\n//# sourceMappingURL=profile-address.module.js.map\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/modules/profile/profile-address/profile-address.module.ts\n// module id = 315\n// module chunks = 1\n\n//# sourceURL=/Users/sandebtech/www/open_source/ionic-hospicare/src/app/modules/profile/profile-address/profile-address.module.ts");

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BasePage; });\nvar BasePage = /** @class */ (function () {\n    function BasePage(navCtrl, toastCtrl, loginRequired) {\n        if (loginRequired === void 0) { loginRequired = true; }\n        this.navCtrl = navCtrl;\n        this.toastCtrl = toastCtrl;\n        this.loginRequired = true;\n        if (localStorage['email']) {\n            if (!loginRequired)\n                this.navCtrl.push('PatientHomepage');\n        }\n        else if (loginRequired)\n            this.navCtrl.push('LoginPage');\n    }\n    //toast message\n    BasePage.prototype.presentToast = function (message) {\n        var toast = this.toastCtrl.create({\n            message: message,\n            duration: 5000,\n            position: 'top'\n        });\n        toast.present();\n    };\n    BasePage.prototype.ionViewDidEnter = function () {\n    };\n    BasePage.prototype.ionViewWillLeave = function () {\n    };\n    return BasePage;\n}());\n\n//# sourceMappingURL=base-page.js.map\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/core/base-page.ts\n// module id = 318\n// module chunks = 0 1 2 3 4 5 6 7 8 9\n\n//# sourceURL=/Users/sandebtech/www/open_source/ionic-hospicare/src/app/core/base-page.ts");

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Patient; });\nvar Patient = /** @class */ (function () {\n    function Patient() {\n        this.firstName = \"\";\n        this.lastName = \"\";\n        this.email = \"\";\n        this.phone = \"\";\n        this.id = \"\";\n        this.medicalProfile = {\n            gender: \"\",\n            birthDate: \"\",\n            bloodGroup: \"\",\n            height: \"\",\n            weight: \"\",\n            allergies: \"\",\n            medicalHistory: \"\"\n        };\n    }\n    return Patient;\n}());\n\n//# sourceMappingURL=patients.js.map\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/models/patient/patients.ts\n// module id = 319\n// module chunks = 1 2 3\n\n//# sourceURL=/Users/sandebtech/www/open_source/ionic-hospicare/src/app/models/patient/patients.ts");

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Address; });\nvar Address = /** @class */ (function () {\n    function Address() {\n        this.state = \"\";\n        this.city = \"\";\n        this.locality = \"\";\n        this.address = \"\";\n        this.street = \"\";\n        this.zipcode = \"\";\n        this.lat = \"\";\n        this.lng = \"\";\n        this.tag = \"\";\n        this.id = \"\";\n        this.patientId = \"\";\n    }\n    return Address;\n}());\n\n//# sourceMappingURL=address.js.map\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/models/patient/address.ts\n// module id = 321\n// module chunks = 0 1\n\n//# sourceURL=/Users/sandebtech/www/open_source/ionic-hospicare/src/app/models/patient/address.ts");

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ProfileAddressPage; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_patient_abstract_patient__ = __webpack_require__(54);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_models_patient_address__ = __webpack_require__(321);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_patient_patients__ = __webpack_require__(319);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_core_base_page__ = __webpack_require__(318);\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\n\n\n\n\n\n\nvar ProfileAddressPage = /** @class */ (function (_super) {\n    __extends(ProfileAddressPage, _super);\n    function ProfileAddressPage(navCtrl, toastCtrl, navParams, patientService) {\n        var _this = _super.call(this, navCtrl, toastCtrl) || this;\n        _this.navCtrl = navCtrl;\n        _this.toastCtrl = toastCtrl;\n        _this.navParams = navParams;\n        _this.patientService = patientService;\n        _this.address = new __WEBPACK_IMPORTED_MODULE_3__app_models_patient_address__[\"a\" /* Address */]();\n        _this.patient = new __WEBPACK_IMPORTED_MODULE_4__app_models_patient_patients__[\"a\" /* Patient */]();\n        if (navParams.get('data')) {\n            _this.address = navParams.get('data');\n        }\n        return _this;\n    }\n    ProfileAddressPage.prototype.ionViewDidLoad = function () {\n        var patientDetails = localStorage.getItem('patient');\n        if (patientDetails) {\n            this.patient = JSON.parse(patientDetails);\n        }\n    };\n    ProfileAddressPage.prototype.goToHomepage = function () {\n        this.navCtrl.push('PatientHomepage');\n    };\n    ProfileAddressPage.prototype.goToMyContactsPage = function () {\n        this.navCtrl.push('ProfileContactsPage');\n    };\n    ProfileAddressPage.prototype.saveAddressDetails = function () {\n        var _this = this;\n        if (this.address.tag === '') {\n            this.presentToast('Tag is required.');\n            return;\n        }\n        if (this.address.locality === '') {\n            this.presentToast('Locality is required.');\n            return;\n        }\n        if (this.address.state === '') {\n            this.presentToast('State is required.');\n            return;\n        }\n        if (this.address.city === '') {\n            this.presentToast('City is required.');\n            return;\n        }\n        if (this.address.street === '') {\n            this.presentToast('Street is required.');\n            return;\n        }\n        if (this.address.address === '') {\n            this.presentToast('Address is required.');\n            return;\n        }\n        if (this.address.zipcode === '') {\n            this.presentToast('Zipcode is required.');\n            return;\n        }\n        this.patientService.addUpdateAddress(this.address, this.patient.id).subscribe(function (resp) {\n            if (resp.errors) {\n                _this.presentToast(resp.errors[0].message);\n            }\n            else {\n                _this.presentToast(resp.message);\n                var userAddresses = localStorage.getItem('addresses');\n                if (userAddresses) {\n                    var addresses = JSON.parse(userAddresses);\n                    var addrIndex = addresses.findIndex(function (addr) { return addr.id == resp.data.id; });\n                    if (addrIndex > -1) {\n                        addresses[addrIndex] = resp.data;\n                    }\n                    else {\n                        addresses.push(resp.data);\n                    }\n                    localStorage.setItem('addresses', JSON.stringify(addresses));\n                    console.log(\"After updating addresses in local storage \", localStorage.getItem('addresses'));\n                }\n            }\n        });\n    };\n    ProfileAddressPage = __decorate([\n        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"m\" /* Component */])({\n            selector: 'page-profile-address',template:/*ion-inline-start:\"/Users/sandebtech/www/open source/ionic-hospicare/src/app/modules/profile/profile-address/profile-address.html\"*/'<ion-header no-shadow>\\n\t<ion-row class=\"header-background\">\\n\t\t<ion-col>\\n\t\t\t<ion-navbar hideBackButton=\"true\">\\n\t        \t<ion-title class=\" \">Profile</ion-title>\\n\t    \t</ion-navbar>\\n\t\t</ion-col>\\n\t\t<ion-col>\\n\t\t    <div class=\"align\">\\n\t\t   \t\t<img src=\"assets/img/Menu.png\" class=\"icon\" (click)=\"goToMyProfilePage()\">\\n\t\t    </div>\\n\t\t</ion-col>\\n\t</ion-row>\\n</ion-header>\t\\n\\n<ion-content padding-top class=\"profile\">\\n\\n\t<div class=\" horizon-line\">\\n\t\t<ion-label class=\"profile-display font\" >Address</ion-label>\\n\t\t<img src=\"../../assets/img/profile/Edit.png\" class=\"profile-icon contact-profile\">\\n\t</div>\\n\\n\t<div class=\"margin horizon-line\" >\\n\t\t<ion-select class=\"dropdown-width\" [(ngModel)]=\"address.tag\" placeholder=\"Address belongs to\">\\n\t\t    <ion-option value=\"Home\">Home</ion-option>\\n\t\t    <ion-option value=\"Office\">Office</ion-option>\\n\t\t    <ion-option value=\"Other\">Other</ion-option>\\n\t\t</ion-select>\\n\t</div>\\n\\n\t<div class=\"margin horizon-line\" >\\n\t\t<ion-select class=\"dropdown-width\" [(ngModel)]=\"address.state\" placeholder=\"State\">\\n\t\t    <ion-option value=\"Assam\">Assam</ion-option>\\n\t\t    <ion-option value=\"Bihar\">Bihar</ion-option>\\n\t\t    <ion-option value=\"UP\">Uttar Pradesh</ion-option>\\n\t\t    <ion-option value=\"Tamil Nadu\">Tamil Nadu</ion-option>\\n\t\t    <ion-option value=\"Karnataka\">Karnataka</ion-option>\\n\t\t    <ion-option value=\"Kerala\">Kerala</ion-option>\\n\t\t</ion-select>\\n\t</div>\\n\\n\t<div class=\"margin horizon-line\" >\\n\t\t<div class=\" margin\">\\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"address.city\" placeholder=\"City\" class=\"margin\"></ion-input>\\n\t\t</div>\\n\t</div>\\n\\n\t<div class=\"margin horizon-line\" >\\n\t\t<div class=\" margin\">\\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"address.zipcode\" placeholder=\"zipcode\" class=\"margin\"></ion-input>\\n\t\t</div>\\n\t</div>\\n\\n\t<div class=\"margin horizon-line\" >\\n\t\t<div class=\" margin\">\\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"address.locality\" placeholder=\"Locality\" class=\"margin\"></ion-input>\\n\t\t</div>\\n\t</div>\\n\\n\t<div class=\"margin horizon-line\" >\\n\t\t<div class=\" margin\">\\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"address.street\" placeholder=\"Street\" class=\"margin\"></ion-input>\\n\t\t</div>\\n\t</div>\\n\t\\n\t<div class=\"margin horizon-line\" >\\n\t\t<div class=\" margin\">\\n\t\t\t<ion-input type=\"text\" [(ngModel)]=\"address.address\" placeholder=\"Address\" class=\"margin\"></ion-input>\\n\t\t</div>\\n\t</div>\\n\\n</ion-content>\\n\\n<ion-footer no-shadow>\\n\t<ion-toolbar position=\"bottom\">\\n\t\t<ion-row>\\n\t\t\t<ion-col>\\n\t\t\t\t<button ion-button color=\"primary\" block (click)=\"goToMyContactsPage()\">Back</button>\\n\t\t\t</ion-col>\\n\t\t\t<ion-col>\\n\t\t\t\t<button ion-button color=\"primary\" block (click)=\"saveAddressDetails()\">Save</button>\\n\t\t\t</ion-col>\\n\t\t</ion-row>\\n\t</ion-toolbar>\\n</ion-footer>'/*ion-inline-end:\"/Users/sandebtech/www/open source/ionic-hospicare/src/app/modules/profile/profile-address/profile-address.html\"*/\n        }),\n        __metadata(\"design:paramtypes\", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__[\"h\" /* NavController */],\n            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__[\"k\" /* ToastController */],\n            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__[\"i\" /* NavParams */],\n            __WEBPACK_IMPORTED_MODULE_2__app_services_patient_abstract_patient__[\"a\" /* AbstractPatientService */]])\n    ], ProfileAddressPage);\n    return ProfileAddressPage;\n}(__WEBPACK_IMPORTED_MODULE_5__app_core_base_page__[\"a\" /* BasePage */]));\n\n//# sourceMappingURL=profile-address.js.map\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/modules/profile/profile-address/profile-address.ts\n// module id = 335\n// module chunks = 1\n\n//# sourceURL=/Users/sandebtech/www/open_source/ionic-hospicare/src/app/modules/profile/profile-address/profile-address.ts");

/***/ })

});
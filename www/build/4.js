webpackJsonp([4],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddMembers1Module\", function() { return AddMembers1Module; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_members1__ = __webpack_require__(329);\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\n\nvar AddMembers1Module = /** @class */ (function () {\n    function AddMembers1Module() {\n    }\n    AddMembers1Module = __decorate([\n        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"I\" /* NgModule */])({\n            declarations: [\n                __WEBPACK_IMPORTED_MODULE_2__add_members1__[\"a\" /* AddMembersPage1 */],\n            ],\n            imports: [\n                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__[\"f\" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_members1__[\"a\" /* AddMembersPage1 */])\n            ],\n            exports: [\n                __WEBPACK_IMPORTED_MODULE_2__add_members1__[\"a\" /* AddMembersPage1 */]\n            ]\n        })\n    ], AddMembers1Module);\n    return AddMembers1Module;\n}());\n\n//# sourceMappingURL=add-members1.module.js.map\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/modules/members/add-members1/add-members1.module.ts\n// module id = 310\n// module chunks = 4\n\n//# sourceURL=/Users/sandebtech/www/open_source/ionic-hospicare/src/app/modules/members/add-members1/add-members1.module.ts");

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BasePage; });\nvar BasePage = /** @class */ (function () {\n    function BasePage(navCtrl, toastCtrl, loginRequired) {\n        if (loginRequired === void 0) { loginRequired = true; }\n        this.navCtrl = navCtrl;\n        this.toastCtrl = toastCtrl;\n        this.loginRequired = true;\n        if (localStorage['email']) {\n            if (!loginRequired)\n                this.navCtrl.push('PatientHomepage');\n        }\n        else if (loginRequired)\n            this.navCtrl.push('LoginPage');\n    }\n    //toast message\n    BasePage.prototype.presentToast = function (message) {\n        var toast = this.toastCtrl.create({\n            message: message,\n            duration: 5000,\n            position: 'top'\n        });\n        toast.present();\n    };\n    BasePage.prototype.ionViewDidEnter = function () {\n    };\n    BasePage.prototype.ionViewWillLeave = function () {\n    };\n    return BasePage;\n}());\n\n//# sourceMappingURL=base-page.js.map\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/core/base-page.ts\n// module id = 318\n// module chunks = 0 1 2 3 4 5 6 7 8 9\n\n//# sourceURL=/Users/sandebtech/www/open_source/ionic-hospicare/src/app/core/base-page.ts");

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return AddMembersPage1; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_patient_abstract_member__ = __webpack_require__(110);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_models_patient_members__ = __webpack_require__(330);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_base_page__ = __webpack_require__(318);\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = Object.setPrototypeOf ||\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\n\n\n\n\n\nvar AddMembersPage1 = /** @class */ (function (_super) {\n    __extends(AddMembersPage1, _super);\n    function AddMembersPage1(navCtrl, toastCtrl, navParams, memberService) {\n        var _this = _super.call(this, navCtrl, toastCtrl) || this;\n        _this.navCtrl = navCtrl;\n        _this.toastCtrl = toastCtrl;\n        _this.navParams = navParams;\n        _this.memberService = memberService;\n        _this.member = new __WEBPACK_IMPORTED_MODULE_3__app_models_patient_members__[\"a\" /* Member */]();\n        if (navParams.get('data')) {\n            var memberInfo = navParams.get('data');\n            if (memberInfo.birthDate)\n                memberInfo.birthDate = new Date(memberInfo.birthDate).toISOString();\n            else\n                memberInfo.birthDate = new Date().toISOString();\n            _this.member = memberInfo;\n            console.log(\"Member recieved from members page \", _this.member);\n        }\n        return _this;\n    }\n    AddMembersPage1.prototype.ionViewDidLoad = function () {\n        var patientDetails = localStorage.getItem('patient');\n        if (patientDetails) {\n            this.patientProfile = JSON.parse(patientDetails);\n        }\n    };\n    AddMembersPage1.prototype.goToAddMemberPage = function () {\n        var _this = this;\n        if (this.member.firstName === '') {\n            this.presentToast('First name is required.');\n            return;\n        }\n        if (this.member.relationship === '') {\n            this.presentToast('Relationship is required.');\n            return;\n        }\n        if (this.member.gender === '') {\n            this.presentToast('Gender is required.');\n            return;\n        }\n        if (this.member.birthDate === '') {\n            this.presentToast('Birth Date is required.');\n            return;\n        }\n        if (this.member.bloodGroup === '') {\n            this.presentToast('Blood Group is required.');\n            return;\n        }\n        if (this.member.height === '') {\n            this.presentToast('Height is required.');\n            return;\n        }\n        if (this.member.weight === '') {\n            this.presentToast('Weight is required.');\n            return;\n        }\n        if (this.member.patientId && this.member.id) {\n            console.log(\"Updating member details \", this.member);\n            this.updateMemberDetails();\n        }\n        else {\n            console.log(\"Creating member details \", this.member);\n            this.createMemberProfile();\n        }\n        var allMembers = localStorage.getItem('members');\n        if (allMembers) {\n            var members = JSON.parse(allMembers);\n            var memIndex = members.findIndex(function (member) { return member.id == _this.member.id; });\n            if (memIndex > -1) {\n                members[memIndex] = this.member;\n            }\n            else {\n                members.push(this.member);\n            }\n            localStorage.setItem('members', JSON.stringify(members));\n            console.log(\"After updating members in local storage \", localStorage.getItem('members'));\n        }\n        this.navCtrl.push('MembersListPage', {\n            data: this.member\n        });\n    };\n    AddMembersPage1.prototype.updateMemberDetails = function () {\n        var _this = this;\n        this.memberService.updateMemberDetails(this.member, this.patientProfile.id, this.member.id).subscribe(function (resp) {\n            if (resp.errors) {\n                _this.presentToast(resp.errors[0].message);\n            }\n            else {\n                _this.memberService.updateMemberMedicalProfile(_this.member, _this.patientProfile.id, _this.member.id).subscribe(function (resp) {\n                    if (resp.errors) {\n                        _this.presentToast(resp.errors[0].message);\n                    }\n                    else {\n                        _this.presentToast(resp.message);\n                    }\n                });\n            }\n        });\n    };\n    AddMembersPage1.prototype.createMemberProfile = function () {\n        var _this = this;\n        this.memberService.addMember(this.member, this.patientProfile.id).subscribe(function (resp) {\n            if (resp.errors) {\n                _this.presentToast(resp.errors[0].message);\n            }\n            else {\n                console.log(\"Response in create member profile \", resp);\n                _this.member.id = resp.data.id;\n                _this.member.patientId = _this.patientProfile.id;\n                _this.memberService.updateMemberMedicalProfile(_this.member, _this.patientProfile.id, resp.id).subscribe(function (resp) {\n                    if (resp.errors) {\n                        _this.presentToast(resp.errors[0].message);\n                    }\n                    else {\n                        _this.presentToast(resp.message);\n                    }\n                });\n            }\n        });\n    };\n    AddMembersPage1.prototype.goToMyProfilePage = function () {\n        this.navCtrl.push('MyProfilePage');\n    };\n    AddMembersPage1 = __decorate([\n        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"m\" /* Component */])({\n            selector: 'page-add-members1',template:/*ion-inline-start:\"/Users/sandebtech/www/open source/ionic-hospicare/src/app/modules/members/add-members1/add-members1.html\"*/'<ion-header no-shadow>\\n\t<ion-row class=\"header-background\">\\n\t\t<ion-col>\\n\t\t\t<ion-navbar hideBackButton=\"true\">\\n\t        \t<ion-title class=\" \">Members</ion-title>\\n\t    \t</ion-navbar>\\n\t\t</ion-col>\\n\t\t<ion-col>\\n\t\t    <div class=\"align\">\\n\t\t   \t\t<img src=\"assets/img/Menu.png\" class=\"icon\" (click)=\"goToMyProfilePage()\">\\n\t\t    </div>\\n\t\t</ion-col>\\n\t</ion-row>\\n</ion-header>\\n\\n<ion-content padding-top class=\"members\">\\n\\n\t<div class=\" horizon-line\">\\n\t\t<ion-label class=\"profile-display mid-font\">Name</ion-label>\\n\t\t<img src=\"../../assets/img/profile/Edit.png\" class=\"profile-icon contact-profile\">\\n\t</div>\\n\\n\t<div class=\" horizon-line\" >\\n\t\t<div class=\"profile-icon align-margin\">\\n\t\t\t<ion-input type=\"text\" required [(ngModel)]=\"member.firstName\" placeholder=\"First name\" class=\"margin\"></ion-input>\\n\t\t</div>\\n\t</div>\\n\t<div class=\" horizon-line\" >\\n\t\t<div class=\"profile-icon align-margin\">\\n\t\t\t<ion-input type=\"text\" required [(ngModel)]=\"member.lastName\" placeholder=\"Last name\" class=\"margin\"></ion-input>\\n\t\t</div>\\n\t</div>\\n\t\\n\t<div class=\" horizon-line\">\\n\t\t<ion-label class=\"profile-display mid-font\">Relationship</ion-label>\\n\t\t<img src=\"../../assets/img/book-an-appointment/Collapse.png\" class=\"profile-icon contact-profile\">\\n\t</div>\\n\t\\n\t<div class=\"horizon-line\">\\n\t\t<ion-select [(ngModel)]=\"member.relationship\" class=\"max-wid\" placeholder=\"Relationship with patient\" required>\\n\t\t\t<ion-option value=\"Father\" class=\"horizon-line\">Father</ion-option>\\n\t\t\t<ion-option value=\"Son\" class=\"horizon-line\">Son</ion-option>\\n\t\t\t<ion-option value=\"Friend\" >Friend</ion-option>\\n\t\t\t<ion-option value=\"Daughter\" >Daughter</ion-option>\\n\t\t\t<ion-option value=\"Mother\" >Mother</ion-option>\\n\t\t\t<ion-option value=\"Brother\" >Brother</ion-option>\\n\t\t\t<ion-option value=\"Sister\" >Sister</ion-option>\\n\t\t</ion-select>\\n\t</div>\\n\\n\t<div class=\" horizon-line\">\\n\t\t<ion-label class=\"profile-display mid-font\">Medical Profile</ion-label>\\n\t\t<img src=\"../../assets//img/profile/Edit.png\" class=\"profile-icon contact-profile\">\\n\t</div>\\n\\n\t<div class=\" horizon-line\" >\\n\t\t<div class=\"profile-icon margin\">\\n\t\t\t<ion-label class=\"profile-display \">Gender</ion-label>\\n\t\t\t<ion-select [(ngModel)]=\"member.gender\" class=\"margin\" placeholder=\"Gender\" required>\\n\t\t\t\t<ion-option value=\"Male\"  >Male</ion-option>\\n\t\t\t\t<ion-option value=\"Female\" >Female</ion-option>\\n\t\t\t\t<ion-option value=\"Other\" >Transgender</ion-option>\\n\t\t\t</ion-select>\\n\t\t</div>\\n\t</div>\\n\\n\t<div class=\" horizon-line\" >\\n\t\t<div class=\"profile-icon margin\">\\n\t\t\t<ion-label class=\"profile-display \">Date of Birth</ion-label>\\n\t\t\t<ion-datetime displayFormat=\"MM/DD/YYYY\" [(ngModel)]=\"member.birthDate\" placeholder=\"MM/DD/YYYY\" class=\"margin\">\\n\t\t\t</ion-datetime>\\n\t\t</div>\\n\t</div>\\n\\n\t<div class=\" horizon-line\" >\\n\t\t<div class=\"profile-icon margin\">\\n\t\t\t<ion-label class=\"profile-display \">Height</ion-label>\\n\t\t\t<ion-input type=\"number\" required [(ngModel)]=\"member.height\" placeholder=\"Height\" class=\"margin\"></ion-input>\\n\t\t</div>\\n\t</div>\\n\\n\t<div class=\" horizon-line\" >\\n\t\t<div class=\"profile-icon margin\">\\n\t\t\t<ion-label class=\"profile-display \">Weight</ion-label>\\n\t\t\t<ion-input type=\"number\" required [(ngModel)]=\"member.weight\" placeholder=\"Weight in Kg\" class=\"margin\"></ion-input>\\n\t\t</div>\\n\t</div>\\n\\n\t<div class=\" horizon-line\" >\\n\t\t<div class=\"profile-icon margin\">\\n\t\t\t<ion-label class=\"profile-display \">Blood Group</ion-label>\\n\t\t\t<ion-select [(ngModel)]=\"member.bloodGroup\" class=\"margin\" placeholder=\"Blood Group\" required>\\n\t\t\t\t<ion-option value=\"A+ve\">A+ve</ion-option>\\n\t\t\t\t<ion-option value=\"A-ve\">A-ve</ion-option>\\n\t\t\t\t<ion-option value=\"B+ve\">B+ve</ion-option>\\n\t\t\t\t<ion-option value=\"B-ve\">B-ve</ion-option>\\n\t\t\t\t<ion-option value=\"AB+ve\">AB+ve</ion-option>\\n\t\t\t\t<ion-option value=\"AB-ve\">AB-ve</ion-option>\\n\t\t\t\t<ion-option value=\"O+ve\">O+ve</ion-option>\\n\t\t\t\t<ion-option value=\"AB-ve\">AB-ve</ion-option>\\n\t\t\t\t<ion-option value=\"other\">Other</ion-option>\\n\t\t\t</ion-select>\\n\t\t</div>\\n\t</div>\\n\\n\t<div class=\" horizon-line\" >\\n\t\t<div class=\"profile-icon margin\">\\n\t\t\t<ion-label class=\"profile-display \">Allergies (Optional)</ion-label>\\n\t\t\t<img src=\"../../assets/img/profile/Edit.png\" class=\"profile-icon contact-profile\">\\n\t\t</div>\\n\t</div>\\n\\n\t<div class=\" horizon-line\" >\\n\t\t<div class=\"profile-icon margin\">\\n\t\t\t<ion-textarea rows=\"4\" [(ngModel)]=\"member.allergies\" placeholder=\"Explain briefly, your allergies.\"></ion-textarea>\\n\t\t</div>\\n\t</div>\\n\\n\t<div class=\" horizon-line\" >\\n\t\t<div class=\"profile-icon margin\">\\n\t\t\t<ion-label class=\"profile-display \">Medical History (Optional)</ion-label>\\n\t\t\t<img src=\"../../assets/img/profile/Edit.png\" class=\"profile-icon contact-profile\">\\n\t\t</div>\\n\t</div>\\n\\n\t<div class=\" horizon-line\" >\\n\t\t<div class=\"profile-icon margin\">\\n\t\t\t<ion-textarea rows=\"4\" [(ngModel)]=\"member.medicalHistory\" placeholder=\"Explain briefly, your medical history.\"></ion-textarea>\\n\t\t</div>\\n\t</div>\\n\\n</ion-content>\\n\\n<ion-footer no-shadow>\\n\t<ion-toolbar position=\"bottom\">\\n\t\t<ion-row>\\n\t\t\t<ion-col>\\n\t\t\t\t<button ion-button color=\"primary\" block (click)=\"goToMyProfilePage()\">Back</button>\\n\t\t\t</ion-col>\\n\t\t\t<ion-col>\\n\t\t\t\t<button ion-button color=\"primary\" block (click)=\"goToAddMemberPage()\">Save</button>\\n\t\t\t</ion-col>\\n\t\t</ion-row>\\n\t</ion-toolbar>\\n</ion-footer>'/*ion-inline-end:\"/Users/sandebtech/www/open source/ionic-hospicare/src/app/modules/members/add-members1/add-members1.html\"*/\n        }),\n        __metadata(\"design:paramtypes\", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__[\"h\" /* NavController */],\n            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__[\"k\" /* ToastController */],\n            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__[\"i\" /* NavParams */],\n            __WEBPACK_IMPORTED_MODULE_2__app_services_patient_abstract_member__[\"a\" /* AbstractMemberService */]])\n    ], AddMembersPage1);\n    return AddMembersPage1;\n}(__WEBPACK_IMPORTED_MODULE_4__app_core_base_page__[\"a\" /* BasePage */]));\n\n//# sourceMappingURL=add-members1.js.map\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/modules/members/add-members1/add-members1.ts\n// module id = 329\n// module chunks = 4\n\n//# sourceURL=/Users/sandebtech/www/open_source/ionic-hospicare/src/app/modules/members/add-members1/add-members1.ts");

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Member; });\nvar Member = /** @class */ (function () {\n    function Member() {\n        this.firstName = '';\n        this.lastName = '';\n        this.relationship = '';\n        this.gender = '';\n        this.height = '';\n        this.allergies = '';\n        this.medicalHistory = '';\n        this.id = \"\";\n        this.patientId = \"\";\n    }\n    return Member;\n}());\n\n//# sourceMappingURL=members.js.map\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app/models/patient/members.ts\n// module id = 330\n// module chunks = 4\n\n//# sourceURL=/Users/sandebtech/www/open_source/ionic-hospicare/src/app/models/patient/members.ts");

/***/ })

});
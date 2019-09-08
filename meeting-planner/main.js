(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _user_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/verify-email/verify-email.component */ "./src/app/user/verify-email/verify-email.component.ts");
/* harmony import */ var _user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/reset-password/reset-password.component */ "./src/app/user/reset-password/reset-password.component.ts");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/server-error/server-error.component.ts");
/* harmony import */ var _meeting_create_meeting_create_meeting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./meeting/create-meeting/create-meeting.component */ "./src/app/meeting/create-meeting/create-meeting.component.ts");
/* harmony import */ var _meeting_update_meeting_update_meeting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./meeting/update-meeting/update-meeting.component */ "./src/app/meeting/update-meeting/update-meeting.component.ts");
/* harmony import */ var _dashboard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/admin-dashboard/admin-dashboard.component */ "./src/app/dashboard/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _dashboard_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/user-dashboard/user-dashboard.component */ "./src/app/dashboard/user-dashboard/user-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: 'user/login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'user/signup', component: _user_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'user/forgot-password', component: _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"] },
    { path: 'user/verify-email/:userId', component: _user_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_7__["VerifyEmailComponent"] },
    { path: 'user/reset-password/:validationToken', component: _user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"] },
    { path: 'user/normal/meeting/dashboard', component: _dashboard_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["UserDashboardComponent"] },
    { path: 'user/admin/meeting/create', component: _meeting_create_meeting_create_meeting_component__WEBPACK_IMPORTED_MODULE_10__["CreateMeetingComponent"] },
    { path: 'user/admin/meeting/update/:meetingId', component: _meeting_update_meeting_update_meeting_component__WEBPACK_IMPORTED_MODULE_11__["UpdateMeetingComponent"] },
    { path: 'user/admin/meeting/dashboard', component: _dashboard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["AdminDashboardComponent"] },
    { path: 'serverError', component: _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_9__["ServerErrorComponent"] },
    { path: '', redirectTo: 'user/login', pathMatch: 'full' },
    { path: '*', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.footer-text {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 12px;\r\n}\r\n.copyright-text-wrap {\r\n  background: #55cdb7;\r\n  color: #fff;\r\n  padding: 5px 0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n\r\n<footer class=\"copyright-text-wrap\">\r\n        <div class=\"container\">\r\n                <div class=\"footer-text\">\r\n                        <div class=\"design-develop-text\">\r\n                                Design & Developed by Jaspreet Kaur\r\n                        </div>\r\n                        <div class=\"copyright-text\">\r\n\r\n                                © 2019 Copyright Meeting Planner\r\n                        </div>\r\n                </div>\r\n        </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Meeting Planner';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./server-error/server-error.component */ "./src/app/server-error/server-error.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _meeting_meeting_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./meeting/meeting.module */ "./src/app/meeting/meeting.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                _server_error_server_error_component__WEBPACK_IMPORTED_MODULE_10__["ServerErrorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_2__["UserModule"],
                _meeting_meeting_module__WEBPACK_IMPORTED_MODULE_12__["MeetingModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_13__["DashboardModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({
                    timeOut: 10000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: true,
                }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(_http) {
        this._http = _http;
        this.baseUrl = "http://localhost:3000/api/v1";
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        }; //end of setlocalstorage Function
        this.getUserInfoFromLocalStorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; //end getlocalstorage function
    }
    /* Start Functions for User Management */
    AppService.prototype.signUp = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobileNumber', data.mobileNumber)
            .set('email', data.email)
            .set('password', data.password)
            .set('userName', data.userName)
            .set('countryName', data.countryName)
            .set('isAdmin', data.isAdmin);
        return this._http.post(this.baseUrl + "/users/signup", params);
    }; //end signUp
    AppService.prototype.signIn = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this._http.post(this.baseUrl + "/users/login", params);
    }; //end signIn
    AppService.prototype.resetPassword = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('email', data.email);
        return this._http.post(this.baseUrl + "/users/resetPassword", params);
    }; //end resetPassword
    AppService.prototype.updatePassword = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('validationToken', data.validationToken)
            .set('password', data.password);
        return this._http.put(this.baseUrl + "/users/updatePassword", params);
    }; //end updatePassword
    AppService.prototype.verifyEmail = function (userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('userId', userId);
        return this._http.put(this.baseUrl + "/users/verifyEmail", params);
    }; //end verifyEmail
    AppService.prototype.getCountryNames = function () {
        return this._http.get("./../assets/json/countryNames.json");
    }; //end getCountryNames
    AppService.prototype.getCountryNumbers = function () {
        return this._http.get("./../assets/json/countryPhoneCodes.json");
    }; //end getCountryNumbers
    AppService.prototype.getUsers = function (authToken) {
        return this._http.get(this.baseUrl + "/users/view/all?authToken=" + authToken);
    }; //end getUsers function
    AppService.prototype.logout = function (userId, authToken) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', authToken);
        return this._http.post(this.baseUrl + "/users/" + userId + "/logout", params);
    }; //end deleteMeeting
    /* End User Management Functions */
    /* Start Meeting Management Functions */
    AppService.prototype.addMeeting = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('meetingTopic', data.meetingTopic)
            .set('hostId', data.hostId)
            .set('hostName', data.hostName)
            .set('participantId', data.participantId)
            .set('participantName', data.participantName)
            .set('participantEmail', data.participantEmail)
            .set('meetingStartDate', data.meetingStartDate)
            .set('meetingEndDate', data.meetingEndDate)
            .set('meetingDescription', data.meetingDescription)
            .set('meetingPlace', data.meetingPlace)
            .set('authToken', data.authToken);
        return this._http.post(this.baseUrl + "/meetings/addMeeting", params);
    }; //end addMeeting
    AppService.prototype.getMeetingDetails = function (meetingId, authToken) {
        return this._http.get(this.baseUrl + "/meetings/" + meetingId + "/details?authToken=" + authToken);
    }; //end getUsers function
    AppService.prototype.updateMeeting = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('meetingTopic', data.meetingTopic)
            .set('meetingStartDate', data.meetingStartDate)
            .set('meetingEndDate', data.meetingEndDate)
            .set('meetingDescription', data.meetingDescription)
            .set('meetingPlace', data.meetingPlace)
            .set('authToken', data.authToken);
        return this._http.put(this.baseUrl + "/meetings/" + data.meetingId + "/updateMeeting", params);
    }; //end addMeeting
    AppService.prototype.getUserAllMeeting = function (userId, authToken) {
        return this._http.get(this.baseUrl + "/meetings/view/all/meetings/" + userId + "?authToken=" + authToken);
    }; //end getUsers function
    AppService.prototype.deleteMeeting = function (meetingId, authToken) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('authToken', authToken);
        return this._http.post(this.baseUrl + "/meetings/" + meetingId + "/delete", params);
    }; //end deleteMeeting
    AppService.prototype.sentMeetingReminders = function (userId, authToken) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('userId', userId)
            .set('authToken', authToken);
        return this._http.post(this.baseUrl + "/meetings/admin-meetings/sentReminders", params);
    }; //end signIn
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/dashboard/admin-dashboard/admin-dashboard.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/admin-dashboard/admin-dashboard.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  text-align: center;\r\n  padding: 6px 0;\r\n  font-size: 12px;\r\n  line-height: 1.42;\r\n  border-radius: 15px;\r\n}\r\n\r\n.btn-circle.btn-lg {\r\n    width: 50px;\r\n    height: 50px;\r\n    padding: 10px 16px;\r\n    font-size: 18px;\r\n    line-height: 1.33;\r\n    border-radius: 25px;\r\n  }\r\n\r\n.online{\r\n\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color:#38b4b9;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n  }\r\n\r\n.offline{\r\n  \r\n    height: 10px;\r\n    width: 10px;\r\n    /* background-color:red; */\r\n    border-radius: 50%;  \r\n    display: inline-block;\r\n  }\r\n\r\n  \r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/admin-dashboard/admin-dashboard.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/admin-dashboard/admin-dashboard.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Meeting Details</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h5> Topic </h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.meetingTopic}} by {{modalData?.event.hostName}}</h6>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h5> Topic Description </h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.meetingDescription}}</h6>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h5> Participant </h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.participantName}}</h6>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h5>Date and Time</h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.meetingStartDate | date: 'medium'}} -\n                  {{modalData?.event.meetingEndDate\n                  | date: 'medium'}}</h6>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h5>Location </h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.meetingPlace}}</h6>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #modalConfirmation let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Delete Meeting</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <h6 class=\"card-title\">Are you sure you want to delete the following meeting?</h6>\n    <h4 class=\"card-title\">{{modalData?.event.meetingTopic}}</h4>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn btn-danger\" (click)=\"deleteEvent(modalData?.event);close()\">Delete</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">Cancel</button>\n  </div>\n</ng-template>\n\n<ng-template #modalAlert let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Meeting Reminder</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <h6 class=\"card-title\">Your meeting <span>{{modalData?.event.meetingTopic}}</span> will start soon!</h6>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-success\"\n      (click)=\"modalData?.event.remindMe=true;gentleReminder=true;close()\">Snooze</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\"\n      (click)=\"modalData?.event.remindMe=false;gentleReminder=true;close()\">Dismiss</button>\n  </div>\n</ng-template>\n<div class=\"dashboard-wrapper\">\n  <div class=\"header-wrapper text-center border-bottom border-info\">\n    <div class=\"container-fluid\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-sm-12 col-md-2 col-lg-3 own-navbar\">\n          <img src=\"./../../../assets/images/logo.png\" alt=\"Meeting Planner Logo\" />\n        </div>\n        <div class=\"calendar-btn col-sm-6 col-md-4 col-lg-4 own-navbar\">\n          <div class=\"btn-group\">\n            <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn btn-light btn-circle\" mwlCalendarPreviousView\n              [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"activeDayIsOpen = false\">\n              <span class=\"fas fa-angle-left\"></span>\n            </button>\n            <span class=\"calendarText\">{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</span>\n            <button style=\"margin-left: 10px;\" type=\"button\" class=\"btn btn-light btn-circle\" mwlCalendarNextView\n              [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"activeDayIsOpen = false\">\n              <span class=\"fas fa-angle-right\"></span>\n            </button>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-3 col-lg-3 own-navbar\">\n          <div class=\"btn-group\">\n            <button  type=\"button\" class=\"btn btn-light current-day\" mwlCalendarToday\n              [(viewDate)]=\"viewDate\">\n              Today\n            </button>\n\n            <select [(ngModel)]=\"view\" name=\"view\" class=\"form-control yearbtn\">\n              <option value=\"month\">Month</option>\n              <option value=\"week\">Week</option>\n              <option value=\"day\">Day</option>\n            </select>\n\n          </div>\n\n\n        </div>\n\n        <div class=\"admin-info-btns col-sm-12 col-md-3 col-lg-2 own-navbar\">\n          <div class=\"btn-group\" role=\"group\" style=\"float: right;\">\n            <button id=\"btnGroupDropUserInfo\" type=\"button\" class=\"btn btn-outline-info rounded\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{adminName ? adminName : 'Admin'}}\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"btnGroupDropUserInfo\">\n              <a class=\"dropdown-item\" (click)=\"getAdminMeetings(adminId)\">Home</a>\n              <a class=\"dropdown-item\" (click)=\"sentMeetingRemindersonEmailFunction()\">Send Reminders for Todays\n                Meeting</a>\n              <a class=\"dropdown-item\" (click)=\"logoutFunction(adminId)\">Sign Out</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"dashboard-body-wrap\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n\n        <div class=\"d-block d-sm-block d-md-none col-md-4 border border-info\">\n      \n\n          <nav class=\"navbar navbar-expand-lg navbar-light \" style=\"background-color: #f5f5f5\">\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\"\n              aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>\n\n            <a class=\"navbar-brand h1\">Users of Meeting Planner</a>\n          </nav>\n\n          <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n            <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n              <li class=\"nav-item own-navbar\">\n                <input type=\"text\" id=\"inputUserName\" name=\"userName\" [(ngModel)]=\"userName\" class=\"form-control\"\n                  placeholder=\"Search User Name\">\n              </li>\n\n              <li class=\"nav-item own-navbar\">\n                <div class=\"\" *ngFor=\"let user of allUsersData | filter:userName\">\n\n                  <a (click)=\"getUserMeetings(user.userId)\" class=\"list-group-item list-group-item-action\"\n                    *ngIf=\"user.userId != adminId\">\n                    <span>{{user.firstName}}\n                      {{user.lastName}}\n                    </span>\n\n                    <span *ngIf=\"user.status == 'online'\"><i class=\"online\"></i></span>\n                   \n\n                  </a>\n                </div>\n              </li>\n\n            </ul>\n          </div>\n\n\n\n        </div>\n\n        <div class=\"desktop-user-lists d-none d-sm-none d-md-block col-md-3 border border-info\">\n        \n          <input type=\"text\" id=\"inputUserName\" name=\"userName\" [(ngModel)]=\"userName\" class=\"form-control\"\n            placeholder=\"Search For User Name\">\n          <div class=\"people-list\">\n            <div class=\"list-group list-group-flush\" *ngFor=\"let user of allUsersData | filter:userName\">\n\n              <a (click)=\"getUserMeetings(user.userId,user.firstName + ' ' +user.lastName)\"\n                class=\"list-group-item list-group-item-action\" *ngIf=\"user.userId != adminId\">\n                <span>{{user.firstName}}\n                  {{user.lastName}}\n                </span>\n\n                <span *ngIf=\"user.status == 'online'\"><i class=\"online\"></i></span>\n                <span *ngIf=\"user.status != 'online'\"><i class=\"offline\"></i></span>\n\n              </a>\n            </div>\n\n          </div>\n\n        </div>\n\n        <div class=\"user-meeting-info col-sm-12 col-md-9 border border-info\">\n\n        \n\n          <div [ngSwitch]=\"view\" class=\"main-calendar-wrapper\" style=\"height:82vh;overflow-y:auto\">\n            <mwl-calendar-month-view *ngSwitchCase=\"'month'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\"\n              [activeDayIsOpen]=\"activeDayIsOpen\" (dayClicked)=\"dayClicked($event.day)\"\n              (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\n            </mwl-calendar-month-view>\n\n            <mwl-calendar-week-view *ngSwitchCase=\"'week'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\"\n              (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\n            </mwl-calendar-week-view>\n\n            <mwl-calendar-day-view *ngSwitchCase=\"'day'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\"\n              (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\n            </mwl-calendar-day-view>\n\n          </div>\n\n          <div class=\"fixed-bottom\">\n            <div style=\"float: right;\">\n              <button type=\"button\" class=\"btn btn-danger btn-circle btn-lg\" (click)=\"goToAddMeeting()\">\n                <span class=\"fas fa-plus\"></span>\n              </button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/admin-dashboard/admin-dashboard.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/admin-dashboard/admin-dashboard.component.ts ***!
  \************************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/modal/modal.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.module.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var colors = {
    green: {
        primary: '#008000',
        secondary: '#FAE3E3'
    }
};
var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(appService, socketService, _route, router, toastr, modal) {
        var _this = this;
        this.appService = appService;
        this.socketService = socketService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.modal = modal;
        this.view = 'month';
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fas fa-pencil-alt"></i>       ',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fas fa-trash-alt"></i>        ',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.activeDayIsOpen = false;
        this.onlineUserList = [];
        this.meetings = [];
        this.events = [];
        this.gentleReminder = true;
        this.getAllUsers = function () {
            if (_this.authToken != null) {
                _this.appService.getUsers(_this.authToken).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.allUsersData = apiResponse.data;
                    }
                    else {
                        _this.toastr.error(apiResponse.message, "User Update");
                    }
                }, function (error) {
                    _this.toastr.error('Server error occured', "Error!");
                    _this.router.navigate(['/serverError']);
                } //end error
                ); //end getusers
            } //end if
            else {
                _this.toastr.info('Missing Authorization key', "Please login again");
                _this.router.navigate(['/user/login']);
            } //end else
        }; //end getAllUsers
        this.sentMeetingRemindersonEmailFunction = function () {
            if (_this.authToken != null && _this.adminId != null) {
                _this.appService.sentMeetingReminders(_this.adminId, _this.authToken).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.info("Meeting Reminders sent", "Update");
                    }
                    else {
                        _this.toastr.error(apiResponse.message, "Error!");
                    }
                }, function (error) {
                    _this.toastr.error('Server error occured', "Error!");
                    _this.router.navigate(['/serverError']);
                } //end error
                ); //end sentreminders
            } //end if
            else {
                _this.toastr.info('Missing Authorization key', "Please login again");
                _this.router.navigate(['/user/login']);
            } //end else
        }; //end sentRemindersFunction
        this.getUserAllMeetingFunction = function () {
            if (_this.receiverId != null && _this.authToken != null) {
                _this.appService.getUserAllMeeting(_this.receiverId, _this.authToken).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.meetings = apiResponse.data;
                        //console.log(this.meetings)
                        for (var _i = 0, _a = _this.meetings; _i < _a.length; _i++) {
                            var meetingEvent = _a[_i];
                            meetingEvent.title = meetingEvent.meetingTopic;
                            meetingEvent.start = new Date(meetingEvent.meetingStartDate);
                            meetingEvent.end = new Date(meetingEvent.meetingEndDate);
                            meetingEvent.color = colors.green;
                            meetingEvent.actions = _this.actions;
                            meetingEvent.remindMe = true;
                        }
                        _this.events = _this.meetings;
                        //console.log(this.events)
                        _this.refresh.next();
                        _this.toastr.info("Calendar Updated", "Meetings Found!");
                        //console.log(this.events)
                    }
                    else {
                        _this.toastr.error(apiResponse.message, "Error!");
                        _this.events = [];
                    }
                }, function (error) {
                    if (error.status == 400) {
                        _this.toastr.warning("Calendar Failed to Update", "Either user or Meeting not found");
                        _this.events = [];
                    }
                    else {
                        _this.toastr.error("Some Error Occurred", "Error!");
                        _this.router.navigate(['/serverError']);
                    }
                } //end error
                ); //end appservice.getuserallmeeting
            } //end if
            else {
                _this.toastr.info("Missing Authorization Key", "Please login again");
                _this.router.navigate(['/user/login']);
            }
        }; //end getUserAllMeetingFunction
        this.logoutFunction = function (userId) {
            _this.appService.logout(userId, _this.authToken).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].delete('authToken'); //delete all the cookies
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].delete('receiverId');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].delete('receiverName');
                    localStorage.clear();
                    _this.socketService.disconnectedSocket(); //calling the method which emits the disconnect event.
                    _this.socketService.exitSocket(); //this method will disconnect the socket from frontend and close the connection with the server.
                    setTimeout(function () {
                        _this.router.navigate(['/user/login']); //redirects the user to login page.
                    }, 1000); //redirecting to Dashboard page
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                    _this.router.navigate(['/serverError']); //in case of error redirects to error page.
                } // end condition
            }, function (err) {
                if (err.status == 404) {
                    _this.toastr.warning("Logout Failed", "Already Logged Out or Invalid User");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            });
        }; //end logout  
        /* Socket - Event Based Functions */
        //listened
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser()
                .subscribe(function () {
                //console.log("In verifys")
                _this.socketService.setUser(_this.authToken); //in reply to verify user emitting set-user event with authToken as parameter.
            }); //end subscribe
        }; //end verifyUserConfirmation
        this.authErrorFunction = function () {
            _this.socketService.listenAuthError()
                .subscribe(function (data) {
                _this.toastr.info("Missing Authorization Key", "Please login again");
                _this.router.navigate(['/user/login']);
            }); //end subscribe
        }; //end authErrorFunction
        this.getOnlineUserList = function () {
            _this.socketService.onlineUserList()
                .subscribe(function (data) {
                _this.onlineUserList = [];
                for (var x in data) {
                    //let temp = { 'userId': x, 'userName': data[x] };
                    _this.onlineUserList.push(x);
                }
                for (var _i = 0, _a = _this.allUsersData; _i < _a.length; _i++) {
                    var user = _a[_i];
                    if (_this.onlineUserList.includes(user.userId)) {
                        user.status = "online";
                    }
                    else {
                        user.status = "offline";
                    }
                }
            }); //end subscribe
        }; //end getOnlineUserList
        //emitted 
        this.notifyUpdatesToUser = function (data) {
            //data will be object with message and userId(recieverId)
            _this.socketService.notifyUpdates(data);
        }; //end notifyUpdatesToUser
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('authToken');
        this.receiverId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('receiverId');
        this.receiverName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('receiverName');
        this.userInfo = this.appService.getUserInfoFromLocalStorage();
        this.adminId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('receiverId');
        this.adminName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('receiverName');
        //console.log(this.userInfo)
        if (this.userInfo.isAdmin == 'true') {
            this.verifyUserConfirmation();
            this.getOnlineUserList();
            this.getAllUsers();
            this.getUserAllMeetingFunction();
            this.authErrorFunction();
        }
        else {
            this.router.navigate(['/user/normal/meeting/dashboard']);
        }
        setInterval(function () {
            _this.meetingReminder();
        }, 5000);
    };
    /* Calendar Events */
    AdminDashboardComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.view = 'day';
            }
        }
    };
    AdminDashboardComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    AdminDashboardComponent.prototype.handleEvent = function (action, event) {
        if (action === 'Edited') {
            this.router.navigate(["/user/admin/meeting/update/" + event.meetingId]);
        }
        else if (action === 'Deleted') {
            console.log(action === 'Deleted');
            this.modalData = { event: event, action: action };
            this.modal.open(this.modalConfirmation, { size: 'sm' });
        }
        else {
            this.modalData = { event: event, action: action };
            this.modal.open(this.modalContent, { size: 'lg' });
        }
    };
    AdminDashboardComponent.prototype.deleteEvent = function (event) {
        this.deleteMeetingFunction(event);
        this.events = this.events.filter(function (iEvent) { return iEvent !== event; });
        this.refresh.next();
        this.activeDayIsOpen = false;
    };
    /* End Calendar Events */
    AdminDashboardComponent.prototype.goToAddMeeting = function () {
        this.router.navigate(['/user/admin/meeting/create']);
    };
    AdminDashboardComponent.prototype.meetingReminder = function () {
        var currentTime = new Date().getTime();
        for (var _i = 0, _a = this.meetings; _i < _a.length; _i++) {
            var meetingEvent = _a[_i];
            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(new Date(), meetingEvent.start) && new Date(meetingEvent.start).getTime() - currentTime <= 60000
                && new Date(meetingEvent.start).getTime() > currentTime) {
                if (meetingEvent.remindMe && this.gentleReminder) {
                    this.modalData = { action: 'clicked', event: meetingEvent };
                    this.modal.open(this.modalAlert, { size: 'sm' });
                    this.gentleReminder = false;
                    break;
                } //end inner if
            } //end if
            else if (currentTime > new Date(meetingEvent.start).getTime() &&
                new Date(currentTime - meetingEvent.start).getTime() < 10000) {
                this.toastr.info("Meeting " + meetingEvent.meetingTopic + " Started!", "Gentle Reminder");
            }
        }
    }; //end of meetingReminder function
    /* Data base functions */
    AdminDashboardComponent.prototype.getUserMeetings = function (userId, userName) {
        this.receiverId = userId;
        this.receiverName = userName;
        this.getUserAllMeetingFunction();
    }; //end of getUserMeetings function
    AdminDashboardComponent.prototype.getAdminMeetings = function (userId) {
        this.receiverId = userId;
        this.receiverName = this.adminName;
        this.getUserAllMeetingFunction();
    }; //end of getAdminMeetings function
    AdminDashboardComponent.prototype.deleteMeetingFunction = function (meeting) {
        var _this = this;
        this.appService.deleteMeeting(meeting.meetingId, this.authToken)
            .subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                _this.toastr.success("Deleted the Meeting", "Successfull!");
                var dataForNotify = {
                    message: "Hi, " + _this.receiverName + " has canceled the meeting - " + meeting.meetingTopic + ". Please Check your Calendar/Email",
                    userId: meeting.participantId
                };
                _this.notifyUpdatesToUser(dataForNotify);
            }
            else {
                _this.toastr.error(apiResponse.message, "Error!");
            }
        }, function (error) {
            if (error.status == 404) {
                _this.toastr.warning("Delete Meeting Failed", "Meeting Not Found!");
            }
            else {
                _this.toastr.error("Some Error Occurred", "Error!");
                _this.router.navigate(['/serverError']);
            }
        }); //end calling deletemeeting
    }; //end deletemeeting
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], AdminDashboardComponent.prototype, "modalContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalConfirmation'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], AdminDashboardComponent.prototype, "modalConfirmation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalAlert'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], AdminDashboardComponent.prototype, "modalAlert", void 0);
    AdminDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/dashboard/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/dashboard/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _ng_bootstrap_ng_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/dashboard/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/dashboard/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__["adapterFactory"]
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModalModule"].forRoot(),
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipeModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardComponent"], _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["UserDashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/user-dashboard/user-dashboard.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/user-dashboard/user-dashboard.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    margin: 0 0 10px;\r\n  }\r\n  \r\n  pre {\r\n    background-color: #ffffff;\r\n    padding: 15px;\r\n  }\r\n  \r\n  .btn-circle {\r\n    width: 30px;\r\n    height: 30px;\r\n    text-align: center;\r\n    padding: 6px 0;\r\n    font-size: 12px;\r\n    line-height: 1.42;\r\n    border-radius: 15px;\r\n  }\r\n  \r\n  .btn-circle.btn-lg {\r\n      width: 50px;\r\n      height: 50px;\r\n      padding: 10px 16px;\r\n      font-size: 18px;\r\n      line-height: 1.33;\r\n      border-radius: 25px;\r\n    }\r\n  \r\n  .own-navbar{\r\n  padding-bottom: 1vh;\r\n}\r\n    "

/***/ }),

/***/ "./src/app/dashboard/user-dashboard/user-dashboard.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/user-dashboard/user-dashboard.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Meeting Details</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n\n          <div class=\"card-body\">\n\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h5> Topic </h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.meetingTopic}} by {{modalData?.event.hostName}}</h6>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h5>Description</h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.meetingDescription}}</h6>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h5> Participant </h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.participantName}}</h6>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h5>Date and Time</h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.meetingStartDate | date: 'medium'}} - {{modalData?.event.meetingEndDate\n                  | date: 'medium'}}</h6>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <h5>Location </h5>\n              </div>\n              <div class=\"col-8\">\n                <h6 class=\"card-title\">{{modalData?.event.meetingPlace}}</h6>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div> \n  </div>\n</ng-template>\n\n<ng-template #modalAlert let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Meeting Reminder</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <h6 class=\"card-title\">Your meeting <span> {{modalData?.event.meetingTopic}}</span> will start soon!</h6>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"close();remindMe =true\">Snooze</button>\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close();remindMe=false\">Dismiss</button>\n  </div>\n</ng-template>\n\n<div class=\"dashboard-wrapper\">\n  <div class=\"header-wrapper text-center border-bottom border-info\">\n    <div class=\"container-fluid\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-sm-12 col-md-2 col-lg-3 own-navbar\">\n          <img src=\"./../../../assets/images/logo.png\" alt=\"Meeting Planner Logo\" />\n        </div>\n\n\n        <div class=\"calendar-btn col-sm-6 col-md-4 col-lg-4 own-navbar\">\n          <div class=\"btn-group\">\n            <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn btn-light btn-circle\" mwlCalendarPreviousView\n              [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"activeDayIsOpen = false\">\n              <span class=\"fas fa-angle-left\"></span>\n            </button>\n            <span class=\"calendarText\">{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</span>\n            <button style=\"margin-left: 10px;\" type=\"button\" class=\"btn btn-light btn-circle\" mwlCalendarNextView\n              [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"activeDayIsOpen = false\">\n              <span class=\"fas fa-angle-right\"></span>\n            </button>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6 col-md-3 col-lg-3 own-navbar\">\n          <div class=\"btn-group\">\n            <button  type=\"button\" class=\"btn btn-light current-day\" mwlCalendarToday\n              [(viewDate)]=\"viewDate\">\n              Today\n            </button>\n\n            <select [(ngModel)]=\"view\" name=\"view\" class=\"form-control yearbtn\">\n              <option value=\"month\">Month</option>\n              <option value=\"week\">Week</option>\n              <option value=\"day\">Day</option>\n            </select>\n\n          </div>\n\n\n        </div>\n\n        <div class=\"col-sm-12 col-md-3 col-lg-2 own-navbar\">\n          <div class=\"btn-group\" role=\"group\" style=\"float: right;\">\n            <button id=\"btnGroupDropUserInfo\" type=\"button\" class=\"btn btn-outline-info\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{receiverName ? receiverName : 'User'}}\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"btnGroupDropUserInfo\">\n              <a class=\"dropdown-item\" (click)=\"logoutFunction()\">Sign Out</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"dashboard-body-wrap\">\n   \n      <div class=\"row\" style=\"margin-left:0px;margin-right:0px;\">\n\n        <div class=\"col-12 border border-info\">\n\n          <div [ngSwitch]=\"view\" style=\"height:83vh;overflow-y:scroll\">\n            <mwl-calendar-month-view *ngSwitchCase=\"'month'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\"\n              [activeDayIsOpen]=\"activeDayIsOpen\" (dayClicked)=\"dayClicked($event.day)\"\n              (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\n            </mwl-calendar-month-view>\n\n            <mwl-calendar-week-view *ngSwitchCase=\"'week'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\"\n              (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\n            </mwl-calendar-week-view>\n\n            <mwl-calendar-day-view *ngSwitchCase=\"'day'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\"\n              (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\n            </mwl-calendar-day-view>\n\n          </div>\n\n        </div>\n      </div>\n   \n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/dashboard/user-dashboard/user-dashboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/user-dashboard/user-dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/modal/modal.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.module.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    },
    green: {
        primary: '#008000',
        secondary: '#FDF1BA'
    }
};
var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent(modal, appService, socketService, _route, router, toastr) {
        var _this = this;
        this.modal = modal;
        this.appService = appService;
        this.socketService = socketService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.view = 'month';
        this.viewDate = new Date();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.activeDayIsOpen = false;
        this.meetings = [];
        this.events = [];
        /* Database Functions */
        this.getUserAllMeetingFunction = function () {
            _this.appService.getUserAllMeeting(_this.receiverId, _this.authToken).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.meetings = apiResponse.data;
                    //console.log(this.meetings)
                    for (var _i = 0, _a = _this.meetings; _i < _a.length; _i++) {
                        var meetingEvent = _a[_i];
                        meetingEvent.title = meetingEvent.meetingTopic;
                        meetingEvent.start = new Date(meetingEvent.meetingStartDate);
                        meetingEvent.end = new Date(meetingEvent.meetingEndDate);
                        meetingEvent.color = colors.green;
                        meetingEvent.remindMe = true;
                    }
                    _this.events = _this.meetings;
                    _this.refresh.next();
                    _this.toastr.info("Calendar Updated", "Meetings Found!");
                    //console.log(this.events)
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                    _this.events = [];
                }
            }, function (error) {
                if (error.status == 400) {
                    _this.toastr.warning("Calendar Failed to Update", "Either user or Meeting not found");
                    _this.events = [];
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            });
        }; //end getAllUserMeetings
        this.logoutFunction = function () {
            _this.appService.logout(_this.receiverId, _this.authToken).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    localStorage.clear();
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].delete('authToken'); //delete all the cookies
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].delete('receiverId');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].delete('receiverName');
                    //Cookie.delete('arrayOfIds');
                    _this.socketService.disconnectedSocket(); //calling the method which emits the disconnect event.
                    _this.socketService.exitSocket(); //this method will disconnect the socket from frontend and close the connection with the server.
                    _this.router.navigate(['/user/login']); //redirects the user to login page.
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                    //this.router.navigate(['/serverError']);//in case of error redirects to error page.
                } // end condition
            }, function (err) {
                if (err.status == 404) {
                    _this.toastr.warning("Logout Failed", "Already Logged Out or Invalid User");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            });
        }; //end logout  
        /* Event based functions */
        //listened
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser()
                .subscribe(function () {
                _this.socketService.setUser(_this.authToken); //in reply to verify user emitting set-user event with authToken as parameter.
            }); //end subscribe
        }; //end verifyUserConfirmation
        this.authErrorFunction = function () {
            _this.socketService.listenAuthError()
                .subscribe(function (data) {
                console.log(data);
            }); //end subscribe
        }; //end authErrorFunction
        this.getUpdatesFromAdmin = function () {
            _this.socketService.getUpdatesFromAdmin(_this.receiverId).subscribe(function (data) {
                _this.getUserAllMeetingFunction();
                _this.toastr.info("Update From Admin!", data.message);
            });
        };
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('authToken');
        this.receiverId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('receiverId');
        this.receiverName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('receiverName');
        this.remindMe = true;
        this.userInfo = this.appService.getUserInfoFromLocalStorage();
        if (this.userInfo.isAdmin == 'false') {
            this.verifyUserConfirmation();
            this.authErrorFunction();
            this.getUserAllMeetingFunction();
            this.getUpdatesFromAdmin();
        }
        else {
            this.router.navigate(['/user/normal/meeting/dashboard']);
        }
        setInterval(function () {
            _this.meetingReminder(); // function to send the reminder to the user
        }, 5000); //will check for every two minutes
    };
    UserDashboardComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                //this.activeDayIsOpen = true;
                this.view = 'day';
            }
        }
    };
    UserDashboardComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    UserDashboardComponent.prototype.handleEvent = function (action, event) {
        //console.log(event)
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    UserDashboardComponent.prototype.meetingReminder = function () {
        var currentTime = new Date().getTime();
        //console.log(this.meetings)
        for (var _i = 0, _a = this.meetings; _i < _a.length; _i++) {
            var meetingEvent = _a[_i];
            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(new Date(), meetingEvent.start) && new Date(meetingEvent.start).getTime() - currentTime <= 60000
                && new Date(meetingEvent.start).getTime() > currentTime) {
                if (meetingEvent.remindMe) {
                    this.modalData = { action: 'clicked', event: meetingEvent };
                    this.modal.open(this.modalAlert, { size: 'sm' });
                    break;
                } //end inner if
            } //end if
            else if (currentTime > new Date(meetingEvent.start).getTime() &&
                new Date(currentTime - meetingEvent.start).getTime() < 10000) {
                this.toastr.info("Meeting " + meetingEvent.meetingTopic + " Started!", "Gentle Reminder");
            }
        }
    }; //end of meetingReminder function
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], UserDashboardComponent.prototype, "modalContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalAlert'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], UserDashboardComponent.prototype, "modalAlert", void 0);
    UserDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-dashboard',
            template: __webpack_require__(/*! ./user-dashboard.component.html */ "./src/app/dashboard/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboard.component.css */ "./src/app/dashboard/user-dashboard/user-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
            _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/meeting/create-meeting/create-meeting.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/meeting/create-meeting/create-meeting.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icons{\r\n    color:lightblue;\r\n}\r\n\r\n#card-design{\r\n    cursor:pointer;\r\n}\r\n\r\n#card-design:hover{\r\n    background-color: lightblue;\r\n    box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.people-list {\r\n    height: 55vh;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.online{\r\n\r\n    height: 10px;\r\n    width: 10px;\r\n    background-color:green;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n  }\r\n\r\n.offline{\r\n  \r\n    height: 10px;\r\n    width: 10px;\r\n    background-color:red;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n  }\r\n\r\n.own-navbar{\r\n    padding-bottom: 1vh;\r\n  }\r\n\r\n.item-padding{\r\n    padding-bottom: 3vh;\r\n  }\r\n\r\n@media only screen and (max-width:575px) {\r\n    .icons {\r\n      font-size: 1.8em;\r\n    }\r\n    .nav-item{\r\n        margin-left: .2vw;\r\n        margin-right: .2vw;\r\n    }\r\n    h3{\r\n        font-size: 1.5em;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width:576px) and (max-width:768px) {\r\n    .icons {\r\n        font-size: 2.5em;\r\n      }\r\n      .nav-item{\r\n        margin-left: 1vw;\r\n        margin-right: 1vw;\r\n    }\r\n \r\n    }\r\n\r\n@media only screen and (min-width:769px) and (max-width:992px) {\r\n    .icons {\r\n        font-size: 3em;\r\n      }\r\n      .nav-item{\r\n        margin-left: 2vw;\r\n        margin-right: 2vw;\r\n    }\r\n \r\n    }\r\n\r\n@media only screen and (min-width:993px) and (max-width:1200px) {\r\n    .icons {\r\n        font-size: 3.5em;\r\n      }\r\n      .nav-item{\r\n        margin-left: 4vw;\r\n        margin-right: 4vw;\r\n    }\r\n \r\n}\r\n\r\n@media only screen and (min-width:1201px)  {\r\n    .icons {\r\n        font-size: 4em;\r\n      }\r\n      .nav-item{\r\n        margin-left: 6vw;\r\n        margin-right: 6vw;\r\n    }\r\n \r\n}\r\n"

/***/ }),

/***/ "./src/app/meeting/create-meeting/create-meeting.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/meeting/create-meeting/create-meeting.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Meeting Details</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-12 meeting-info-wrapper\">\n\n        <div class=\"card\" id=\"subjectCard\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Subject</h5>\n            <p class=\"card-text\" *ngIf=\"subject\">{{subject}} </p>\n            <p *ngIf=\"!subject\" class=\"alert alert-danger\">** Subject is required</p>\n\n          </div>\n        </div>\n\n        <div class=\"card\" id=\"whoCard\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Participant</h5>\n            <p class=\"card-text\" *ngIf=\"selectedUser\">{{selectedUser.firstName}} {{selectedUser.lastName}}</p>\n            <p *ngIf=\"!selectedUser\" class=\"alert alert-danger\">** User is required</p>\n\n          </div>\n        </div>\n\n        <div class=\"card\" id=\"whenCard\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Date & Time</h5>\n            <p class=\"card-text\" *ngIf=\"startDate1 && endDate1\">{{startDate1 | date: 'medium'}} -\n              {{endDate1 | date: 'medium' }}</p>\n\n            <p *ngIf=\"!startDate1\" class=\"alert alert-danger\">** Start Date/Time is required</p>\n            <p *ngIf=\"!endDate1\" class=\"alert alert-danger\">** End Date/Time is required</p>\n\n          </div>\n        </div>\n\n\n        <div class=\"card\" id=\"whereCard\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Location</h5>\n            <p class=\"card-text\" *ngIf=\"venue\">{{venue}}</p>\n            <p *ngIf=\"!venue\" class=\"alert alert-danger\">** Venue is required</p>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal-footer btns-wrapper text-center\">\n    <button id=\"btn-finalize\" type=\"button\" class=\"btn btn-success rounded\" (click)=\"createMeetingFunction();close()\">\n      Confirm Meeting\n    </button>  \n  </div>\n\n</ng-template>\n\n\n<div class=\"dashboard-wrapper\">\n  <div class=\"header-wrapper text-center border-bottom border-info\">\n    <div class=\"container-fluid\">\n      <div class=\"row align-items-center\">\n\n\n        <div class=\"col-sm-12 col-md-2 col-lg-3 own-navbar\">\n          <img src=\"./../../../assets/images/logo.png\" alt=\"Meeting Planner Logo\" />\n        </div>\n        <div class=\"col-sm-12 col-md-10 col-lg-9 own-navbar\">\n          <div class=\"btn-group\" role=\"group\" style=\"float: right;\">\n            <button id=\"btnGroupDropUserInfo\" type=\"button\" class=\"btn btn-outline-info rounded\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{adminName ? adminName : 'Admin'}}\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"btnGroupDropUserInfo\">\n              <a class=\"dropdown-item\" (click)=\"goToAdminDashboard()\">Home</a>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"dashboard-body-wrap create-meeting-wrap\">\n  <div class=\"container-fluid\">\n    <div class=\"row  create-meeting-inner-wrapper\">\n      <div class=\"col-sm-12 col-md-4 col-lg-4\">\n        <ul class=\"nav nav-tabs flex-row\" role=\"tablist\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" data-toggle=\"tab\" data-target=\"#subject\">\n              Add Topic\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" data-toggle=\"tab\" data-target=\"#who\">\n              Add User\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" data-toggle=\"tab\" data-target=\"#when\">\n              Add Timing\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" data-toggle=\"tab\" data-target=\"#where\">\n              Add Location\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-12 col-md-8 col-lg-8\">\n        <div class=\"tab-content meeting-steps\">\n\n          <div id=\"subject\" class=\"container tab-pane active\">\n            <div class=\"row \">\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <input type=\"text\" #topic=\"ngModel\" id=\"inputSubject\" name=\"subject\" [(ngModel)]=\"subject\"\n                    class=\"form-control\" placeholder=\"Meeting Topic\" required autofocus>\n\n                  <div [hidden]=\"topic.pristine || topic.valid\" class=\"alert alert-danger\">\n                    <div *ngIf=\"topic.errors?.required\">\n                      Reuired\n                    </div>\n                  </div>\n\n                  <textarea type=\"text\" #agenda=\"ngModel\" id=\"inputDescription\" name=\"description\"\n                    [(ngModel)]=\"description\" class=\"form-control\" placeholder=\"Topic Description\" required></textarea>\n\n                  <div [hidden]=\"agenda.pristine || agenda.valid\" class=\"alert alert-danger\">\n                    <div *ngIf=\"agenda.errors?.required\">\n                      Required\n                    </div>\n                  </div>\n\n                </div>\n\n              </div>\n            </div>\n          </div>\n\n          <div id=\"who\" class=\"container tab-pane fade\">\n\n            <div class=\"row\">\n\n              <div class=\"col-12 col-md-6\">\n                <div class=\"form-group\">\n                  <input type=\"text\" id=\"inputUserName\" name=\"userName\" [(ngModel)]=\"userName\" class=\"form-control\"\n                    placeholder=\"Search User Name\">\n                  <div class=\"people-list\">\n                    <div class=\"card my-card\" id=\"card-design\" *ngFor=\"let user of allUsersData | filter:userName\">\n\n                      <div class=\"card-body p-2\" (click)=\"getSelected(user)\" *ngIf=\"user.userId != receiverId\">\n                        <span class=\"d-block font-adjust-heading\">{{user.firstName}} {{user.lastName}}</span>\n                        <span class=\"d-block font-adjust-heading\">{{user.email}}</span>\n                        <span class=\"d-block font-adjust-heading\" *ngIf=\"user.isAdmin=='true'\">Admin <i\n                            class=\"fas fa-user-plus\"></i></span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-12 col-md-6 selected-user\">\n                <h6>Selected User</h6>\n                <div class=\"card selected-user-wrap\" *ngIf=\"selectedUser\">\n                  <div class=\"card-body\">\n                    <span class=\"selected-user-title\">{{selectedUser.firstName}} {{selectedUser.lastName}}</span>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n\n          <div id=\"when\" class=\"container tab-pane fade\">\n            <br>\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <div class=\"time-wrapper\">\n                    <span class=\"form-heading\">Start Time </span>\n\n                    <label for=\"startTime\" class=\"sr-only\">Start Time:</label>\n                    <input [owlDateTime]=\"dt1\" name=\"startDate1\" [(ngModel)]=\"startDate1\" placeholder=\"Start Date Time\">\n                    <span [owlDateTimeTrigger]=\"dt1\">\n                      <i class=\"fa fa-calendar\"></i>\n                    </span>\n                    <owl-date-time #dt1></owl-date-time>\n                  </div>\n                  <div class=\"time-wrapper\">\n                    <span class=\"form-heading\">End Time </span>\n\n                    <label for=\"endTime\" class=\"sr-only\">End Time:</label>\n                    <input [owlDateTime]=\"dt2\" name=\"endDate1\" [(ngModel)]=\"endDate1\" placeholder=\"End Date Time\">\n\n                    <span [owlDateTimeTrigger]=\"dt2\">\n                      <i class=\"fa fa-calendar\"></i>\n                    </span>\n                    <owl-date-time #dt2></owl-date-time>\n\n\n\n                    <div *ngIf=\"validateDate(startDate1,endDate1)\" class=\"alert alert-danger\">\n                      End date cannot be same as start date\n                    </div>\n\n                    <div *ngIf=\"validateCurrentDate(startDate1) || validateCurrentDate(endDate1)\"\n                      class=\"alert alert-danger\">\n                      End date must be greater than start date.\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n\n          <div id=\"where\" class=\"container tab-pane fade\">\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <input type=\"text\" #location=\"ngModel\" pattern=\"^[A-za-z ]+$\" id=\"inputVenue\" name=\"venue\"\n                    [(ngModel)]=\"venue\" class=\"form-control\" placeholder=\"Location\" required>\n\n                  <div [hidden]=\"location.pristine || location.valid\" class=\"alert alert-danger\">\n                    <div *ngIf=\"location.errors?.pattern\">\n                      allowed only letters\n                    </div>\n                    <div *ngIf=\"location.errors?.required\">\n                      Required\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 btns-wrapper text-center\">\n                <button type=\"button\" class=\"btn btn-info rounded\" style=\"float: right;\"\n                  (click)=\"viewScheduledMeetingFunction()\">\n                  Confirm Metting\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/meeting/create-meeting/create-meeting.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/meeting/create-meeting/create-meeting.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateMeetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMeetingComponent", function() { return CreateMeetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/modal/modal.module */ "./node_modules/@ng-bootstrap/ng-bootstrap/modal/modal.module.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import for toastr

//import for Routing

//for cookies

var CreateMeetingComponent = /** @class */ (function () {
    function CreateMeetingComponent(appService, socketService, _route, router, toastr, modal) {
        var _this = this;
        this.appService = appService;
        this.socketService = socketService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.modal = modal;
        this.getSelected = function (user) {
            _this.selectedUser = user;
        };
        this.getAllUsers = function () {
            if (_this.authToken) {
                _this.appService.getUsers(_this.authToken).subscribe(//using the apiget all normal users.
                function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.allUsersData = apiResponse.data;
                        _this.allUsers = [];
                        for (var i = 0; i < _this.allUsersData.length; i++) {
                            var user = _this.allUsersData[i].firstName + ' ' + _this.allUsersData[i].lastName;
                            if (user != undefined) {
                                _this.allUsers.push(user);
                            }
                        }
                        //this.toastr.info("Update", "All users listed");
                        //console.log(this.allUsers)
                    }
                    else {
                        _this.toastr.error(apiResponse.message, "Error!");
                    }
                }, function (error) {
                    _this.toastr.error('Server error occured');
                }); //end get users
            } //end if
            else {
                _this.toastr.info("Missing Authorization Key", "Please login again");
                _this.router.navigate(['/user/login']);
            }
        }; //end getAllUsers
        /* Events based Functions */
        //emitted 
        this.notifyUpdatesToUser = function (data) {
            //data will be object with message and userId(recieverId)
            _this.socketService.notifyUpdates(data);
        }; //end notifyUpdatesToUser
        this.viewScheduledMeetingFunction = function () {
            _this.modal.open(_this.modalContent, { size: 'lg' });
        };
    }
    CreateMeetingComponent.prototype.ngOnInit = function () {
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authToken');
        this.receiverId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('receiverId');
        this.receiverName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('receiverName');
        this.adminName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('receiverName');
        this.userInfo = this.appService.getUserInfoFromLocalStorage();
        if (this.userInfo.isAdmin == 'true') {
            this.getAllUsers();
        }
        else {
            this.router.navigate(['/user/normal/meeting/dashboard']);
        }
    };
    CreateMeetingComponent.prototype.goToAdminDashboard = function () {
        this.router.navigate(['/user/admin/meeting/dashboard']);
    }; //end of goToAdminDashboard function
    CreateMeetingComponent.prototype.validateDate = function (startDate, endDate) {
        var start = new Date(startDate);
        var end = new Date(endDate);
        if (end < start) {
            return true;
        }
        else {
            return false;
        }
    }; //end validateDate
    CreateMeetingComponent.prototype.validateCurrentDate = function (startDate) {
        var start = new Date(startDate);
        var end = new Date();
        if (end > start) {
            return true;
        }
        else {
            return false;
        }
    }; //end validateDate
    CreateMeetingComponent.prototype.createMeetingFunction = function () {
        var _this = this;
        if (!this.subject) {
            this.toastr.warning("Subject is required", "Warning!");
        }
        else if (!this.description) {
            this.toastr.warning("Description is required", "Warning!");
        }
        else if (!this.selectedUser) {
            this.toastr.warning("Participant is required", "Warning!");
        }
        else if (!this.startDate1) {
            this.toastr.warning("Start Date/Time is required", "Warning!");
        }
        else if (!this.endDate1) {
            this.toastr.warning("End Date/Time is required", "Warning!");
        }
        else if (!this.venue) {
            this.toastr.warning("Venue is required", "Warning!");
        }
        else if (this.validateDate(this.startDate1, this.endDate1)) {
            this.toastr.warning("End Date/Time cannot be before Start Date/Time", "Warning!");
        }
        else if (this.validateCurrentDate(this.startDate1) && this.validateCurrentDate(this.endDate1)) {
            this.toastr.warning("Meeting can't be schedule in back date/time", "Warning!");
        }
        else {
            var data_1 = {
                meetingTopic: this.subject,
                hostId: this.receiverId,
                hostName: this.receiverName,
                participantId: this.selectedUser.userId,
                participantName: this.selectedUser.firstName + ' ' + this.selectedUser.lastName,
                participantEmail: this.selectedUser.email,
                meetingStartDate: this.startDate1.getTime(),
                meetingEndDate: this.endDate1.getTime(),
                meetingDescription: this.description,
                meetingPlace: this.venue,
                authToken: this.authToken
            };
            console.log(data_1);
            this.appService.addMeeting(data_1).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Email Sent to the participant", "Meeting Confirmed");
                    var dataForNotify = {
                        message: "Hi, <br/> " + data_1.hostName + " has Schedule a Meeting With You. Please check your Calendar/Email",
                        userId: data_1.participantId
                    };
                    _this.notifyUpdatesToUser(dataForNotify);
                    setTimeout(function () {
                        _this.goToAdminDashboard();
                    }, 1000); //redirecting to admin dashboard page
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 400) {
                    _this.toastr.warning("Meeting Schedule Failed", "One or more fields are missing");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            }); //end calling addMeeting
        }
    }; //end addMeeting function
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CreateMeetingComponent.prototype, "modalContent", void 0);
    CreateMeetingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-meeting',
            template: __webpack_require__(/*! ./create-meeting.component.html */ "./src/app/meeting/create-meeting/create-meeting.component.html"),
            styles: [__webpack_require__(/*! ./create-meeting.component.css */ "./src/app/meeting/create-meeting/create-meeting.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Native
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _ng_bootstrap_ng_bootstrap_modal_modal_module__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], CreateMeetingComponent);
    return CreateMeetingComponent;
}());



/***/ }),

/***/ "./src/app/meeting/meeting.module.ts":
/*!*******************************************!*\
  !*** ./src/app/meeting/meeting.module.ts ***!
  \*******************************************/
/*! exports provided: MeetingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingModule", function() { return MeetingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _create_meeting_create_meeting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-meeting/create-meeting.component */ "./src/app/meeting/create-meeting/create-meeting.component.ts");
/* harmony import */ var _update_meeting_update_meeting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-meeting/update-meeting.component */ "./src/app/meeting/update-meeting/update-meeting.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var MeetingModule = /** @class */ (function () {
    function MeetingModule() {
    }
    MeetingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlNativeDateTimeModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_8__["DragAndDropModule"].forRoot(),
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"].forRoot(),
            ],
            declarations: [_create_meeting_create_meeting_component__WEBPACK_IMPORTED_MODULE_2__["CreateMeetingComponent"], _update_meeting_update_meeting_component__WEBPACK_IMPORTED_MODULE_3__["UpdateMeetingComponent"]]
        })
    ], MeetingModule);
    return MeetingModule;
}());



/***/ }),

/***/ "./src/app/meeting/update-meeting/update-meeting.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/meeting/update-meeting/update-meeting.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/meeting/update-meeting/update-meeting.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/meeting/update-meeting/update-meeting.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-wrapper\">\n  <div class=\"header-wrapper text-center border-bottom border-info\">\n    <div class=\"container-fluid\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-sm-12 col-md-2 col-lg-3 own-navbar\">\n          <img src=\"./../../../assets/images/logo.png\" alt=\"Meeting Planner Logo\" />\n        </div>\n\n        <div class=\"col-sm-12 col-md-10 col-lg-9 own-navbar\">\n          <div class=\"btn-group\" role=\"group\" style=\"float: right;\">\n            <button id=\"btnGroupDropUserInfo\" type=\"button\" class=\"btn btn-outline-info rounded\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n              {{adminName ? adminName : 'Admin'}}\n            </button>  \n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"btnGroupDropUserInfo\">\n              <a class=\"dropdown-item\" (click)=\"goToAdminDashboard()\">Home</a>\n            </div>\n          </div>  \n        \n        </div>   \n\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"dashboard-body-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n\n      <div class=\"col-12\">\n        <div class=\"row update-meeting-wrap\">\n          <div class=\"card  col-12 col-sm-12 col-md-6 col-lg-6\" id=\"card-subject\">\n            <div class=\"card-inner\">\n              <div class=\"card-header\">\n                <h4> Subject </h4>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"form-group\">\n                  <input type=\"text\" #topic=\"ngModel\" id=\"inputSubject\" name=\"subject\" [(ngModel)]=\"subject\"\n                    class=\"form-control\" placeholder=\"Our First Meeting\" required autofocus>\n                  <div [hidden]=\"topic.pristine || topic.valid\" class=\"alert alert-danger\">\n                    <div *ngIf=\"topic.errors?.required\">\n                      Required!\n                    </div>\n                  </div>\n                  <br>\n\n                  <textarea type=\"text\" #agenda=\"ngModel\" id=\"inputDescription\" name=\"description\"\n                    [(ngModel)]=\"description\" class=\"form-control\" placeholder=\"Description of Meeting\"\n                    required></textarea>\n                  <div [hidden]=\"agenda.pristine || agenda.valid\" class=\"alert alert-danger\">\n                    <div *ngIf=\"agenda.errors?.required\">\n                      Required!\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card  col-12 col-sm-12 col-md-6 col-lg-6\" id=\"card-Participant\">\n            <div class=\"card-inner\">\n              <div class=\"card-header\">\n                <h4> Participant </h4>\n              </div>\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">{{selectedUser}} </h5>\n              </div>\n            </div>\n          </div>\n          <div class=\"card  col-12 col-sm-12 col-md-6 col-lg-6\" id=\"card-when\">\n            <div class=\"card-inner\">\n              <div class=\"card-header\">\n                <h4>Date and Time</h4>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"form-group\">\n                  <div class=\"time-wrapper\">\n                    <span class=\"form-heading\">Start Time </span>\n\n\n                    <input [owlDateTime]=\"dt1\" name=\"startDate1\" [(ngModel)]=\"startDate1\" placeholder=\"Start Date Time\">\n                    <span [owlDateTimeTrigger]=\"dt1\">\n                      <i class=\"fa fa-calendar\"></i>\n                    </span>\n                    <owl-date-time #dt1></owl-date-time>\n                  </div>\n\n                  <div class=\"time-wrapper\">\n                    <span class=\"form-heading\">End Time </span>\n\n\n                    <input [owlDateTime]=\"dt2\" name=\"endDate1\" [(ngModel)]=\"endDate1\" placeholder=\"End Date Time\">\n                    <span [owlDateTimeTrigger]=\"dt2\">\n                      <i class=\"fa fa-calendar\"></i>\n                    </span>\n                    <owl-date-time #dt2></owl-date-time>\n\n                    <div *ngIf=\"validateDate(startDate1,endDate1)\" class=\"alert alert-danger\">\n                      End date cannot be same as start date.\n                    </div>\n\n                    <div *ngIf=\"validateCurrentDate(startDate1) || validateCurrentDate(endDate1)\"\n                      class=\"alert alert-danger\">\n                      End date must be greater than start date\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card  col-12 col-sm-12 col-md-6 col-lg-6\" id=\"card-where\">\n            <div class=\"card-inner\">\n              <div class=\"card-header\">\n                <h4>Location </h4>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"form-group\">\n                  <div class=\"col-md-12\">\n\n                    <input type=\"text\" #location=\"ngModel\" pattern=\"^[A-za-z ]+$\" id=\"inputVenue\" name=\"venue\"\n                      [(ngModel)]=\"venue\" class=\"form-control\" placeholder=\"Venue\" required>\n                    <div [hidden]=\"location.pristine || location.valid\" class=\"alert alert-danger\">\n                      <div *ngIf=\"location.errors?.pattern\">\n                        Only letters allowed\n                      </div>\n                      <div *ngIf=\"location.errors?.required\">\n                        Required!\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12 btns-wrapper\">\n        <button id=\"btn-finalize\" type=\"button\" class=\"btn btn-primary rounded\" (click)=\"updateMeetingFunction()\"\n          style=\"float:right\">\n          Reschedule Meeting</button>  \n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/meeting/update-meeting/update-meeting.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/meeting/update-meeting/update-meeting.component.ts ***!
  \********************************************************************/
/*! exports provided: UpdateMeetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMeetingComponent", function() { return UpdateMeetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import for toastr

//import for Routing

//for cookies

var UpdateMeetingComponent = /** @class */ (function () {
    function UpdateMeetingComponent(appService, socketService, _route, router, toastr) {
        var _this = this;
        this.appService = appService;
        this.socketService = socketService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.getMeetingDetailsFunction = function (meetingId, authToken) {
            _this.appService.getMeetingDetails(meetingId, authToken).subscribe(//using the api get metting details.
            function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.meetingDetails = apiResponse.data;
                    _this.toastr.info("Meeting Details Captured ", "Meeting Found!");
                    //console.log(this.meetingDetails)
                    _this.participantId = _this.meetingDetails.participantId;
                    _this.subject = _this.meetingDetails.meetingTopic;
                    _this.description = _this.meetingDetails.meetingDescription;
                    _this.startDate1 = new Date(_this.meetingDetails.meetingStartDate);
                    _this.endDate1 = new Date(_this.meetingDetails.meetingEndDate);
                    _this.venue = _this.meetingDetails.meetingPlace;
                    _this.selectedUser = _this.meetingDetails.participantName;
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 404) {
                    _this.toastr.warning("Meeting Not Found", "");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            });
        }; //end getAllUsers
        /* Events based Functions */
        //emitted 
        this.notifyUpdatesToUser = function (data) {
            //data will be object with message and userId(recieverId)
            _this.socketService.notifyUpdates(data);
        }; //end notifyUpdatesToUser
    }
    UpdateMeetingComponent.prototype.ngOnInit = function () {
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authToken');
        this.receiverId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('receiverId');
        this.receiverName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('receiverName');
        this.adminName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('receiverName');
        this.userInfo = this.appService.getUserInfoFromLocalStorage();
        this.meetingId = this._route.snapshot.paramMap.get('meetingId');
        if (this.userInfo.isAdmin == 'true') {
            this.getMeetingDetailsFunction(this.meetingId, this.authToken);
        }
        else {
            this.router.navigate(['/user/normal/meeting/dashboard']);
        }
    };
    UpdateMeetingComponent.prototype.validateDate = function (startDate, endDate) {
        var start = new Date(startDate);
        var end = new Date(endDate);
        if (end < start) {
            return true;
        }
        else {
            return false;
        }
    }; //end validateDate
    UpdateMeetingComponent.prototype.validateCurrentDate = function (startDate) {
        var start = new Date(startDate);
        var end = new Date();
        if (end > start) {
            return true;
        }
        else {
            return false;
        }
    }; //end validateDate
    UpdateMeetingComponent.prototype.goToAdminDashboard = function () {
        this.router.navigate(['/user/admin/meeting/dashboard']);
    }; //end of goToAdminDashboard function
    UpdateMeetingComponent.prototype.updateMeetingFunction = function () {
        var _this = this;
        if (!this.subject) {
            this.toastr.warning("Subject is required", "Warning!");
        }
        else if (!this.description) {
            this.toastr.warning("Description is required", "Warning!");
        }
        else if (!this.startDate1) {
            this.toastr.warning("Start Date/Time is required", "Warning!");
        }
        else if (!this.endDate1) {
            this.toastr.warning("End Date/Time is required", "Warning!");
        }
        else if (!this.venue) {
            this.toastr.warning("Venue is required", "Warning!");
        }
        else if (this.validateDate(this.startDate1, this.endDate1)) {
            this.toastr.warning("End Date/Time cannot be before Start Date/Time", "Warning!");
        }
        else if (this.validateCurrentDate(this.startDate1) && this.validateCurrentDate(this.endDate1)) {
            this.toastr.warning("Meeting can't be schedule in back date/time", "Warning!");
        }
        else {
            var data_1 = {
                meetingId: this.meetingId,
                meetingTopic: this.subject,
                meetingDescription: this.description,
                meetingStartDate: this.startDate1.getTime(),
                meetingEndDate: this.endDate1.getTime(),
                meetingPlace: this.venue,
                authToken: this.authToken
            };
            console.log(data_1);
            this.appService.updateMeeting(data_1)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("We emailed the final schedule to participant", "Meeting Rescheduled");
                    var dataForNotify = {
                        message: "Hi, " + _this.receiverName + " has reschedule the Meeting - " + data_1.meetingTopic + ". Please check your Calendar/Email",
                        userId: _this.participantId
                    };
                    _this.notifyUpdatesToUser(dataForNotify);
                    setTimeout(function () {
                        _this.goToAdminDashboard();
                    }, 1000); //redirecting to admin dashboard page
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 400) {
                    _this.toastr.warning("Meeting Schedule Failed", "One or more fields are missing");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            }); //end calling updatemeeting
        }
    }; //end updatemeeting function
    UpdateMeetingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-meeting',
            template: __webpack_require__(/*! ./update-meeting.component.html */ "./src/app/meeting/update-meeting/update-meeting.component.html"),
            styles: [__webpack_require__(/*! ./update-meeting.component.css */ "./src/app/meeting/update-meeting/update-meeting.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], UpdateMeetingComponent);
    return UpdateMeetingComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardBorder{\r\n    box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-body-wrap\">\n  <div class=\"container\">\n    <div class=\"inner-box-body-wrap\">\n      <div class=\"top-btns\">\n        <a class=\"nav-link top-box-links\" [routerLink]=\"['/user/signup']\">\n          <span class=\"fa fa-arrow-left\"></span>\n          Sign Up\n        </a>   \n      </div>\n      <div class=\"logo-wrap text-center\">\n        <img src=\"./../../../assets/images/logo.png\" alt=\"Meeting Planner\" />\n      </div>\n      <div class=\"text-404 text-center\">\n        <h4>OOPS!! 404 Error</h4>\n        <p>Page Not Found!!!</p>\n        <div class=\"form-group\">\n          <div class=\"col-sm-12 controls\">\n            <a id=\"btn-signin\" class=\"sigin-404-btn nav-link top-box-links btn btn-primary\"\n              [routerLink]=\"['/user/login']\">\n              <span class=\"fa fa-arrow-left\"></span>\n              Go Back to Sign In\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Location services

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(location) {
        var _this = this;
        this.location = location;
        this.goBack = function () {
            _this.location.back();
        };
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/server-error/server-error.component.css":
/*!*********************************************************!*\
  !*** ./src/app/server-error/server-error.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardBorder{\r\n    box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.icons{\r\n    color:lightblue;\r\n}\r\n"

/***/ }),

/***/ "./src/app/server-error/server-error.component.html":
/*!**********************************************************!*\
  !*** ./src/app/server-error/server-error.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-body-wrap\">\n  <div class=\"container\">\n    <div class=\"inner-box-body-wrap\">\n      <div class=\"top-btns\">\n        <a class=\"nav-link top-box-links\" [routerLink]=\"['/user/signup']\">\n          <span class=\"fa fa-arrow-left\"></span>\n          Sign Up\n        </a>   \n      </div>\n      <div class=\"logo-wrap text-center\">\n        <img src=\"./../../../assets/images/logo.png\" alt=\"Meeting Planner\" />\n      </div>\n      <div class=\"text-404 text-center\">\n        <h4>OOPS!! 500 Error</h4>\n        <p>Server Error</p>\n        <div class=\"form-group\">\n          <div class=\"col-sm-12 controls\">\n            <a id=\"btn-signin\" class=\"sigin-404-btn nav-link top-box-links btn btn-primary\"\n              [routerLink]=\"['/user/login']\">\n              <span class=\"fa fa-arrow-left\"></span>\n              Go Back to Sign In\n            </a>   \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/server-error/server-error.component.ts":
/*!********************************************************!*\
  !*** ./src/app/server-error/server-error.component.ts ***!
  \********************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerErrorComponent = /** @class */ (function () {
    function ServerErrorComponent(router) {
        this.router = router;
    }
    ServerErrorComponent.prototype.goToSignIn = function () {
        this.router.navigate(['/user/login']);
    }; //end of goToSign function
    ServerErrorComponent.prototype.ngOnInit = function () {
    };
    ServerErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-server-error',
            template: __webpack_require__(/*! ./server-error.component.html */ "./src/app/server-error/server-error.component.html"),
            styles: [__webpack_require__(/*! ./server-error.component.css */ "./src/app/server-error/server-error.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ServerErrorComponent);
    return ServerErrorComponent;
}());



/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\n    border-radius: 100%;\n    line-height: 1em;\n    padding: 1em;\n    text-align: center;\n    margin: 0em;\n    width: 3em;\n    height: 3em;\n    float: left;\n    text-transform: uppercase;\n  }"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)='nameClicked()'  class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n    {{firstChar}}\n  </div>"

/***/ }),

/***/ "./src/app/shared/first-char/first-char.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/first-char/first-char.component.ts ***!
  \***********************************************************/
/*! exports provided: FirstCharComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstCharComponent", function() { return FirstCharComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FirstCharComponent = /** @class */ (function () {
    function FirstCharComponent() {
        this._name = '';
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FirstCharComponent.prototype.ngOnInit = function () {
        this._name = this.userName;
        this.firstChar = this._name[0];
    }; // end ngOnInit
    FirstCharComponent.prototype.ngOnChanges = function (changes) {
        var name = changes.userName;
        this._name = name.currentValue;
        this.firstChar = this._name[0];
    };
    FirstCharComponent.prototype.nameClicked = function () {
        this.notify.emit(this._name);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "userName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "userBg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FirstCharComponent.prototype, "userColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FirstCharComponent.prototype, "notify", void 0);
    FirstCharComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'first-char',
            template: __webpack_require__(/*! ./first-char.component.html */ "./src/app/shared/first-char/first-char.component.html"),
            styles: [__webpack_require__(/*! ./first-char.component.css */ "./src/app/shared/first-char/first-char.component.css")]
        })
    ], FirstCharComponent);
    return FirstCharComponent;
}());



/***/ }),

/***/ "./src/app/shared/my-cover/my-cover.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/my-cover/my-cover.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg{\r\n    width: 100%;\r\n    height: 100%;\r\n   \r\n    background-size: 100% 100%;\r\n    background-position: top center;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/shared/my-cover/my-cover.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/my-cover/my-cover.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n  <div style=\"height:500px\">\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/my-cover/my-cover.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/my-cover/my-cover.component.ts ***!
  \*******************************************************/
/*! exports provided: MyCoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCoverComponent", function() { return MyCoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyCoverComponent = /** @class */ (function () {
    function MyCoverComponent() {
    }
    MyCoverComponent.prototype.ngOnInit = function () {
    };
    MyCoverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-cover',
            template: __webpack_require__(/*! ./my-cover.component.html */ "./src/app/shared/my-cover/my-cover.component.html"),
            styles: [__webpack_require__(/*! ./my-cover.component.css */ "./src/app/shared/my-cover/my-cover.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyCoverComponent);
    return MyCoverComponent;
}());



/***/ }),

/***/ "./src/app/shared/my-nav/my-nav.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/my-nav/my-nav.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/my-nav/my-nav.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/my-nav/my-nav.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <nav class=\"navbar sticky-top navbar-expand-lg navbar-light \" style=\"background-color: #e3f2fd\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand h1\" href=\"#\">Let'sMeet</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" [routerLink]=\"['/user/login']\">Login </a>\n        </li>\n\n        <li class=\"nav-item \">\n              <a class=\"nav-link\" [routerLink]=\"['/user/signup']\">Register </a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#\">Help</a>\n          </li>\n      </ul>\n  </div>\n</nav> -->\n"

/***/ }),

/***/ "./src/app/shared/my-nav/my-nav.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/my-nav/my-nav.component.ts ***!
  \***************************************************/
/*! exports provided: MyNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNavComponent", function() { return MyNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyNavComponent = /** @class */ (function () {
    function MyNavComponent() {
    }
    MyNavComponent.prototype.ngOnInit = function () {
    };
    MyNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-nav',
            template: __webpack_require__(/*! ./my-nav.component.html */ "./src/app/shared/my-nav/my-nav.component.html"),
            styles: [__webpack_require__(/*! ./my-nav.component.css */ "./src/app/shared/my-nav/my-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyNavComponent);
    return MyNavComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./first-char/first-char.component */ "./src/app/shared/first-char/first-char.component.ts");
/* harmony import */ var _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-nav/my-nav.component */ "./src/app/shared/my-nav/my-nav.component.ts");
/* harmony import */ var _my_cover_my_cover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-cover/my-cover.component */ "./src/app/shared/my-cover/my-cover.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            declarations: [_first_char_first_char_component__WEBPACK_IMPORTED_MODULE_4__["FirstCharComponent"], _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_5__["MyNavComponent"], _my_cover_my_cover_component__WEBPACK_IMPORTED_MODULE_6__["MyCoverComponent"]],
            exports: [
                _first_char_first_char_component__WEBPACK_IMPORTED_MODULE_4__["FirstCharComponent"],
                _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_5__["MyNavComponent"],
                _my_cover_my_cover_component__WEBPACK_IMPORTED_MODULE_6__["MyCoverComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Added for Http and Observables



var SocketService = /** @class */ (function () {
    function SocketService(_http) {
        var _this = this;
        this._http = _http;
        this.baseUrl = "http://localhost:3000";
        //events that has to be listen
        this.verifyUser = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('verifyUser', function (data) {
                    observer.next(data);
                }); //On method
            }); //end observable
        }; //end verifyUser
        this.onlineUserList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('online-user-list', function (userList) {
                    observer.next(userList);
                }); //end On method
            }); //end observable
        }; //end onlineUserList
        this.disconnect = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('disconnect', function () {
                    observer.next();
                }); //end On method
            }); //end observable
        }; //end disconnect
        this.listenAuthError = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on('auth-error', function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end listenAuthError
        this.getUpdatesFromAdmin = function (userId) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end getUpdatesFromAdmin
        //* Events that are emitted *//
        this.setUser = function (authToken) {
            _this.socket.emit('set-user', authToken);
        };
        this.notifyUpdates = function (data) {
            _this.socket.emit('notify-updates', data);
        };
        this.exitSocket = function () {
            _this.socket.disconnect();
        }; // end exit socket
        this.disconnectedSocket = function () {
            _this.socket.emit("disconnect", ""); //end Socket
        }; //end disconnectedSocket
        //console.log("SocketService is called");
        //handshake is happening
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(this.baseUrl);
    }
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"box-body-wrap\">\n    <div class=\"container\">\n        <div class=\"inner-box-body-wrap\">\n            <div class=\"top-btns\">\n                <a class=\"nav-link top-box-links\" [routerLink]=\"['/user/login']\">\n                    <span class=\"fa fa-arrow-left\"></span>\n                    Sign In\n                </a>\n            </div>\n            <div class=\"logo-wrap text-center\">\n                <img src=\"./../../../assets/images/logo.png\" alt=\"Meeting Planner\" />\n            </div>\n            <div class=\"text-center \">\n                <form class=\"form-horizontal\" role=\"form\">\n                    <div class=\"input-group mb-3\">\n                        <input type=\"email\" id=\"inputEmail\" [(ngModel)]=\"email\" class=\"form-control\"\n                            placeholder=\"Enter Email to get verify password link\" name=\"email\" required autofocus>\n                    </div>   \n                    <div class=\"form-group\">\n                        <div class=\"col-sm-12 controls\">\n                            <button id=\"btn-send\" type=\"button\" class=\"btn btn-primary\"\n                                (click)=\"forgotPasswordFunction()\">\n                                Send</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import for toastr

//import for Routing

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.forgotPasswordFunction = function () {
        var _this = this;
        if (!this.email) {
            this.toastr.warning("Email is required", "Warning!");
        }
        else {
            var data = {
                email: this.email,
            };
            //console.log(data)  
            this.appService.resetPassword(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Reset Password", "Password reset instructions sent successfully");
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 404) {
                    _this.toastr.warning("Reset Password Failed", "Email Not Found!");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            }); //end calling signUpFunction
        }
    }; //end signUp function
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/user/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/user/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link.f-password {\r\n    display: block;\r\n    padding: .5rem 0px;\r\n    width: 100%;\r\n    text-align: right;\r\n    font-size: 14px;\r\n    color: #38b4b9;\r\n    font-weight: 600;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-body-wrap\">\n    <div class=\"container\">\n        <div class=\"inner-box-body-wrap\">\n            <div class=\"top-btns\">\n                <a class=\"nav-link top-box-links\" [routerLink]=\"['/user/signup']\">\n                    <span class=\"fa fa-arrow-left\"></span>\n                    Sign Up\n                </a>\n            </div>\n            <div class=\"logo-wrap text-center\">\n                <img src=\"./../../../assets/images/logo.png\" alt=\"Meeting Planner\" />\n            </div>\n            <form id=\"loginform\" class=\"login-form-wrapper\">\n                <div class=\"input-group mb-3\">\n                    <input type=\"email\" id=\"inputEmail\" [(ngModel)]=\"email\" class=\"form-control\"\n                        placeholder=\"Email address\" name=\"email\" required autofocus>\n                </div>\n                <div class=\"input-group mb-3\">\n                    <input type=\"password\" id=\"inputPassword\" [(ngModel)]=\"password\"\n                        (keydown)=\"loginUsingKeypress($event)\" name=\"password\" class=\"form-control\"\n                        placeholder=\"Password\" required>\n                    <a class=\"nav-link f-password\" [routerLink]=\"['/user/forgot-password']\">Forgot\n                        password?</a>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"col-sm-12 controls\">\n                        <button id=\"btn-signin\" type=\"button\" class=\"btn btn-primary\" (click)=\"signInFunction()\">\n                            Sign In\n                        </button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import for toastr

//import for Routing

//for cookies

var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, _route, router, toastr) {
        var _this = this;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.loginUsingKeypress = function (event) {
            if (event.keyCode === 13) {
                _this.signInFunction();
            }
        };
    }
    LoginComponent.prototype.goToAdminDashboard = function () {
        this.router.navigate(['/user/admin/meeting/dashboard']);
    };
    LoginComponent.prototype.goToUserDashboard = function () {
        this.router.navigate(['/user/normal/meeting/dashboard']);
    };
    LoginComponent.prototype.signInFunction = function () {
        var _this = this;
        if (!this.email) {
            this.toastr.warning("Email is required", "Warning!");
        }
        else if (!this.password) {
            this.toastr.warning("Password is required", "Warning!");
        }
        else {
            var data = {
                email: this.email,
                password: this.password,
            };
            console.log(data);
            this.appService.signIn(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Login Successfull", "Welcome to Meeting Planner");
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('authToken', apiResponse.data.authToken);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + " " + apiResponse.data.userDetails.lastName);
                    _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                    setTimeout(function () {
                        if (apiResponse.data.userDetails.isAdmin == "true") {
                            _this.goToAdminDashboard();
                        }
                        else {
                            _this.goToUserDashboard();
                        }
                    }, 1000);
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 404) {
                    _this.toastr.warning("Login Failed", "User Not Exist!");
                }
                else if (error.status == 400) {
                    _this.toastr.warning("Login Failed", "Wrong Password");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-body-wrap\">\n  <div class=\"container\">\n    <div class=\"inner-box-body-wrap\">\n\n      <div class=\"logo-wrap text-center\">\n        <img src=\"./../../../assets/images/logo.png\" alt=\"Meeting Planner\" />\n      </div>\n\n      <form id=\"loginform\" class=\"form-horizontal\" role=\"form\">\n\n        <div class=\"input-group mb-3\">\n\n          <input type=\"password\" #pass=\"ngModel\" id=\"inputPassword\" name=\"password\" [(ngModel)]=\"password\"\n            class=\"form-control\" placeholder=\"Enter Password\" minlength=\"8\" required>\n        </div>\n        <div [hidden]=\"pass.valid || pass.pristine\" class=\"alert alert-danger\">\n          <div *ngIf=\"pass.errors?.minlength\">\n            Atleast 8 characters\n          </div>\n          <div *ngIf=\"pass.errors?.required\">\n            Required\n          </div>\n        </div>\n\n        <div class=\"input-group mb-3\">\n\n          <input type=\"password\" #pass2=\"ngModel\" id=\"inputConfirmPassword\" name=\"confirmPassword\"\n            [(ngModel)]=\"confirmPassword\" class=\"form-control\" placeholder=\"Re-enter Password\" minlength=\"8\" required>\n        </div>\n\n        <div [hidden]=\"pass2.pristine || password==confirmPassword\" class=\"alert alert-danger\">\n          <div *ngIf=\"password!=confirmPassword\">\n            Password does not match\n          </div>\n          <div *ngIf=\"pass2.errors?.required\">\n            Required\n          </div>\n        </div>\n\n        <div style=\"margin-top:10px\" class=\"form-group\">\n          <!-- Button -->\n\n          <div class=\"col-sm-12 controls\">\n            <button id=\"btn-save\" type=\"button\" class=\"btn btn-primary\" (click)=\"updatePasswordFunction()\">\n              <i class=\"icon-hand-right\"></i> Save</button>\n          </div>\n        </div>\n\n      </form>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import for toastr

//for Service

//for routing

var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.validationToken = this._route.snapshot.paramMap.get('validationToken');
    };
    ResetPasswordComponent.prototype.goToSignIn = function () {
        this.router.navigate(['/user/login']);
    }; //end of goToSign function
    ResetPasswordComponent.prototype.updatePasswordFunction = function () {
        var _this = this;
        if (!this.password) {
            this.toastr.warning("Password is required", "Warning!");
        }
        else if (!this.confirmPassword) {
            this.toastr.warning("Confirm Password is required", "Warning!");
        }
        else {
            var data = {
                validationToken: this.validationToken,
                password: this.password,
            };
            this.appService.updatePassword(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Please login", "Password Updated!");
                    setTimeout(function () {
                        _this.goToSignIn();
                    }, 1000); //redirecting to signIn page
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 404) {
                    _this.toastr.warning("Password Update failed", "Please request another password reset!");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                    _this.router.navigate(['/serverError']);
                }
            }); //end calling signUpFunction
        }
    }; //end signUp function
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/user/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/user/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardBorder{\r\n    box-shadow: 0 4px 8px 0 #4ABDAC, 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-body-wrap\">\n  <div class=\"container\">\n    <div class=\"inner-box-body-wrap\">\n      <div class=\"top-btns\">\n\n        <a class=\"nav-link top-box-links\" [routerLink]=\"['/user/login']\">\n          <span class=\"fa fa-arrow-left\"></span>\n          Sign In</a>\n      </div>\n      <div class=\"logo-wrap text-center\">\n        <img src=\"./../../../assets/images/logo.png\" alt=\"Meeting Planner\" />\n      </div>\n      <form id=\"signupform\" class=\"form-horizontal\" role=\"form\">\n\n        <div id=\"signupalert\" style=\"display:none\" class=\"alert alert-danger\">\n          <p>Error:</p>\n          <span></span>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n\n              <div class=\"col-md-12 pd-right-0\">\n                <input type=\"text\" #fstName=\"ngModel\" pattern=\"^[A-za-z ]+$\" minlength=\"2\" id=\"inputFirstName\"\n                  name=\"firstName\" [(ngModel)]=\"firstName\" class=\"form-control\" placeholder=\"First Name\" required\n                  autofocus>\n\n\n                <div [hidden]=\"fstName.pristine || fstName.valid\" class=\"alert alert-danger\">\n                  <div *ngIf=\"fstName.errors?.pattern\">\n                    only letters\n\n                  </div>\n                  <div *ngIf=\"fstName.errors?.minlength\">\n                    atleast 2 letters\n                  </div>\n                  <div *ngIf=\"fstName.errors?.required\">\n                    Required\n                  </div>\n\n                </div>\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n\n              <div class=\"col-md-12 pd-left-0\">\n                <input type=\"text\" #lstName=\"ngModel\" pattern=\"^[A-za-z ]+$\" minlength=\"2\" id=\"inputLastName\"\n                  name=\"lastName\" [(ngModel)]=\"lastName\" class=\"form-control\" placeholder=\"Last Name\" required>\n                <div [hidden]=\"lstName.pristine || lstName.valid\" class=\"alert alert-danger\">\n                  <div *ngIf=\"lstName.errors?.pattern\">\n                    Only letters\n\n                  </div>\n                  <div *ngIf=\"lstName.errors?.minlength\">\n                    atleast 2 letters\n                  </div>\n                  <div *ngIf=\"lstName.errors?.required\">\n                    Required\n                  </div>\n\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n\n        <div class=\"form-group\">\n\n          <div class=\"col-md-12\">\n            <input type=\"email\" #emailId=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n              id=\"inputEmail\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Email address\"\n              required>\n\n            <div [hidden]=\"emailId.valid || emailId.pristine\" class=\"alert alert-danger\">\n              <div *ngIf=\"emailId.errors?.pattern\">\n                Invalid\n\n              </div>\n              <div *ngIf=\"emailId.errors?.required\">\n                Required\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n\n          <div class=\"col-md-12\">\n            <input type=\"text\" #user=\"ngModel\" pattern=\"^[A-za-z0-9- ]+$\" minlength=\"6\" id=\"inputUserName\"\n              name=\"userName\" [(ngModel)]=\"userName\" class=\"form-control\" placeholder=\"User Name\" required>\n            <div [hidden]=\"user.pristine || user.valid\" class=\"alert alert-danger\">\n              <div *ngIf=\"user.errors?.pattern\">\n                Only Letters and Digits are allowed\n                <div *ngIf=\"user.errors?.minlength\">\n                  atleast 6 chracters\n                </div>\n              </div>\n              <div *ngIf=\"user.errors?.required\">\n                Required\n              </div>\n            </div>\n            <!-- <div *ngIf=\"isAdmin == 'true' && userName\">\n              <div *ngIf=\"validateUserName(userName)\" class=\"alert alert-danger\">\n                ** Admin user should have '-admin' at the end of User Name\n              </div>\n            </div> -->\n\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n\n          <div class=\"col-md-12\">\n            <input type=\"password\" #pass=\"ngModel\" id=\"inputPassword\" name=\"password\" [(ngModel)]=\"password\"\n              class=\"form-control\" placeholder=\"Password\" minlength=\"8\" required>\n            <div [hidden]=\"pass.valid || pass.pristine\" class=\"alert alert-danger\">\n              <div *ngIf=\"pass.errors?.minlength\">\n                atleast 8 characters\n              </div>\n              <div *ngIf=\"pass.errors?.required\">\n                Required\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <div class=\"col-md-12 pd-right-0\">\n\n                <select  [(ngModel)]=\"country\" #Country=\"ngModel\" name=\"country\" class=\"form-control\" id=\"inputCountry\"\n                  (click)=\"onChangeOfCountry()\" required>\n                  <option [ngValue]=\"undefined\" disabled>Select Country</option>\n                  <option *ngFor=\"let country of countries\" [value]=\"country.code\">{{country.name}}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <div class=\"col-md-12 pd-left-0\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-text\">+{{countryCode}}</div>\n                  <input type=\"number\" #mobileNum=\"ngModel\" pattern=\"^\\d{10}$\" id=\"inputMobile\" class=\"form-control\"\n                    name=\"mobile\" [(ngModel)]=\"mobileNumber\" placeholder=\"Mobile\" required>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"input-group\">\n          <div class=\"checkbox\">\n            <div class=\"col-md-12\">\n                \n              <input id=\"inputAdmin\" [(ngModel)]=\"isAdmin\" (change)=\"checkValue(isAdmin?'true':'false')\" type=\"checkbox\"\n                name=\"isAdmin\"> Sign up as admin\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group text-center\">\n          <div class=\"col-md-12\">\n            <button id=\"btn-signup\" type=\"button\" class=\"btn btn-primary\" (click)=\"signupFunction()\">\n              Sign Up</button>\n          </div>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.countries = [];
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.getCountries();
        this.getCountryCodes();
        // console.log(this.isAdmin)
    };
    /***
     * Redirect To Sign In
     */
    SignupComponent.prototype.redirectToSignIn = function () {
        this.router.navigate(['/user/login']);
    };
    /***
     * SignUp Function
     */
    SignupComponent.prototype.signupFunction = function () {
        var _this = this;
        if (!this.firstName) {
            this.toastr.warning("First Name is required", "Warning!");
        }
        else if (!this.lastName) {
            this.toastr.warning("Last Name is required", "Warning!");
        }
        else if (!this.userName) {
            this.toastr.warning("User Name is required", "Warning!");
        }
        else if (!this.mobileNumber) {
            this.toastr.warning("Mobile Number is required", "Warning!");
        }
        else if (!this.country) {
            this.toastr.warning("Country is required", "Warning!");
        }
        else if (!this.email) {
            this.toastr.warning("Email is required", "Warning!");
        }
        else if (!this.password) {
            this.toastr.warning("Password is required", "Warning!");
        }
        else {
            if (this.isAdmin == undefined) {
                this.isAdmin = 'false';
                this.adminUserName = this.userName;
            }
            /**********
             * Add -admin for admin username
             */
            if (this.isAdmin == "true") {
                this.adminUserName = this.userName + "-admin";
            }
            var data = {
                firstName: this.firstName,
                lastName: this.lastName,
                mobileNumber: this.countryCode + " " + this.mobileNumber,
                email: this.email,
                password: this.password,
                userName: this.adminUserName,
                countryName: this.countryName,
                isAdmin: this.isAdmin
            };
            this.appService.signUp(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Please Check your email for verification link", "User Created Successfully.");
                    setTimeout(function () {
                        _this.redirectToSignIn();
                    }, 1000);
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                _this.toastr.error("Some Error Occurred", "Error!");
                _this.router.navigate(['/serverError']);
            });
        }
    };
    /************
     * Check Value for Checkbox
     */
    SignupComponent.prototype.checkValue = function (event) {
        this.isAdmin = event;
    };
    /***********
     * On Change of Country Set Value
     */
    SignupComponent.prototype.onChangeOfCountry = function () {
        this.countryCode = this.countryCodes[this.country];
        this.countryName = this.allCountries[this.country];
    };
    /*********
     *  Show List of Countries in Select Box
     */
    SignupComponent.prototype.getCountries = function () {
        var _this = this;
        this.appService.getCountryNames()
            .subscribe(function (data) {
            _this.allCountries = data;
            for (var i in data) {
                var singleCountry = {
                    name: data[i],
                    code: i
                };
                _this.countries.push(singleCountry);
            }
            _this.countries = _this.countries.sort(function (first, second) {
                return first.name.toUpperCase() < second.name.toUpperCase() ? -1 : (first.name.toUpperCase() > second.name.toUpperCase() ? 1 : 0);
            });
        });
    };
    /*************
     * Get Countries Code
     */
    SignupComponent.prototype.getCountryCodes = function () {
        var _this = this;
        this.appService.getCountryNumbers()
            .subscribe(function (data) {
            _this.countryCodes = data;
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./verify-email/verify-email.component */ "./src/app/user/verify-email/verify-email.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/user/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_8__["VerifyEmailComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/verify-email/verify-email.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".email-login-link:hover,\r\n.email-login-link:active,\r\n.email-login-link:focus,\r\n.email-login-link{\r\n    color:#3dbdc2;\r\n    \r\n    letter-spacing: 1px;\r\n}"

/***/ }),

/***/ "./src/app/user/verify-email/verify-email.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-body-wrap\">\n    <div class=\"container\">\n        <div class=\"inner-box-body-wrap text-center\">\n            <h6>Your account has been verified. You can <a class=\"email-login-link\" [routerLink]=\"['/user/login']\">Login </a>\n                now.</h6>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user/verify-email/verify-email.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/verify-email/verify-email.component.ts ***!
  \*************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import for toastr

//for Service

//for routing

var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
        this.userId = this._route.snapshot.paramMap.get('userId');
        this.verifyEmailFunction();
    };
    VerifyEmailComponent.prototype.verifyEmailFunction = function () {
        var _this = this;
        this.appService.verifyEmail(this.userId)
            .subscribe(function (apiResponse) {
            if (apiResponse.status == 200) {
                _this.toastr.success("Please login", "Email Verified!");
            }
            else {
                _this.toastr.error(apiResponse.message, "Error!");
            }
        }, function (error) {
            if (error.status == 404) {
                _this.toastr.warning("Email Verification failed", "User Not Found!");
            }
            else {
                _this.toastr.error("Some Error Occurred", "Error!");
                _this.router.navigate(['/serverError']);
            }
        }); //end calling signUpFunction
    }; //end signUp function
    VerifyEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! ./verify-email.component.html */ "./src/app/user/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.css */ "./src/app/user/verify-email/verify-email.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jaspreet3480\Downloads\meeting-planner\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
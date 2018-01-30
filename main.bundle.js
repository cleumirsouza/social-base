webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_filter_repository_filter_repository_component__ = __webpack_require__("../../../../../src/app/pages/filter-repository/filter-repository.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Array of the routes
var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'filter', component: __WEBPACK_IMPORTED_MODULE_3__pages_filter_repository_filter_repository_component__["a" /* FilterRepositoryComponent */] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            // Initialize the router and start it listening for browser location changes.
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_shared_components_header_header_component__ = __webpack_require__("../../../../../src/app/pages/shared/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_filter_repository_filter_repository_component__ = __webpack_require__("../../../../../src/app/pages/filter-repository/filter-repository.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_shared_components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_filter_repository_filter_repository_component__["a" /* FilterRepositoryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatExpansionModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/filter-repository/filter-repository.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-section {\r\n  margin-top: 2%;\r\n  margin-left: 16%;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.search-full-width {\r\n  width: 50%;\r\n  text-align: center;\r\n  margin-right: 4%;\r\n}\r\n\r\n.empty-search {\r\n  padding: 2%;\r\n  color: darkgray;\r\n  text-align: center;\r\n}\r\n\r\n.input-filter {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.input-table-search {\r\n  width: 50%;\r\n  font-size: 12px;\r\n  text-align: center;\r\n  margin-left: 25%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/filter-repository/filter-repository.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"search-section\">\r\n  <mat-form-field class=\"search-full-width\">\r\n    <input matInput type=\"text\" placeholder=\"Search Public Repository\"  [(ngModel)]=\"value\" (keyup.enter)=\"onSearch()\"/>\r\n    <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''; panelOpenState = false\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  </mat-form-field>\r\n  <button mat-raised-button color=\"primary\" (click)=\"onSearch()\">Search</button>\r\n</div>\r\n\r\n<mat-accordion>\r\n  <mat-expansion-panel [expanded]=\"panelOpenState\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Result Search\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <div class=\"card-container mat-elevation-z8\">\r\n      <div *ngIf=\"reposNoResult\" class=\"empty-search\">\r\n        <h3>There is not result for '{{value}}' </h3>\r\n      </div>\r\n      <div *ngIf=\"!reposNoResult\">\r\n        <div class=\"input-filter\">\r\n          <mat-form-field class=\"input-table-search\">\r\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Find Project\">\r\n          </mat-form-field>\r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\">\r\n          <ng-container matColumnDef=\"owner\">\r\n              <mat-header-cell *matHeaderCellDef> Owner </mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element\"> <h4> <a href=\"{{element.owner.html_url}}\" target=\"_blank\"> {{element.owner.login}} </a></h4></mat-cell>\r\n            </ng-container>\r\n            <!-- Repository Column -->\r\n          <ng-container matColumnDef=\"name\">\r\n            <mat-header-cell *matHeaderCellDef> Projects </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> <h4> <a href=\"{{element.html_url}}\" target=\"_blank\"> {{element.name}} </a></h4></mat-cell>\r\n          </ng-container>\r\n            <!-- Language Column -->\r\n          <ng-container matColumnDef=\"language\">\r\n            <mat-header-cell *matHeaderCellDef> Language </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.language}} </mat-cell>\r\n          </ng-container>\r\n            <!-- Forks Column -->\r\n          <ng-container matColumnDef=\"forks\">\r\n            <mat-header-cell *matHeaderCellDef> Total Forks/Stars </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.forks}} </mat-cell>\r\n          </ng-container>\r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n        <mat-paginator #paginator [pageSize]=\"7\"[pageSizeOptions]=\"[5, 10, 20]\"></mat-paginator>\r\n      </div>\r\n    </div>\r\n  </mat-expansion-panel>\r\n</mat-accordion>"

/***/ }),

/***/ "../../../../../src/app/pages/filter-repository/filter-repository.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterRepositoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_gitapiservice__ = __webpack_require__("../../../../../src/app/pages/services/gitapiservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterRepositoryComponent = /** @class */ (function () {
    function FilterRepositoryComponent(_gitApiService) {
        this._gitApiService = _gitApiService;
        this.panelOpenState = false;
        this.reposNoResult = false;
        this.value = '';
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatTableDataSource */]();
        this.displayedColumns = ['owner', 'name', 'language', 'forks'];
    }
    FilterRepositoryComponent.prototype.onSearch = function () {
        var _this = this;
        this.panelOpenState = false;
        this._gitApiService.getPublicRepos(this.value).subscribe(function (data) {
            if (data.items.length) {
                _this.reposNoResult = false;
                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatTableDataSource */](data.items);
                _this.dataSource.paginator = _this.paginator;
                _this.panelOpenState = true;
            }
            else {
                _this.reposNoResult = true;
                _this.panelOpenState = true;
            }
        });
    };
    FilterRepositoryComponent.prototype.ngOnInit = function () {
        this.reposNoResult = true;
    };
    FilterRepositoryComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatPaginator */])
    ], FilterRepositoryComponent.prototype, "paginator", void 0);
    FilterRepositoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-filter-repository',
            template: __webpack_require__("../../../../../src/app/pages/filter-repository/filter-repository.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/filter-repository/filter-repository.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_gitapiservice__["a" /* GitApiService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_gitapiservice__["a" /* GitApiService */]])
    ], FilterRepositoryComponent);
    return FilterRepositoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-section {\r\n  margin-top: 2%;\r\n  margin-left: 25%;\r\n  width: 48%;\r\n}\r\n\r\n.form-field {\r\n  font-size: 20px !important;\r\n  text-align: center;\r\n}\r\n\r\n/* mobile first */\r\n\r\n@media (max-width: 600px) {\r\n/* Styles */\r\n  .profile-card {\r\n    margin-left: 1% !important;\r\n    width: 90% !important; \r\n  }\r\n  \r\n  .profile-header .title {\r\n    font-size: 18px !important;\r\n  }\r\n}\r\n\r\n.profile-card {\r\n  margin-top: 2%;\r\n  margin-left: 13%;\r\n  width: 70%;\r\n}\r\n\r\n.profile-header {\r\n  font-size: 20px;\r\n  margin-bottom: 2%;\r\n}\r\n\r\n.profile-header .title {\r\n  font-size: 26px;\r\n  color: rgb(62, 62, 62);\r\n  font-weight: 550;\r\n}\r\n\r\n.profile-header-avatar {\r\n  width: 75px;\r\n  height: 75px;\r\n}\r\n\r\n/* Structure table*/\r\n\r\n.card-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  /* min-width: 300px; */\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 24px;\r\n  width: 100%;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div *ngIf=\"user\">\r\n  <!-- <h1>{{user.login}}</h1> -->\r\n  <mat-card class=\"profile-card\">\r\n    <mat-card-header class=\"profile-header\">\r\n      <img mat-card-avatar class=\"profile-header-avatar\" src=\"{{user.avatar_url}}\" alt=\"Photo of user profile\">\r\n      <mat-card-title class=\"title\">{{user.name}}</mat-card-title>\r\n      <mat-card-subtitle>Country: {{ user.location || 'Not Field by User'}}</mat-card-subtitle>\r\n      <mat-card-subtitle>Email:  {{user.email || 'Not Field by User'}}</mat-card-subtitle>\r\n      <mat-card-subtitle>Followers:  {{user.followers || 'There is not Followres'}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <div class=\"card-container mat-elevation-z8\">\r\n        <div class=\"input-filter\">\r\n          <mat-form-field>\r\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Find Project\">\r\n          </mat-form-field>\r\n        </div>\r\n        <mat-table #table [dataSource]=\"dataSource\">\r\n            <!-- Repository Column -->\r\n          <ng-container matColumnDef=\"name\">\r\n            <mat-header-cell *matHeaderCellDef> Projects </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> <h4> <a href=\"{{element.html_url}}\" target=\"_blank\"> {{element.name}} </a></h4></mat-cell>\r\n          </ng-container>\r\n            <!-- Language Column -->\r\n          <ng-container matColumnDef=\"language\">\r\n            <mat-header-cell *matHeaderCellDef> Language </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.language}} </mat-cell>\r\n          </ng-container>\r\n            <!-- Forks Column -->\r\n          <ng-container matColumnDef=\"forks\">\r\n            <mat-header-cell *matHeaderCellDef> Total Forks/Stars </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.forks}} </mat-cell>\r\n          </ng-container>\r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n        <mat-paginator #paginator [pageSize]=\"7\"[pageSizeOptions]=\"[5, 10, 20]\"></mat-paginator>\r\n      </div>\r\n    </mat-card-content>\r\n </mat-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gitapiservice__ = __webpack_require__("../../../../../src/app/pages/services/gitapiservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_gitApiService) {
        this._gitApiService = _gitApiService;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatTableDataSource */]();
        this.displayedColumns = ['name', 'language', 'forks'];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getProfileAndRepoUser();
    };
    HomeComponent.prototype.getProfileAndRepoUser = function () {
        var _this = this;
        this._gitApiService.getUser().subscribe(function (data) {
            _this.user = data;
            _this.imgPath = data.avatar_url;
        });
        this._gitApiService.getRepos().subscribe(function (data) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatTableDataSource */](data);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    HomeComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatPaginator */])
    ], HomeComponent.prototype, "paginator", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_gitapiservice__["a" /* GitApiService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_gitapiservice__["a" /* GitApiService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  login works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/services/gitapiservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GitApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GitApiService = /** @class */ (function () {
    function GitApiService(_http) {
        this._http = _http;
        this.username = 'cleumirsouza';
        this.client_id = '59f2328c57ac6ab80b1d';
        this.client_secret = '1cab2a80ad2ece6c95c5787d6f7f158854ae9d12';
    }
    GitApiService.prototype.getUser = function () {
        var url = "https://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret;
        return this._http.get(url)
            .map(function (data) { return data.json(); });
    };
    GitApiService.prototype.getRepos = function () {
        var url = "https://api.github.com/users/" + this.username + "/repos?client_id=" + this.client_id + "&client_secret=" + this.client_secret;
        return this._http.get(url)
            .map(function (data) {
            return data.json();
        });
    };
    GitApiService.prototype.getPublicRepos = function (nameRepo) {
        var url = "https://api.github.com/search/repositories?client_id=" + this.client_id + "&client_secret=" + this.client_secret + "&q=" + nameRepo;
        return this._http.get(url)
            .map(function (data) {
            return data.json();
        });
    };
    GitApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GitApiService);
    return GitApiService;
}());



/***/ }),

/***/ "../../../../../src/app/pages/shared/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.menu-position {\r\n  padding: 0 14px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/shared/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <span>Social Base Application</span>\r\n  <span class=\"spacer\"></span>\r\n  <div class=\"menu-position\">\r\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n        <mat-icon>more_vert</mat-icon>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\" xPosition=\"before\" >\r\n      <button mat-menu-item routerLink=\"/filter\">\r\n        <!-- <a > -->\r\n          <mat-icon>input</mat-icon>\r\n          <span>Filter Repositories</span>\r\n        <!-- </a> -->\r\n      </button>\r\n      <button mat-menu-item (click)=\"onBack($event)\">\r\n        <mat-icon>backspace</mat-icon>\r\n        <span>Logout</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/pages/shared/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_location) {
        this._location = _location;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onFilter = function () {
        this._location.go('/filter');
    };
    HeaderComponent.prototype.onBack = function (event) {
        this._location.back();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/pages/shared/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/shared/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log('bootstrapModule', err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
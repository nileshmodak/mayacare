"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var firebaseProject_1 = require('./firebaseProject');
var app_component_1 = require('./app.component');
var angularfire2_1 = require('angularfire2');
var auth_module_1 = require('./auth/auth.module');
var dashboard_module_1 = require('./dashboard/dashboard.module');
var app_routing_1 = require('./app.routing');
var home_component_1 = require('./home/home.component');
exports.firebaseAuthConfig = {
    provider: angularfire2_1.AuthProviders.Password,
    method: angularfire2_1.AuthMethods.Password
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                angularfire2_1.AngularFireModule.initializeApp(firebaseProject_1.firebaseConfig, exports.firebaseAuthConfig),
                auth_module_1.AuthModule,
                dashboard_module_1.DashModule,
                app_routing_1.AppRouting,
                common_1.CommonModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                app_component_1.PageNotFoundComponent
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
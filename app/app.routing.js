"use strict";
var router_1 = require('@angular/router');
var auth_component_1 = require('./auth/auth.component');
var app_component_1 = require('./app.component');
var appRoutes = [
    { path: '', component: auth_component_1.LoginComponent },
    { path: '**', component: app_component_1.PageNotFoundComponent }
];
exports.AppRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
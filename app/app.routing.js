"use strict";
var router_1 = require('@angular/router');
var all_components_1 = require('./all/all.components');
var NewsList_component_1 = require('./newsList/NewsList.component');
var Magazine_component_1 = require('./magazine/Magazine.component');
var playerSubscribe_component_1 = require('./playerSubscribe/playerSubscribe.component');
var htmlEditor_component_1 = require('./htmlEditor/htmlEditor.component');
exports.routes = [
    { path: '', component: all_components_1.Home },
    { path: 'news', component: NewsList_component_1.NewsList },
    { path: 'about', component: all_components_1.About },
    { path: 'magazine', component: Magazine_component_1.Magazine },
    { path: 'subscribe', component: playerSubscribe_component_1.PlayerSubscribe },
    { path: 'editor', component: htmlEditor_component_1.HtmlEditor },
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map
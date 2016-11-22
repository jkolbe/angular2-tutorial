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
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var expendHighlight_directive_1 = require('./common/expendHighlight.directive');
var app_component_1 = require('./app.component');
var hello_component_1 = require('./hello.component');
var fancyText_component_1 = require('./fancyText/fancyText.component');
var fancyCheckbox_component_1 = require('./fancyCheckbox/fancyCheckbox.component');
var SubscriptionForm_component_1 = require('./subscriptionForm/SubscriptionForm.component');
var playerSubscribe_component_1 = require('./playerSubscribe/playerSubscribe.component');
var htmlEditor_component_1 = require('./htmlEditor/htmlEditor.component');
var NewsList_component_1 = require('./newsList/NewsList.component');
var Magazine_component_1 = require('./magazine/Magazine.component');
var news_service_1 = require('./newsList/news.service');
var newsSearch_pipe_1 = require('./newsList/newsSearch.pipe');
var all_components_1 = require('./all/all.components');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.routing],
            declarations: [app_component_1.AppComponent, Magazine_component_1.Magazine, hello_component_1.HelloComponent, playerSubscribe_component_1.PlayerSubscribe, SubscriptionForm_component_1.SubscriptionForm, fancyText_component_1.FancyText, fancyCheckbox_component_1.FancyCheckbox, htmlEditor_component_1.HtmlEditor, NewsList_component_1.NewsList, expendHighlight_directive_1.ExpendHighlightDirective, newsSearch_pipe_1.NewsSearchPipe, all_components_1.About, all_components_1.Home, all_components_1.News, all_components_1.MySPA],
            providers: [news_service_1.NewsService],
            bootstrap: [app_component_1.AppComponent, all_components_1.MySPA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
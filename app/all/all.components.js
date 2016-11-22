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
var Home = (function () {
    function Home() {
    }
    Home = __decorate([
        core_1.Component({
            selector: 'home-directive',
            template: "\n  <h2>Home</h2>\n  <p>This is the home page</p>\n  <hello></hello>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
}());
exports.Home = Home;
var About = (function () {
    function About() {
    }
    About = __decorate([
        core_1.Component({
            selector: 'about-directive',
            template: "\n  <h2>About</h2>\n  <p>About our company.</p>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], About);
    return About;
}());
exports.About = About;
var News = (function () {
    function News() {
    }
    News = __decorate([
        core_1.Component({
            selector: 'news-directive',
            template: "\n  <h2>News</h2>\n  <p>Latest news.</p>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], News);
    return News;
}());
exports.News = News;
var MySPA = (function () {
    function MySPA() {
    }
    MySPA = __decorate([
        core_1.Component({
            selector: 'my-spa',
            template: "\n  <h1>Simple SPA!</h1>\n  <a [routerLink]=\"['/']\">Home</a>\n  <a [routerLink]=\"['/news']\">News</a>\n  <a [routerLink]=\"['/about']\">About</a>\n  <a [routerLink]=\"['/magazine']\">Magazine</a>\n  <a [routerLink]=\"['/subscribe']\">Subscribe</a>\n  <a [routerLink]=\"['/editor']\">Editor</a>\n\n  <div>\n  <router-outlet></router-outlet>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MySPA);
    return MySPA;
}());
exports.MySPA = MySPA;
//# sourceMappingURL=all.components.js.map
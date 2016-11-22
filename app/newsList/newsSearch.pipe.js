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
var NewsSearchPipe = (function () {
    function NewsSearchPipe() {
    }
    NewsSearchPipe.prototype.transform = function (sourceList, searchText) {
        if (searchText === undefined || searchText.length == 0) {
            // no search results
            return sourceList;
        }
        var reg = new RegExp(searchText, 'i');
        return sourceList.filter(function (news) {
            return news.title.search(reg) >= 0 || news.body.search(reg) >= 0;
        });
    };
    NewsSearchPipe = __decorate([
        core_1.Pipe({
            name: 'newsSearch'
        }), 
        __metadata('design:paramtypes', [])
    ], NewsSearchPipe);
    return NewsSearchPipe;
}());
exports.NewsSearchPipe = NewsSearchPipe;
//# sourceMappingURL=newsSearch.pipe.js.map
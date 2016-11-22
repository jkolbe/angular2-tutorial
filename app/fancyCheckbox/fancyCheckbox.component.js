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
var FancyCheckbox = (function () {
    function FancyCheckbox() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FancyCheckbox.prototype, "label", void 0);
    FancyCheckbox = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "fancy-checkbox",
            styleUrls: ["fancyCheckbox.component.css"],
            template: "<label><input type='checkbox'/><span></span>{{label}}</label>"
        }), 
        __metadata('design:paramtypes', [])
    ], FancyCheckbox);
    return FancyCheckbox;
}());
exports.FancyCheckbox = FancyCheckbox;
//# sourceMappingURL=fancyCheckbox.component.js.map
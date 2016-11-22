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
var ExpendHighlightDirective = (function () {
    function ExpendHighlightDirective(el) {
        this.element = el;
    }
    ExpendHighlightDirective.prototype.ngOnChanges = function (changes) {
        this.element.nativeElement.style.backgroundColor = this.isExpanded ? "#cfcfcf" : null;
    };
    ExpendHighlightDirective.prototype.onMouseEnter = function () {
        if (this.isExpanded) {
            this.element.nativeElement.style.border = "thin solid black";
        }
    };
    ExpendHighlightDirective.prototype.onMouseLeave = function () {
        if (this.isExpanded) {
            this.element.nativeElement.style.border = null;
        }
    };
    __decorate([
        core_1.Input("expendHighlight"), 
        __metadata('design:type', Boolean)
    ], ExpendHighlightDirective.prototype, "isExpanded", void 0);
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ExpendHighlightDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ExpendHighlightDirective.prototype, "onMouseLeave", null);
    ExpendHighlightDirective = __decorate([
        core_1.Directive({
            selector: '[expendHighlight]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ExpendHighlightDirective);
    return ExpendHighlightDirective;
}());
exports.ExpendHighlightDirective = ExpendHighlightDirective;
//# sourceMappingURL=expendHighlight.directive.js.map
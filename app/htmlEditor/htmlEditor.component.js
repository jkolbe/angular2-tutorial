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
var HtmlEditor = (function () {
    function HtmlEditor() {
        this.userInput = "Enter HTML here";
    }
    HtmlEditor = __decorate([
        core_1.Component({
            selector: "html-editor",
            template: "\n\t\t<p>test</p>\n\t\t<textarea [(ngModel)]=\"userInput\" rows=\"5\" cols=\"40\">\n\t\t</textarea>\n\t\t<h4>preview</h4>\n\t\t<div [innerHTML] = \"userInput\"></div>\n\t\t<h4>Raw Text</h4>\n\t\t<pre>{{userInput}}</pre>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], HtmlEditor);
    return HtmlEditor;
}());
exports.HtmlEditor = HtmlEditor;
//# sourceMappingURL=htmlEditor.component.js.map
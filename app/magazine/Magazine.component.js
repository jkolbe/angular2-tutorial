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
var Magazine = (function () {
    function Magazine() {
        this.fullName = "";
        this.editions = [
            { editionCode: 1, editionName: "US", price: "10.99 USD" },
            { editionCode: 2, editionName: "Canada", price: "14.99 CAD" },
            { editionCode: 3, editionName: "International", price: "23.99 USD" },
        ];
        this.selectedEdition = this.editions[0];
        this.selectedShipping = "GROUND";
        this.acceptPolicy = false;
    }
    Magazine.prototype.submitForm = function () {
        var requestData = {
            customerName: this.fullName,
            productCode: this.selectedEdition.editionCode,
            acceptPolicy: this.acceptPolicy,
            shipMode: this.selectedShipping
        };
        console.log(JSON.stringify(requestData));
    };
    Magazine = __decorate([
        core_1.Component({
            selector: "magazine",
            styles: ["input.ng-touched.ng-invalid {background: red; } input:required {box-shadow: 2px 2px 5px blue; } "],
            template: "\n\t<form #theForm=\"ngForm\">\n\t\tFull name: <br/>\n\t\t<input type=\"text\" name=\"fullName\" [(ngModel)] = \"fullName\" required #theElement #theModel=\"ngModel\"><br/>\n\t\t<span style=\"color:red\" [hidden] = \"theModel.valid || theModel.untouched\">Please enter your name</span><br/>\n\n\t\t<pre>Valid: {{theModel.valid}}</pre>\n\t\t<pre>Touched: {{theModel.touched}}</pre>\n\t\t<pre>Dirty: {{theModel.dirty}}</pre>\n\t\tclass name: {{theElement.className}} <br/><br/>\n\n\n\t\tMagazine edition: <br/>\n\t\t<select [(ngModel)] = \"selectedEdition\" name=\"selectedEdition\">\n\t\t\t<option *ngFor=\"let e of editions\" [ngValue]= \"e\" >{{e.editionName}}</option>\n\t\t</select><br/>\n\t\t\n\t\tShipping option:<br/>\n\t\t<input type=\"radio\" name=\"selectedShipping\" [(ngModel)]=\"selectedShipping\" value=\"GROUND\" />Ground\n\t\t<input type=\"radio\" name=\"selectedShipping\" [(ngModel)]=\"selectedShipping\" value=\"AIR\"/>Air<br/>\n\t\t\n\t\t<input type=\"checkbox\" name=\"acceptPolicy\" [(ngModel)]=\"acceptPolicy\" required> I accept the terms and conditions<br/>\n\t\t<br/>\n\n\t\tPrice: {{selectedEdition.price}} <br/>\n\t\t<button (click)=\"submitForm()\" [disabled]=\"!theForm.form.valid || !acceptPolicy\">Purchase</button>\n\t</form>\n\t<hr>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Magazine);
    return Magazine;
}());
exports.Magazine = Magazine;
//# sourceMappingURL=Magazine.component.js.map
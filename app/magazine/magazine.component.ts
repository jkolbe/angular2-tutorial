import { Component } from '@angular/core';
@Component({
	selector: "magazine",
	styles: ["input.ng-touched.ng-invalid {background: red; } input:required {box-shadow: 2px 2px 5px blue; } "],
	template: `
	<form #theForm="ngForm">
		Full name: <br/>
		<input type="text" name="fullName" [(ngModel)] = "fullName" required #theElement #theModel="ngModel"><br/>
		<span style="color:red" [hidden] = "theModel.valid || theModel.untouched">Please enter your name</span><br/>

		<pre>Valid: {{theModel.valid}}</pre>
		<pre>Touched: {{theModel.touched}}</pre>
		<pre>Dirty: {{theModel.dirty}}</pre>
		class name: {{theElement.className}} <br/><br/>


		Magazine edition: <br/>
		<select [(ngModel)] = "selectedEdition" name="selectedEdition">
			<option *ngFor="let e of editions" [ngValue]= "e" >{{e.editionName}}</option>
		</select><br/>
		
		Shipping option:<br/>
		<input type="radio" name="selectedShipping" [(ngModel)]="selectedShipping" value="GROUND" />Ground
		<input type="radio" name="selectedShipping" [(ngModel)]="selectedShipping" value="AIR"/>Air<br/>
		
		<input type="checkbox" name="acceptPolicy" [(ngModel)]="acceptPolicy" required> I accept the terms and conditions<br/>
		<br/>

		Price: {{selectedEdition.price}} <br/>
		<button (click)="submitForm()" [disabled]="!theForm.form.valid || !acceptPolicy">Purchase</button>
	</form>
	<hr>
	`

})
export class Magazine {

	fullName:string = ""
	editions = [
		{editionCode:1, editionName: "US", price: "10.99 USD"},
		{editionCode:2, editionName: "Canada", price: "14.99 CAD"},
		{editionCode:3, editionName: "International", price: "23.99 USD"},
	]
	selectedEdition = this.editions[0]
	selectedShipping = "GROUND"
	acceptPolicy = false

	submitForm() {
		let requestData = {
			customerName : this.fullName,
			productCode : this.selectedEdition.editionCode,
			acceptPolicy : this.acceptPolicy,
			shipMode : this.selectedShipping
		}
		console.log(JSON.stringify(requestData));
	}
}
import { Component } from '@angular/core';
@Component({
	selector: "html-editor",
	template: `
		<p>test</p>
		<textarea [(ngModel)]="userInput" rows="5" cols="40">
		</textarea>
		<h4>preview</h4>
		<div [innerHTML] = "userInput"></div>
		<h4>Raw Text</h4>
		<pre>{{userInput}}</pre>
	`
})
export class HtmlEditor {
	userInput = "Enter HTML here"
}
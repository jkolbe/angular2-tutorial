import { Component, Input } from '@angular/core';
@Component({
	moduleId: module.id,
	selector: "subscription-form",
	templateUrl: "SubscriptionForm.component.html"
})
export class SubscriptionForm {
	@Input() interests:[string]
}
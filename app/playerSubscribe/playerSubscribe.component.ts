import { Component } from '@angular/core';
@Component({
	moduleId: module.id,
	selector: "player-subscribe",
	template: "<subscription-form [interests]='players'></subscription-form>"
})
export class PlayerSubscribe {
	players = ["LeBron James", "Lionel Messi", "Manny Pacquiao"]
}
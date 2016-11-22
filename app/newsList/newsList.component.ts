import { Component } from '@angular/core';
import { NewsService } from './news.service';

@Component({
    selector: "news-list",
	styles: [`
    .collapsed {
        height: 16pt;
        overflow: hidden;
    }
    `],
    template: `
   <div>
        <input type="text" [(ngModel)] = "searchText" placeholder="Search">

        <div *ngFor="let news of (newsItems | newsSearch: searchText) let newsId = index">
        <h3>{{news.title | uppercase }}</h3>
        <p [ngClass]="{collapsed: selectedNewsId != newsId}" [expendHighlight] = "selectedNewsId == newsId" >
        {{news.body}}
        </p>
        <a href (click)="expandNews(newsId)" 
		*ngIf = "selectedNewsId != newsId">More...</a>
        </div>
    </div>
    `
})

/* <a href (click)="expandNews(newsId)" 
        *ngIf="selectedNewsId != newsId">More...</a>
        </div> */

export class NewsList {

    selectedNewsId:number
    searchText:string
    newsItems = []

    // constructor(svc:NewsService) {
    //     this.newsSvc = svc;
    // }
    // constructor(private newsSvc:NewsService) {}

    constructor(private newsSvc:NewsService) {
        newsSvc.getNewsItems().subscribe(
            response => { this.newsItems = response.json(); },
            error => { console.log('Sorry, there was a problem with your data'); }
        )
    }

    getAllNews(){
        return this.newsSvc.getNewsItems()
    }

    expandNews(id:number) {
        this.selectedNewsId = id

        return false
    }
}
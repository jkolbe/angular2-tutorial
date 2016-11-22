import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule }		from '@angular/forms';
import { HttpModule }		from '@angular/http';

import { ExpendHighlightDirective } from './common/expendHighlight.directive';

import { AppComponent }   	from './app.component';
import { HelloComponent }   from './hello.component';

import { FancyText }   		from './fancyText/fancyText.component';
import { FancyCheckbox }   	from './fancyCheckbox/fancyCheckbox.component';
import { SubscriptionForm } from './subscriptionForm/SubscriptionForm.component';
import { PlayerSubscribe }  from './playerSubscribe/playerSubscribe.component';

import { HtmlEditor }   	from './htmlEditor/htmlEditor.component';
import { NewsList } 		from './newsList/NewsList.component';
import { Magazine } 		from './magazine/Magazine.component';

import { NewsService } 		from './newsList/news.service';

import { NewsSearchPipe } 	from './newsList/newsSearch.pipe';


import { About, Home, News, MySPA }  from './all/all.components';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing],
  declarations: [ AppComponent, Magazine, HelloComponent, PlayerSubscribe, SubscriptionForm, FancyText, FancyCheckbox, HtmlEditor, NewsList, ExpendHighlightDirective, NewsSearchPipe, About, Home, News, MySPA ],
  providers: 	[NewsService],
  bootstrap:    [ AppComponent, MySPA ]
})
export class AppModule { }

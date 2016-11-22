import { RouterModule , Routes } from '@angular/router';
import { About, Home, News, MySPA } from './all/all.components';

import { NewsList } 		from './newsList/NewsList.component';
import { Magazine } 		from './magazine/Magazine.component';
import { PlayerSubscribe }  from './playerSubscribe/playerSubscribe.component';
import { HtmlEditor }   	from './htmlEditor/htmlEditor.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'news', component: NewsList },
  { path: 'about', component: About },
  { path: 'magazine', component: Magazine },
  { path: 'subscribe', component: PlayerSubscribe },
  { path: 'editor', component: HtmlEditor },
];

export const routing = RouterModule.forRoot(routes);


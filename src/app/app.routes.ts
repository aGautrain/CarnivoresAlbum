import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TextbookComponent } from './textbook/textbook.component';
import { FaqComponent } from './faq/faq.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'book',
        component: TextbookComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'album',
        component: AlbumComponent
    },
    {
        path: 'album/:family',
        component: AlbumComponent
    }
];

export const AppRoutes = RouterModule.forRoot(routes);
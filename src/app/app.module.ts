import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { FaqComponent } from './faq/faq.component';
import { TextbookComponent } from './textbook/textbook.component';
import { HomeComponent } from './home/home.component';

import { AppRoutes } from './app.routes';
import { AlbumFilterComponent } from './album-filter/album-filter.component';
import { AlbumPicturesComponent } from './album-pictures/album-pictures.component';
import { PictureComponent } from './album-pictures/picture/picture.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    IntroductionComponent,
    AboutComponent,
    AlbumComponent,
    FaqComponent,
    TextbookComponent,
    HomeComponent,
    AlbumFilterComponent,
    AlbumPicturesComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

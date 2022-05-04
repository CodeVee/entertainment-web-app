import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BigThumbnailComponent } from './components/big-thumbnail/big-thumbnail.component';
import { SmallThumbnailComponent } from './components/small-thumbnail/small-thumbnail.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule.components,
    SidebarComponent,
    BigThumbnailComponent,
    SmallThumbnailComponent,
    BookmarkComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

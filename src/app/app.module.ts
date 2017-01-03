import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ng2-bootstrap/components/alert';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HttpModule,JsonpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { PostListService } from './post/postlist/services/postlist-service';
import { PostlistComponent } from './post/postlist/postlist.component';
import { HomeComponent } from './home/home.component';
import { PostDetailMainComponent } from './post/post-detail-main/post-detail-main.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { AddCommentComponent } from './comment/add-comment/add-comment.component';
import { SocialChannelComponent } from './home/social-channel/social-channel.component';
import { OnlineContactComponent } from './home/online-contact/online-contact.component';
import { SitestatComponent } from './sitestat/sitestat.component';

import { UserLoginService } from './user/user-login/user-login.service';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';


//mock Http service
import { fakeBackendProvider } from './helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import appRoutes from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    HomeComponent,
    PostDetailMainComponent,
    PostDetailComponent,
    AddCommentComponent,
    SitestatComponent,
    SocialChannelComponent,
    OnlineContactComponent,
    UserLoginComponent,
    ForgetPwdComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AlertModule,
    PaginationModule,
    HttpModule,
    JsonpModule,
    SharedModule,
    appRoutes
  ],
  providers: [
    UserLoginService,
    PostListService,
    
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}

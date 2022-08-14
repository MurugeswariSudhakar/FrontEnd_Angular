import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './core/services/config.service';
import { HomeModule } from './home/home.module';
import { FooterComponent } from './shared/layout/footer/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header/header.component';
import { SharedModule } from './shared/shared.module';
import { map } from 'rxjs';


// function initialize(http: HttpClient, config: ConfigService) {
// 	return (): Promise<boolean> => {
//     return new Promise<boolean>((resolve: (a: boolean) => void): void => {
//       http.get('./config.json')
//       .pipe(
//         map((x: ConfigService) => {
//           config.baseUrl = x.baseUrl;
//           resolve(true);
//         })
//       ).subscribe();    });
//   }
// }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HomeModule,
    SharedModule
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initialize,
    //   deps: [
    //     HttpClient,
    //     ConfigService
    //   ],
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

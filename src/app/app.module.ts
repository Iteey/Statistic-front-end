import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopNavComponent } from './top-nav/top-nav.component';
import { CompanyIntroComponent } from './company-intro/company-intro.component';
import { CompanyNavComponent } from './company-nav/company-nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ContentComponent } from './content/content.component';
import { ContentChartComponent } from './content-chart/content-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    CompanyIntroComponent,
    CompanyNavComponent,
    MainContentComponent,
    ContentComponent,
    ContentChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

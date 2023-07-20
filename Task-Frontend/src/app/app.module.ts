import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { CompoundsService } from './services/compounds.service';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CompoundPageComponent } from './pages/compound-page/compound-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    CardContainerComponent,
    HomePageComponent,
    CompoundPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CompoundsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

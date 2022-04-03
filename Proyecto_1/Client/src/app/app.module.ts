import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdministradoresComponent } from './components/administradores/administradores.component';
import { DesarrolladoresComponent } from './components/desarrolladores/desarrolladores.component';
import { CardAdminComponent } from './components/card-admin/card-admin.component';
import { IonicModule } from '@ionic/angular';
import { CardDeveloperComponent } from './components/card-developer/card-developer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    AdministradoresComponent,
    DesarrolladoresComponent,
    CardAdminComponent,
    CardDeveloperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

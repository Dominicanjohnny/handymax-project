import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent} from './layouts/blank/blank.component';
import { Approutes } from './app.routing.module';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';
import { LocationComponent } from './components/location/location.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    FullComponent,
    ServiceProviderComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Approutes, { useHash: false }),
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCai7G_mPBiWVyCuG7hB09J2qFaoUNgM0g'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

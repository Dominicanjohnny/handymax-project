import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';
import { LocationComponent } from './components/location/location.component';
import { PlumberComponent} from './plumber/plumber.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/authentication/signup', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: './authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '',
    component: FullComponent,
    children: [{
      path: 'service-provider',
      component: ServiceProviderComponent
    }]
  },
  {
    path: '',
    component: FullComponent,
    children: [{
      path: 'location',
      component: LocationComponent
    }]
  },

  {
    path: 'location',
    component: FullComponent,
    children: [{
      path: 'service-provider',
      component: LocationComponent
    }]
  },

  {
    path: '',
    component: FullComponent,
    children: [{
      path: 'plumber-component',
      component: PlumberComponent
    }]
  },

  {
    path: '**',
    redirectTo: '/authentication/signup'
  }];




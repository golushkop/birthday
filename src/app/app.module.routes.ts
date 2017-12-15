import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
const appRoutes = [
  {
    path: '',
    loadChildren: './modules/default/default.module#DefaultModule'
  },
  {
    path: 'birthday',
    loadChildren: './modules/birthday/birthday.module#BirthdayModule'
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

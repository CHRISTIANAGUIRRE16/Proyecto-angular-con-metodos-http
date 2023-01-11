import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NoFoundComponent } from './no-found/no-found.component';
import { CommonModule } from '@angular/common';


const routes :Routes =[

  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'**',component:NoFoundComponent},


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PagesRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }

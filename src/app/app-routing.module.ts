import { UserComponent } from './Modules/user/user.component';
import { NewsComponent } from './Modules/news/news.component';
import { ProductsComponent } from './Modules/products/products.component';
import { CardsComponent } from './Modules/cards/cards.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'user',
    component:UserComponent,
    loadChildren:()=>
    import('./Modules/user/user.module').then(x=>x.UserModule)
  },
  {
    component:CardsComponent,
    path:'cards'
  },
  {
    component:ProductsComponent,
    path:'products',
    children:[
      {
        component:CardsComponent,
        path:'p'
      },
      {
        component:NewsComponent,
        path:'d'
      },
      {
        component:CardsComponent,
        path:'s'
      },
    
    ]
  },
  {
    component:NewsComponent,
    path:'news'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

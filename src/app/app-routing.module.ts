import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AuthorComponent} from './author/author.component';
import{BookComponent} from './book/book.component'

const routes: Routes = [
  {path:'author' ,component:AuthorComponent  },
  {path:'books', component:BookComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

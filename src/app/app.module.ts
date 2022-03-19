import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { ShowDelAuthorComponent } from './author/show-delAuthor/show-delAuthor.component';
import{AddEditAuthorComponent} from './author/add-editAuthor/add-editAuthor.component'
import { BookComponent } from './book/book.component';
import { AddEditBookComponent } from './book/add-editBook/add-edit-Book.component';
import{ ShowDelBookComponent} from './book/show-delBook/show-del-Book.component';

import{SharedService} from './shared.service';
import{HttpClientModule} from '@angular/common/http';
import{ReactiveFormsModule,FormsModule}from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    AuthorComponent,
    AddEditAuthorComponent,
    ShowDelAuthorComponent,

    BookComponent,
    AddEditBookComponent,
    ShowDelBookComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIURL="http://localhost:5000/api";
  readonly ImageURL="http://localhost:5000/Images";

  constructor(private http:HttpClient) { }

  //methoda to retreive data from api
  //Author Method
  //getAuthors
  GetAuthors():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/Author')
}
  //getAuthor by Id
  GetAuthor(id:any):Observable<any>{
    return this.http.get(this.APIURL+'/Author/'+id)
}
  //post
AddAuthor(author:any){
  return this.http.post(this.APIURL+'/Author',author)
}
  //put
EditAuthor(id:number,author:any){
  return this.http.put(this.APIURL+'/Author/'+id,author)
}
  //delete
DeleteAuthor(id:any){
  return this.http.delete(this.APIURL+'/Author/'+id)
}
//getbooknames
GetAuthorsBooksNames(id:any):Observable<any[]>{
  return this.http.get<any>(this.APIURL+'/Author/AuthorsBooksNames')
}

//get all authors names to show on dropdown list
GetAllAuthorsName():Observable<any[]>{
  return this.http.get<any>(this.APIURL+'/Books/GetAllAuthorsName')
}

//books Methods
  //getAuthors
  GetBooks():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/books')
}
  //getAuthor by Id
  GetBookbyID(id:any):Observable<any>{
    return this.http.get(this.APIURL+'/books/'+id)
}
  //post
AddBooks(book:any){
  return this.http.post(this.APIURL+'/books',book)
}
  //put
EditBooks(book:any){
  return this.http.put(this.APIURL+'/books/'+book.ID,book)
}
  //delete
DeleteBooks(id:any){
  return this.http.delete(this.APIURL+'/books/'+id)
}

//getAuthors names of a book
GetAuthorNameOfABook(id:any):Observable<any[]>{
return this.http.get<any>(this.APIURL+'/books/GetAuthorNameOfABook')
}

}

import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-del-book',
  templateUrl: './show-del-Book.component.html',
  styleUrls: ['./show-del-Book.component.css']
})
export class ShowDelBookComponent implements OnInit {

  constructor(private service:SharedService) { }

  //list to store output
  Bookslist :any=[];
  ModalTitle:string="";
  ActivateAddEditBookComp:boolean=false;
  book:any;
  AuthorsList:any=[]


  ngOnInit(): void {
    this.LoadBooksList();

  }

   loadAuthorsNames(){
     this.service.GetAllAuthorsName().subscribe(data=>{
       this.AuthorsList=data;

    })
   } 
  

  LoadBooksList(){
    this.service.GetBooks().subscribe( data=>this.Bookslist=data)

  }

  addClick(){
    this.book={
      ID:0,
      Title:"",
      Cover:"",
      Description:"",
      Authorsid:[]
    }
    this.loadAuthorsNames();

    this.ModalTitle="Add Book",
    this.ActivateAddEditBookComp=true;
  
  // this.LoadBooksList();
  }

  closeClick(){
    this.ActivateAddEditBookComp=false;
    this.LoadBooksList();

  }

  editClick(i:any){
    this.book=i;
    this.ModalTitle="Edit Book";
    this.ActivateAddEditBookComp=true;

}
 deleteClick(i:any){
  if(confirm("Are you sure You want delete this book ?")){
    this.service.DeleteBooks(i.ID).subscribe(res=>{alert("deleted")});
    this.LoadBooksList();
  }
  
}
}

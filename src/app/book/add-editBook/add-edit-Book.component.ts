import { Component, OnInit ,Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-Book.component.html',
  styleUrls: ['./add-edit-Book.component.css']
})
export class AddEditBookComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() book:any;
  ID!:number;
  DateOfPublication!:Date;
  Title!:string;
  Cover!:File;
  Description!:string;
  Authorsid!:any[];
  

  AuthorsList!:any[];



  ngOnInit(): void {
     this.ID=this.book.ID;
     this.DateOfPublication=this.book.DateOfPublication;
     this.Title=this.book.Title;
     this.Cover=this.book.Cover;
     this.Description=this.book.Description;
     this.Authorsid=this.book.Authorsid;
     this.loadAuthorsNames();
 
    
 
  }

 loadAuthorsNames(){
     this.service.GetAuthors().subscribe(data=>{
      this.AuthorsList=data;

    })
   }

  addBook()
{
  console.log(this.Authorsid);
  console.log(this.book.Authorsid);
  console.log("  fsd  ");

    var val={
      ID:this.ID,
      DateOfPublication:this.DateOfPublication,
      Title:this.Title,
      Cover:this.Cover,
      Description:this.Description,
      Authorsid:this.Authorsid
    };
    this.service.AddBooks(val).subscribe(result=>{
  
   alert("added successfully");
})

}
updatebook()
{

  console.log(this.Authorsid+" auth");
  console.log(this.book.Authorsid+" book auth");


  var val={
    
      ID:this.ID,
      DateOfPublication:this.DateOfPublication,
      Title:this.Title,
      Cover:this.Cover,
      Description:this.Description,
      Authorsid:this.Authorsid
  };
  this.service.EditBooks(val).subscribe(result=>{
    alert("Updated successfully");
  })  
  
}
}

import { Component, OnInit ,Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-del',
  templateUrl: './show-delAuthor.component.html',
  styleUrls: ['./show-delAuthor.component.css']
})
export class ShowDelAuthorComponent implements OnInit {

  constructor(private service:SharedService) { }

  //list to store output
  Authorslist :any=[];
  ModalTitle:string="";
  ActivateAddEditAuthorComp:boolean=false;
  author:any;


  ngOnInit(): void {
    this.LoadAuthorsList();
  }

  LoadAuthorsList(){
    this.service.GetAuthors().subscribe( data=>this.Authorslist=data)

  }

  addClick(){
    this.author={
      ID:0,
      Name:"",
      DOB:"",
      Bio:"",
      Image:""
    }
    this.ModalTitle="Add Author",
    this.ActivateAddEditAuthorComp=true;
  
  // this.ngOnInit();
  this.LoadAuthorsList();
  }

  closeClick(){
    this.ActivateAddEditAuthorComp=false;
    this.LoadAuthorsList();

  }

  editClick(i:any){
    this.author=i;
    this.ModalTitle="Edit Author";
    this.ActivateAddEditAuthorComp=true;

}
deleteClick(i:any){
  if(confirm("Are you sure You want delete this book ?")){
    this.service.DeleteAuthor(i.ID).subscribe(data=>
      {
        alert("deleted"+data.toString());
        this.LoadAuthorsList();
      })

  }
  
}
}

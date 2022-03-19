import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-editAuthor.component.html',
  styleUrls: ['./add-editAuthor.component.css']
})
export class AddEditAuthorComponent implements OnInit {

  
  constructor(private service:SharedService) { }

  @Input() author:any;
  ID!:number;
  DOB!:Date;
  Name!:string;
  Image!:string;
  Bio!:string;


  ngOnInit(): void {
    this.ID=this.author.ID;
    this.Name=this.author.Name;
    this.DOB=this.author.DOB;
    this.Image=this.author.Image;
    this.Bio=this.author.Bio;
  }

  addAuthor()
{
var val={
  ID:this.ID,
  DOB:this.DOB,
  Name:this.Name,
  Image:this.Image,
  Bio:this.Bio
};
this.service.AddAuthor(val).subscribe(result=>{
  
  alert("added successfully");
})

}
updateAuthor(id:number)
{
  var val={
    ID:id,
    DOB:this.DOB,
    Name:this.Name,
    Image:this.Image,
    Bio:this.Bio
  };
  this.service.EditAuthor(val.ID,val).subscribe(result=>{
    alert("Updated successfully");
  })  
  
}
}


import { Component } from '@angular/core';
import { DeleteunitService } from 'src/app/services/Units/deleteunit.service';

@Component({
  selector: 'app-deleteunit',
  templateUrl: './deleteunit.component.html',
  styleUrls: ['./deleteunit.component.scss']
})
export class DeleteunitComponent {
  id:number=0;
  constructor(private deleteunit:DeleteunitService) {}
  Deleteunit(){
    this.deleteunit.Deleteunit(this.id).subscribe(
      (response) => {
      console.log(response);
    },
    (error)=>{
    console.log(error);
    }
    );
  }
}

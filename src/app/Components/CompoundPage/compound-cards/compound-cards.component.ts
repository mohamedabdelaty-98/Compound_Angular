import { Component, OnInit } from '@angular/core';
import { Compound } from 'src/app/Models/compound';
import * as Aos from 'aos';
import { GetCompoundImagesService } from 'src/app/Services/CompoundServices/get-compound-images.service';
import { CompoundService } from 'src/app/Services/CompoundServices/compound.service';

@Component({
  selector: 'app-compound-cards',
  templateUrl: './compound-cards.component.html',
  styleUrls: ['./compound-cards.component.css'],
})
export class CompoundCardsComponent implements OnInit {
  mydata: Compound[] = [];
  imageUrls: string[] = [];
  constructor(
    private compoundservice:CompoundService,
    private compundimageservice: GetCompoundImagesService
  ) {}
  ngOnInit(): void {
    Aos.init();
    this.getall();
  }
  getall() {
    this.compoundservice.getallcompounds().subscribe((data: any) => {
      this.mydata = data.data;
      console.log(this.mydata);
      this.getcompoundimage();
    });
  }
  getcompoundimage() {
    this.mydata.forEach((element) => {
      element.compoundimages = [];
      this.compundimageservice
        .getimageCompound(element.id)
        .subscribe((data: any) => {
          // console.log(this.compoundimage);
          // element.compoundimages=data.data;
          if (data) {
            ///////////////////////////////////////////
            const binaryData = atob(data.data[0]);
            const uint8Array = new Uint8Array(binaryData.length);
            for (let i = 0; i < binaryData.length; i++) {
              uint8Array[i] = binaryData.charCodeAt(i);
            }
            const imageBlob = new Blob([uint8Array], { type: 'image/jpeg' }); // Adjust 'image/jpeg' to the appropriate image type if needed
            // console.log(imageBlob);
            const imageUrl = URL.createObjectURL(imageBlob);
            console.log(element.id);
            console.log(imageUrl);
            element.compoundimages.push(imageUrl);
            ////////////////////////////////////////////////////////
            console.log(element.compoundimages);
          } else {
            console.error('No building images found.');
          }
        });
    });
  }
}

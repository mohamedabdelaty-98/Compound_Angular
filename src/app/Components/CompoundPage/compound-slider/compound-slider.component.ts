import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Compound } from 'src/app/Models/compound';
import { GetCompoundImagesService } from 'src/app/Services/CompoundServices/get-compound-images.service';
import { DownloadFileService } from 'src/app/services/CompoundServices/download-file.service';

@Component({
  selector: 'app-compound-slider',
  templateUrl: './compound-slider.component.html',
  styleUrls: ['./compound-slider.component.css'],
})
export class CompoundSliderComponent implements OnInit {
  compoundId: number = 0;
  fileData: any;
  compound: Compound = {
    id: 0,
    name: '',
    description: '',
    address: '',
    buildingArea: 0,
    file: '',
    greenArea: 0,
    latitude: 0,
    longitude: 0,
    location: '',
    street_area: 0,
    dateAdded: new Date(),
    compoundimages: [],
  };
  constructor(
    private downloadService: DownloadFileService,
    private route: ActivatedRoute,
    private compundimageservice: GetCompoundImagesService
  ) {
    this.compoundId = Number(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.getcompoundimages(this.compoundId);
  }
  getcompoundimages(id: number) {
    this.compundimageservice.getimageCompound(id).subscribe((data: any) => {
      // console.log(this.compoundimage);
      // element.compoundimages=data.data;
      if (data) {
        ///////////////////////////////////////////
        data.data.forEach((element: any) => {
          const binaryData = atob(element);
          const uint8Array = new Uint8Array(binaryData.length);
          for (let i = 0; i < binaryData.length; i++) {
            uint8Array[i] = binaryData.charCodeAt(i);
          }
          const imageBlob = new Blob([uint8Array], { type: 'image/jpeg' }); // Adjust 'image/jpeg' to the appropriate image type if needed
          // console.log(imageBlob);
          const imageUrl = URL.createObjectURL(imageBlob);
          this.compound.compoundimages.push(imageUrl);
        });

        ////////////////////////////////////////////////////////
      } else {
        console.error('No building images found.');
      }
    });
  }
  public download(): void {
    /*  this.downloadService.DownloadFile(this.compoundId).subscribe(response=>{
    let fileName = response.headers.get('content-disposition')?.split(';')[1].split('=')[1];
    let blob:Blob= response.body as Blob;
    let a = document.createElement('a');
    a.download=fileName;
    a.href=window.URL.createObjectURL(blob);
    a.click();
  })
} */
    console.log(this.compoundId);

    this.downloadService.DownloadFile(this.compoundId).subscribe((response) => {
      const contentDisposition = response.headers.get('content-disposition');
      let fileName: string = 'file.pdf';

      if (contentDisposition) {
        const fileNameMatch = contentDisposition.match(/filename=([^;]+)/);
        if (fileNameMatch) {
          fileName = fileNameMatch[1];
        }
      }

      const blob: Blob = response.body as Blob;
      const a = document.createElement('a');
      a.download = fileName;
      a.href = window.URL.createObjectURL(blob);
      a.click();
    });
  }
}

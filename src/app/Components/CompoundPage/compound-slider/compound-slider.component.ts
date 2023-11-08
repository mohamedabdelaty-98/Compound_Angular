import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DownloadFileService } from 'src/app/services/CompoundServices/download-file.service';


@Component({
  selector: 'app-compound-slider',
  templateUrl: './compound-slider.component.html',
  styleUrls: ['./compound-slider.component.css']
})
export class CompoundSliderComponent  {
  compoundId: number = 0;
  fileData:any;


  constructor(
    private downloadService: DownloadFileService,
    private route: ActivatedRoute
  ) {
    this.compoundId = Number(this.route.snapshot.paramMap.get('id'));
  }
public download():void{
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

this.downloadService.DownloadFile(this.compoundId).subscribe(response => {
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




  


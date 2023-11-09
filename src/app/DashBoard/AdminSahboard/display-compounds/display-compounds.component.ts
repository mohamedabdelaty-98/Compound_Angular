import { Component , OnInit } from '@angular/core';
import { CompoundService } from 'src/app/Services/CompoundServices/compound.service';
import { DownloadFileService } from 'src/app/services/CompoundServices/download-file.service';
import { NewCompoundComponent } from 'src/app/DashBoard/AdminSahboard/new-compound/new-compound.component';

@Component({
  selector: 'app-display-compounds',
  templateUrl: './display-compounds.component.html',
  styleUrls: ['./display-compounds.component.scss']
})
export class DisplayCompoundsComponent implements OnInit{

  constructor(private compoundServices:CompoundService , private downloadService: DownloadFileService) {}

  compounds:any;
  ngOnInit(): void {

    this.compoundServices.getallcompounds().subscribe((data:any)=>{
      this.compounds= data.data;
    })
  }

  getall(){

    this.compoundServices.getallcompounds().subscribe((data:any)=>{
      this.compounds= data.data;
    })
  }

  public download(compoundId:number): void {

    console.log(compoundId);

    this.downloadService.DownloadFile(compoundId).subscribe((response) => {
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


  public delete(compoundId:number): void{
    this.downloadService.delete(compoundId).subscribe((data:any)=>{
      console.log(data);
      console.log("deleted");

      this.getall();
    })


  }
    

}

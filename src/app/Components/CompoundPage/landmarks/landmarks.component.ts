import { Component, OnInit } from '@angular/core';
import { CompoundService } from 'src/app/Services/CompoundServices/compound.service';
import { ActivatedRoute } from '@angular/router';
import { LandMarksCompound } from 'src/app/Models/land-marks-compound';
import { Compound } from 'src/app/Models/compound';
import { ServicelandmarkcompoundService } from 'src/app/Services/LandMarksCompoundServices/servicelandmarkcompound.service';
@Component({
  selector: 'app-landmarks',
  templateUrl: './landmarks.component.html',
  styleUrls: ['./landmarks.component.css'],
})
export class LandmarksComponent implements OnInit {
  landmarkcompound: LandMarksCompound[] = [];
  compoundId: number = 0;
  constructor(
    private landmarkservice: ServicelandmarkcompoundService,
    private route: ActivatedRoute
  ) {
    this.compoundId = Number(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    // const compoundId = this.route.snapshot.paramMap.get('id');
    this.landmarkservice
      .getlandmaksByCompoundId(this.compoundId)
      .subscribe((data: any) => {
        this.landmarkcompound = data.data;
        console.log(this.landmarkcompound);
      });
  }
}

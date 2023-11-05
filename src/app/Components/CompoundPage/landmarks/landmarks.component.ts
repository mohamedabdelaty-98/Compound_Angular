import { Component, OnInit } from '@angular/core';
import { CompoundService } from 'src/app/Services/compound.service';
import { ActivatedRoute } from '@angular/router';
import { LandMarksCompound } from 'src/app/Models/land-marks-compound';
import { Compound } from 'src/app/Models/compound';
import { ServicelandmarkcompoundService } from 'src/app/Services/servicelandmarkcompound.service';
@Component({
  selector: 'app-landmarks',
  templateUrl: './landmarks.component.html',
  styleUrls: ['./landmarks.component.css'],
})
export class LandmarksComponent implements OnInit {
  landmarkcompound: LandMarksCompound[] = [];
  constructor(
    private landmarkservice: ServicelandmarkcompoundService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const compoundId = this.route.snapshot.paramMap.get('id');
    this.landmarkservice
      .getlandmaksByCompoundId(compoundId)
      .subscribe((data: any) => {
        this.landmarkcompound = data.data;
        console.log(this.landmarkcompound);
      });
  }
}

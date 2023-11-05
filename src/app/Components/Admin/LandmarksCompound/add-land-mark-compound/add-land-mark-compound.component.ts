import { Component, OnInit } from '@angular/core';
import { LandmarksComponent } from 'src/app/Components/CompoundPage/landmarks/landmarks.component';
import { ServicelandmarkcompoundService } from 'src/app/Services/LandMarksCompoundServices/servicelandmarkcompound.service';

@Component({
  selector: 'app-add-land-mark-compound',
  templateUrl: './add-land-mark-compound.component.html',
  styleUrls: ['./add-land-mark-compound.component.css'],
})
export class AddLandMarkCompoundComponent implements OnInit {
  constructor(private sirvcelandmark: ServicelandmarkcompoundService) {}
  ngOnInit(): void {}
}

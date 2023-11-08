import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterServiceService } from 'src/app/Services/FilterServices/filter-service.service';
import { GetBuildingNumberService } from 'src/app/Services/Units/get-building-number.service';
import { GitBedRoomsNumberService } from 'src/app/Services/Units/git-bed-rooms-number.service';
import { GitFloorsService } from 'src/app/Services/Units/git-floors.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  compoundid: number = 0;
  floorsdata: string[] = [];
  buildingnumberdata: string[] = [];
  bedroomsnumberdata: string[] = [];
  unitareadata: string[] = [
    '-الكل-',
    'أقل من ١٥٠م',
    'أقل من ١٨٠م',
    'أكبر من ١٨٠م',
    'أكبر من ١٥٠م',
  ];
  dropdownOptions: string[][] = [];
  constructor(
    private floorsservice: GitFloorsService,
    private route: ActivatedRoute,
    private filterservice: FilterServiceService,
    private buildingnumberservice: GetBuildingNumberService,
    private bedroomsnumberservice: GitBedRoomsNumberService
  ) {
    this.compoundid = Number(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.getfloors();
    this.getbuildingsnumber();
    this.getbedroomsnumber();
  }
  getfloors() {
    this.floorsservice
      .getfloorsbycompoundid(this.compoundid)
      .subscribe((data: any) => {
        this.floorsdata = ['-الكل-', ...data.data];
        this.dropdownOptions = [
          this.unitareadata,
          this.bedroomsnumberdata,
          this.buildingnumberdata,
          this.floorsdata,
        ];
      });
  }
  getbuildingsnumber() {
    this.buildingnumberservice
      .getbuildingsNumberbycompoundid(this.compoundid)
      .subscribe((data: any) => {
        this.buildingnumberdata = ['-الكل-', ...data.data];
        this.dropdownOptions = [
          this.unitareadata,
          this.bedroomsnumberdata,
          this.buildingnumberdata,
          this.floorsdata,
        ];
      });
  }
  getbedroomsnumber() {
    this.bedroomsnumberservice
      .getbedroomsnumberbycompoundid(this.compoundid)
      .subscribe((data: any) => {
        this.bedroomsnumberdata = ['-الكل-', ...data.data];
        this.dropdownOptions = [
          this.unitareadata,
          this.bedroomsnumberdata,
          this.buildingnumberdata,
          this.floorsdata,
        ];
      });
  }
  isDropdownOpen: boolean[] = [false, false, false, false];
  selectedOptions: string[] = ['- الكل -'];
  dropdownHeadings: string[] = [
    ' مساحه الوحدة',
    'عدد الغرف',
    'المبنى',
    'الدور',
  ];

  // Define your dropdown options here

  toggleDropdown(index: number) {
    this.isDropdownOpen[index] = !this.isDropdownOpen[index];
  }

  selectOption(option: string, index: number) {
    this.selectedOptions[index] = option;
    this.isDropdownOpen[index] = false;
    this.filterservice.updateSelectedOption(this.selectedOptions);
  }
}

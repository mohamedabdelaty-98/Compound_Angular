import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { CompoundService } from 'src/app/Services/CompoundServices/compound.service';

import { GitFloorsService } from 'src/app/Services/Units/git-floors.service';
import { Building } from 'src/app/Models/building';
import { Compound } from 'src/app/Models/compound';

import { Reviews } from 'src/app/Models/reviews';
// import { BuildingService } from 'src/app/Services/Building/building.service';
import { ReviewsService } from 'src/app/Services/Admin/reviews.service';
import { BuildingService } from 'src/app/Services/Building/building.service';

interface IUnit {
  id: number;
  unitNumber: number;
  floor: number;
  description: string;
  numberOfBedrooms: number;
  price: number;
  area: number;
  status: string;
  buildingId: number;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private chartsData: DashboardChartsData,
    private CompoundServices: CompoundService,
    private buildingServices: BuildingService,
    private UnitServices: GitFloorsService,
    private ReviewsServices: ReviewsService
  ) {}
  reviewes: Reviews[] = [];
  Buildings: Building[] = [];
  Compounds: Compound[] = [];
  units: IUnit[] = [];
  unitsTwoBedrooms: any;

  numOfBuildings: number = 0;
  numOfUnits: number = 0;
  numOfSoledUnits: number = 0;
  numOfUnSoledUnits: number = 0;
  numOfUnitsWithTwoBedRooms: number = 0;
  numOfUnitsWithMoreThanTwoBedRooms: number = 0;
  percentageActiveUnits: any;
  percentageSoledUnits: any;
  percentageOfUnitsWithTwoBedrooms: any;
  percentageOfUnitsWithMoreThanTwoBedrooms: any;
  numOfCompounds: number = 0;

  /*   public users: IUser[] = [
    {
      name: 'Yiorgos Avraamu',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Us',
      usage: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Mastercard',
      activity: '10 sec ago',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success',
    },
  ]; */

  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month'),
  });

  /*  ngOnInit(): void {
    this.initCharts();
  } */

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }

  ngOnInit(): void {
    this.buildingServices.getAllbuildings().subscribe((data: any) => {
      this.Buildings = data.data;
      console.log(this.Buildings);
      this.numOfBuildings = this.Buildings.length;
    });

    this.CompoundServices.getallcompounds().subscribe((data: any) => {
      this.Compounds = data.data;
      console.log(this.Buildings);
      this.numOfCompounds = this.Compounds.length;
    });

    this.UnitServices.getAllUnits().subscribe((data: any) => {
      this.units = data.data;
      console.log(this.units);
      this.numOfUnits = this.units.length;

      this.numOfUnSoledUnits = this.units.filter(
        (unit: any) => unit.status === 'active'
      ).length;
      this.numOfSoledUnits = this.units.length - this.numOfUnSoledUnits;
      this.percentageActiveUnits = (
        (this.numOfUnSoledUnits / this.units.length) *
        100
      ).toFixed(2);
      this.percentageSoledUnits = (100 - this.percentageActiveUnits).toFixed(2);
    });

    this.UnitServices.getUnitsTwoBedrooms(2).subscribe((data: any) => {
      this.unitsTwoBedrooms = data.data;
      console.log(this.unitsTwoBedrooms);
      this.numOfUnitsWithTwoBedRooms = this.unitsTwoBedrooms.length;
      this.numOfUnitsWithMoreThanTwoBedRooms =
        this.units.length - this.numOfUnitsWithTwoBedRooms;
      this.percentageOfUnitsWithTwoBedrooms = (
        (this.numOfUnitsWithTwoBedRooms / this.units.length) *
        100
      ).toFixed(2);
      this.percentageOfUnitsWithMoreThanTwoBedrooms = (
        100 - this.percentageOfUnitsWithTwoBedrooms
      ).toFixed(2);
    });

    this.ReviewsServices.getAllReviewes().subscribe((data: any) => {
      this.reviewes = data.data;
    });
  }
}

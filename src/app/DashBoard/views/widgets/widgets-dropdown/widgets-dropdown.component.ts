import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { getStyle } from '@coreui/utils';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { ApplicationsService } from 'src/app/services/Admin/applications.service';
import { CompoundService } from 'src/app/Services/CompoundServices/compound.service';
import { Building } from 'src/app/Models/building';
import { Reviews } from 'src/app/Models/reviews';
import { BuildingService } from 'src/app/Services/Building/building.service';
import { UsersService } from 'src/app/Services/Admin/users.service';

@Component({
  selector: 'app-widgets-dropdown',
  templateUrl: './widgets-dropdown.component.html',
  styleUrls: ['./widgets-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class WidgetsDropdownComponent implements OnInit, AfterContentInit {
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private ApplicationServices: ApplicationsService,
    private CompoundServices: CompoundService,
    private BuildingServices: BuildingService,
    private UserServices: UsersService
  ) {}
  applications: any[] = [];
  compounds: any[] = [];
  buildings: Building[] = [];
  users: any;
  numOfUsers: number = 0;
  numOfApplications: number = 0;
  numOfBuildings: number = 0;
  TotalBuildingsFloor: number = 0;
  AvgFloors: number = 0;
  TotalAreaAllBuildings: number = 0;
  AvgArea: string = '';
  data: any[] = [];
  options: any[] = [];

  labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    'January',
    'February',
    'March',
    'April',
  ];
  datasets = [
    [
      {
        label: 'My First dataset',
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
        pointBackgroundColor: getStyle('--cui-primary'),
        pointHoverBorderColor: getStyle('--cui-primary'),
        data: [65, 59, 84, 84, 51, 55, 40],
      },
    ],
    [
      {
        label: 'My Second dataset',
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
        pointBackgroundColor: getStyle('--cui-info'),
        pointHoverBorderColor: getStyle('--cui-info'),
        data: [1, 18, 9, 17, 34, 22, 11],
      },
    ],
    [
      {
        label: 'My Third dataset',
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        pointBackgroundColor: getStyle('--cui-warning'),
        pointHoverBorderColor: getStyle('--cui-warning'),
        data: [78, 81, 80, 45, 34, 12, 40],
        fill: true,
      },
    ],
    [
      {
        label: 'My Fourth dataset',
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
        barPercentage: 0.7,
      },
    ],
  ];
  optionsDefault = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        min: 30,
        max: 89,
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 1,
        tension: 0.4,
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  };

  ngOnInit(): void {
    this.setData();

    this.ApplicationServices.getAllApplications().subscribe((data: any) => {
      this.applications = data.data;
      this.numOfApplications = this.applications.length;
    });

    this.CompoundServices.getallcompounds().subscribe((data: any) => {
      this.compounds = data.data;
      this.compounds.forEach((compound) => {
        this.TotalAreaAllBuildings += Number(compound.street_area);
        this.TotalAreaAllBuildings += Number(compound.greenArea);
        this.TotalAreaAllBuildings += Number(compound.buildingArea);
      });
      this.AvgArea = (
        this.TotalAreaAllBuildings / this.compounds.length
      ).toFixed(2);
      console.log('Data:', this.compounds);
      console.log('area:', this.TotalAreaAllBuildings);
    });

    this.BuildingServices.getAllbuildings().subscribe((data: any) => {
      this.buildings = data.data;
      this.numOfBuildings = this.buildings.length;
      this.buildings.forEach((building) => {
        this.TotalBuildingsFloor += Number(building.numberOfFloor);
      });
      this.AvgFloors = this.TotalBuildingsFloor / this.buildings.length;
    });

    this.UserServices.getAllusers().subscribe((data: any) => {
      this.users = data.data;
      this.numOfUsers = this.users.length;
    });
  }

  ngAfterContentInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  setData() {
    for (let idx = 0; idx < 4; idx++) {
      this.data[idx] = {
        labels: idx < 3 ? this.labels.slice(0, 7) : this.labels,
        datasets: this.datasets[idx],
      };
    }
    this.setOptions();
  }

  setOptions() {
    for (let idx = 0; idx < 4; idx++) {
      const options = JSON.parse(JSON.stringify(this.optionsDefault));
      switch (idx) {
        case 0: {
          this.options.push(options);
          break;
        }
        case 1: {
          options.scales.y.min = -9;
          options.scales.y.max = 39;
          this.options.push(options);
          break;
        }
        case 2: {
          options.scales.x = { display: false };
          options.scales.y = { display: false };
          options.elements.line.borderWidth = 2;
          options.elements.point.radius = 0;
          this.options.push(options);
          break;
        }
        case 3: {
          options.scales.x.grid = { display: false, drawTicks: false };
          options.scales.x.grid = {
            display: false,
            drawTicks: false,
            drawBorder: false,
          };
          options.scales.y.min = undefined;
          options.scales.y.max = undefined;
          options.elements = {};
          this.options.push(options);
          break;
        }
      }
    }
  }
}

@Component({
  selector: 'app-chart-sample',
  template:
    '<c-chart type="line" [data]="data" [options]="options" width="300" #chart></c-chart>',
})
export class ChartSample implements AfterViewInit {
  constructor() {}

  @ViewChild('chart') chartComponent!: ChartjsComponent;

  colors = {
    label: 'My dataset',
    backgroundColor: 'rgba(77,189,116,.2)',
    borderColor: '#4dbd74',
    pointHoverBackgroundColor: '#fff',
  };

  labels = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  data = {
    labels: this.labels,
    datasets: [
      {
        data: [65, 59, 84, 84, 51, 55, 40],
        ...this.colors,
        fill: { value: 65 },
      },
    ],
  };

  options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
  };

  ngAfterViewInit(): void {
    setTimeout(() => {
      const data = () => {
        return {
          ...this.data,
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [
            {
              ...this.data.datasets[0],
              data: [42, 88, 42, 66, 77],
              fill: { value: 55 },
            },
            {
              ...this.data.datasets[0],
              borderColor: '#ffbd47',
              data: [88, 42, 66, 77, 42],
            },
          ],
        };
      };
      const newLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
      const newData = [42, 88, 42, 66, 77];
      let { datasets, labels } = { ...this.data };
      // @ts-ignore
      const before = this.chartComponent?.chart?.data.datasets.length;
      console.log('before', before);
      // console.log('datasets, labels', datasets, labels)
      // @ts-ignore
      // this.data = data()
      this.data = {
        ...this.data,
        datasets: [
          { ...this.data.datasets[0], data: newData },
          {
            ...this.data.datasets[0],
            borderColor: '#ffbd47',
            data: [88, 42, 66, 77, 42],
          },
        ],
        labels: newLabels,
      };
      // console.log('datasets, labels', { datasets, labels } = {...this.data})
      // @ts-ignore
      setTimeout(() => {
        const after = this.chartComponent?.chart?.data.datasets.length;
        console.log('after', after);
      });
    }, 5000);
  }
}

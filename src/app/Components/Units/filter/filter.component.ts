import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  dropdownItems = [
    {
      label: 'مميزات المشروع',
      options: ['استوديو غرفة واحدة', 'غرفتين نوم', 'ثلاث غرف نوم']
    },
    {
      label: 'عدد الغرف',
      options: ['Amr', 'Amr', 'Amr', 'Amr']
    },
    {
      label: 'المبنى',
      options: ['Amr', 'Amr', 'Amr', 'Amr']
    },
    {
      label: 'الدور',
      options: ['Amr', 'Amr', 'Amr', 'Amr']
    }
  ];

  isDropdownOpen: boolean[] = Array(this.dropdownItems.length).fill(false);
  selectedItem: string[] = Array(this.dropdownItems.length);

  constructor() {
    this.selectedItem = this.dropdownItems.map(item => item.options[0]); // Initialize with the first option for each dropdown
  }

  toggleDropdown(index: number) {
    this.isDropdownOpen[index] = !this.isDropdownOpen[index];
  }

  selectOption(index: number, option: string) {
    this.selectedItem[index] = option;
    this.isDropdownOpen[index] = false;
  }
}

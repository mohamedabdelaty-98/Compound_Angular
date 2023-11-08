import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FilterServiceService {
  constructor() {}
  private selectedOptionSource = new BehaviorSubject<string[]>(['- الكل -']);
  selectedOption$ = this.selectedOptionSource.asObservable();

  updateSelectedOption(option: string[]) {
    this.selectedOptionSource.next(option);
  }
}

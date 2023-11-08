import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ryalcurrency',
})
export class RyalcurrencyPipe implements PipeTransform {
  transform(value: number): string {
    // Format the number as SAR currency
    const formattedValue = new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'SAR',
      currencyDisplay: 'narrowSymbol',
    }).format(value);

    return formattedValue;
  }
}

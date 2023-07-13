import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyMask'
})
export class MoneyMaskPipe implements PipeTransform {
  transform(value: any): any {
    // Verifica se o valor é válido
    if (value === null || value === undefined || isNaN(value)) {
      return '';
    }
    
    // Converte o valor para número e formata como dinheiro
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    
    return formatter.format(Number(value));
  }
}

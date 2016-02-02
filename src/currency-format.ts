import numeral from 'numeral';
//import numeral from '../node_modules/numeral/numeral';

export class CurrencyFormatValueConverter {
  toView(value) {
    return numeral(value).format('($0,0.00)');
  }
}

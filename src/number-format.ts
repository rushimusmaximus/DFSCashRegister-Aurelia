import numeral from 'numeral';
//import numeral from '../node_modules/numeral/numeral';

export class NumberFormatValueConverter {
  toView(value, format) {
    return numeral(value).format(format);
  }
}

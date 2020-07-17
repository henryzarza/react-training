import { shape, string, number, arrayOf } from 'prop-types';

export const countryPropType = shape({
  _id: string,
  name: string,
  nativeName: string,
  alpha3Code: string,
  capital: string,
  population: number,
  numericCode: string,
  currencies: arrayOf(
    shape({
      name: string,
      symbol: string,
    })
  ),
  flag: shape({
    svgFile: string,
    emoji: string,
  }),
});

import { CountryCodes } from "../pages";

const options = [
  { countryCode: "DE", vat: 14 },
  { countryCode: "AT", vat: 6.5 },
];

export const calculateTax = (
  priceInput: string,
  selectedCountryCode: CountryCodes
) => {
  const selectedCountry = options.find(
    (country) => country.countryCode === selectedCountryCode
  );

  if (!selectedCountry) {
    return undefined;
  }

  const taxRate = selectedCountry.vat / 100;

  const totalPrice = priceWithTax(Number(priceInput), taxRate);

  return Number(totalPrice).toLocaleString("de-DE", { currency: "EUR" });
};

const priceWithTax = (price: number, tax: number) => {
  return price + price * tax;
};

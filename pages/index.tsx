import { useState, Dispatch, SetStateAction, ChangeEvent } from "react";
import { calculateTax } from "../components/calculator";

export const countryCodes = ["AT", "BG", "DE"] as const;

export type CountryCodes = typeof countryCodes[number];

export default function Home() {
  const [price, setPrice] = useState("");
  const [tax, setTax] = useState<CountryCodes | undefined>(undefined);

  const handleInputChange = (setState: Dispatch<SetStateAction<string>>) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setState(event.target.value);
  };

  return (
    <div>
      <label htmlFor="price">Price ($)</label>
      <input
        onChange={handleInputChange(setPrice)}
        value={price}
        type="number"
        name="price"
      />
      <p>EU country:</p>
      {countryCodes.map((countryCode) => (
        <label>
          <input
            checked={tax === countryCode}
            onChange={() => setTax(countryCode)}
            type="radio"
          />
          <span>{countryCode}</span>
        </label>
      ))}
      <div>{tax && calculateTax(price, tax)}</div>
    </div>
  );
}

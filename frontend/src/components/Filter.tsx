import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

export type FilterOptions = {
  id: string;
  label: string;
};

const filterOption: FilterOptions[] = [
  {
    id: "burger",
    label: "Burger",
  },
  {
    id: "pizza",
    label: "Pizza",
  },
  {
    id: "biryani",
    label: "Biryani",
  },
  {
    id: "thakali",
    label: "Thakali",
  },
];

const Filter = () => {
  const appliedFilterHandler = (value: string) => {};

  return (
    <div className="md:w-72">
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-lg">Filters by Cuisines</h1>
        <Button variant={"link"}>Reset</Button>
      </div>
      {filterOption.map((option) => (
        <div key={option.id} className="flex items-center space-x-2 my-5">
          <Checkbox
            id={option.id}
            onClick={() => appliedFilterHandler(option.label)}
          />
          <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {option.label}
          </Label>
        </div>
      ))}
    </div>
  );
};
export default Filter;

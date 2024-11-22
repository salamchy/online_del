import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { resturantFromSchema } from "@/schema/resturantSchema";
import { Loader2 } from "lucide-react";
import React, { FormEvent, useState } from "react";

const Resturant = () => {
  const [input, setInput] = useState<resturantFromSchema>({
    resturantName: "",
    city: "",
    deliveryTime: 0,
    cuisines: [],
    imageFile: undefined,
  });

  const [errors, setErrors] = useState<Partial<resturantFromSchema>>({});

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = resturantFromSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<resturantFromSchema>);
      return;
    }
  };
  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };

  const loading = false;
  const resturantName = false;

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div>
        <div>
          <h1 className="font-extrabold text-2xl mb-5">Add Resturants</h1>
          <form onSubmit={submitHandler}>
            <div className="md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0">
              <div>
                <Label>Resturant Name</Label>
                <Input
                  type="text"
                  name="resturantName"
                  value={input.resturantName}
                  onChange={changeEventHandler}
                  placeholder="Enter your resturant name"
                />
                {errors && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.resturantName}
                  </span>
                )}
              </div>
              <div>
                <Label>City</Label>
                <Input
                  type="text"
                  name="city"
                  value={input.city}
                  onChange={changeEventHandler}
                  placeholder="Enter city name"
                />
                {errors && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.city}
                  </span>
                )}
              </div>
              <div>
                <Label>Estimated Delivery Time(Minutes)</Label>
                <Input
                  type="number"
                  name="deliveryTime"
                  value={input.deliveryTime}
                  onChange={changeEventHandler}
                  placeholder="Enter your delivery time"
                />
                {errors && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.deliveryTime}
                  </span>
                )}
              </div>
              <div>
                <Label>Cuisines</Label>
                <Input
                  type="text"
                  name="cuisines"
                  value={input.cuisines}
                  onChange={(e) =>
                    setInput({ ...input, cuisines: e.target.value.split(",") })
                  }
                  placeholder="Enter your Cuisines"
                />
                {errors && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.cuisines}
                  </span>
                )}
              </div>
              <div>
                <Label>Resturant Banner</Label>
                <Input
                  type="file"
                  onChange={(e) =>
                    setInput({
                      ...input,
                      imageFile: e.target.files?.[0] || undefined,
                    })
                  }
                  name="imageFile"
                  accept="image/*"
                />
                {errors && (
                  <span className="text-xs text-red-500 font-medium">
                    {errors.imageFile?.name || "Imae file s required"}
                  </span>
                )}
              </div>
            </div>
            <div className="my-5 w-fit">
              {loading ? (
                <Button disabled className="bg-orange hover:bg-orangeHover">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Add Your Resturant
                </Button>
              ) : (
                <Button className="bg-orange hover:bg-orangeHover">
                  {resturantName
                    ? "Update your Resturant"
                    : " Add Your Resturant"}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Resturant;

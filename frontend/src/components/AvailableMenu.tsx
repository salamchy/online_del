import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import Khaja from "@/assets/khaja.jpg";

const AvailableMenu = () => {
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menus
      </h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        <Card className="md:max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
          <img src={Khaja} alt="" className="w-full h-40 object-cover" />
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Khaja
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <h3 className="text-lg font-semibold mt-4">
              रु: <span className="text-[#D19254]">250/-</span>
            </h3>
          </CardContent>
          <CardFooter>
            <Button className="bg-orange hover:bg-orangeHover w-full">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
export default AvailableMenu;

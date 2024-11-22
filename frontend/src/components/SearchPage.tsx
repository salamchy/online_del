import { Link, useParams } from "react-router-dom";
import Filter from "./Filter";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MapPin, X } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import HeroImage from "@/assets/hero_pizza.png";
import { Skeleton } from "./ui/skeleton";

const SearchPage = () => {
  const params = useParams(); // Fetch route parameters (if any)
  const [searchQuery, setSearchQuery] = useState<string>(""); // State to manage the search query input

  return (
    <div className="max-w-7xl mx-auto my-10">
      {" "}
      {/* Container for page content */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {" "}
        {/* Flex layout for Filter and content */}
        <Filter /> {/* Filter component (sidebar on larger screens) */}
        <div className="flex-1">
          {/* Search Input Field */}
          <div className="flex items-center gap-2">
            <Input
              type="text"
              value={searchQuery}
              placeholder="Search by resturant and cuisines"
              onChange={(e) => setSearchQuery(e.target.value)} // Handle search input change
            />
            <Button className="bg-orange hover:bg-orangeHover">Search</Button>{" "}
            {/* Search button */}
          </div>

          {/* Displaying Search Results */}
          <div>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2 my-3">
              <h1 className="font-medium text-lg">(2) Search result found</h1>{" "}
              {/* Heading for search results count */}
              <div className="">
                {/* Mapping over selected filters and displaying them */}
                {["biryani", "chowmin", "momo"].map(
                  (selectedFilter: string, id: number) => (
                    <div
                      key={id}
                      className="relative inline-flex items-center max-w-full"
                    >
                      <Badge
                        className="text-[#D19254] rounded-md hover:cursor-pointer pr-6 whitespace-nowrap"
                        variant="outline"
                      >
                        {selectedFilter} {/* Display selected filter */}
                      </Badge>
                      <X
                        size={16}
                        className="absolute text-[#D19254] right-1 hover:cursor-pointer" // X button to remove filter
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Restaurant Cards Section */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Individual Restaurant Card */}
              <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <AspectRatio ratio={16 / 6}>
                    {" "}
                    {/* Aspect Ratio for image */}
                    <img
                      src={HeroImage}
                      alt="Pizza"
                      className="w-full h-full object-cover" // Image styling
                    />
                  </AspectRatio>
                  <div className="absolute top-2 left-2 bg-white dark:bg-gray-700 bg-opacity-75 rounded-lg px-3 py-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Featured {/* Tag to show 'Featured' */}
                    </span>
                  </div>
                </div>

                {/* Restaurant Details */}
                <CardContent className="p-4">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Pizza Hunt {/* Restaurant name */}
                  </h1>
                  <div className="mt-2 gap-1 flex items-center text-gray-600">
                    <MapPin size={16} /> {/* Map Pin icon for location */}
                    <p className="text-sm">
                      City: <span className="font-medium">Kathmandu</span>{" "}
                      {/* City */}
                    </p>
                  </div>
                  {/* Displaying available cuisines */}
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {["biryani", "chowmin", "momo"].map(
                      (cuisine: string, index: number) => (
                        <Badge
                          key={index}
                          className="font-medium px-2 py-1 rounded-full shadow-sm"
                        >
                          {cuisine} {/* Cuisine tags */}
                        </Badge>
                      )
                    )}
                  </div>
                </CardContent>

                {/* Footer with "View Menus" Button */}
                <CardFooter className="p-4 border-t dark:border-t-gray-700 border-t-gray-100 flex justify-end">
                  <Link to={`/resturant/${123}`}>
                    <Button className="bg-orange hover:bg-orangeHover font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-200">
                      View Menus {/* Button to view restaurant menus */}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

const SearchPageSkeleton = () => {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <Card
          key={index}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden"
        >
          <div className="relative">
            <AspectRatio ratio={16 / 6}>
              <Skeleton className="w-full h-full" />
            </AspectRatio>
          </div>
          <CardContent className="p-4">
            <Skeleton className="h-8 w-3/4 mb-2" />
            <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
              <Skeleton className="h-4 w-1/2" />
            </div>
            <div className="mt-2 flex gap-1 items-center text-gray-600 dark:text-gray-400">
              <Skeleton className="h-4 w-1/2" />
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-20" />
            </div>
          </CardContent>
          <CardFooter className="p-4  dark:bg-gray-900 flex justify-end">
            <Skeleton className="h-10 w-24 rounded-full" />
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

const NoResultFound = ({ searchText }: { searchText: string }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
        No results found
      </h1>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        We couldn't find any results for "{searchText}". <br /> Try searching
        with a different term.
      </p>
      <Link to="/">
        <Button className="mt-4 bg-orange hover:bg-orangeHover">
          Go Back to Home
        </Button>
      </Link>
    </div>
  );
};

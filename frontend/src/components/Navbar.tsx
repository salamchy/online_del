import { Link, NavLink } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  HandPlatter,
  Loader2,
  Menu,
  Moon,
  PackageCheck,
  ShoppingCart,
  SquareMenu,
  Sun,
  User,
  UtensilsCrossed,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";

const Navbar = () => {
  const admin = true;
  const loading = false;
  return (
    <div className="max-w-7xl mx-auto mt-2">
      <div className="flex items-center justify-between">
        <NavLink to="/">
          <h1 className="font-bold md:font-extrabold text-2xl">CDYEATS</h1>
        </NavLink>
        <div className="hidden md:flex items-center gap-10">
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/order/status">Orders</NavLink>

            {admin && (
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger className="cursor-pointer">
                    Dashboard
                  </MenubarTrigger>
                  <MenubarContent>
                    <NavLink to="/admin/resturant">
                      <MenubarItem className="cursor-pointer">
                        Resturant
                      </MenubarItem>
                    </NavLink>
                    <MenubarSeparator />
                    <NavLink to="/admin/menu">
                      <MenubarItem className="cursor-pointer">Menu</MenubarItem>
                    </NavLink>
                    <MenubarSeparator />
                    <NavLink to="/admin/orders">
                      <MenubarItem className="cursor-pointer">
                        Orders
                      </MenubarItem>
                    </NavLink>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Light</DropdownMenuItem>
                  <MenubarSeparator />
                  <DropdownMenuItem>Dark</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <NavLink to="/cart" className="relative cursor-pointer">
              <ShoppingCart />
              <Button
                size={"icon"}
                className="absolute -inset-y-3 left-2 text-xs rounded-full h-4 w-4 bg-red-500 hover:bg-red-500"
              >
                5
              </Button>
            </NavLink>
            <div>
              <Avatar>
                <AvatarImage />
                <AvatarFallback>CS</AvatarFallback>
              </Avatar>
            </div>
            <div>
              {loading ? (
                <Button disabled className="bg-orange hover:bg-orangeHover">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please Wait
                </Button>
              ) : (
                <Button className="bg-orange hover:bg-orangeHover">
                  Logout
                </Button>
              )}
            </div>
          </div>
        </div>
        {/* Mobile Responsive */}
        <div className="md:hidden lg:hidden">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};
export default Navbar;

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="outline"
          className="bg-gray-200 text-black hover:bg-gray-400"
        >
          <Menu size={"18"} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle>CDYEATS</SheetTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Light</DropdownMenuItem>
              <MenubarSeparator />
              <DropdownMenuItem>Dark</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SheetHeader>
        <Separator className="my-2" />
        <SheetDescription className="flex-1">
          <Link
            to="/profile"
            className="flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer w-full font-medium  text-gray-900 transition-colors"
          >
            <User />
            <span>Profile</span>
          </Link>
          <Link
            to="/order/status"
            className="flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer w-full font-medium  text-gray-900 transition-colors"
          >
            <HandPlatter />
            <span>Orders</span>
          </Link>
          <Link
            to="/cart"
            className="flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer w-full font-medium text-gray-900 transition-colors"
          >
            <ShoppingCart />
            <span>Cart (0)</span>
          </Link>
          <Link
            to="/admin/menu"
            className="flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer w-full font-medium  text-gray-900 transition-colors"
          >
            <SquareMenu />
            <span>Menu</span>
          </Link>
          <Link
            to="/admin/resturant"
            className="flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer w-full font-medium text-gray-900 transition-colors"
          >
            <UtensilsCrossed />
            <span>Resturant</span>
          </Link>
          <Link
            to="/admin/orders"
            className="flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer w-full font-medium text-gray-900 transition-colors"
          >
            <PackageCheck />
            <span>Resturant Orders</span>
          </Link>
        </SheetDescription>
        <SheetFooter className="flex flex-col gap-4">
          <>
            <div className="flex flex-row items-center gap-2">
              <Avatar>
                <AvatarImage />
                <AvatarFallback>CS</AvatarFallback>
              </Avatar>
              <h1 className="font-bold">CdySec</h1>
            </div>
          </>

          <SheetClose>
            <Button
              type="submit"
              className="bg-orange hover:bg-orangeHover w-full"
            >
              Logout
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

import { Loader2, LocateIcon, Mail, MapPin, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    fullname: "",
    email: "",
    address: "",
    city: "",
    profilePicture: "",
  });
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [selectedProfilePic, setSelectedProfilePic] = useState<string>("");
  const loading = false;

  const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setSelectedProfilePic(result);
        setProfileData((prevData) => ({
          ...prevData,
          profilePicture: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const updateProfileHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // api implementation
  };

  return (
    <form onSubmit={updateProfileHandler} className="max-w-7xl mx-auto my-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="relative md:w-28 md:h-28 w-20 h-20">
            <AvatarImage src={selectedProfilePic} />
            <AvatarFallback>CS</AvatarFallback>
            <input
              ref={imageRef}
              type="file"
              className="hidden"
              accept="image/*"
              onChange={fileChangeHandler}
            />
            <div
              onClick={() => imageRef.current?.click()}
              className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full cursor-pointer"
            >
              <Plus className="text-white w-8 h-8" />
            </div>
          </Avatar>
          <Input
            type="text"
            name="fullname"
            value={profileData.fullname}
            onChange={changeHandler}
            className="font-bold text-2xl outline-none border-none focus-visible:ring-transparent"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-4 md:gap-2 gap-3 my-10">
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <Mail className="text-gray-500" />
          <div className="w-full">
            <Label>Email</Label>
            <input
              name="email"
              value={profileData.email}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-transparent focus-visible:border-transparent outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <LocateIcon className="text-gray-500" />
          <div className="w-full">
            <Label>Address</Label>
            <input
              name="address"
              value={profileData.address}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-transparent focus-visible:border-transparent outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-sm p-2 bg-gray-200">
          <MapPin className="text-gray-500" />
          <div className="w-full">
            <Label>City</Label>
            <input
              name="city"
              value={profileData.city}
              onChange={changeHandler}
              className="w-full text-gray-600 bg-transparent focus-visible:ring-transparent focus-visible:border-transparent outline-none"
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        {loading ? (
          <Button disabled className="bg-orange hover:bg-orangeHover">
            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
            Update
          </Button>
        ) : (
          <Button className="bg-orange hover:bg-orangeHover">Update</Button>
        )}
      </div>
    </form>
  );
};
export default Profile;

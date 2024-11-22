import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import React, { useRef, useState } from "react";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRef = useRef<any>([]);
  const loading = false;

  const handleChange = (index: number, value: string) => {
    if (/^[a-zA-Z0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }

    if (value !== "" && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-gray-200">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl">Verify Your Email</h1>
          <p className="text-sm text-gray-600">
            Enter your 6 digit code sent to your email address.
          </p>
        </div>
        <form action="">
          <div className="flex justify-between">
            {otp.map((letter: string, index: number) => (
              <Input
                key={index}
                ref={(element) => (inputRef.current[index] = element)}
                value={letter}
                type="text"
                maxLength={1}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                  handleKeyDown(index, e)
                }
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(index, e.target.value)
                }
                className="md:w-12 md:h-12 w-8 h-8 text-center text-sm md:text-2xl font-normal md:font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>
          {loading ? (
            <Button
              disabled
              className="bg-orange hover:bg-orangeHover mt-6 w-full"
            >
              <Loader2 className="mr-2 w-4 h-4 animate-spin" /> Please Wait
            </Button>
          ) : (
            <Button className="bg-orange hover:bg-orangeHover mt-6 w-full">
              Verify
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};
export default VerifyEmail;

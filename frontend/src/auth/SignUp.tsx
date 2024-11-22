import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignUpInput, userSignupSchema } from "@/schema/userSchema";
import { useUserStore } from "@/store/useUserStore";
import { Loader2, LockKeyhole, Mail, Phone, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

//type of signUp input coming from zod userSchema.ts

const SignUp = () => {
  const [input, setInput] = useState<SignUpInput>({
    fullName: "",
    email: "",
    password: "",
    contact: "",
  });

  const [errors, setErrors] = useState<Partial<SignUpInput>>({});
  const { signup } = useUserStore();

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const signUpSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    //form validation check start
    const result = userSignupSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<SignUpInput>);
      return;
    }
    //login api implementation
    await signup(input);
  };

  //loading
  const loading = false;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={signUpSubmitHandler}
        className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4"
      >
        <div className="mb-4">
          <h1 className="font-bold text-2xl">KhajaCdy</h1>
        </div>

        {/* input for full Name */}
        <div className="relative mb-4">
          <Input
            type="text"
            placeholder="Enter Your Full Name"
            name="fullName"
            value={input.fullName}
            onChange={changeEventHandler}
            className="pl-10 focus-visible:ring-1"
          />
          <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          {/* errors for full name */}
          {errors && (
            <span className="text-sm text-red-500">{errors.fullName}</span>
          )}
        </div>

        {/* input for email */}
        <div className="relative mb-4">
          <Input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            className="pl-10 focus-visible:ring-1"
          />
          <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />

          {/* errors for email */}
          {errors && (
            <span className="text-sm text-red-500">{errors.email}</span>
          )}
        </div>

        {/* input for password */}
        <div className="relative mb-4">
          <Input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            className="pl-10 focus-visible:ring-1 "
          />
          <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          {/* errors for password*/}
          {errors && (
            <span className="text-sm text-red-500">{errors.password}</span>
          )}
        </div>

        {/* input for Contact */}
        <div className="relative mb-4">
          <Input
            type="number"
            placeholder="Enter Your Contact Number"
            name="contact"
            value={input.contact}
            onChange={changeEventHandler}
            className="pl-10 focus-visible:ring-1 "
          />
          <Phone className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
          {/* errors for Contact */}
          {errors && (
            <span className="text-sm text-red-500">{errors.contact}</span>
          )}
        </div>

        {/* button */}
        <div className="mt-6 mb-10">
          {loading ? (
            <Button disabled className="bg-orange hover:bg-orangeHover w-full">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-orange hover:bg-orangeHover w-full"
            >
              Sign Up
            </Button>
          )}
        </div>

        <Separator />
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
export default SignUp;

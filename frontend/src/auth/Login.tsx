import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LoginInput, userLoginSchema } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

//type of loginInput coming from zod userSchema.ts

const Login = () => {
  //Set up state to hold the form data
  const [input, setInput] = useState<LoginInput>({
    email: "",
    password: "",
  });

  //errors for field
  const [errors, setErrors] = useState<Partial<LoginInput>>({});

  //Handle input change
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  //Handle form submission
  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    //form validation check start
    const result = userLoginSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<LoginInput>);
      return;
    }
    console.log(input);
  };

  //loader
  const loading = false;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4"
      >
        <div className="mb-4">
          <h1 className="font-bold text-2xl">KhajaCdy</h1>
        </div>

        {/* input for email */}
        <div className="relative mb-4">
          <Input
            type="Email"
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
            type="Password"
            placeholder="Enter Your Password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            className="pl-10 focus-visible:ring-1"
          />
          <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />

          {/* errors for password */}
          {errors && (
            <span className="text-sm text-red-500">{errors.password}</span>
          )}
        </div>

        {/* button */}
        <div className="mt-6 mb-6">
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
              Login
            </Button>
          )}

          <div className="mt-2 text-center">
            <Link to="/forgot-password" className="text-blue-600">
              Forgot Password ?
            </Link>
          </div>
        </div>

        <Separator />

        <p className="mt-3 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Login;

import { z } from "zod"

//validation for user signUp
export const userSignupSchema = z.object({
  fullName: z.string().min(6,"Full name must be 6 character.").max(30, "Full name must not be greater then 30 character."),
  email: z.string().email("Invalid email addrerss !"),
  password: z.string().min(8,"Password must be 8 character.").max(15, "Password should not be greater then 15 character."),
  contact: z.string().min(10, "Contact number should be 10 digit.")
});

//exported to signUp page
export type SignUpInput = z.infer<typeof userSignupSchema>


//validation for login user
export const userLoginSchema = z.object({
  email: z.string().email("Invalid email addrerss !"),
  password: z.string().min(8,"Password must be 8 character.").max(15, "Password should not be greater then 15 character")
});


//exported to Login page
export type LoginInput = z.infer<typeof userLoginSchema>
import {z} from "zod";

export const resturantFromSchema = z.object({
  resturantName:z.string().nonempty({message:"Resturant name is required"}),
  city:z.string().nonempty({message:"City is required"}),
  deliveryTime:z.number().min(0, {message:"Delivery time can't be negative"}),
  cuisines:z.array(z.string()),
  imageFile:z.instanceof(File).optional().refine((file) => file?.size !==0, {message:"Image is required."})
})

export type resturantFromSchema = z.infer<typeof resturantFromSchema>
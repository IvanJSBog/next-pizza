import zod from "zod";
export const checkoutFormSchema = zod.object({
  firstName: zod
    .string()
    .min(2, { message: "Имя должно содержать не менее 2x символов" }),
  lastName: zod
    .string()
    .min(2, { message: "Имя должно содержать не менее 2x символов" }),
  email: zod.string().email({ message: "Введите корректную почту" }),
  phone: zod.string().min(10, { message: "Введите корректный номер телефона" }),
  address: zod.string().min(5, { message: "Введите корректный адрес" }),
  comment: zod.string().optional(),
});

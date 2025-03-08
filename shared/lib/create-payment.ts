import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { PaymentData } from "@/@types/yookassa";

interface PaymentDetails {
  amount: number;
  description: string;
  orderId: string;
}

export async function createPayment(details: PaymentDetails) {
  try {
    const { data } = await axios.post<PaymentData>(
      "https://api.yookassa.ru/v3/payments", // Правильный эндпоинт API
      {
        amount: {
          value: details.amount.toFixed(2), // Сумма должна быть в формате строки с двумя знаками
          currency: "RUB",
        },
        capture: true,
        description: details.description,
        confirmation: {
          // Правильное поле для редиректа
          type: "redirect",
          return_url: process.env.YOOKASSA_CALLBACK_URL,
        },
        metadata: {
          order_id: details.orderId,
        },
      },
      {
        auth: {
          username: "1047735", // ID магазина
          password: process.env.YOOKASSA_API_KEY as string,
        },
        headers: {
          "Content-Type": "application/json",
          "Idempotence-Key": uuidv4(), // Генерация уникального ключа
        },
      },
    );

    return data;
  } catch (error) {
    console.error("Payment creation error:", error);
    throw new Error("Failed to create payment");
  }
}

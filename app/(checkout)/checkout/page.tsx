"use client";
import {
  CheckoutDetails,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Button } from "@/shared/components/ui";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { useCart } from "@/shared/hooks";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutCart } from "@/shared/components/shared/checkout/checkout-cart";
import { CheckoutPersonalForm } from "@/shared/components/shared/checkout/checkout-personal-form";
import { CheckoutAddressForm } from "@/shared/components/shared/checkout/checkout-address-form";
import { checkoutFormSchema } from "@/shared/components/shared/checkout/checkout-form-schema";
import { createOrder } from "@/app/actions";
import toast from "react-hot-toast";
import React from "react";

const VAT = 15;

export default function CheckoutPage() {
  const [submitting, setSubmitting] = React.useState(false);
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
    useCart();

  const form = useForm({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      const url = await createOrder(data);
      toast.error("Заказ успешно оформлен! Переход к оплате...", {
        icon: "✅️",
      });

      if (url) {
        location.href = url;
      }
    } catch (error) {
      setSubmitting(false);
      console.log(error);
      toast.error("Не удалось создать заказ", { icon: "❌" });
    }
  };

  const DELIVERY_PRICE = totalAmount && 250;

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus",
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  const vatPrice = Math.ceil((totalAmount * VAT) / 100);

  return (
    <Container className="mt-5">
      <Title
        text="Оформление заказа"
        size="xl"
        className="font-extrabold mb-8 text-[36px]kk"
      />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                loading={loading}
                items={items}
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
              />
              <CheckoutPersonalForm />
              <CheckoutAddressForm />
            </div>

            <div className="w-[450px]">
              <WhiteBlock className="p-6 sticky top-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xl">Итого</span>
                  <span className="text-[54px] font-extrabold">
                    {totalAmount + DELIVERY_PRICE + vatPrice} P
                  </span>
                </div>
                <CheckoutDetails
                  title={
                    <div className="flex items-center">
                      <Package size={16} className="mr-2 text-gray-300" />
                      Стоимость товаров:
                    </div>
                  }
                  value={`${totalAmount} P`}
                />
                <CheckoutDetails
                  title={
                    <div className="flex items-center">
                      <Percent size={16} className="mr-2 text-gray-300" />
                      Налоги:
                    </div>
                  }
                  value={`${vatPrice} P`}
                />
                <CheckoutDetails
                  title={
                    <div className="flex items-center">
                      <Truck size={16} className="mr-2 text-gray-300" />
                      Доставка:
                    </div>
                  }
                  value={`${DELIVERY_PRICE} P`}
                />
                <Button
                  loading={loading || submitting}
                  type="submit"
                  className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
                >
                  Перейти к оплате
                  <ArrowRight className="w-5 ml-2" />
                </Button>
              </WhiteBlock>
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}

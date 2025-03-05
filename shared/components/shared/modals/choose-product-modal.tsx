"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/shared/lib/utils";
import { DialogContent, Dialog } from "@/shared/components/ui/dialog";
import { ChoosePizzaForm, ChooseProductForm } from "@/shared/components/shared";
import { ProductWithRelations } from "@/@types/prisma";
import { useCartStore } from "@/shared/store/cart";
import toast from "react-hot-toast";
import assert from "node:assert";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  const { loading, addCartItem } = useCartStore((state) => state);

  const onAddProduct = async () => {
    try {
      await addCartItem({
        productItemId: firstItem.id,
      });
      toast.success(product.name + " добавлен в корзину");
      router.back();
    } catch (e) {
      toast.error("Не удалось добавить продукт в корзину");
      console.error(e);
    }
  };

  const onAddPizza = async (productItemId: number, ingredients: number[]) => {
    try {
      await addCartItem({ productItemId, ingredients });
      toast.success(product.name + " добавлен в корзину");
      router.back();
    } catch (e) {
      toast.error("Не удалось добавить пиццу в корзину");
      console.error(e);
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className,
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={onAddPizza}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onAddProduct}
            price={firstItem.price}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

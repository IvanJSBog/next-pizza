import { CartItem, WhiteBlock } from "@/shared/components/shared";
import { getCartItemsDetails } from "@/shared/lib/get-cart-items-details";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";

import React from "react";
import { CartStateItem } from "@/shared/lib/get-cart-details";
import { CheckoutItemSkeleton } from "@/shared/components/shared/checkout-skeleton";

interface Props {
  items: CartStateItem[];
  onClickCountButton: (
    id: number,
    quantity: number,
    type: "plus" | "minus",
  ) => void;
  removeCartItem: (id: number) => void;
  loading?: boolean;
  className?: string;
}

export const CheckoutCart: React.FC<Props> = ({
  onClickCountButton,
  removeCartItem,
  className,
  loading,
  items,
}) => {
  return (
    <WhiteBlock title="1. Корзина" className={className}>
      <div className="flex flex-col gap-5">
        {loading &&
          [...Array(5)].map((_, i) => <CheckoutItemSkeleton key={i} />)}
        {!loading &&
          items.map((item) => (
            <CartItem
              onClickCountButton={(type) =>
                onClickCountButton(item.id, item.quantity, type)
              }
              key={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
              id={item.id}
              details={
                item.pizzaSize && item.pizzaType
                  ? getCartItemsDetails(
                      item.pizzaType as PizzaType,
                      item.pizzaSize as PizzaSize,
                      item.ingredients,
                    )
                  : ""
              }
              disabled={item.disabled}
              quantity={item.quantity}
              onClickRemove={() => removeCartItem(item.id)}
            />
          ))}
      </div>
    </WhiteBlock>
  );
};

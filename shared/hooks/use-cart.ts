import { useCartStore } from "@/shared/store/cart";
import React from "react";
import { CartStateItem } from "@/shared/lib/get-cart-details";
import { CreateCartItemValues } from "@/shared/services/dto/cart.dto";

type ReturnProps = {
  totalAmount: number;
  items: CartStateItem[];
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
};

export const useCart = (): ReturnProps => {
  const state = useCartStore((state) => state);

  React.useEffect(() => {
    state.fetchCartItems();
  }, []);
  return state;
};

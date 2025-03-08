import { cn } from "@/shared/lib/utils";
import React from "react";
import { CartItemDetailsImage } from "@/shared/components/shared/cart-item-details/cart-item-details-image";
import { CartItemInfo } from "@/shared/components/shared/cart-item-details/cart-item-info";
import { CartItemProps } from "@/shared/components/shared/cart-item-details/cart-item-details.types";
import { CartItemDetailsPrice } from "@/shared/components/shared/cart-item-details/cart-item-details-price";
import { CartItemDetailsCountButton } from "@/shared/components/shared/cart-item-details/cart-item-details-count-button";
import { X } from "lucide-react";

interface Props extends CartItemProps {
  onClickRemove?: () => void;
  onClickCountButton: (type: "plus" | "minus") => void;
  imageUrl: string;
  name: string;
  disabled?: boolean;
  price: number;
  className?: string;
  count?: number;
}

export const CartItem: React.FC<Props> = ({
  imageUrl,
  name,
  onClickCountButton,
  price,
  details,
  disabled,
  quantity,
  onClickRemove,
  count,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        { "pointer-events-none opacity-50": disabled },
        className,
      )}
    >
      <div className="flex items-center gap-5 flex-1">
        <CartItemDetailsImage src={imageUrl} />
        <CartItemInfo name={name} details={details} />
      </div>
      <CartItemDetailsPrice value={price} />

      <div className="flex items-center gap-5 ml-20">
        <CartItemDetailsCountButton
          onClick={onClickCountButton}
          value={quantity}
        />
        <button onClick={onClickRemove}>
          <X className="text-gray-400 cursor-pointer hover:text-gray-400" />
        </button>
      </div>
    </div>
  );
};

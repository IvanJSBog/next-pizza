import React from "react";
import { Ingredient, ProductItem } from "@prisma/client";
import { cn } from "@/shared/lib/utils";
import { Title } from "@/shared/components/shared/title";
import { Button } from "../ui";

interface Props {
  imageUrl: string;
  name: string;
  onClickAdd?: VoidFunction;
  className?: string;
}
export const ChooseProductForm: React.FC<Props> = ({
  className,
  name,
  onClickAdd,
  imageUrl,
}) => {
  const totalPrice = 2000;

  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};

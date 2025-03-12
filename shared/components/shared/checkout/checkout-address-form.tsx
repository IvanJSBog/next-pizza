"use client";
import React from "react";
import { Textarea } from "@/shared/components/ui";
import { WhiteBlock } from "@/shared/components/shared";
import { FormInput } from "@/shared/components/shared/form/form-input";

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({}) => {
  return (
    <WhiteBlock title="3. Адрес доставки">
      <div className="flex flex-col gap-5">
        <FormInput
          name="address"
          className="text-base"
          placeholder="Адрес доставки"
        />
        <Textarea
          name="comment"
          className="text-base"
          placeholder="Комментарий к заказу"
          rows={5}
        />
      </div>
    </WhiteBlock>
  );
};

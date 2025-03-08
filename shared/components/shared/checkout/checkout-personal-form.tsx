import { FormInput } from "@/shared/components/shared/form/form-input";
import { WhiteBlock } from "@/shared/components/shared";

import React from "react";

interface Props {
  className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({}) => {
  return (
    <WhiteBlock title="2. Персональная информация">
      <div className="grid grid-cols-2 gap-5">
        <FormInput name="firstName" className="text-base" placeholder="Имя" />
        <FormInput
          name="lastName"
          className="text-base"
          placeholder="Фамилия"
        />
        <FormInput name="email" className="text-base" placeholder="E-mail" />
        <FormInput name="phone" className="text-base" placeholder="Телефон" />
      </div>
    </WhiteBlock>
  );
};

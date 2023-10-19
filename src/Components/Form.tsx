import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";

import styled from "styled-components";

const FormWrapper = styled.div`
  width: 90%;
  padding: 20px;
`;

const FormError = styled.p`
  color: #ff0000;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const FormInputRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const FormSubmit = styled.button`
  background-color: #21092f;
  color: #fff;
  padding: 17px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
`;

const Label = styled.label`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  cardNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Wrong format, numbers only")
    .required("Card Number is required"),
  expirationMonth: yup.string().required("Can’t be blank"),
  expirationYear: yup.string().required("Can’t be blank"),
  cvc: yup.string().required("Can’t be blank"),
});

type FormData = {
  fullName: string;
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  cvc: string;
};

interface FormProps {
  onFormSubmit: (data: FormData) => void;
}

function Form({ onFormSubmit }: FormProps) {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const fullNAme = watch("fullName");
  const cardNumber = watch("cardNumber");
  const expirationMonth = watch("expirationMonth");
  const expirationYear = watch("expirationYear");
  const cvc = watch("cvc");

  const onSubmit = (data: FormData) => {
    onFormSubmit(data);
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="fullName">Cardholder Name</Label>
          <Controller
            name="fullName"
            control={control}
            defaultValue=""
            render={({ field }) => <FormInput {...field} />}
          />
          {errors.fullName && <FormError>{errors.fullName.message}</FormError>}
        </div>

        <div>
          <Label htmlFor="cardNumber">Card Numbers</Label>
          <Controller
            name="cardNumber"
            control={control}
            defaultValue=""
            render={({ field }) => <FormInput {...field} />}
          />
          {errors.cardNumber && (
            <FormError>{errors.cardNumber.message}</FormError>
          )}
        </div>

        <FormInputRow>
          <div>
            <Label htmlFor="expirationMonth">MM</Label>
            <Controller
              name="expirationMonth"
              control={control}
              defaultValue=""
              render={({ field }) => <FormInput {...field} />}
            />
            {errors.expirationMonth && (
              <FormError>{errors.expirationMonth.message}</FormError>
            )}
          </div>
          <div>
            <Label htmlFor="expirationYear">YY</Label>
            <Controller
              name="expirationYear"
              control={control}
              defaultValue=""
              render={({ field }) => <FormInput {...field} />}
            />
            {errors.expirationYear && (
              <FormError>{errors.expirationYear.message}</FormError>
            )}
          </div>
          <div>
            <Label htmlFor="cvc">CVC</Label>
            <Controller
              name="cvc"
              control={control}
              defaultValue=""
              render={({ field }) => <FormInput {...field} />}
            />
            {errors.cvc && <FormError>{errors.cvc.message}</FormError>}
          </div>
        </FormInputRow>

        <FormSubmit type="submit">Confirm</FormSubmit>
      </form>
    </FormWrapper>
  );
}

export default Form;

import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";

const FormWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
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
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const FormInputRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const FormSubmit = styled.button`
  background-color: #21092f;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
`;

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  cardNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Wrong format, numbers only")
    .required("Card Number is required"),
  expirationMonth: yup.string().required("Month is required"),
  expirationYear: yup.string().required("Year is required"),
  cvc: yup.string().required("CVC is required"),
});

type FormData = {
  fullName: string;
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  cvc: string;
};

function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fullName">Cardholder Name</label>
          <Controller
            name="fullName"
            control={control}
            defaultValue=""
            render={({ field }) => <FormInput {...field} />}
          />
          {errors.fullName && <FormError>{errors.fullName.message}</FormError>}
        </div>

        <div>
          <label htmlFor="cardNumber">Card Numbers</label>
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
            <label htmlFor="expirationMonth">MM</label>
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
            <label htmlFor="expirationYear">YY</label>
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
            <label htmlFor="cvc">CVC</label>
            <Controller
              name="cvc"
              control={control}
              defaultValue=""
              render={({ field }) => <FormInput {...field} />}
            />
            {errors.cvc && <FormError>{errors.cvc.message}</FormError>}
          </div>
        </FormInputRow>

        <FormSubmit type="submit">Submit</FormSubmit>
      </form>
    </FormWrapper>
  );
}

export default Form;

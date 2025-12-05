import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCartIcon } from "lucide-react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  PaymentFormInputs,
  paymentFormSchema,
} from "@/types/paymentFormSchema";
import Image from "next/image";

export default function PaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const router = useRouter();

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {};
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolder"
          className="text-xs text-gray-500 font-medium"
        >
          Name on card
        </label>
        <input
          id="cardHolder"
          className="border-b border-gray-200 py-2 outline-0 text-sm"
          placeholder="Furkan Arslan"
          {...register("cardHolder")}
        />
        {errors.cardHolder && (
          <p className="text-sm text-red-600">{errors.cardHolder.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-500 font-medium">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          className="border-b border-gray-200 py-2 outline-0 text-sm"
          placeholder="60121212121"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-sm text-red-600">{errors.cardNumber.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="expirationDate"
          className="text-xs text-gray-500 font-medium"
        >
          Expiration Date
        </label>
        <input
          type="text"
          id="expirationDate"
          className="border-b border-gray-200 py-2 outline-0 text-sm"
          placeholder="12/26"
          {...register("expirationDate")}
        />
        {errors.expirationDate && (
          <p className="text-sm text-red-600">
            {errors.expirationDate.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          className="border-b border-gray-200 py-2 outline-0 text-sm"
          placeholder="333"
          {...register("cvv")}
        />
        {errors.cvv && (
          <p className="text-sm text-red-600">{errors.cvv.message}</p>
        )}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Image
          src="/cards.png"
          alt="cards-visa-image"
          width={50}
          height={25}
          className="rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-900 transition-all duration-300"
      >
        Checkout
        <ShoppingCartIcon className="w-3 h-3" />
      </button>
    </form>
  );
}

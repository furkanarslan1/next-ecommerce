import {
  ShippingFormInputs,
  shippingFormSchema,
} from "@/types/shippingFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function ShippingForm({
  setShippingForm,
}: {
  setShippingForm: (data: ShippingFormInputs) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const router = useRouter();

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingForm)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500 font-medium">
          Name
        </label>
        <input
          id="name"
          className="border-b border-gray-200 py-2 outline-0 text-sm"
          placeholder="Furkan Arslan"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-500 font-medium">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          className="border-b border-gray-200 py-2 outline-0 text-sm"
          placeholder="example@example.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs text-gray-500 font-medium">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          className="border-b border-gray-200 py-2 outline-0 text-sm"
          placeholder="0555555555"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs text-gray-500 font-medium">
          Address
        </label>
        <input
          type="text"
          id="address"
          className="border-b border-gray-200 py-2 outline-0 text-sm"
          placeholder="Mainstreet St, Anytown"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-sm text-red-600">{errors.address.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-xs text-gray-500 font-medium">
          City
        </label>
        <input
          type="text"
          id="city"
          className="border-b border-gray-200 py-2 outline-0 text-sm"
          placeholder="Istanbul"
          {...register("city")}
        />
        {errors.city && (
          <p className="text-sm text-red-600">{errors.city.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-900 transition-all duration-300"
      >
        Contiune
        <ArrowRight className="w-3 h-3" />
      </button>
    </form>
  );
}

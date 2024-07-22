import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import TextInput from "./TextInput";
import TextAreaDescription from "./TextAreaDescription";
import UploadPhoto from "./UploadPhoto";
import { Product } from "@/models/Product";

const schema = yup
  .object({
    name: yup.string().required().min(20),
    description: yup.string().required().min(50),
    price: yup.number().positive().required(),
    is_active: yup.boolean().required(),
    file: yup.mixed().required(),
  })
  .required();

export default function FormMenuProduct({
  product = null,
  canceProduct,
}: {
  product: Product | null;
  canceProduct: (value: boolean) => void;
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);

  if (product) {
    setValue("name", product.name);
    setValue("description", product.description);
    setValue("price", product.price);
    setValue("is_active", product.is_active);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-0">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-0 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {product && product.image ? (
              <div className="col-span-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-60 w-full object-cover rounded-lg"
                />
              </div>
            ) : (
              <UploadPhoto
                {...register("file")}
                label="Upload Photo"
                classDiv="col-span-full"
              />
            )}

            <TextInput
              {...register("name")}
              label="Name"
              classDiv="col-span-full"
              error={errors.name?.message}
            />

            <TextInput
              {...register("price")}
              label="Price"
              classDiv="col-span-full"
              error={errors.price?.message}
            />
            <TextAreaDescription
              {...register("description")}
              label="Description"
              classDiv="col-span-full"
              error={errors.description?.message}
            />

            <div className="relative flex gap-x-3 col-span-full">
              <div className="flex h-6 items-center">
                <input
                  id="active"
                  name="active"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="active" className="font-medium text-gray-900">
                  Product is active
                </label>
                <p className="text-gray-500">
                  If the product is not active, it will not be displayed in the
                  menu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={() => canceProduct(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}


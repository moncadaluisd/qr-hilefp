"use client";
import {
  BuildingStorefrontIcon,
  CalendarIcon,
  ChartPieIcon,
  ComputerDesktopIcon,
  CreditCardIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  RectangleStackIcon,
  TruckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import MenuVertical from "@/components/MenuVertical";
import HeaderSettings from "@/components/HeaderSettings";
import UploadPhoto from "@/components/UploadPhoto";
import { useForm } from "react-hook-form";
import TextInput from "@/components/TextInput";
import TextAreaDescription from "@/components/TextAreaDescription";

const schema = yup
  .object({
    logo: yup.mixed().required(),
    icon: yup.mixed().required(),
    name: yup.string().required().min(2),
    description: yup.string().required().min(10),
    phone: yup.string().required().min(10),
    email: yup.string().email().required(),
  })
  .required();

export const navigation = [
  { name: "General", href: "/settings", icon: HomeIcon, current: false },
  /**
  {
    name: "Website",
    href: "/settings/website",
    icon: ComputerDesktopIcon,
    current: false,
  },
   */
  {
    name: "Restaurant",
    href: "/settings/restaurant",
    icon: BuildingStorefrontIcon,
    current: false,
  },
  // {
  //   name: "Payment Settings",
  //   href: "/settings/payments",
  //   icon: CreditCardIcon,
  //   current: false,
  // },
  {
    name: "Subscription",
    href: "/settings/subscription",
    icon: RectangleStackIcon,
    current: false,
  },
  {
    name: "Users",
    href: "/settings/users",
    icon: UsersIcon,
    current: false,
  },
];

export default function Settings() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <main className="xl:pl-96">
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
          {/* Main area */}
          <HeaderSettings
            title="General Settings"
            subTitle="Manage your general settings"
          />

          <form className="mt-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-full grid grid-cols-2">
                <TextInput
                  {...register("name")}
                  label="Name"
                  error={errors.name?.message}
                />
              </div>

              <div className="col-span-full grid grid-cols-2">
                <TextInput
                  {...register("email")}
                  label="Email"
                  error={errors.email?.message}
                />
              </div>

              <div className="col-span-full grid grid-cols-2">
                <TextInput
                  {...register("phone")}
                  label="Phone"
                  error={errors.phone?.message}
                />
              </div>

              <div className="col-span-full grid grid-cols-2">
                <TextAreaDescription
                  {...register("description")}
                  label="Description"
                  error={errors.description?.message}
                />
              </div>

              <div className="">
                <UploadPhoto
                  {...register("logo")}
                  label="Upload Logo"
                  classDiv="col-span-full"
                />
              </div>

              <div className="">
                <UploadPhoto
                  {...register("icon")}
                  label="Upload Icon"
                  classDiv="col-span-full"
                />
              </div>
            </div>
          </form>
        </div>
      </main>

      <aside className="fixed bottom-0 left-20 top-16 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
        {/* Secondary column (hidden on smaller screens) */}
        <MenuVertical
          menu={navigation.map((menu) => {
            if (menu.name === "General") {
              return {
                ...menu,
                current: true,
              };
            }
            return menu;
          })}
        />
      </aside>
    </>
  );
}


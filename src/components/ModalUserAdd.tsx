"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import TextInput from "./TextInput";
import SelectForm from "./SelectForm";
import ButtonGeneral from "./ButtonGeneral";

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

const list = [
  {
    id: 1,
    name: "Staff",
  },
  {
    id: 2,
    name: "Admin",
  },
  {
    id: 3,
    name: "Manager",
  },
];
const ModalUserAdd: React.FC = () => {
  const [selected, setSelected] = React.useState<string | null>(null);

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  const onSubmit = (data: any) => {
    if (!selected) return;

    console.log(data);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-primary hover:bg-primary/90 text-white   rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
        Add User
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add User</AlertDialogTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label="Email"
              type="email"
              classDiv={"mb-4"}
              placeholder="example@example.com"
              {...register("email")}
              error={(errors?.email?.message as string) || undefined}
            />

            <SelectForm
              placeholder="Select a role"
              list={list}
              label="Role"
              selected={selected}
              setSelected={setSelected}
            />

            <div className="flex justify-end items-center mt-4 gap-3">
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <ButtonGeneral type="general" name="Add User" />
            </div>
          </form>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ModalUserAdd;


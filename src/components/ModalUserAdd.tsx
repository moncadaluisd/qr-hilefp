"use client";
import React from "react";
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
import ButtonGeneral from "./ButtonGeneral";
import TextInput from "./TextInput";
import { Textarea } from "@headlessui/react";
import TextAreaDescription from "./TextAreaDescription";
import SelectForm from "./SelectForm";

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
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-primary hover:bg-primary/90 text-white   rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
        Add User
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add User</AlertDialogTitle>
          <form action="">
            <TextInput label="Email" type="email" classDiv={"mb-4"} placeholder="example@example.com" />

            <SelectForm
              placeholder="Select a role"
              list={list}
              label="Role"
              selected={selected}
              setSelected={setSelected}
            />
          </form>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ModalUserAdd;


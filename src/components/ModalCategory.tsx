"use client";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import ButtonGeneral from "./ButtonGeneral";
import TextInput from "./TextInput";
import { Textarea } from "@headlessui/react";
import TextAreaDescription from "./TextAreaDescription";

const ModalCategory = () => {
  
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <ButtonGeneral variant="general" name="Add Category" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create Category</AlertDialogTitle>
          <form action="">
            <TextInput label="Name" />

            <TextAreaDescription classDiv="mt-4" label="Description" />
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

export default ModalCategory;


"use client";

import FormMenuProduct from "@/components/FormMenuProduct";
import H1Title from "@/components/H1Title";
import MenuItem from "@/components/MenuItem";
import MenuList from "@/components/MenuList";
import { menuCategoriesMock, menuProductsMock } from "@/mocks/mockMenu";
import React, { use, useState } from "react";

const MenuDashboard = () => {
  const [menu, setMenu] = useState(menuCategoriesMock);
  const [products, setItems] = useState(menuProductsMock);

  const [selectedCategory, setSelectedCategory] = useState(menu[0]);
  const [selectedProduct, setSelectedProduct] = useState(products[1]);

  return (
    <>
      <div className="px-6 py-5">
        <H1Title title="Menu Jimmy Burger" />
      </div>
      <main className="">
        <div className="flex">
          <div className="overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 md:block">
            <MenuList>
              {menu.map((category) => (
                <MenuItem
                  key={category.id}
                  item={category}
                  selected={selectedCategory.id === category.id}
                />
              ))}
            </MenuList>
          </div>
          <div className="w-1/4 border-r h-[80vh] border-gray-200 px-5 py-10 lg:py-6">
            <MenuList>
              {products.map((product) => (
                <MenuItem
                  key={product.id}
                  item={product}
                  selected={selectedProduct.id === product.id}
                />
              ))}
            </MenuList>
          </div>
          <div className="w-2/4  pl-5 py-10 lg:pl-6 h-[80vh] overflow-y-auto">
            <FormMenuProduct />
          </div>
        </div>
      </main>
    </>
  );
};

export default MenuDashboard;


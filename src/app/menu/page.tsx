"use client";
import { useState } from "react";
import FormMenuProduct from "@/components/FormMenuProduct";
import HeadingPage from "@/components/HeadingPage";

import { menuCategoriesMock, menuProductMock } from "@/mocks/mockMenu";

import { Product } from "@/models/Product";

import ButtonGeneral from "@/components/ButtonGeneral";
import dynamic from "next/dynamic";
import {

  DropResult,
} from "react-beautiful-dnd";
import DragDropMenu from "@/components/DragDropMenu";

const ModalCategoryS = dynamic(() => import("@/components/ModalCategory"), {
  ssr: false,
});

const MenuDashboard = () => {
  const [menu, setMenu] = useState(menuCategoriesMock);
  const [products, setProducts] = useState(menuProductMock);

  const [selectedCategory, setSelectedCategory] = useState<any | null>(menu[0]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(
    products[1]
  );
  const [isCreateProduct, setIsCreateProduct] = useState(true);

  const handleSetSelectedCategory = (category: any) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
    setProducts(
      menuProductMock.filter((product) => product.category_id === category.id)
    );
    setIsCreateProduct(false);
  };

  const handleSetSelectedProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsCreateProduct(true);
  };

  const handleCreateProduct = () => {
    setIsCreateProduct(true);
    setSelectedProduct(null);
  };

  const handleDragEndMenu = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(menu);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setMenu(items);
  };

  const handleDragEndProducts = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(products);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setProducts(items);
  };

  return (
    <>
      <HeadingPage title="Menu Jimmy Burguer" sucursal="1920 stanhope st" buttonPreview={true} />
      <main className="">
        <div className="flex">
          <div className="overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 md:block">
            <div className="mb-4 flex justify-end">
              <ModalCategoryS />
            </div>
            <DragDropMenu
              handleDragEnd={handleDragEndMenu}
              nameId="categoryMenu"
              menu={menu}
              selectedItem={selectedCategory}
              handleSetSelectedItem={handleSetSelectedCategory}
            />
          </div>
          <div className="w-1/4 border-r h-[75vh] border-gray-200 px-5 py-10 lg:py-6">
            <div className="mb-4 flex justify-end">
              <ButtonGeneral onClick={handleCreateProduct} name="Add Product" />
            </div>
            {products.length > 0 ? (
              <DragDropMenu
                handleDragEnd={handleDragEndProducts}
                nameId="productsMenu"
                menu={products}
                selectedItem={selectedProduct}
                handleSetSelectedItem={handleSetSelectedProduct}
              />
            ) : (
              <div>
                <h2 className="text-2xl">No products</h2>
              </div>
            )}
          </div>
          <div className="w-2/4  pl-5 py-10 lg:pl-6 pr-6 h-[75vh] overflow-y-auto mx-auto">
            {isCreateProduct ? (
              <FormMenuProduct
                product={selectedProduct}
                canceProduct={setIsCreateProduct}
              />
            ) : (
              <div>
                <div>
                  <h2 className="text-2xl">Select a product or create</h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default MenuDashboard;


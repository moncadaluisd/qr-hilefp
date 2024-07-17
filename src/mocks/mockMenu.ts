import { Product } from "@/models/Product";

export const menu = [];

export const menuCategoriesMock = [
  {
    id: 1,
    name: "Hamburguesas",
    href: "#",
  },
  {
    id: 2,
    name: "Perros Calientes",
  },
  {
    id: 3,
    name: "Pizzas",
    href: "#",
  },
  {
    id: 4,
    name: "Bebidas",
    href: "#",
  },
  {
    id: 5,
    name: "Postres",
    href: "#",
  },
];

export const menuProductMock: Product[] = [
  {
    id: 1,
    name: "Perro Caliente",
    price: 5.5,
    category_id: 2,
    is_active: true,
    description:
      "Perro caliente con salchicha, cebolla, mayonesa, mostaza y ketchup.",
    image:
      "https://images.unsplash.com/photo-1615053271804-0c1d4d6f1b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI0MjF8MHwxfGFsbHwxf",
  },
  {
    id: 2,
    name: "Perro Caliente con Queso",
    price: 7.5,
    category_id: 2,
    is_active: true,
    description:
      "Perro caliente con salchicha, cebolla, mayonesa, mostaza, ketchup y queso.",
    image:
      "https://images.unsplash.com/photo-1615053271804-0c1d4d6f1b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI0MjF8MHwxfGFsbHwxf",
  },
  {
    id: 3,
    name: "Perro Caliente con Tocineta",
    price: 8.5,
    is_active: true,
    category_id: 2,
    description:
      "Perro caliente con salchicha, cebolla, mayonesa, mostaza, ketchup y tocineta.",
    image:
      "https://images.unsplash.com/photo-1615053271804-0c1d4d6f1b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI0MjF8MHwxfGFsbHwxf",
  },
  {
    id: 4,
    name: "Perro Caliente con Tocineta y Queso",
    price: 10.5,
    is_active: true,
    category_id: 2,
    description:
      "Perro caliente con salchicha, cebolla, mayonesa, mostaza, ketchup, tocineta y queso.",
    image:
      "https://images.unsplash.com/photo-1615053271804-0c1d4d6f1b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI0MjF8MHwxfGFsbHwxf",
  },
  {
    id: 5,
    name: "Hamburguesa de Carne",
    category_id: 1,
    price: 12.5,
    is_active: true,
    description:
      "Hamburguesa de carne de res con lechuga, tomate, cebolla, queso y mayonesa.",
    image:
      "https://images.unsplash.com/photo-1615053271804-0c1d4d6f1b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI0MjF8MHwxfGFsbHwxf",
  },
  {
    id: 6,
    name: "Hamburguesa de Pollo",
    price: 10.5,
    category_id: 1,
    is_active: true,
    description:
      "Hamburguesa de pollo con lechuga, tomate, cebolla, queso y mayonesa.",
    image:
      "https://lh5.googleusercontent.com/proxy/hW3yl7dUdfHzW6xO8lDrbpcDwT13HnuHajvNzq5MHREZo2HjavN_iocxd4-h2Hsq3e3nkozEZF_dNNHvZuXaPVQKAnwLKPGTJL3p_3ukKOIhU2p9tJofWdDmfmcrfF59",
  },
  {
    id: 7,
    name: "Perro Caliente",
    price: 5.5,
    category_id: 1,
    is_active: true,
    description:
      "Perro caliente con salchicha, cebolla, mayonesa, mostaza y ketchup.",
    image:
      "https://images.unsplash.com/photo-1615053271804-0c1d4d6f1b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI0MjF8MHwxfGFsbHwxf",
  },
  {
    id: 8,
    name: "Pizza de Pepperoni",
    price: 15.5,
    is_active: true,
    category_id: 1,
    description:
      "Pizza de pepperoni con salsa de tomate, queso mozzarella y pepperoni.",
    image:
      "https://images.unsplash.com/photo-1615053271804-0c1d4d6f1b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI0MjF8MHwxfGFsbHwxf",
  },
  {
    id: 9,
    name: "Pizza de Jamón y Queso",
    price: 14.5,
    is_active: true,
    category_id: 1,
    description:
      "Pizza de jamón y queso con salsa de tomate, queso mozzarella, jamón y queso.",
    image:
      "https://images.unsplash.com/photo-1615053271804-0c1d4d6f1b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid",
  },
];


export const mockOrder = [
  {
    column: "new",
    droppableId: "newColumn",
    isNew:true,
    nameClass: "bg-orange-100 text-sm w-max px-1 rounded mr-2 text-gray-700",
    orders: [
      {
        client: "Sophie Worso",
        time: "10 seconds",
        amount: 3.25,
        order: 1,
        products: 3,
        paymentType: "cash",
        type: "delivery",
      },
      {
        client: "Sophie Worso",
        time: "1 minute",
        amount: 5,
        order: 2,
        products: 1,
        paymentType: "Card",
        type: "Dine in",
      },
      {
        client: "John Doe",
        time: "2 minutes",
        amount: 8.5,
        order: 3,
        products: 2,
        paymentType: "Card",
        type: "Takeaway",
      },
      {
        client: "Jane Smith",
        time: "3 minutes",
        amount: 12.75,
        order: 4,
        products: 4,
        paymentType: "Cash",
        type: "Delivery",
      },
    ],
  },

  {
    column: "Accepted Order",
    droppableId: "acceptedColumn",
    nameClass: "bg-blue-100 text-sm w-max px-1 rounded mr-2 text-gray-700",
    isNew:false,
    orders: [
      {
        client: "Sophie Worso",
        time: "10 seconds",
        amount: 3.25,
        order: 5,
        products: 3,
        paymentType: "cash",
        type: "delivery",
      },
      {
        client: "Sophie Worso",
        time: "1 minute",
        amount: 6,
        order: 6,
        products: 1,
        paymentType: "Card",
        type: "Dine in",
      },
    ],
  },

  {
    column: "Ready Order",
    droppableId: "readyColumn",
    nameClass: "bg-green-100 text-sm w-max px-1 rounded mr-2 text-gray-700",
    isNew:false,
    orders: [
      {
        client: "Sophie Worso",
        time: "10 seconds",
        amount: 3.25,
        order: 7,
        products: 3,
        paymentType: "cash",
        type: "delivery",
      },
      {
        client: "Sophie Worso",
        time: "1 minute",
        amount: 5,
        order: 8,
        products: 1,
        paymentType: "Card",
        type: "Dine in",
      },
    ],
  },

  {
    column: "Delivered Orders",
    droppableId: "deliveryColumn",
    nameClass: "bg-orange-100 text-sm w-max px-1 rounded mr-2 text-gray-700",
    orders: [
      {
        client: "Sophie Worso",
        time: "10 seconds",
        amount: 3.25,
        order: 9,
        products: 3,
        paymentType: "cash",
        type: "delivery",
      },
    ],
  },
];


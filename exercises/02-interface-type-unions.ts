type OrderStatus = "pending" | "paid" | "shipped" | "cancelled" | "refunded";

interface Order {
  id: number;
  status: OrderStatus;
  note?: string;
}

const myOrder: Order = {
  id: 123,
  status: "paid",
};

const wrongOrder: Order = {
  id: 456,
  // @ts-expect-error
  status: "shiped", // Error: Type '"shiped"' is not assignable to type 'OrderStatus'.
};

function describeStatus(status: OrderStatus): string {
  switch (status) {
    case "pending":
      return "Order is pending";
    case "paid":
      return "Order has been paid";
    case "shipped":
      return "Order has been shipped";
    case "cancelled":
      return "Order has been cancelled";
    case "refunded":
      return "Order has been refunded";
  }
}

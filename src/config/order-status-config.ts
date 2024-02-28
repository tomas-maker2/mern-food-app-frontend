import { OrderStauts } from "@/types";

type OrderStateInfo = {
  label: string;
  value: OrderStauts;
  progressValue: number;
};

export const ORDER_STATUS:OrderStateInfo[] = [
  { label: "placed", value: "placed", progressValue: 0 },
  {
    label: "Awaiting Restaurant Confirmation",
    value: "paid",
    progressValue: 25,
  },
  { label: "In Progress", value: "inProgress", progressValue: 50 },
  { label: "Out for delivery", value: "outForDelivery", progressValue: 75 },
  { label: "Delivered", value: "delivered", progressValue: 100 },
];

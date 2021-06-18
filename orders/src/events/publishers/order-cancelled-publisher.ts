import { Publisher, Subjects, OrderCancelledEvent } from "@msvctickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}

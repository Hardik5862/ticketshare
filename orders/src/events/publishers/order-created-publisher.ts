import { Publisher, Subjects, OrderCreatedEvent } from "@msvctickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}

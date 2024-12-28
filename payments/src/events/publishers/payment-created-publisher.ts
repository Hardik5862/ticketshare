import { Subjects, PaymentCreatedEvent, Publisher } from "@msvctickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}

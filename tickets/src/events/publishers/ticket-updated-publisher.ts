import { Publisher, Subjects, TicketUpdatedEvent } from "@msvctickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

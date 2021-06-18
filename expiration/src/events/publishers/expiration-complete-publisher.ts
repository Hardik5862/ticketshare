import {
  Publisher,
  Subjects,
  ExpirationCompleteEvent,
} from "@msvctickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}

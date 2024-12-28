import Router from "next/router";
import useRequest from "../../hooks/use-request";

const TicketShow = ({ currentUser, ticket }) => {
  const { doRequest, errors } = useRequest({
    url: "/api/orders",
    method: "post",
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) =>
      Router.push("/orders/[orderId]", `/orders/${order.id}`),
  });

  const formattedPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);

  return (
    <div>
      <h1>{ticket.title}</h1>
      <h4>{formattedPrice(ticket.price)}</h4>
      {errors}
      {currentUser?.id === ticket.userId ? (
        <button
          className="btn btn-secondary"
          onClick={() =>
            Router.push(
              "/tickets/update/[ticketId]",
              `/tickets/update/${ticket.id}`
            )
          }
        >
          Update Ticket
        </button>
      ) : (
        <button onClick={() => doRequest()} className="btn btn-primary">
          Purchase
        </button>
      )}
    </div>
  );
};

TicketShow.getInitialProps = async (context, client) => {
  const { ticketId } = context.query;
  const { data } = await client.get(`/api/tickets/${ticketId}`);

  return { ticket: data };
};

export default TicketShow;

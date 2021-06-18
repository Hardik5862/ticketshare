const OrderIndex = ({ orders }) => {
  const formattedPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);

  return (
    <ul>
      {orders?.map((order) => {
        return (
          <li key={order.id}>
            {order.ticket.title} : {formattedPrice(order.ticket.price)} -{" "}
            {order.status}
          </li>
        );
      })}
    </ul>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get("/api/orders");

  return { orders: data };
};

export default OrderIndex;

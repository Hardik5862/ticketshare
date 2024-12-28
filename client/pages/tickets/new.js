import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

const NewTicket = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/tickets",
    method: "post",
    body: {
      title,
      price,
    },
    onSuccess: () => Router.push("/"),
  });

  const handleBlur = (e) => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await doRequest();
  };

  return (
    <div>
      <h1>Create a ticket</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title: </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Price: </label>
          <input
            type="text"
            className="form-control"
            value={price}
            onBlur={handleBlur}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <br />
        {errors}
        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default NewTicket;

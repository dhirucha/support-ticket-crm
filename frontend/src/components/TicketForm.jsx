import { useState } from "react";

const TicketForm = ({ onSubmit }) => {
  const [formData, setFormData] =
    useState({
      customer_name: "",
      customer_email: "",
      subject: "",
      description: "",
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="space-y-5"
>
      <input className="
w-full
border
rounded-lg
px-4
py-3
focus:ring-2
focus:ring-blue-500
outline-none
"
        name="customer_name"
        placeholder="Customer Name"
        className="w-full border p-3 rounded-lg"
        onChange={handleChange}
      />

      <input
        name="customer_email"
        placeholder="Customer Email"
        className="w-full border p-3 rounded-lg"
        onChange={handleChange}
      />

      <input
        name="subject"
        placeholder="Subject"
        className="w-full border p-3 rounded-lg"
        onChange={handleChange}
      />

      <textarea
        rows="5"
        name="description"
        placeholder="Description"
        className="w-full border p-3 rounded-lg"
        onChange={handleChange}
      />

      <button
  className="
  bg-blue-600
  hover:bg-blue-700
  text-white
  px-6
  py-3
  rounded-lg
  transition hover: cursor-pointer
  "
>
  Create Ticket
</button>
    </form>
  );
};

export default TicketForm;
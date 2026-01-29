import React from "react";

const Paystack = ({ email, amount }) => {
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  const payWithPaystack = () => {
    const handler = window.PaystackPop.setup({
      key: publicKey,
      email,
      amount: amount * 100,
      currency: "GHS",
      callback: (response) => {
        console.log("Payment successful:", response);
        alert("Payment successful! Ref: " + response.reference);
      },
      onClose: () => alert("Payment window closed."),
    });

    handler.openIframe();
  };

  return (
    <button
      onClick={payWithPaystack}
      className="bg-green-600 text-white px-6 py-3 rounded"
    >
      Pay Now
    </button>
  );
};

export default Paystack;

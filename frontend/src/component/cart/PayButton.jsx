import React from "react";

export default function PayButton({ email, amount }) {
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  const payWithPaystack = () => {
    if (!window.PaystackPop) {
      alert("Paystack SDK not loaded");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email,
      amount: amount * 100, // Paystack uses kobo/pesewas
      currency: "GHS",
      ref: "REF_" + Math.floor(Math.random() * 1000000000),

      callback: function (response) {
        console.log("Payment success:", response);
        alert("Payment successful! Ref: " + response.reference);
      },

      onClose: function () {
        alert("Payment cancelled");
      },
    });

    handler.openIframe();
  };

  return (
    <button
      onClick={payWithPaystack}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium"
    >
      Pay Now
    </button>
  );
}

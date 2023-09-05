import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { axiosAuthInstance } from "../../axios";

export const StripePaymentForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const stripe = useStripe();
    const elements = useElements();
  
    const createSubscription = async () => {
      try {
        const paymentMethod = await stripe.createPaymentMethod({
          card: elements.getElement("card"),
          type: "card",
        });
        console.log(paymentMethod);
        const response = await axiosAuthInstance({
            url: "/agent/subscribe-stripe",
            method: "post",
            data: {
                name,
                email,
                paymentMethod: paymentMethod.paymentMethod.id,
            }
        })
        console.log(response)
        // if (!response.ok) return alert("Payment unsuccessful!");
        // const data = await response.json();
        // const confirm = await stripe.confirmCardPayment(data.clientSecret);
        // if (confirm.error) return alert("Payment unsuccessful!");
        // alert("Payment Successful! Subscription active.");
      } catch (err) {
        console.error(err);
        alert("Payment failed! " + err.message);
      }
    };

  return (
    <div>
      Name:{" "}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Email:{" "}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <CardElement />
      <br />
      <button onClick={createSubscription}>Subscribe stripe</button>
    </div>
  );
};

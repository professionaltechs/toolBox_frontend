// import React, { useState } from "react";
// import { Header2, SideBarThree } from "../components";
// import { Header1 } from "../components/Header1";
// import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { StripePaymentForm } from "../components/subscription/StripePaymentForm";

// const stripePromise = loadStripe('pk_test_51MEcpGLCNC3Hn0os3sMyk8r6DwVbjjBpA1wUqkecu2zJDTYs3aco15TwiyE7aP2hbxKavfSxWpRLWgZN7vUp8iwW00YdMKBvU3');

// export const Subscription = () => {

//   return (
//     <div>
//       <SideBarThree />
//       <Header1 />

//       <div
//         style={{
//           width: "calc(100% - 128px)",
//           height: "90vh",
//           marginLeft: "128px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Elements stripe={stripePromise}>
//           <StripePaymentForm/>
//         </Elements>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { axiosAuthInstance } from "../axios";
import { SideBarThree } from "../components";
import { Header1 } from "../components/Header1";
// import './App.css';

const ProductDisplay = ({price, handleSubmit, lookupKey}) => (
  <section>
    <div className="product">
      {/* <Logo /> */}
      <div className="description">
        <h3>Starter plan</h3>
        <h5>${price} / month</h5>
      </div>
    </div>
    <form onSubmit={handleSubmit}>
      {/* Add a hidden field with the lookup_key */}
      <input type="hidden" name="lookup_key" value={lookupKey} />
      <button id="checkout-and-portal-button" type="submit">
        Checkout
      </button>
    </form>
  </section>
);
// import React, { useState } from 'react';
// import axios from 'axios';

// function StripeCheckoutForm() {
//   const [lookupKey] = useState('price_1NnoVZLCNC3Hn0osGMYHr3NP'); // Set the lookup_key here

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/agent/subscripe-stripe-checkout', {
//         lookup_key: lookupKey,
//       });

//       // Handle the response as needed
//       console.log('Stripe Checkout response:', response.data);
//     } catch (error) {
//       // Handle any errors
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Add a hidden field with the lookup_key */}
//       <input type="hidden" name="lookup_key" value={'price_1NnoVZLCNC3Hn0osGMYHr3NP'} />
//       <button id="checkout-and-portal-button" type="submit">
//         Checkout
//       </button>
//     </form>
//   );
// }

// export default StripeCheckoutForm;


const SuccessDisplay = ({ sessionId }) => {
  return (
    <section>
      <div className="product Box-root">
        {/* <Logo /> */}
        <div className="description Box-root">
          <h3>Subscription to starter plan successful!</h3>
        </div>
      </div>
      <form action="http://localhost:5000/api/agent/create-portal-session" method="POST">
        <input
          type="hidden"
          id="session-id"
          name="session_id"
          value={sessionId}
        />
        <button id="checkout-and-portal-button" type="submit">
          Manage your billing information
        </button>
      </form>
    </section>
  );
};

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export const Subscription = () => {
  let [message, setMessage] = useState("");
  let [success, setSuccess] = useState(false);
  let [sessionId, setSessionId] = useState("");

  const [lookup_key] = useState('price_1NnoVZLCNC3Hn0osGMYHr3NP')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosAuthInstance({
        method: 'post',
        url: '/agent/subscripe-stripe-checkout',
        data: {
          priceID: lookup_key,
        }
      });

      // Handle the response as needed
      console.log('Stripe Checkout response:', response.data);
    } catch (error) {
      // Handle any errors
      console.error('Error submitting form:', error);
    }
  };

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setSuccess(true);
      setSessionId(query.get("session_id"));
    }

    if (query.get("canceled")) {
      setSuccess(false);
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, [sessionId]);

  return (
    <div>
      <SideBarThree />
      <Header1 />
      <div
        style={{
          width: "calc(100% - 128px)",
          height: "90vh",
          marginLeft: "128px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!success && message === "" ? (
          <>
            <ProductDisplay price='20.00' handleSubmit={handleSubmit} lookup_key={lookup_key}/>
            <ProductDisplay price='30.00'/>
          </>
        ) : success && sessionId !== "" ? (
          <SuccessDisplay sessionId={sessionId} />
        ) : (
          <Message message={message} />
        )}
      </div>
    </div>
  );
};

// const Logo = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//     width="14px"
//     height="16px"
//     viewBox="0 0 14 16"
//     version="1.1"
//   >
//     <defs />
//     <g id="Flow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//       <g
//         id="0-Default"
//         transform="translate(-121.000000, -40.000000)"
//         fill="#E184DF"
//       >
//         <path
//           d="M127,50 L126,50 C123.238576,50 121,47.7614237 121,45 C121,42.2385763 123.238576,40 126,40 L135,40 L135,56 L133,56 L133,42 L129,42 L129,56 L127,56 L127,50 Z M127,48 L127,42 L126,42 C124.343146,42 123,43.3431458 123,45 C123,46.6568542 124.343146,48 126,48 L127,48 Z"
//           id="Pilcrow"
//         />
//       </g>
//     </g>
//   </svg>
// );

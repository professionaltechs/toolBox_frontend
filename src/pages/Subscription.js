import React, { useState } from "react";
import { Header2, SideBarThree } from "../components";
import { Header1 } from "../components/Header1";
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { StripePaymentForm } from "../components/subscription/StripePaymentForm";

const stripePromise = loadStripe('pk_test_51MEcpGLCNC3Hn0os3sMyk8r6DwVbjjBpA1wUqkecu2zJDTYs3aco15TwiyE7aP2hbxKavfSxWpRLWgZN7vUp8iwW00YdMKBvU3');

export const Subscription = () => {


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
        <Elements stripe={stripePromise}>
          <StripePaymentForm/>
        </Elements>
      </div>
    </div>
  );
};

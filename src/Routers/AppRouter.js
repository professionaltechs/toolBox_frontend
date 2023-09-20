import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Login, RepairTickets, Signup, SubDomainLogin, Subscription, LandingPage } from "../pages";
import { Protected } from "../components"
import { DomainContext } from "../contexts/DomainProvider";

export const AppRouter = () => {
    const { domain } = useContext(DomainContext);

  return (
    <Routes>
        {domain === '' && <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/subdomain-login" element={<SubDomainLogin />} />
        </>}
      {domain !== '' && <>
      <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/subdomain-login" element={<SubDomainLogin />} />
        <Route path="/login" element={<Login />} />
        <Route
            path="/dashboard"
            element={
            <Protected>
                <Dashboard />
            </Protected>
            }
        /> 
        <Route
            path="/repair-tickets"
            element={
            <Protected>
                <RepairTickets />
            </Protected>
            }
        />
        <Route
            path="/subscription"
            element={
            <Protected>
                <Subscription />
            </Protected>
            }
        />
      </>}
    </Routes>
  );
};

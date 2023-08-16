import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Login, RepairTickets, Signup, SubDomainLogin } from "../pages";
import { Protected } from "../components"
import { DomainContext } from "../contexts/DomainProvider";

export const AppRouter = () => {
    const { domain, setDomain } = useContext(DomainContext);

    console.log(window.location.host.split(".")[0])

    useEffect(() => {
        const dom = window.location.host.split(".")[0] === 'localhost:3000' ? '' : window.location.host.split(".")[0]
        setDomain(dom)
    }, [])

  return (
    <Routes>
        {domain === '' && <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/subdomain-login" element={<SubDomainLogin />} />
        </>}
      {domain !== '' && <>
        <Route path="/" element={<Login />} />
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
      </>}
    </Routes>
  );
};

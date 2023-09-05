import { createContext, useEffect, useState } from "react";

export const DomainContext = createContext("")

export const DomainProvider = ({children}) => {
    const [domain,setDomain] = useState("")

    console.log(window.location.host.split(".")[0])

    useEffect(() => {
        const dom = window.location.host.split(".")[0] === ('localhost:3000' || 'localhost:3001') ? '' : window.location.host.split(".")[0]
        setDomain(dom)
        console.log(window.location.host.split(".")[0] === ('localhost:3000' || 'localhost:3001'))
    }, [])

    console.log(domain)
    return(
        <DomainContext.Provider value={{domain, setDomain}}>
            {children}
        </DomainContext.Provider>
    )
}
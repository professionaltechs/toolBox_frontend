import { createContext, useState } from "react";

export const DomainContext = createContext("")

export const DomainProvider = ({children}) => {
    const [domain,setDomain] = useState("")

    console.log(domain)
    return(
        <DomainContext.Provider value={{domain, setDomain}}>
            {children}
        </DomainContext.Provider>
    )
}
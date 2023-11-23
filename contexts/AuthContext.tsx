"use client"

import { setUserIdCookie } from "@root/services/AuthService";
import { ReactNode, createContext, useContext, useEffect } from "react";

const AuthContext = createContext<{userId: string}>({userId: ""})

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children, userId }: { children: ReactNode; userId: string }) => {
    useEffect(() => {
        (async () => {
            // set user id cookie if not set already
            await setUserIdCookie(userId);
            // populate user country
            await fetch("/api/auth", {method: "POST", body: JSON.stringify({userId})});
        })();
    }, []);

    return (
        <AuthContext.Provider value={{userId}}>
            {children}
        </AuthContext.Provider>
    )
}
import React, { useState, useContext, createContext } from "react";

import {
    useHistory
} from "react-router-dom";

// 
// 
const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = cb => {
        return fakeAuth.signin(() => {
        setUser("user");
        cb();
        });
    };

    const signout = cb => {
        return fakeAuth.signout(() => {
        setUser(null);
        cb();
        });
    };

    return {
        user,
        signin,
        signout
    };
}
  
export function AuthButton() {
    let history = useHistory();
    let auth = useAuth();

    return auth.user ? (
        <div
            className="nav-link"
            onClick={() => {
            auth.signout(() => history.push("/"));
            }}
        >
            {/* 
                TODO: User ICON
                
            */}
            {auth.user}
        </div>
    ) : (
        <div>Sign In</div>
    );
}
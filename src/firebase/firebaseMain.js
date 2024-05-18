import React from "react";
import { auth } from "./firebase";
import {useAuthState} from 'react-firebase-hooks/auth'
import { Home } from "../Home/home";
import { Login } from "../login/login";
import { type } from "@testing-library/user-event/dist/type";


function MainFirebase(){

    const [user]=useAuthState(auth)
    
    return user ? <Home /> : <Login />
}
export { MainFirebase }
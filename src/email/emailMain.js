import React from "react";
import { auth } from "../firebase/firebase"
import {useAuthState} from 'react-firebase-hooks/auth'
import { Home } from "../Home/home";
import { Email } from "./emailLogin";

function Mainemail() {

    const [user]=useAuthState(auth)

    return user ? <Home /> : <Email/>
}
export { Mainemail }
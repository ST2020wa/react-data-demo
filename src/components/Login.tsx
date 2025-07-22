import React from "react";

import { BaseInput } from "./BaseInput";
const Login = ()=>{
    return (
        <div>
            <BaseInput title="Username" />
            <BaseInput title="Password" inputType="password"/>
        </div>
    )
}
  
export default Login;
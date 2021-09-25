
import React from "react";
import { Redirect, Route } from "react-router";

const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const payload = JSON.parse(jsonPayload);
    const {Account,Role,Username} = payload.payload;

    localStorage.setItem('Account',Account);
    localStorage.setItem('Role',Role);
    localStorage.setItem('Username',Username);

    return payload.exp 
};

const AuthRoute = propsWithType => {
    let isLogin = false;

    const { type, role, ...props } = propsWithType;

    if(localStorage.getItem('token')) {
        const token = localStorage.getItem('token');
        const expireTime = parseJwt(token);
        const now = new Date()
        if(now > expireTime*1000) {
            localStorage.clear();
        } else {
            isLogin = true;
        }
    }

    if (type==="guest" && isLogin) {
        return <Redirect to="/index" />;
    } else if (type==="private" && !isLogin) {
        return <Redirect to="/" />;
    } else if (role==="admin" && localStorage.getItem('Role')!=='admin') {
        return <Redirect to="/index" />;
    }

    return <Route {...props} />;
};

export default AuthRoute;
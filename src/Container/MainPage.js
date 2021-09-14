
import React from 'react';
import Header from "../Component/Header/Header";
import Index from '../Component/Index/Index';

const MainPage = () => {
    return (
        <>
            {/* mainpage登入成功
            {`${payload.payload.Account} ${payload.payload.Role} ${payload.payload.Username}`} */}
            <Header />
            <Index />
        </>
    );
}

export default MainPage;
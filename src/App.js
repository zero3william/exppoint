import LoginPage from "./Container/LoginPage";
import MainPage from "./Container/MainPage";

// import StatisticsPage from "./Container/StatisticsPage";
// import ManagementPage from "./Container/ManagementPage";


import Header from "./Component/Header/Header";
import Scan from './Component/Scan/Scan';
import Scanleave from './Component/Scanleave/Scanleave';
import Controls from './Component/Controls/Controls';
import ListNsearch from './Component/ListNsearch/ListNsearch';
import List from './Component/List/List';
import Statistics from './Component/Statistics/Statistics';
import Managment from './Component/Managment/Managment';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import AuthRoute from "./AuthRoute.js";

const App = () => {
    return (
        <Router>
            <Switch>
                {/* 首頁 */}
                <AuthRoute path="/index" type="private">
                    <MainPage />
                </AuthRoute>
                {/* 品保查檢 */}
                <AuthRoute path="/scan" type="private">
                    <Header />
                    <Scan />
                </AuthRoute>
                {/* 品保查檢結果 */}
                <AuthRoute path="/scanleave" type="private">
                    <Header />
                    <Scanleave />
                </AuthRoute>
                {/* 品保紀錄 */}
                <AuthRoute path="/listNsearch" type="private">
                    <Header />
                    <ListNsearch />
                </AuthRoute>
                {/* 品保紀錄 */}
                <AuthRoute path="/list" type="private">
                    <Header />
                    <List/>
                </AuthRoute>
                {/* 統計圖表 */}
                <AuthRoute path="/statistics" type="private">
                    <Header />
                    <Statistics />
                </AuthRoute>
                {/* 人員管理 */}
                <AuthRoute path="/managment" type="private" role="admin">
                    <Header />
                    <Managment />
                </AuthRoute>
                {/* 提醒管理 */}
                <AuthRoute path="/controls" type="private" role="admin">
                    <Header />
                    <Controls />
                </AuthRoute>
                {/* 登入 */}
                <AuthRoute path="/" type="guest">
                    <LoginPage />
                </AuthRoute>
            </Switch>
        </Router>
    );
}

export default App;

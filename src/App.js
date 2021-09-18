import LoginPage from "./Container/LoginPage";
import MainPage from "./Container/MainPage";
// import StatisticsPage from "./Container/StatisticsPage";
// import ManagementPage from "./Container/ManagementPage";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AuthRoute from "./AuthRoute.js";

const App = () => {
    return (
        <Router>
            <Switch>
                <AuthRoute path="/index" type="private">
                    <MainPage />
                </AuthRoute>

                <AuthRoute path="/home" type="private">
                    <MainPage />
                </AuthRoute>

                <AuthRoute path="/Statistics" type="private">
                    <MainPage />
                </AuthRoute>

                <AuthRoute path="/" type="guest">
                    <LoginPage />
                </AuthRoute>
            </Switch>
        </Router>
    );
}

export default App;

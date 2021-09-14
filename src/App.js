import LoginPage from "./Container/LoginPage";
import MainPage from "./Container/MainPage";
import Header from "./Component/Header/Header";
import Index from "./Component/Index/Index";
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
                    <Header />
                    <Index />
                </AuthRoute>

                <AuthRoute path="/home" type="private">
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

import React from "react";
import "./MainPage.scss";
import {Link} from "react-router-dom";

interface MainPageProps {

}

interface MainPageState {

}

class MainPage extends React.Component<MainPageProps, MainPageState> {

    render(): React.ReactNode {
        return (
            <div className="main-page">
                <h1 className="main-page__title">I am Root</h1>
                <Link to={"/privacy"} className="main-page__privacy">
                    Privacy Policy
                </Link>
            </div>
        )
    }
}

export default MainPage;

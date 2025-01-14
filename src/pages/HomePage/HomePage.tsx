import Headers from "../../components/headers";
import BaseWidget from "../../components/widgets/BaseWidget";
import "./HomePage.scss";
import React from "react";

function HomePage() {
    return (
        <>
            <Headers title="Мои деньги" />
            <BaseWidget />
        </>
    );
}

export default HomePage;

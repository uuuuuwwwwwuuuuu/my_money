import Headers from "../../components/headers";
import PaymentWidget from "../../components/widgets/PaymentWidget/PaymentWidget";
import ProgressWidget from "../../components/widgets/ProgressWidget/ProgressWidget";
import History from "../../components/widgets/History/History";
import "./HomePage.scss";

function HomePage() {
    return (
        <div className="app">
            <Headers title="Мои деньги" />
            <div className="top_widgets_wrapper">
                <ProgressWidget />
                <div className="right_top_widgets">
                    <PaymentWidget textColor='error'>Прогнозируемые расходы</PaymentWidget>
                    <PaymentWidget textColor='accent'>Прогнозируемый доход</PaymentWidget>
                </div>
            </div>
            <div className="bottom_widgets_wrapper">
                <History/>
            </div>
        </div>
    );
}

export default HomePage;

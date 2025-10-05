import Headers from "../../components/headers";
import PaymentWidget from "../../components/widgets/PaymentWidget/PaymantWidget";
import ProgressWidget from "../../components/widgets/ProgressWidget/ProgressWidget";
import "./HomePage.scss";

function HomePage() {
    return (
        <>
            <Headers title="Мои деньги" />
            <div className="top_widgets_wrapper">
                <ProgressWidget />
                <div className="right_top_widgets">
                    <PaymentWidget textColor='error'>Прогнозируемые расходы</PaymentWidget>
                    <PaymentWidget textColor='accent'>Прогнозируемый доход</PaymentWidget>
                </div>
            </div>
        </>
    );
}

export default HomePage;

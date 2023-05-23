import ChatTeam from "./components/ChatTeam";
import ConsumerAnalytics from "./components/ConsumerAnalytics";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImproveWork from "./components/ImproveWork";
import Join from "./components/Join";
import ManageCreator from "./components/ManageCreator";

export default function page(): JSX.Element {
    return (
        <>
            <div className="w-full max-w-[1100px] flex-col">
                <Header />
                <Hero />
            </div>
            <ChatTeam />
            {/* <ManageCreator /> */}
            <ConsumerAnalytics />
            {/* <ImproveWork /> */}
            <Join />
            <Footer />
        </>
    );
}

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
            <div className="min-h-screen w-full max-w-[1100px] flex-col">
                <Header />
                <Hero />
            </div>
            <div className="flex w-full flex-col mt-12">
                <div className="sm:bottom-58 relative bottom-32 flex w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-[transparent] to-black px-6 sm:px-0">
                    <div className="flex max-w-[1100px] flex-col items-center justify-center">
                        <img
                            alt="Logo-with-stats"
                            src="/images/landing_stats.png"
                        />
                        <div className="flex flex-col items-center gap-2 rounded-md bg-gradient-to-t from-[#0C0B18] to-[transparent] py-4">
                            <h3 className="text-lg font-bold text-white sm:text-xl">
                                Work Efficient
                            </h3>
                            <p className="w-full text-center text-sm font-medium text-[#767C8A] sm:w-3/4 sm:text-lg">
                                We let you focus your time on managing your
                                clients, while our software does the
                                heavy-lifting. Dozens of Hours earned back every
                                week, while scaling your revenue.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ChatTeam />
            <ManageCreator />
            <ConsumerAnalytics />
            <ImproveWork />
            <Join />
            <Footer />
        </>
    );
}

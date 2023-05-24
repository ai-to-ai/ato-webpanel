import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function page(): JSX.Element {
    return (
        <>
            <div className="w-[90%] flex-col">
                <Header />
                <Hero />
            </div>
            <Footer />
        </>
    );
}

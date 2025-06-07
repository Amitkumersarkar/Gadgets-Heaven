import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const MainLayout = () => {

    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <Hero></Hero>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
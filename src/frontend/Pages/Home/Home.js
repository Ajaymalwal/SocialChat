import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import { useEffect } from "react";
import { autho } from "../../../backend/firebase";


function Home(){
    const navigate = useNavigate();
    useEffect(()=>{
        if(autho.currentUser){
            navigate("/Dashboard")
        }
    })


    return (
        <>
        <Header/>
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
</>
    )
}
export default Home;
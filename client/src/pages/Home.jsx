// import React from 'react'
import AboutCard from "../Components/AboutCard"
import ContactSection from "../Components/ContactSection"
import HomeCard from "../Components/HomeCard"
import PortfolioCard from "../Components/PortfolioCard"
import ProjectSection from "../Components/ProjectSection"
import SkiilsSection from "../Components/SkiilsSection"

const Home = () => {
    return (        
        
        <>
            <div className="w-[80vw] mx-auto">
                <PortfolioCard />
                <HomeCard />
                <AboutCard />
                <SkiilsSection />
                <ProjectSection />
                <ContactSection />
            </div>
        </>
    )
}

export default Home
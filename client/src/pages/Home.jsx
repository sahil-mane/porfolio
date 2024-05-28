// import React from 'react'
import AboutCard from "../Components/AboutCard"
import HomeCard from "../Components/HomeCard"
import PortfolioCard from "../Components/PortfolioCard"
import SkiilsSection from "../Components/SkiilsSection"

const Home = () => {
    return (        
        
        <>
            <div className="w-[80vw] mx-auto">
                <PortfolioCard />
                <HomeCard />
                <AboutCard />
                <SkiilsSection />
            </div>
        </>
    )
}

export default Home
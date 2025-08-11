import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import LogoMarquee from './LogoMarquee'
import ChooseUs from '../pages/ChooseUs'
import IntegrationSlider from '../pages/IntegrationSlider'
import YourStore from '../pages/YourStore'
import Handle from '../pages/Handle'

export default function Main() {
  return (
      <div>
          
      <Header></Header>
      
      <div className="container">
        <div className="row main-row1">

          <div className="col-lg-7 col-md-8 col-12">

            <h1>Let’s Build a Shopify Store That Actually Sells</h1>

          </div>
          <div className="col-lg-5 col-md-4 col-12">
            <p>We get it. You don’t just want “a website.” You want sales. You want orders coming in while you sleep. At NexAdvent, we build Shopify stores that make that happen - fast, beautiful, and built to convert.</p>
            <button>Book a Free Call</button>
          </div>

        </div>

        <div className="row">
            <div className="box1">
              <HeroSection></HeroSection>
            </div>

        </div>

        <div className="row">
            <LogoMarquee></LogoMarquee>
        </div>

        <div className="row">
          <ChooseUs></ChooseUs>
        </div>

        <div className="row">
          <YourStore></YourStore>
        </div>

        <div className="row">
          <Handle></Handle>
        </div>

        <div className="row">
          <IntegrationSlider></IntegrationSlider>
        </div>

      </div>

    </div>
  )
}

import React from 'react'
import './Page.css'

export default function ChooseUs() {
  return (
      <div>
          
          <div className="container choose-us">
              <h3 style={{marginBottom:'20px'}}>Why Choose Us</h3>
              <p style={{padding:'0 300px'}}>We Don’t Just Build Stores, We Build Sales Machines You could hire anyone to set up a Shopify site. But will it actually make sales? Here’s what we do differently:</p>

              <div className="row choose-row">
                  
                  <div className="col-lg-4 col-md-3 col-12">
                      
                      <div className='choose-col'>
                          <h4>We design for conversions</h4>
                      <p>Every button, every image, every word is there to get you more orders</p>
                      <img src="/images/choose1.svg" alt="" className='img-fluid'/>
                      </div>

                  </div>
                  <div className="col-lg-4 col-md-3 col-12">
                      <div className='choose-col'>
                          <h4>We set you up for marketing </h4>
                      <p>Facebook Pixel, Google Analytics, email flows, upsells, all ready from day one</p>
                      <img src="/images/choose2.svg" alt="" className='img-fluid'/>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3 col-12">
                      <div className='choose-col'>
                          <h4>We think like business owners</h4>
                      <p>Because a pretty store means nothing if it doesn’t bring in revenue</p>
                      <img src="/images/choose3.svg" alt="" className='img-fluid'/>
                    </div>
                  </div>
              </div>

                <div className="row choose-row">
                
                  <div className="col-lg-6 col-md-6 col-12">      
                      <div className='choose-col'>
                          <h4>Marketing-Ready from Day One </h4>
                      <p>Tracking, analytics, and sales boosters built in</p>
                      <img src="/images/choose4.svg" alt="" className='img-fluid'/>
                      </div>

                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                      <div className='choose-col'>
                          <h4>Revenue Driven Approach </h4>
                      <p>We develop with revenue in mind, not just looks.</p>
                      <img src="/images/choose5.svg" alt="" className='img-fluid'/>
                    </div>
                  </div>
              </div>

          </div>

    </div>
  )
}

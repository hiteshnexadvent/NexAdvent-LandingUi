import React from 'react'
import './Page.css'

export default function YourStore() {
  return (
      <div>
          
          <div className="container your-store">
              <h3 style={{padding:'0 300px'}}>Your Store Should Be Working Harder Than You With NexAdvent, your Shopify store will</h3>

              <div className="row store">
                  
                  <div className="col-lg-4 col-md-3 col-12">
                      
                      <div className='store-col'>
                        <i class="fas fa-cart-arrow-down" style={{ fontSize:'40px' ,color:'#2c7be5'}}></i>
                        <h5>With NexAdvent, your Shopify store will</h5>
                        <p>Win back abandoned carts automatically</p>
                      
                      </div>

                  </div>
                  <div className="col-lg-4 col-md-3 col-12">
                      <div className='store-col'>
                        <i class="fas fa-cart-plus" style={{ fontSize:'40px' ,color:'#2c7be5'}}></i>
                        <h5>With NexAdvent, your Shopify store will</h5>
                        <p>Increase order value with upsells and cross-sells</p>
                      
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3 col-12">
                      <div className='store-col'>
                        <i className="fas fa-search-dollar" style={{ fontSize: "40px", color: "#2c7be5" }}></i>
                        <h5>With NexAdvent, your Shopify store will</h5>
                        <p>Attract buyers with SEO-friendly product pages</p>
                    </div>
                  </div>
              </div>

          </div>

    </div>
  )
}

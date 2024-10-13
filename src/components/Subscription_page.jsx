import React from 'react'
import Pricing_page from './Pricing_page'

function Subscription_page() {
  return (
    <div>
    <div>
    <p class="text-4xl text center font-extrabold text-gray-900 dark:text-white">Choose Plan</p>
    </div>
  <div className="flex  mt-10">
    <Pricing_page/>
    <Pricing_page/>
  </div>
  

  </div>
  )
}

export default Subscription_page
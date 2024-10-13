import React from 'react'
import Barchart from './Barchart'
import Linegraph from './Linegraph'
import Piechart from './Piechart'
import Tuberculosis_banner from './Tuberculosis_banner'

function Dasboard_page() {
  return (
    <div>
        <Tuberculosis_banner/>
        <br></br>
        <div className="flex">
        <div className="w-3/5 mr-20">
             <Barchart/>
            
        </div>

        <div>
        <Piechart/>
        </div>
        </div>
        
        <Linegraph/>
    </div>
  )
}

export default Dasboard_page
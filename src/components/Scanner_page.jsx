import React from 'react'
import Classified_img from './Classified_img'
import Drag_drop from './Drag_drop'

function Scanner_page() {
  return (
      <>

<p class="text-2xl font-extrabold text-gray-900 dark:text-white">scroll and click on the images for demo, Please wait while the model is loading..</p>
             <iframe
              src="https://dagmawi101-tuberculosis-classification.hf.space"
              frameborder="0"
              width="850"
              height="450"
                        ></iframe>



      {/* <div>
      <p class="text-4xl font-extrabold text-gray-900 dark:text-white">Lung Scanner</p>
      </div>
    <div className="flex  mt-10">
        
        <Drag_drop/>
        <Classified_img/>
    </div>
    <div className="inline-flex">
    <button class="inline-flex items-center px-7 py-2 mt-2 ml-14 mltext-sm font-medium text-black hover:text-white bg-emerald-400 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-right ml-auto">
 Scan Image

</button>
<button class="inline-flex items-center px-4 py-2 mt-2 ml-10 mltext-sm font-medium text-white hover:text-black bg-black rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-right ml-auto">
 Cancel Upload
</button>
</div> */}
    </>
  )
}

export default Scanner_page
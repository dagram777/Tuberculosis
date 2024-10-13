import React from 'react'

function Add_patient_form() {
  return (
   <>
   <div class="max-w-sm mx-10 w-70 border rounded p-7">
<h2 className="font-semibold leading-loose text-gray-900">ADD-PATIENT</h2>
<br></br>
<form >
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient Name</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required></input>
  </div>

  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Age" required></input>
  </div>
   
   <div>
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option>None</option>
    <option>Male</option>
    <option>Female</option>
  </select>
  </div>

  <div>
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

    <option>None</option>
    <option>Afar</option>
    <option>Amhara</option>
    <option>Addis Ababa</option>
    <option>Oromiya</option>
    <option>Tigray</option>
    <option>SNNPR</option>
    <option>Somalia</option>
    <option>Harar</option>
    <option>Jijiga</option>
    <option>Diredwa</option>
  </select>
  </div>
  <br></br>
  <div>
  <button type="submit" class="text-white bg-black hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-9 py-2.5 mr-8 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</button>
  <button type="submit" class="text-white bg-emerald-400 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-9 py-2.5 mr-8  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

  </div>
</form>
</div>
</> 
  )
}

export default Add_patient_form;


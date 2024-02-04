// src/App.js
import React from 'react';
import './styles.css'; 
import { Personal } from './personal';
import { Family } from './family';
import { Educational } from './educational';

function App() {
  return (
    <div className="w-screen flex justify-center items-center flex-col mb-20">
      <div className='w-full flex flex-col md:w-[1120px] border-2 border-black pl-2'>
      <p className='font-bold italic'>CS Form No.212</p>
      <p className='text-sm italic font-semibold m-0'>Revised 2017</p>
      <p className='w-full text-center font-bold text-4xl mb-4'>PERSONAL DATA SHEET</p>
      <p className='font-semibold italic text-sm'>WARNING: Any misrepresentation made in the Personal Data Sheet and the Work Experience Sheet shall cause the filling of administrative/criminal case/s against the person concerned</p>
      <p className='font-semibold italic text-sm'>READ THE ATTACHED GUIDE TO FILLING OUT THE PERSONAL DATA SHEET (PDS) BEFORE ACCOMPLISHING THE PDS FORM.</p>
      <div className='flex flex-nowrap gap-12'>
        <p className='flex flex-nowrap items-center gap-1 text-xs'>Print legibly. Tick appropriate boxes <div className='border-2 border-black w-[20px] h-[10px] p-2'> </div> ) and use separate sheet if necessary. Indicate N/A if not applicable. <strong>DO NOT ABBREVIATE.</strong></p>
        <div className='border-2 border-black border-b-0 flex justify-between items-center flex-1'>
          <p className='w-max bg-gray-300 border-black border-r-2'>1. CS ID No.</p>
          <p>(Do not fill up. For CSC use only)</p>
        </div>
      </div>
      </div>
      <Personal />
      <Family />
      <Educational />
    </div>
  );
}

export default App;

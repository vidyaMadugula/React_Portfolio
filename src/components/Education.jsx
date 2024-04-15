import React from 'react';

const EducationSection = () => {
  return (
    <div 
    name="education"
    className='bg-gradient-to-b from-black to-gray-800 text-white md:h-fit pb-20 w-full p-4 md:w-full sm:h-fit'>
    <h1 className='flex flex-wrap items-center justify-center text-4xl font-bold  pb-8 pt-24'>Education Details</h1>
    <div className="flex ">
      {/* First Block */}
    
      <div className="flex flex-col w-1/2 pr-4">
        <div className="flex items-center flex-1 mb-14">
          <div className='xl:ml-56 w-7/12 xl:text-xl md:ml-24  sm:ml-10 sm:text-sm lg:text-lg md:text-md sm:w-10/12 text-xs'>
            <p className="font-bold">Bachleor's</p>
            <p>SREENIDHI INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
            <p>📅2020-2024</p>
            
          </div>
        </div>
        <div className="flex items-center mb-4">         
          <div className='xl:ml-56 xl:text-xl md:ml-24  sm:ml-10 sm:text-sm lg:text-lg md:text-md sm:w-10/12 text-xs'>
            <p className="font-bold">School(10th)</p>
            <p>ZPHS GAMBHIRPOOR</p>
            <p>📅2018</p>
            
          </div>
        </div>
      </div>
      

      {/* Vertical Line */}
      <div className='text-black border border-slate-100  sm:w-40 md:w-40 w-28  h-0  mt-36'>
      <div className='text-black border border-slate-100  sm:w-40 md:w-40 w-28 h-0  mt-48 '></div></div>
      <div className=" text-black border border-slate-100  w-0 h-96 relative mt-10 mr-28">
      <div className="h-4 w-4 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-full absolute top-0 left-2/4 transform -translate-x-2 mt-24"></div>
      <div className="h-4 w-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full absolute top-0 left-2/4 transform -translate-x-2 mt-44">
      <div className='text-black border border-slate-100  sm:w-40 md:w-40 w-28 h-0  mt-2 ml-4'></div>
      </div>   
      <div className="h-4 w-4 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-full absolute top-0 left-2/4 transform -translate-x-2 mt-72">    
      </div>
      </div>
      
      
      {/* Second Block */}
      <div className="flex flex-col w-1/2 pl-4">
        <div className="flex items-center flex-1 mb-4">
          <div className='sm:ml-16 ml-3 mt-10 xl:text-xl md:ml-10 md:w-7/12 sm:text-sm text-xs lg:text-lg md:text-md sm:w-10/12 sm:mr-5 ' >
            <p className="font-bold">Intermediate(12th)</p>
            <p>SRI GAYATRI JUNIOR COLLEGE</p>
            <p>📅2018-2020</p>
            
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default EducationSection;



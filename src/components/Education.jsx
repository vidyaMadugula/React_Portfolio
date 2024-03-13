import React from 'react';

const EducationSection = () => {
  return (
    <div className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit h-fit pb-20'>
    <h1 className='flex items-center justify-center text-4xl font-bold  pb-8 pt-24'>Education Details</h1>
    <div className="flex ">
      {/* First Block */}
    
      <div className="flex flex-col w-1/2 pr-4">
        <div className="flex items-center flex-1 mb-14">
          <div className='ml-56 w-7/12 text-xl'>
            <p className="font-bold">Bachleor's</p>
            <p>SREENIDHI INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
            <p>📅2020-2024</p>
            
          </div>
        </div>
        <div className="flex items-center mb-4">         
          <div className='ml-56 text-xl'>
            <p className="font-bold">School(10th)</p>
            <p>ZPHS GAMBHIRPOOR</p>
            <p>📅2018</p>
            
          </div>
        </div>
      </div>
      

      {/* Vertical Line */}
      <div className='text-black border border-slate-100  w-40 h-0 relative mt-36'>
      <div className='text-black border border-slate-100  w-40 h-0 relative mt-48 '></div></div>
      <div className=" text-black border border-slate-100  w-0 h-96 relative mt-10 mr-28">
      <div className="h-4 w-4 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-full absolute top-0 left-2/4 transform -translate-x-2 mt-24"></div>
      <div className="h-4 w-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full absolute top-0 left-2/4 transform -translate-x-2 mt-44">
      <div className='text-black border border-slate-100  w-40 h-0 relative mt-2 ml-4'></div>
      </div>   
      <div className="h-4 w-4 bg-gradient-to-r from-cyan-500 to-blue-500  rounded-full absolute top-0 left-2/4 transform -translate-x-2 mt-72">    
      </div>
      </div>
      
      
      {/* Second Block */}
      <div className="flex flex-col w-1/2 pl-4">
        <div className="flex items-center flex-1 mb-4">
          <div className='ml-16 mt-10 text-xl'>
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


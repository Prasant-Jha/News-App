import React, { useState } from 'react';

const Navbar = ({ setCategory, setSearchCountry }) => {

  return (
    <div className='bg-black h-[70px] flex items-center border-b-[2px] border-white'>
      <nav className='text-white flex gap-[20vh] items-center'>
        <h3 className='text-[30px] ml-[10vh] w-[15vh] pl-[20px] bg-white text-black font-bold rounded-[5px]'>News</h3>
        <ul className='text-white flex items-center gap-[30px]'>
          <li className='text-[18px] hover:border-b-[3px] hover:border-white cursor-pointer' onClick={() => setCategory("Technology")}>Technology</li>
          <li className='text-[18px] hover:border-b-[3px] hover:border-white cursor-pointer' onClick={() => setCategory("Business")}>Business</li>
          <li className='text-[18px] hover:border-b-[3px] hover:border-white cursor-pointer' onClick={() => setCategory("Health")}>Health</li>
          <li className='text-[18px] hover:border-b-[3px] hover:border-white cursor-pointer' onClick={() => setCategory("Sports")}>Sports</li>
          <li className='text-[18px] hover:border-b-[3px] hover:border-white cursor-pointer' onClick={() => setCategory("Entertainment")}>Entertainment</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

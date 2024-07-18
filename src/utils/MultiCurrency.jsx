import React, { useEffect, useState } from 'react';

const MultiCurrency = () => {
  const [userCountry, setUserCountry] = useState('');
  const [price1, setPrice1] = useState(100);
  const [price2, setPrice2] = useState(200);
  const [userCurrency, setUserCurrency] = useState('USD');


  useEffect(() => {
    fetchUserCountry();
  }, []);

  const fetchUserCountry = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/'); // Replace with your IP geolocation API
      const data = await response.json();
      console.log('Fetched country data:', data); // Debugging
      setUserCountry(data.country_code);
      updatePrices(data.country_code);
    } catch (error) {
      console.error('Error fetching user country:', error);
      setUserCountry('US'); // Fallback to default
      updatePrices('US');
    }
  };

  const updatePrices = (country) => {
    const { price1, price2, currency } = getPricesForCountry(country);
    setUserCurrency(currency || 'USD');
    setPrice1(price1 || 180);
    setPrice2(price2 || 240);
  };

  const getPricesForCountry = (countryCode) => {
    // Define predefined prices and currencies
    const predefinedPrices = {
      US: { price1: 180, price2: 240, currency: 'USD' },
      IN: { price1: 15000, price2: 20000, currency: 'INR' },
      AE: { price1: 700, price2: 900, currency: 'AED' },
      SA: { price1: 700, price2: 900, currency: 'SAR' },
      KW: { price1: 60, price2: 75, currency: 'KWD' },
      BH: { price1: 70, price2: 90, currency: 'BHD' },
      OM: { price1: 70, price2: 90, currency: 'OMR' },
      QA: { price1: 700, price2: 900, currency: 'QAR' },
    };

    return predefinedPrices[countryCode];
  };
  const handleClick=()=>{
    window.open("https://wa.me/+918828096513",'_blank')

  }

  return (
    <>
      
    <div>
    <h1 className='text-center border-t-2 text-5xl font-mono mt-20 pt-10 '>Pricing</h1>
    <p className='text-center pt-2 font-thin '>Pay Less Get More</p>
       <div className=' mt-1 flex-col items-center flex justify-center md:flex-row md:space-x-12'>
      
        <div className='w-[220px] bg-white  text-black h-[310px] rounded-lg mt-10 md:w-[300px] md:h-[400px] shadow-slate-50 shadow-sm  duration-300 ease-in-out hover:scale-105 '>
            <h2 className='text-center font-semibold '>Standard</h2>

            <p className='text-center font-semibold text-3xl md:text-4xl border-b-2'> {price1} {userCurrency} </p>
            <ul className='flex flex-col pt-7 gap-3 items-center'>
                <li>Brand Website</li>
                <li>Web Hosting & Domain</li>
                <li>Admin panel</li>
                <li>Products</li>
                <li>And Many More....</li>
            </ul>
            <button className='border-2 border-black  md:ml-20 md:mt-5 md:p-3 ml-14 mt-2 rounded p-1 bg-gradient-to-r from-green-500 to-green-800 text-white' onClick={handleClick}>Get Started</button>

        </div>
        <div className='w-[220px] bg-white  text-black h-[310px] rounded-lg mt-10 md:w-[300px] md:h-[400px]  shadow-slate-50 shadow-sm duration-300  ease-in-out  hover:scale-105'>
            <h2 className='text-center font-semibold '>Premium</h2>

            <p className='text-center font-semibold text-3xl md:text-4xl border-b-2'> {price2} {userCurrency}</p>
            <ul className='flex flex-col pt-7 gap-3 items-center'>
                <li>Brand Website</li>
                <li>Web Hosting & Domain</li>
                <li>Admin panel</li>
                <li>unlimited Products</li>
                <li>And Many More....</li>
            </ul>
            <button className='border-2 border-black  md:ml-20 md:mt-5 md:p-3 ml-14 mt-2 rounded p-1 bg-gradient-to-r from-green-500 to-green-800 text-white' onClick={handleClick}>Get Started</button>

        </div>    
    </div>
    </div>
    </>
  );
};




export default MultiCurrency;

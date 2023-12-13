import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-center'>Quick Delivery App</h3>
        <div className='w-[1240px] mx-auto grid-cols-2'>
            <img className='w-[550px] mx-auto my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v167267822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'/>
            <div className='flex flex-col justify-center '>
                <p className=' text-[#00df9a] font-bold '>Get The App </p>
                <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Limited Convenience on-demand</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                 Aenean commodo ligula eget dolor. Aenean massa. 
                 Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis, ultricies nec, 
                  pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                  
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
              </div>
            </div> 
        </div>
  )
}

export default Delivery

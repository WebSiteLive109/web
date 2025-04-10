import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img className='mb-5 w-32' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>Ezixa Sport Wear Apparel is a leading manufacturer and retailer of high-quality, affordable sportswear and athletic apparel. Our mission is to provide comfortable, stylish, and functional clothing for athletes and fitness enthusiasts of all levels. Products: Men's Soccer Jersey. Men's All Sport Game Uniform. Men's Hooodies. Key Features:

- High-quality materials and construction
- Affordable prices
- Customization options
- Quick shipping and delivery

<p className='w-full md:w-2/3 text-gray-600'>Payment Options:

- Visa
- Mastercard
- PayPal
- EasyPaisa
</p>
 </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
            <li>ezixasportwearapparel.com</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
          <li>Contact@ezixasportwearapparel.com</li>
          <li>WhatsApp Number: -    +92 325 6161699</li>
          <li>Gmail Or Email: -  ezixasportwearappareL102@gmail.com</li>
          <li> Instagram: -  ezixasportswear   </li>
          <li> FaceBook: -  Ezixa Sport  </li>
           
            
          </ul>
        </div>

      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ ezixasportwearapparel.com - All Right Reserved. ®  </p>
      

<h4>

 <p className='py-5 text-sm text-center'>Web Development:    HAIDER ZAIN.
< p className='py-5 text-sm text-center'>Company Name:    IT-Expert-Company--( HzTools ).


</p>
</p>

</h4>

</div>


    </div>
  )
}

export default Footer

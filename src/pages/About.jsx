import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Ezixa Sport Wear Apparel, your premier destination for high-quality, affordable sportswear and athletic apparel. Our story began with a passion for fitness and a commitment to providing comfortable, stylish, and functional clothing for athletes and fitness enthusiasts of all levels.</p>
          <p>At Ezixa, we're dedicated to empowering your active lifestyle. 
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at ezixasportwearapparel.com is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond, and Our mission is to provide exceptional apparel, unparalleled customer service, and inspire individuals to reach their fitness goals.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Ezixa Sport Wear Apparel, we're committed to delivering high-quality products that meet our customers' expectations. Our quality assurance process ensures that every product meets our stringent standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>At Ezixa Sport Wear Apparel, we prioritize convenience to ensure a seamless shopping experience.Easy Shopping

1. User-friendly website and mobile app
2. Quick search and filtering options
3. Clear product information and images

Multiple Payment Options

1. Visa
2. Mastercard
3. PayPal
4. EasyPaisa

</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About

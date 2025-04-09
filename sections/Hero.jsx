import { Playfair } from 'next/font/google'
import { Onest } from 'next/font/google'
import { Roboto_Mono } from 'next/font/google'

const onest = Onest({ weight: ['700'], subsets: ['latin'] })
const playfair = Playfair({ subsets: ['latin'] })
const roboto = Roboto_Mono({ subsets: ['latin'] })

const Hero = () => {
  return (
    <section id='home' className='relative flex flex-col items-center bg justify-center h-screen bg-cover bg-center 
    bg-[url(https://images.pexels.com/photos/7663273/pexels-photo-7663273.jpeg)]'>
    <div className='absolute inset-0 bg-black/50'></div>  
    <div className='z-10 text-white'>
    <div className={`${onest.className} text-5xl md:text-8xl`}>
      khemvi<span className={`${playfair.className} p-3 uppercase text-5xl md:text-8xl`}>creative.</span>
      </div> 
      <div className={`${playfair.className} text-xl text-center md:pl-10 md:text-4xl uppercase text-4xl`}>
      web design & development
      </div>
      <div className={`${roboto.className} text-center pl-15 md:pl-10`}>
      Let’s bring your vision to life.
      </div></div>
    </section>
  )
}

export default Hero
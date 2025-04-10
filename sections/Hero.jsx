import { Playfair } from 'next/font/google'
import { Onest } from 'next/font/google'
import { Roboto_Mono } from 'next/font/google'

import Image from 'next/image'

const onest = Onest({ weight: ['700'], subsets: ['latin'] })
const playfair = Playfair({ subsets: ['latin'] })
const roboto = Roboto_Mono({ subsets: ['latin'] })

const Hero = () => {
  return (
    // inside your Hero component return
    <section id='home' className='relative flex flex-col items-center justify-center h-screen'>
      <div className='absolute inset-0 -z-10'>
        <Image
          src="/hero.webp"
          alt="Hero Background"
          fill
          priority // ensures it's loaded early
          quality={75} // optional: compress for faster loading
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className='absolute inset-0 bg-black/50' />
      </div>
    
      <div className='z-10 text-white text-center'>
        <div className='flex items-center justify-center flex-col md:flex-row'>
          <div className={`${onest.className} text-7xl md:text-8xl`}>khemvi</div>
          <div className={`${playfair.className} p-3 uppercase text-6xl md:text-8xl`}>creative.</div>
        </div>
        <div className={`${playfair.className} text-xl md:text-4xl uppercase`}>web design & development</div>
        <div className={`${roboto.className} md:pl-10`}>Let’s bring your vision to life.</div>
      </div>
    </section>
    
  )
}

export default Hero
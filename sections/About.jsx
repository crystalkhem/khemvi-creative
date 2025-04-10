import { Onest } from 'next/font/google'
import { Roboto_Mono } from 'next/font/google'
import Image from 'next/image'

const onest = Onest({ weight: ['700'], subsets: ['latin'] })
const roboto = Roboto_Mono({ weight: ['400'], subsets: ['latin'] })

const About = () => {
  return (
    <section id='about' className="relative min-h-screen flex items-center px-4 md:px-8">
      
      {/* Optimized Background Image */}
      <div className="absolute inset-0 -z-10 py-10">
        <Image
          src="/about.webp"
          alt="About background"
          fill
          priority
          quality={75}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto space-y-6 z-10">
        <h2 className={`${onest.className} text-6xl uppercase font-semibold`}>
          about khemvi creative.
        </h2>
        <div className={`shadow-lg flex flex-col gap-6 bg-white p-8 py-10 ${roboto.className}`}>
          <p>
            Based in Greensboro, North Carolina, Khemvi Creative offers full-service web design and development.
          </p>
          <p>
            We work with clients across industries to build professional, intuitive websites that combine aesthetics with functionality. Our approach is collaborative, detail-oriented, and grounded in clean code and clear communication.
          </p>
          <p>
            Whether you’re a small business, startup, or creative team, we help bring your vision online — with clarity, care, and technical precision.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

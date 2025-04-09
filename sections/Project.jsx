
import { Onest } from 'next/font/google'


const onest = Onest({ weight: ['700'], subsets: ['latin'] })


const Project = () => {
  return (
    <section className="py-12 px-6 bg-white">
    <h2 className={`${onest.className} py-4 pb-8 text-center text-6xl uppercase font-semibold`}>
          VIEW OUR PAST WORK.
        </h2>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src='/bellaciaoscroll.gif' 
          alt="Mobile view of café landing page" 
          className="w-64 md:w-80 rounded-2xl shadow-lg"
        />
      </div>
      
      <div className="w-full md:w-1/2">
      <h2 className="text-2xl md:text-3xl text-center font-semibold text-white bg-black p-3 mb-4">
       Mobile Reponsive & SEO Optimized
      </h2>
      <p className="mb-8 py-2 text-gray-600 text-base leading-relaxed">
        This mobile-friendly landing page was built for a charming café and crêperie, focused on presenting their story, location, hours, and offerings in a clear, inviting layout.
        Designed with responsiveness in mind, the page adapts seamlessly across devices—making it easy for customers to discover the café’s unique vibe and get the details they need, all in one elegant scroll.
      </p>

      
      <h2 className="p-3 text-2xl md:text-3xl text-center text-white bg-black  font-semibold text-gray-800 mb-4">
      Your Vision, Brought to Life
     </h2>
     <p className="py-2 text-gray-600 text-base leading-relaxed">
     We don’t just build websites—we create experiences. Every project begins with intention: understanding the story, the vibe, and the goals behind the brand. We design mobile-first, SEO-conscious sites that are both beautiful and functional—focused on clarity, speed, and emotional connection. Whether it’s a cozy café or a bold portfolio, we craft digital spaces that feel right from the very first scroll.


     </p>
      </div>
  
    </div>
  </section>
  
  )
}

export default Project
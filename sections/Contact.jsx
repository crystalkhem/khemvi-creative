
import { Onest } from 'next/font/google'


const onest = Onest({ weight: ['700'], subsets: ['latin'] })


const Contact = () => {


  return (
    <section id='contact' className=" py-16 px-6 md:px-12 bg-neutral-100">
      <div className="max-w-3xl mx-auto">
      <h2 className={`${onest.className} py-4 pb-1 text-center text-6xl uppercase font-semibold`}>
      CONTACT US.
    </h2>
    
        <p className="text-gray-900 text-lg text-center"><span className='font-bold'>Phone Number:</span> 336-259-7605</p>
        <p className="text-gray-900 text-lg text-center mb-5"><span className='font-bold'>Email: </span> khemvicreative@gmail.com</p>
        <p className="text-gray-700 text-lg text-center">For a free consultation, a custom quote, or if you just want to say hello—
        </p>
        <p className="text-gray-700 text-lg text-center mb-4">fill out the form below and we’ll get back to you shortly!</p>
        

        <form 
  action="https://formspree.io/f/xqapwpzw"
  method="POST" className=" flex flex-col space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="bg-white mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="bg-white mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-white mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>


          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
              Budget
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              className="bg-white mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>


          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="bg-white mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="bg-white mt-1 w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <button
            type="submit"
            className="items-center bg-yellow-500 text-black hover:bg-yellow-400 px-6 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

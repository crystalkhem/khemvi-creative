
import { Onest } from 'next/font/google'


const onest = Onest({ weight: ['700'], subsets: ['latin'] })


const Contact = () => {
  return (
    <section id='contact' className="py-16 px-6 md:px-12 bg-neutral-100">
      <div className="max-w-3xl mx-auto">
      <h2 className={`${onest.className} py-4 pb-8 text-center text-6xl uppercase font-semibold`}>
      CONTACT US.
    </h2>
        <p className="text-gray-600 mb-10">
          Let’s work together. If you’re ready to start a project or have a question, fill out the form below and we’ll be in touch within 1–2 business days.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="bg-white mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="bg-white mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="bg-white mt-1 w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

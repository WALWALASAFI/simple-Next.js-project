export default function Contact() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <nav className="flex justify-between p-6 bg-black bg-opacity-50">
        <h1 className="text-2xl font-bold">My Next.js App</h1>
        <div>
          <a href="/" className="text-pink-500 hover:underline mr-4">Home</a>
          <a href="/about" className="text-pink-500 hover:underline mr-4">About</a>
          <a href="/contact" className="text-blue-400 hover:underline">Contact</a>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center flex-1">
        <div className="flex flex-col md:flex-row justify-between max-w-4xl w-full">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center mb-4 md:mr-4 flex-1">
            <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
            <p className="text-lg mb-4">
              I would love to hear from you! Please fill out the form below.
            </p>
            
            <div className="border-2 border-gray-500 rounded-lg p-4 mt-6">
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-pink-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-pink-500"
                  required
                />
                <textarea
                  placeholder="Message"
                  className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-pink-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center flex-3">
            <h1 className="text-4xl font-bold mt-1">Info</h1>
            <h1 className="text-2xl mt-12">Walwala Safi</h1>
            <p className="text-1xl">Email: <a href="mailto:info@example.com" className="text-pink-500 hover:underline">walwalasafi99@gmail.com</a></p>
            <p className="text-1xl">Phone: <span className="text-pink-500">+93 747214751</span></p>
            <p className="text-1xl">Address: <span className="text-pink-500">Behind the Kardan Uni, Kabul, Afg</span></p>
          </div>
        </div>
      </div>

      <footer className="bg-black bg-opacity-50 p-2 text-center">
        <p className="text-sm text-gray-400">© 2024 Walwala Safi. All rights reserved.</p>
      </footer>
    </div>
  );
}

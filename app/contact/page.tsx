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
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md text-center mb-8"> {/* Added mb-8 for margin */}
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">
            We would love to hear from you! Please fill out the form below.
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

          <div className="mt-6">
            <h1 className="text-2xl font-bold">INfo</h1>
            <h1 className="text-blue">Walwala Safi</h1>
            <p className="text-lg">Email: <a href="mailto:info@example.com" className="text-pink-500 hover:underline">info@example.com</a></p>
            <p className="text-lg">Phone: <span className="text-pink-500">+1 234 567 890</span></p>
            <p className="text-lg">Address: <span className="text-pink-500">123 Main St, Anytown, USA</span></p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black bg-opacity-50 p-4 text-center">
        <p className="text-sm text-gray-400">© 2024 Walwala Safi. All rights reserved.</p>
      </footer>
    </div>
  );
}

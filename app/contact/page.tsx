export default function Contact() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <nav className="flex justify-between p-6 bg-black bg-opacity-50">
        <h1 className="text-2xl font-bold">My Next.js App</h1>
        <div>
          <a href="/about" className="text-blue-500 hover:underline mr-4">About</a>
          <a href="/contact" className="text-pink-400 hover:underline">Home</a>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center flex-1">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg mb-4">
            We would love to hear from you! If you have any questions, feedback, or inquiries,
            please reach out to us.
          </p>
          <p className="text-lg">
            Email: <a href="walwalasafi99@gmail.com" className="text-pink-500 hover:underline">info@example.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

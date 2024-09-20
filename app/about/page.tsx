export default function About() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <nav className="flex justify-between p-6 bg-black bg-opacity-50">
        <h1 className="text-2xl font-bold">My Next.js App</h1>
        <div>
          <a href="/about" className="text-pink-500 hover:underline mr-4">About</a>
          <a href="/contact" className="text-blue-400 hover:underline">Contact</a>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center flex-1">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-4">
            Next.js is an open-source React framework created by Vercel.
            It enables developers to build web applications with minimal configuration, 
            providing features such as server-side rendering and static site generation.
          </p>
          <p className="text-pink-400">
            Our application showcases the capabilities of Next.js, making web development easier and more efficient.
          </p>
        </div>
      </div>
    </div>
  );
}

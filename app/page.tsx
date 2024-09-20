export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <nav className="flex justify-between p-6 bg-black bg-opacity-50">
        <h1 className="text-2xl font-bold">My Next.js App</h1>
        <div>
          <a href="/" className="text-blue-500 hover:underline mr-4">Home</a>
          <a href="/about" className="text-pink-500 hover:underline mr-4">About</a>
          <a href="/contact" className="text-pink-400 hover:underline">Contact</a>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center flex-1">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome!</h2>
          <p className="text-lg mb-4">
            Next.js is a powerful React framework that enables you to build fast, user-friendly web applications with ease.
            It supports features like server-side rendering, static site generation, and API routes, making it a great choice for modern web development.
          </p>
          <p className="text-pink-400">
            This app demonstrates the capabilities of Next.js, including routing, components, and styling.
          </p>
        </div>
      </div>
    </div>
  );
}

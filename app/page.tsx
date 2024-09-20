export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sky-10">
      <h1 className="text-4xl font-bold">Welcome to My Next.js App</h1>
      <p className="mt-4 text-lg">Next.js is a powerful React framework that enables you to build fast, user-friendly web applications with ease. It supports features like server-side rendering, static site generation, and API routes, making it a great choice for modern web development.
      </p>
      <p className="mt-4 text-lg color-red">This app demonstrates the capabilities of Next.js, including routing, components, and styling.</p>
      <nav className="mt-8">
        <a href="/about" className="text-blue-500 hover:underline mr-4">About</a>
        <a href="/contact" className="text-blue-500 hover:underline">Contact</a>
      </nav>
    </div>
  );
}

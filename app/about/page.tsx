export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sky-10">
      <h1 className="text-3xl font-bold">About This Site</h1>
      <p className="mt-4 text-lg">This site is built using Next.js and Tailwind CSS.</p>
      <a href="/" className="mt-8 text-blue-500 hover:underline">Back to Home</a>
    </div>
  );
}

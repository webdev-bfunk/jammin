import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full px-2 md:max-w-5xl flex-col">
      {/* <h1 className="text-blue-600 font-bold text-3xl text-center m-10">Welcome to your music connection.</h1> */}
      <Hero />
      <div className="mt-20 ">
        <Posts />
        <About />
        <Contact />
      </div>
    </main>
  );
}

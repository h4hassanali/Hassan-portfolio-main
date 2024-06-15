import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  const [text, count] = useTypewriter({
     words: [
    "Hi, I'm Hassan Ali",
    "Full Stack Developer",
    "Database Administrator",
    "AI & Machine Learning Specialist",
  ],
    delaySpeed: 2000,
    loop: true,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative rounded-full h-32 w-32 mx-auto object-cover overflow-hidden">
        <Image className="object-cover" src="/profile.jpg" alt="HA" fill />
      </div>
      <div className="z-20">
        <h2 className=" tracking-[5px] text-sm uppercase text-gray-500 pb-2 sm:tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-base sm:text-3xl md:text-5xl lg:text-6xl font-semibold px-2 sm:px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="hero-button-class">About</button>
          </Link>
          <Link href="#experience">
            <button className="hero-button-class">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="hero-button-class">Skills </button>
          </Link>
          <Link href="#projects">
            <button className="hero-button-class">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

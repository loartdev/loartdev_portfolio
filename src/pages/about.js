import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import { Seo } from "../components/seo";

const AboutPage = () => {
  const DATA = useStaticQuery(graphql`
  {
    contentfulAuthor(name: {eq: "Simón López Jaramillo"}) {
      foto {
        resize(width: 900) {
          src
        }
      }
    }
  }
  `)
  return (
    <Layout>
      <HeroSection image={DATA.contentfulAuthor.foto.resize.src}></HeroSection>
      <AboutMeSection />
      <section className="p-12 lg:p-24 grid grid-cols-2">


        <div className="w-full col-span-2 py-4 md:px-4">
          <h2 className="font-bold text-2xl lg:text-3xl mb-5">LoArt & Dev - Your Solution for Web Development and Game Design</h2>
          <p className="text-justify">Are you seeking a web and game developer who can provide exceptional results? Look no further than LoArt & Dev! I am Simon Lopez Jaramillo, also known as LoArt & Dev, and I am here to help bring your vision to life.</p>
        </div>
        <div className="w-full col-span-2 md:col-span-1 py-4 md:px-4">
          <h3 className="font-bold text-xl mt-4 mb-2 lg:text-2xl">Who is LoArt & Dev?</h3>
          <p className="text-justify">I am a web and game developer passionate about design and creativity. I have been fascinated by technology and art from a young age, which led me to study programming and game design. Currently, I am studying game design at Cambrian College. I have honed my skills in various popular programming languages, platforms, and frameworks like ReactJS, GatsbyJS, NextJS, Angular, WordPress, and Moodle.</p>
        </div>
        <div className="w-full col-span-2 md:col-span-1 py-4 md:px-4">
          <h3 className="font-bold text-xl mt-4 mb-2 lg:text-2xl">What Can I Offer as a Web Developer?</h3>
          <p className="text-justify">At LoArt & Dev, I pride myself on providing cutting-edge web development services that exceed my client's expectations. Whether you need a custom web application, e-commerce, or entertainment website, I am here to help. I focus on delivering exceptional results that are intuitive, secure, and scalable.</p>
        </div>
        <div className="w-full col-span-2 md:col-span-1 py-4 md:px-4">
          <h3 className="font-bold text-xl mt-4 mb-2 lg:text-2xl">What Can I Offer as a Game Designer?</h3>
          <p className="text-justify">My true passion is game design, and at LoArt & Dev, I can offer you an unforgettable gaming experience. I have worked with various game engines and tools such as UE4 and 5, Unity, Game Maker, Cryengine, and MonoGame, and I have particular skills in creating attractive characters and immersive 3D environments. If you have an idea for an exciting game, I can help bring it to life.</p>
        </div>
        <div className="w-full col-span-2 md:col-span-1 py-4 md:px-4">
          <h3 className="font-bold text-xl mt-4 mb-2 lg:text-2xl">What Advantage Do I Have as a Bilingual Developer?</h3>
          <p className="text-justify">I am fluent in Spanish and English, allowing me to work with clients worldwide. Whether collaborating with international teams or communicating with clients from diverse cultures, I can build strong relationships and deliver exceptional results. Clear and effective communication is vital to success in any project, and at LoArt & Dev, I maintain open and transparent communication with my clients.</p>
        </div>
        <div className="w-full col-span-2 md:col-span-1 py-4 md:px-4">
          <h3 className="font-bold text-xl mt-4 mb-2 lg:text-2xl">Why Choose LoArt & Dev?</h3>
          <p className="text-justify">At LoArt & Dev, I always focus on delivering exceptional quality work that meets my client's needs. I am passionate about my work and constantly seek new challenges and opportunities to learn and grow. If you want to build a cutting-edge web application or an exciting new game, I am the developer you can trust to bring your vision to life.</p>
        </div>
        <div className="w-full col-span-2 md:col-span-1 py-4 md:px-4">
          <h3 className="font-bold text-xl mt-4 mb-2 lg:text-2xl">How Can You Contact LoArt & Dev?</h3>
          <p className="text-justify">If you want to work together, please contact me through my website or social media channels. I am excited to work with you and help take your vision to the next level. At LoArt & Dev, we can provide exceptional web development and game design services focusing on creativity, quality, and clear communication. If you are looking for a developer who can bring your vision to life, look no further than LoArt & Dev.</p>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage

const HeroSection = ({ image }) => (
  <section className="w-full max-w-screen overflow-hidden">
    <svg className="-z-50 h-0 w-0">
      <defs>
        <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
          <circle cx="150" cy="150" r="150" stroke="black" />
        </clipPath>
      </defs>
    </svg>
    <div class="bg-theme-bg text-white py-10 w-full">
      <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        <div class="p-8 mt-12 mb-6 md:my-0 ml-0 md:ml-12 lg:w-1/3 justify-center">
          <div class="h-2/3 flex flex-nowrap content-center slide-l">
            <svg width={600} height={600} class="inline-block brightness-[.8] h-[66vw] max-w-[66vw] sm:h-[60vh] sm:max-w-[40vw] lg:max-w-[400px] -rotate-[25deg]" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 300 300">

              <image width="100%" height="100%" preserveAspectRatio="xMidYMin slice" xlinkHref={image} clip-path="url(#user-space)" />
            </svg>
          </div>
        </div>
        <div class="flex flex-col w-full lg:w-2/3 justify-center items-start p-8 slide-r">
          <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-0">Simon Lopez J.
          </h2>
          <h1 class="text-3xl md:text-6xl text-theme-accent tracking-loose mb-2">LoArt <span className=" text-theme-text">& </span>Dev</h1>
          <p class="text-sm md:text-base text-gray-50 mb-4"></p>
        </div>
      </div>
    </div>
  </section>
)

const AboutMeSection = () => (
  <div class="flex flex-col justify-center items-center mb-8">
    <div class="relative flex flex-col items-center rounded-[20px] w-[89vw] max-w-[95%] mx-auto bg-theme-bg bg-clip-border shadow-3xl shadow-shadow-500">
      <div class="mt-2 mb-8 w-full">
        <h2 class="px-2 text-xl font-bold">
          About Me
        </h2>
        <p class="mt-2 px-2 text-base text-justify">
          Say hi to Simon Lopez Jaramillo, the web and game design ninja with unicorn-level creativity! He'll make your ideas come to life with graphics that are out of this world. He's also a digital art wizard who can bring characters to life. Get ready for a wild ride through Simon's magical mind!
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 w-full">
        <div class="flex flex-col items-start justify-center rounded-2xl bg-theme-navbg bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p class="text-sm text-theme-accent">Education</p>
          <p class="text-base font-medium">
            Cambrian University (Current)
          </p>
        </div>

        <div class="flex flex-col justify-center rounded-2xl bg-theme-navbg bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p class="text-sm text-theme-accent">Languages</p>
          <p class="text-base font-medium">
            English (C1), Spanish (Native)
          </p>
        </div>

        <div class="flex flex-col items-start justify-center rounded-2xl bg-theme-navbg bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p class="text-sm text-theme-accent">What do I do</p>
          <p class="text-base font-medium">
            Web and Game Design and development
          </p>
        </div>

        <div class="flex flex-col justify-center rounded-2xl bg-theme-navbg bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p class="text-sm text-theme-accent">Work History</p>
          <p class="text-base font-medium">
            <a href="https://www.sinfonia.co">Sinfonia.Co S.A.S.</a> (Current)
          </p>
        </div>

        <div class="flex flex-col items-start justify-center rounded-2xl bg-theme-navbg bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p class="text-sm text-theme-accent">Programing Languages</p>
          <p class="text-base font-medium">
            C#, C++, HTML, CSS, JS, TS, Python
          </p>
        </div>

        <div class="flex flex-col justify-center rounded-2xl bg-theme-navbg bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p class="text-sm text-theme-accent">Known engines </p>
          <p class="text-base font-medium">
            Unreal Engine 4 and 5, Unity, GameMaker, Cryengine, MonoGame
          </p>
        </div>
      </div>
    </div>
  </div>
)




////////////////
///   Head   ///
////////////////
export const Head = () => (
  <Seo title="About LoArt & Dev" />
)
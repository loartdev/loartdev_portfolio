import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";

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
          <div class="h-2/3 flex flex-nowrap content-center slide-r">
            <svg width={600} height={600} class="inline-block brightness-[.8] h-[66vw] max-w-[66vw] sm:h-[60vh] sm:max-w-[40vw] lg:max-w-[400px] -rotate-[25deg]" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 300 300">

              <image width="100%" height="100%" preserveAspectRatio="xMidYMin slice" xlinkHref={image} clip-path="url(#user-space)" />
            </svg>
          </div>
        </div>
        <div class="flex flex-col w-full lg:w-2/3 justify-center items-start p-8 slide-l">
          <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-0">Simon Lopez J.
          </h2>
          <h1 class="text-3xl md:text-6xl text-theme-accent tracking-loose mb-2">LoArt <span className=" text-theme-text">& </span>Dev</h1>

          <p class="text-sm md:text-base text-gray-50 mb-4">Say hi to Simon Lopez Jaramillo, the web and game design ninja with unicorn-level creativity! He'll make your ideas come to life with graphics that are out of this world. He's also a digital art wizard who can bring characters to life. Get ready for a wild ride through Simon's magical mind!</p>


        </div>

      </div>
    </div>
  </section>
)
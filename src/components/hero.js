import React from "react";
import pill from "../images/Pill.svg";
import { graphql, useStaticQuery } from "gatsby";
import Fade from 'react-reveal/Fade';

const Hero = () => {
  const images = useStaticQuery(graphql`
    {
  imgR: contentfulArtwork(title: {eq: "Singularity"}) {
    images {
      resize(width: 650, format: AUTO) {
        src
      }
    }
  }
  imgC: contentfulArtwork(title: {eq: "Personal Deamon"}) {
    images {
      resize(width: 650, format: AUTO) {
        src
      }
    }
  }
  imgL: contentfulArtwork(title: {eq: "Sunset on the beach"}) {
    images {
      resize(width: 650, format: AUTO) {
        src
      }
    }
  }
}
  `)


  return (
    <section className="w-full max-w-screen overflow-hidden">
      <svg className="-z-50 h-0 w-0">
        <defs>
          <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
            <path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M149.31224,11.69189c36.84431,0,66.71252,29.86821,66.71252,66.71252h.00001v145.87345h-.00001c0,36.84431-29.86821,66.71252-66.71252,66.71252s-66.71252-29.86821-66.71252-66.71252h-.00002v-145.87345h.00001c0-36.84431,29.86821-66.71252,66.71252-66.71252h.00001Z" stroke-width="0" />
          </clipPath>
        </defs>
      </svg>
      <div class="bg-theme-bg text-white py-10 w-full">
        <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">

          <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8 slide-l">
            <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-0">Step into the extraordinary with
            </h2>
            <h1 class="text-3xl md:text-7xl text-theme-accent tracking-loose mb-2">LoArt <span className=" text-theme-text">& </span>Dev</h1>

            <p class="text-sm md:text-base text-gray-50 mb-4">where I create stunning games and websites that will blow your mind! Are you ready for an adventure?</p>
            <a href="#"
              class="bg-transparent hover:bg-theme-accent text-theme-accent hover:text-zinc-800 rounded shadow hover:shadow-lg py-2 px-4 border border-theme-accent hover:border-transparent">
              Explore Now</a>


          </div>
          <div class="p-8 mt-12 mb-6 md:my-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div class="h-2/3 flex flex-nowrap content-center slide-r">

              <svg width={500} height={500} class=" hidden xl:inline-block brightness-[.8] h-full my-auto -mr-20 -rotate-[25deg]" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 300 300">
                <image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xlinkHref={images.imgL.images[0].resize.src} clip-path="url(#user-space)" />
              </svg>

              <svg width={600} height={600} class="inline-block brightness-[.8] h-full max-w-[66vw] sm:max-w-[30vw] -rotate-[25deg]" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 300 300">

                <image width="100%" height="100%" preserveAspectRatio="xMidYMin slice" xlinkHref={images.imgC.images[0].resize.src} clip-path="url(#user-space)" />
              </svg>
              <svg width={500} height={500} class=" hidden lg:inline-block brightness-[.8] h-full my-auto -ml-20 -rotate-[25deg]" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 300 300">

                <image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xlinkHref={images.imgR.images[0].resize.src} clip-path="url(#user-space)" />
              </svg>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const Hero = () => {
  const images = useStaticQuery(graphql`
{
  imgR: strapiArtwork(Slug: {eq: "singularity"}) {
    image {
      localFile {
        childImageSharp {
          resize(toFormat: AUTO, quality: 100, width: 600) {
            src
          }
        }
      }
    }
    Slug
  }
  imgC: strapiArtwork(Slug: {eq: "personal-deamon"}) {
    image {
      localFile {
        childImageSharp {
          resize(toFormat: AUTO, quality: 100, width: 600) {
            src
          }
        }
      }
    }
    Slug
  }
  imgL: strapiArtwork(Slug: {eq: "beach-sunset"}) {
    image {
      localFile {
        childImageSharp {
          resize(toFormat: AUTO, quality: 100, width: 600) {
            src
          }
        }
      }
    }
    Slug
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
      <div className="bg-theme-bg text-white py-10 w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">

          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8 slide-l">
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-0">Step into the extraordinary with
            </h2>
            <h1 className="text-3xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-theme-accent to-violet-500 tracking-loose mb-2">LoArt <span className=" text-theme-text">& </span>Dev</h1>

            <p className="text-sm md:text-base text-gray-50 mb-4">where I create stunning games and websites that will blow your mind! Are you ready for an adventure?</p>
            <Link to="/gallery">
              <button
                className=" hover:bg-gradient-to-r from-theme-accent to-violet-500  text-white hover:text-zinc-800 rounded shadow hover:shadow-lg py-2 px-4 border border-theme-accent hover:border-transparent">
                Explore Now</button></Link>


          </div>
          <div className="p-8 mt-12 mb-6 md:my-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div className="h-2/3 flex flex-nowrap content-center slide-r">

              <svg width={500} height={500} className=" hidden xl:inline-block brightness-[.8] h-full my-auto -mr-20 -rotate-[25deg]" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 300 300">
                <image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xlinkHref={images.imgL.image[0].localFile.childImageSharp.resize.src} alt={images.imgL.image[0].title} clip-path="url(#user-space)" />
              </svg>

              <svg width={600} height={600} className="inline-block brightness-[.8] h-full max-w-[66vw] sm:max-w-[30vw] -rotate-[25deg]" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 300 300">

                <image width="100%" height="100%" preserveAspectRatio="xMidYMin slice" xlinkHref={images.imgC.image[0].localFile.childImageSharp.resize.src} alt={images.imgC.image[0].title} clip-path="url(#user-space)" />
              </svg>
              <svg width={500} height={500} className=" hidden lg:inline-block brightness-[.8] h-full my-auto -ml-20 -rotate-[25deg]" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 300 300">

                <image width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xlinkHref={images.imgR.image[0].localFile.childImageSharp.resize.src} alt={images.imgR.image[0].title} clip-path="url(#user-space)" />
              </svg>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

export const SinglePageHero = ({ title, desc, model, video, slug }) => (
  <section className="bg-theme-bg mt-12">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{title}</h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{desc}</p>
      {(model != null) || (video != null) ?
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          {model ?
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 -ml-1 w-5 h-5">
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              View model
            </a>
            :
            ""
          }
          {video ?
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
              Watch video
            </a>
            :
            ""
          }
        </div>
        :
        ""
      }
      <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
        <span className="font-semibold text-gray-400 uppercase">SHARE IN</span>
        <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
          <a href={`https://twitter.com/intent/tweet?url=https://loart.dev/art/${slug}&text=${title},%20fantastic%20artwork%20by%20@LoArtDev.%20Please%20go%20and%20check%20it%20out&via=`} target="_blank" rel="noreferrer" className="mr-5 mb-5 lg:mb-0 text-theme-text hover:text-theme-accent flex text-2xl gap-4">
            <svg className="h-8" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
            Twitter
          </a>
          <a href={`https://reddit.com/submit?url=https://loart.dev/art/${slug}&title=${title},%20fantastic%20artwork%20by%20@LoArtDev.%20Please%20go%20and%20check%20it%20out`} target="_blank" rel="noreferrer" className="mr-5 mb-5 lg:mb-0 text-theme-text hover:text-theme-accent flex text-2xl gap-4">
            <svg className="h-8" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Reddit</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" /></svg>
            Reddit
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=https://loart.dev/art/${slug}`} target="_blank" rel="noreferrer" className="mr-5 mb-5 lg:mb-0 text-theme-text hover:text-theme-accent flex text-2xl gap-4">
            <svg className="h-8" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            Facebook
          </a>
        </div>
      </div>
    </div>
  </section>
)
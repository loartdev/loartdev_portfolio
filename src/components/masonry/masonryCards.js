import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { UncontrolledTooltip } from "reactstrap";


const MasonryCard = ({ DATA }) => (
  <article className="!z-5 relative mb-8 rounded-[20px] bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-theme-navbg">
    <div className="h-full w-full">
      <div className="relative w-full">
        <GatsbyImage image={getImage(DATA.src)} className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" />
        <a target="_blank" rel="noreferrer"
          href={`http://twitter.com/intent/tweet?text=Check%20${DATA.title},%20fantastic%20artwork%20by%20@LoArtDev.%20Please%20go%20and%20check%20it%20out%20&url=https%3A%2F%2Floart.dev/art/${DATA.id}`}>
          <button
            id={DATA.id}
            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-theme-navbg hover:bg-theme-accent p-2 text-brand-500 hover:cursor-pointer">
            <div className="flex h-full w-full items-center justify-center rounded-full text-xl">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
            </div>
          </button>
        </a>
        <UncontrolledTooltip
          placement="bottom"
          target={DATA.id}>
          <div
            className="bg-theme-menubg mt-1 p-2 rounded-xl before:w-[20px] before:h-[20px] before:bg-theme-accent before:-mt-10">
            Share on Twitter ❤️
          </div>
        </UncontrolledTooltip>
      </div>
      <div className="mb-3 flex items-center justify-between px-1 md:items-start">
        <div className="mb-2">
          <Link to={'/art/' + DATA.id}>
            <p className="text-lg font-bold text-navy-700 hover:text-theme-accent transition-all duration-100"> {DATA.title} </p>
          </Link>
          <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">By {DATA.user.name} (LoArt & Dev) </p>
        </div>
        <div className="flex flex-row-reverse md:mt-2 lg:mt-0">
          <span className="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-theme-bg bg-[#E0E5F2] text-xs text-navy-700 ">
            <GatsbyImage className="h-full w-full rounded-full object-cover" image={getImage(DATA.user.src)} />
          </span>
        </div>
      </div>
    </div>
  </article>
)

export default MasonryCard

export const MasonryGameCard = ({ DATA }) => (
  <article className="!z-5 relative mb-8 rounded-[20px] bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-theme-navbg">
    <div className="h-full w-full">
      <div className="relative w-full">
        <GatsbyImage image={getImage(DATA.src)} className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" />

      </div>
      <div className="mb-3 flex items-center justify-between px-1 md:items-start">
        <div className="mb-2">
          <Link to={'/game/' + DATA.id}>
            <p className="text-lg font-bold text-navy-700 hover:text-theme-accent transition-all duration-100"> {DATA.title} </p>
          </Link>
          <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">{DATA.desc}</p>
        </div>
      </div>
    </div>
  </article>
)

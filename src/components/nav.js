import React, { useState } from 'react'
// import { Dialog, Menu } from '@headlessui/react'
import Logo from '../images/logo.svg';
import { Link, graphql, useStaticQuery } from 'gatsby';
import ArtworksLinks from './nav/lastArtworks';

function Nav() {
  let [isOpen, setIsOpen] = useState(false)

  const links = useStaticQuery(graphql`
  {
  strapiMenu {
    Portfolio {
      Text
      Url
      IconHTML
    }
    Social {
      IconHTML
      Text
      Url
    }
  }
}
  `)

  return (
    <>
      <nav className="fixed top-0 w-full px-4 md:px-8 py-4 z-50">
        <div className=' w-full  shadow-lg shadow-theme-navbg/10 flex rounded-2xl p-2 bg-theme-navbg text-theme-text '>
          <div className="flex-1 md:flex-none z-50">
            <img src={Logo} className='w-8 h-8 m-2' alt="Well aparently something is not working but the page must be fine, so dont worry, this is here just to maje people get mad when this icon don't load....  why are you reading this?" />
          </div>
          <h2 className='flex-1 text-2xl text-center mt-2 hidden md:block'>LoArt & Dev</h2>
          <div className="flex-0 z-50 flex place-content-end space-x-4 text-1xl leading-8">
            <button onClick={() => setIsOpen(!isOpen)} className='flex-0 p-2 hover:text-theme-accent transition duration-100'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </button>
          </div>
        </div>

      </nav>
      <section>
        <button className={`fixed top-0 left-0  w-screen h-screen z-[55] ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(false)}><span hidden>close</span></button>
        <div className={`fixed grid grid-cols-2 p-2 md:p-0 top-0 left-0 w-screen md:h-auto md:left-auto h-screen md:rounded-2xl md:right-8 md:top-24 md:ml-8 md:w-1/2 bg-theme-menubg text-theme-text z-[60] shadow-lg shadow-theme-navbg/2 0 transition-transform duration-75 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="text-xl h-10 col-span-2 flex p-2 w-full md:hidden">
            <div className='flex-1'>
              <svg id="svg2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className='h-6 w-6' viewBox="0, 0, 400,400">
                <g id="svgg2">
                  <path id="path02"
                    d="M63.039 35.691 C 63.039 44.962,65.767 57.252,72.441 78.049 C 79.625 100.438,81.574 107.310,84.040 118.949 C 87.886 137.109,91.781 143.336,100.959 146.004 C 107.597 147.934,289.502 147.904,296.154 145.972 C 308.378 142.421,313.488 133.966,320.377 105.890 C 323.019 95.121,325.026 88.793,327.533 83.325 C 330.893 75.994,331.009 75.507,330.799 69.570 L 330.582 63.415 327.580 61.914 C 323.023 59.635,307.103 59.988,283.302 62.894 C 271.745 64.306,259.065 65.344,250.281 65.599 C 242.439 65.826,224.878 66.732,211.257 67.612 C 168.618 70.368,140.085 69.877,118.010 66.007 C 103.486 63.462,99.299 61.070,85.752 47.581 C 75.964 37.836,72.153 34.777,67.246 32.727 C 63.132 31.008,63.039 31.073,63.039 35.691 M141.659 92.899 C 158.230 100.078,161.242 117.615,147.305 125.772 C 131.999 134.731,108.098 117.795,114.776 102.722 C 119.206 92.724,131.166 88.353,141.659 92.899 M269.953 93.022 C 284.607 98.420,290.319 112.684,281.297 121.348 C 270.643 131.578,251.321 128.708,243.051 115.668 C 234.127 101.596,252.116 86.453,269.953 93.022 M126.829 192.976 C 97.136 195.512,83.358 212.594,80.608 250.281 C 73.624 345.998,83.597 376.511,126.454 390.547 C 160.438 401.676,189.915 393.604,193.333 372.231 L 193.791 369.368 199.396 374.065 C 235.319 404.171,287.105 399.845,310.245 364.807 C 338.055 322.696,337.185 231.017,308.709 202.992 C 288.038 182.648,234.669 190.894,217.426 217.095 C 211.671 225.840,208.922 242.944,212.670 246.691 C 213.296 247.317,221.682 241.522,231.895 233.407 C 252.076 217.372,257.899 214.278,267.917 214.266 C 284.523 214.247,298.235 233.375,296.976 254.803 C 295.465 280.539,272.716 286.239,195.872 280.133 C 177.787 278.697,165.565 278.168,148.593 278.087 C 123.126 277.966,120.822 277.615,114.667 272.931 C 99.543 261.418,104.846 227.987,123.250 218.816 C 133.937 213.490,145.478 217.338,164.728 232.643 C 176.393 241.918,181.018 244.587,188.670 246.458 L 190.848 246.990 190.388 241.131 C 188.015 210.893,160.563 190.095,126.829 192.976 M252.010 308.770 C 259.374 310.730,266.278 318.047,269.759 327.580 C 279.494 354.242,246.662 374.461,231.089 351.395 C 216.724 330.118,230.069 302.929,252.010 308.770 M159.365 312.157 C 170.850 313.637,176.583 320.201,175.271 330.368 C 173.080 347.347,148.659 361.021,137.816 351.340 C 136.085 349.794,131.332 342.707,131.332 341.671 C 131.332 341.252,130.657 338.794,129.831 336.210 C 128.665 332.559,128.330 329.445,128.330 322.243 C 128.330 311.397,127.354 312.318,139.212 311.976 C 143.340 311.856,148.405 311.699,150.469 311.626 C 152.533 311.553,156.536 311.792,159.365 312.157 "
                    stroke="none" fill="currentColor" fill-rule="evenodd"></path>
                </g>
              </svg>
            </div>
            <button onClick={() => setIsOpen(false)} className='place-content-end flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-theme-text">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className='rounded-2xl col-span-2 md:col-span-1 rounded-b-none md:rounded-b-2xl md:rounded-r-none pb-8 md:pb-4 md:pr-6 bg-theme-navbg p-4 mt-2 md:mt-0 grid grid-cols-2 gap-4'>
            <h2 className='col-span-2 text-zinc-400 text-xs mt-1'>PORTFOLIO</h2>
            {links.strapiMenu.Portfolio.map(link => (
              <MenuLink link={link.Url}>
                <div
                  dangerouslySetInnerHTML={{ __html: link.IconHTML }}
                />
                {link.Text}
              </MenuLink>
            ))}
            <h2 className='col-span-2 text-zinc-400 text-xs mt-1'>SOCIALES</h2>
            {links.strapiMenu.Social.map(link => (
              <a href={link.Url} target='_blank' rel="noreferrer" className='flex space-x-4 hover:text-theme-accent'>
                <div
                  dangerouslySetInnerHTML={{ __html: link.IconHTML }}
                />
                {link.Text}
              </a>
            ))}
          </div>
          <div className='rounded-2xl col-span-2 md:col-span-1 bg-theme-menucbg p-4 -mt-3 md:mt-0 md:-ml-3 grid grid-cols-2 gap-4'>
            <h2 className='col-span-2 text-zinc-400 text-xs mt-1'>LAST ARTWORKS</h2>
            <ArtworksLinks></ArtworksLinks>
          </div>
        </div>
      </section>
    </>
  )
}

const MenuLink = ({ children, props, link }) => {
  return (
    <Link to={link}>
      <div className='flex space-x-4 hover:text-theme-accent' {...props}>
        {children}
      </div>
    </Link>
  )
}


export default Nav
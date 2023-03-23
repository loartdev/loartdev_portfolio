import React, { useState } from 'react'
import { Dialog, Menu } from '@headlessui/react'
import Logo from '../images/logo.svg';
import { Link } from 'gatsby';
import ArtworksLinks from './nav/lastArtworks';

function Nav() {
  let [isOpen, setIsOpen] = useState(false)


  return (
    <>
      <nav className="fixed top-0 w-full px-4 md:px-8 py-4 z-50">
        <div className=' w-full  shadow-lg shadow-theme-navbg/10 flex rounded-2xl p-2 bg-theme-navbg text-theme-text '>
          <div className="flex-1 md:flex-none z-50">
            <img src={Logo} className='w-8 h-8 m-2' alt="Well aparently something is not working but the page must be fine, so dont worry, this is here just to maje people get mad when this icon don't load....  why are you reading this?" />
          </div>
          <h2 className='flex-1 text-2xl text-center mt-2 hidden md:block'>LoArt & Dev</h2>
          <div className="flex-0 z-50 flex place-content-end space-x-4 text-1xl leading-8">
            <div onClick={() => setIsOpen(!isOpen)} className='flex-0 p-2 hover:text-theme-accent transition duration-100'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>

            </div>
          </div>
        </div>

      </nav>
      <section>
        <div className={`fixed top-0 left-0  w-screen h-screen z-[55] ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(false)}></div>
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
            <MenuLink link="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 p-1 rounded-full">
                <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
                <path fillRule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clipRule="evenodd" />
              </svg>

              Home</MenuLink>
            <MenuLink link="/gallery">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 p-1 rounded-full">
                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
              </svg>

              Artworks</MenuLink>
            <MenuLink link="/about">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 p-1 rounded-full">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
              </svg>
              About me</MenuLink>
            <MenuLink link="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 p-1 rounded-full">
                <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
              </svg>
              Projects</MenuLink>
            <MenuLink link="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 mr-2 p-1 rounded-full">
                <path fill="currentColor" d="M415.593,496A80.408,80.408,0,0,0,496,415.593V298.857a120,120,0,0,0-120-120H280V112H448a32.036,32.036,0,0,0,32-32V16H432V64H264a32.036,32.036,0,0,0-32,32v82.857H136a120,120,0,0,0-120,120V415.593A80.408,80.408,0,0,0,96.407,496h1.932a80.408,80.408,0,0,0,61.771-28.932l61.6-82.5h68.572l61.574,80.047A80.408,80.408,0,0,0,415.593,496ZM192,325H157v35H115V325H80V283h35V248h42v35h35Zm149,0H299V283h42Zm56,56H355V339h42Zm0-112H355V227h42Zm14,14h42v42H411Z" class="ci-primary"></path>
              </svg>
              Games</MenuLink>
            <MenuLink link="/contact">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 p-1 rounded-full">
                <path fillRule="evenodd" d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z" clipRule="evenodd" />
              </svg>
              Contact me</MenuLink>
            <h2 className='col-span-2 text-zinc-400 text-xs mt-1'>SOCIALES</h2>
            <a href="https://www.instagram.com/loart_dev/" target='_blank'>
              <div className='flex space-x-4 hover:text-theme-accent'>
                <svg className="w-6 h-6 mr-2 p-1 rounded-full" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 56.7 56.7" fill="currentColor" enable-background="new 0 0 56.7 56.7" xmlSpace="preserve">
                  <g>
                    <path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
		c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"/>
                    <circle cx="41.5" cy="16.4" r="2.9" />
                    <path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
		h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
		s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
		c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"/>
                  </g>
                </svg>
                Instagram
              </div>
            </a>
            <a href="https://www.facebook.com/loartdev/" target='_blank'>
              <div className='flex space-x-4 hover:text-theme-accent'>
                <svg className="w-6 h-6 mr-2 p-1 rounded-full" role="img" width="30px" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                Facebook
              </div>
            </a>
            <a target="_blank" href="https://twitter.com/LoArtDev">
              <div className='flex space-x-4 hover:text-theme-accent'>
                <svg className="w-6 h-6 mr-2 p-1 rounded-full" role="img" width="30px" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                Twitter
              </div>
            </a>
            <a target="_blank" href="https://www.artstation.com/loartdev">
              <div className='flex space-x-4 hover:text-theme-accent'>
                <svg className="w-6 h-6 mr-2 p-1 rounded-full" role="img" width="30px" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>ArtStation</title><path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z"></path></svg>
                Artstation
              </div>
            </a>
            <a target="_blank" href="https://loartdev.itch.io/">
              <div className='flex space-x-4 hover:text-theme-accent'>
                <svg className="w-6 h-6 mr-2 p-1 rounded-full" role="img" width="30px" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Itch.io</title><path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.133-3.362 0-7.945.053-8.87.133zm6.376 6.477a2.74 2.74 0 0 1-.468.602c-.5.49-1.19.795-1.947.795a2.786 2.786 0 0 1-1.95-.795c-.182-.178-.32-.37-.446-.59-.127.222-.303.412-.486.59a2.788 2.788 0 0 1-1.95.795c-.092 0-.187-.025-.264-.052-.107 1.113-.152 2.176-.168 2.95v.005l-.006 1.167c.02 2.334-.23 7.564 1.03 8.85 1.952.454 5.545.662 9.15.663 3.605 0 7.198-.21 9.15-.664 1.26-1.284 1.01-6.514 1.03-8.848l-.006-1.167v-.004c-.016-.775-.06-1.838-.168-2.95-.077.026-.172.052-.263.052a2.788 2.788 0 0 1-1.95-.795c-.184-.178-.36-.368-.486-.59-.127.22-.265.412-.447.59a2.786 2.786 0 0 1-1.95.794c-.76 0-1.446-.303-1.948-.793a2.74 2.74 0 0 1-.468-.602 2.738 2.738 0 0 1-.463.602 2.787 2.787 0 0 1-1.95.794h-.16a2.787 2.787 0 0 1-1.95-.793 2.738 2.738 0 0 1-.464-.602zm-2.004 2.59v.002c.795.002 1.5 0 2.373.953.687-.072 1.406-.108 2.125-.107.72 0 1.438.035 2.125.107.873-.953 1.578-.95 2.372-.953.376 0 1.876 0 2.92 2.934l1.123 4.028c.832 2.995-.266 3.068-1.636 3.07-2.03-.075-3.156-1.55-3.156-3.025-1.124.184-2.436.276-3.748.277-1.312 0-2.624-.093-3.748-.277 0 1.475-1.125 2.95-3.156 3.026-1.37-.004-2.468-.077-1.636-3.072l1.122-4.027c1.045-2.934 2.545-2.934 2.92-2.934zM12 12.714c-.002.002-2.14 1.964-2.523 2.662l1.4-.056v1.22c0 .056.56.033 1.123.007.562.026 1.124.05 1.124-.008v-1.22l1.4.055C14.138 14.677 12 12.713 12 12.713z"></path></svg>
                Itch.io
              </div>
            </a>
            <a target="_blank" href="https://github.com/SimonLopezJara">
              <div className='flex space-x-4 hover:text-theme-accent'>
                <svg className="w-6 h-6 mr-2 p-1 rounded-full" role="img" width="30px" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                GitHub
              </div>
            </a>
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
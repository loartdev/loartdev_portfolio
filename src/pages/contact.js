import React from "react";
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout>
      <form className="w-full max-w-lg mx-auto mt-24 py-6" action="https://public.herotofu.com/v1/c09c0bf0-0071-11ed-bc36-e1ea9ccadd33" method="post" accept-charset="UTF-8">

        <h1 className="font-bold text-3xl mb-6">Contact Me</h1>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-theme-text text-xs font-bold mb-2" htmlFor="grid-first-name">
              First Name<span className="text-red-500">*</span>
            </label>
            <input class="appearance-none block w-full bg-theme-menubg text-theme-text border border-theme-navbg rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-theme-navbg invalid:border-red-500" id="grid-first-name" type="text" name="name" placeholder="Simon" required minlength="2" maxlength="25" />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-theme-text text-xs font-bold mb-2" htmlFor="grid-last-name">
              Last Name
            </label>
            <input class="appearance-none block w-full bg-theme-menubg text-theme-text border border-theme-navbg rounded py-3 px-4 leading-tight focus:outline-none focus:bg-theme-navbg focus:border-theme-accent  invalid:border-red-500" id="grid-last-name" type="text" name="lastname" placeholder="Lopez" minlength="2" maxlength="30" />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-theme-text text-xs font-bold mb-2" htmlFor="grid-password">
              E-mail<span className="text-red-500">*</span>
            </label>
            <input class="appearance-none block w-full bg-theme-menubg text-theme-text border border-theme-navbg rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-theme-navbg focus:border-theme-accent invalid:border-red-500" id="email" type="email" name="email" placeholder="mike.alien@loart.dev" required minLength="6" />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-theme-text text-xs font-bold mb-2" htmlFor="grid-password">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea class=" no-resize appearance-none block w-full bg-theme-menubg text-theme-text border border-theme-navbg rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-theme-navbg focus:border-theme-accent h-48 resize-y required:border-theme-navbg invalid:border-red-500" id="message" name="message" required minLength="25" maxLength="600"></textarea>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button type="submit" class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
              Send
            </button>
            <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" className="hidden" />
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </form>
    </Layout>
  )
}

export default ContactPage
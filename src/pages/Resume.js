import * as React from "react";
import HeaderBar from "../components/Header/HeaderBar.js";
import Footer from "../components/Footer/Footer.js";

const Resume = () => {
  return (
    <div class="bg-stone-200">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>

      <HeaderBar />

      <div class="py-10 bg-white">
        <div class="max-w-xl mx-auto lg:max-w-7xl lg:px-8">
          <div class="container mx-auto flex justify-center bg-white">
            <h1 class="text-4xl text-center font-semibold text-stone-800">
              Resume
            </h1>
          </div>
          <dl class="mt-20 lg:space-y-0 lg:grid lg:grid-cols-3 grid grid-cols-2 lg:gap-8 gap-2 md:gap-0 space-y-0">
            <div class="border  md:p-10 p-5 rounded-3xl">
              <dt class="">
                <p>Test</p>
              </dt>
            </div>
          </dl>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Resume;

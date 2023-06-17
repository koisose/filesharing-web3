import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';



export default component$(() => {
  return (
    <>
   <header class="bg-blue-500 text-white px-6 py-4">
  <div class="flex items-center justify-between">
    <div class="text-2xl font-semibold">
     Filesharing Web3
    </div>
    {/*<nav class="space-x-4">*/}
    {/*  <a href="#" class="hover:bg-blue-700 px-3 py-1 rounded">Home</a>*/}
    {/*  <a href="#" class="hover:bg-blue-700 px-3 py-1 rounded">About</a>*/}
    {/*  <a href="#" class="hover:bg-blue-700 px-3 py-1 rounded">Contact</a>*/}
    {/*</nav>*/}
  </div>
   </header>
    <div class="min-h-screen flex flex-col items-center justify-start bg-gray-100 py-4 sm:py-8">
      <div class="w-full sm:w-1/2 mx-4 sm:mx-8">
        <div class="bg-blue-500 p-8 mb-4 sm:mb-2  mt-4 border border-gray-300 shadow-md rounded">
          <div class="flex items-center justify-center ">
            <img class="my-5"  width="300" height="300" alt="Gravatar image example" src="https://www.gravatar.com/avatar" />
          </div>


          <div class="flex items-center justify-center ">
              <label class="nes-btn">
                <span>Select your file</span>
                <input type="file" />
              </label>
          </div>
          <label for="default_select">Default select</label>
          <div class="nes-select">
          <select required id="default_select">
            <option value="" disabled selected hidden>Select...</option>
            <option value="0">To be</option>
            <option value="1">Not to be</option>
          </select>
          </div>

          <label for="default_select">Default select</label>
          <div class="nes-select">
          <select required id="default_select">
            <option value="" disabled selected hidden>Select...</option>
            <option value="0">To be</option>
            <option value="1">Not to be</option>
          </select>
          </div>
        </div>
      </div>
    </div>


    </>
  );
});

export const head: DocumentHead = {
  title: 'Filesharing Web3',
  meta: [
    {
      name: 'description',
      content: 'Share your file everywhere ',
    },
  ],
};

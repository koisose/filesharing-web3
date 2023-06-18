import { component$, useVisibleTask$, useSignal   } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
//import { Tooltip } from 'react-tooltip'
// index.js
import { NFTStorage } from 'nft.storage'

import Web3 from 'web3'


export default component$(() => {

  const fileName1 = useSignal("select file to upload");

  useVisibleTask$(async (taskCtx:any) => {

  const fileInput = document.querySelector("#fileInput");
  fileInput?.addEventListener("change", (event:any) => {
    const files = event.target.files;
    const fileName = files[0].name;

    fileName1.value=fileName;
  });


  });
  return (
    <>
      <header class="bg-blue-500 text-white px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="text-2xl font-semibold">Filesharing Web3</div>
          <button type="button" class="nes-btn is-success">
            connect wallet
          </button>
        </div>

      </header>
      <div class="min-h-screen flex flex-col items-center justify-start bg-gray-100 py-4 sm:py-8">
        <div class="w-full sm:w-1/2 mx-4 sm:mx-8">
          <div class="bg-blue-500 p-8 mb-4 sm:mb-2  mt-4 border border-gray-300 shadow-md rounded">


            <div class="flex items-center justify-center mb-4 ">
              <label class="nes-btn">
                <span>{fileName1.value}</span>
                <input type="file" id="fileInput"/>
              </label>
            </div>
                 <label class="flex items-center">
                   File storage
                   <svg height="16" viewBox="0 0 16 16" width="16" class="shopee-svg-icon icon-help-center ml-2"><g fill="none" fill-rule="evenodd" transform="translate(1)"><circle cx="7" cy="8" r="7" stroke="currentColor"></circle><path fill="currentColor" d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"></path></g></svg>
                 </label>
            <div class="nes-select">
              <select required id="default_select">
                <option value="nft_storage">nft.storage</option>
                <option value="spheron">spheron</option>
                <option value="spheron">fission</option>
                <option value="spheron">lighthouse storage</option>
              </select>
            </div>

            <label class="mt-4 flex items-center">
              Encryption
              <svg height="16" viewBox="0 0 16 16" width="16" class="shopee-svg-icon icon-help-center ml-2"><g fill="none" fill-rule="evenodd" transform="translate(1)"><circle cx="7" cy="8" r="7" stroke="currentColor"></circle><path fill="currentColor" d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"></path></g></svg>
            </label>
            <div class="nes-select">
              <select required id="default_encryption">

                <option value="lit_protocol">

                  Lit Protocol</option>
                <option value="timelock">Drand timelock encryption</option>
              </select>
            </div>
            <label class="mt-4" for="default_database">Database</label>
            <div class="nes-select">
              <select required id="default_database">
                <option value="" >
                  None
                </option>
                <option value="polybase">Polybase</option>
                <option value="tableland">Tableland</option>
                <option value="ceramic">Ceramic</option>
              </select>
            </div>
            <div class="mt-4 flex flex-col sm:flex-row">
              <div class="bg-blue-500 w-full">
                <div class="nes-field">
                  <label for="name_field">Recipient</label>
                  <input type="text" id="name_field" class="nes-input" />
                </div>
              </div>

              <button type="button" class="mt-6 nes-btn is-primary">
                add
              </button>
              <button type="button" class="mt-6 nes-btn is-error">
                remove
              </button>
            </div>
            <div class="flex items-center justify-center ">
              <button type="button" class="mt-6 nes-btn is-success">
                connect wallet to upload
              </button>
            </div>

          </div>
          <div class="bg-green-500 p-6 rounded w-full">
            <p class="text-white text-xl font-semibold">Congrats your file has been uploaded:</p>
            <div class="mt-4 flex items-center">
              <input
                class="border-2 border-white px-4 py-2 rounded bg-transparent text-white focus:outline-none w-full"
                type="text"
                placeholder="Your text..."
              />
              <button
                class="ml-2 px-4 py-2 bg-white text-green-500 rounded font-semibold"

              >
              Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Filesharing Web3",
  meta: [
    {
      name: "description",
      content: "Share your file everywhere ",
    },
  ],
};

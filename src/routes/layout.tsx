import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { RequestHandler } from '@builder.io/qwik-city';
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

//const { chains, publicClient } = configureChains(
//  [mainnet, polygon, optimism, arbitrum],
//  [
//    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
//    publicProvider()
//  ]
//  );
//
//const { connectors } = getDefaultWallets({
//  appName: 'My RainbowKit App',
//  projectId: 'YOUR_PROJECT_ID',
//  chains
//});
//
//const wagmiConfig = createConfig({
//  autoConnect: true,
//  connectors,
//  publicClient
//})

//export const onGet: RequestHandler = async ({ cacheControl }) => {
//  // Control caching for this request for best performance and to reduce hosting costs:
//  // https://qwik.builder.io/docs/caching/
//  cacheControl({
//    // Always serve a cached response by default, up to a week stale
//    staleWhileRevalidate: 60 * 60 * 24 * 7,
//    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
//    maxAge: 5,
//  });
//};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {

  return (
    <>

      <main>
        <Slot />
      </main>

    </>
  );
});

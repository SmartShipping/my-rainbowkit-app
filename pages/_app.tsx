import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { SessionProvider } from "next-auth/react";

import {
  getDefaultWallets,
  RainbowKitProvider,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, goerli, mainnet, optimism, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,

    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],

  [alchemyProvider({ apiKey: alchemyId! }), publicProvider()]
);
const projectId = "fb7a4c04880c1d40d8123fa117491552";
const { wallets } = getDefaultWallets({
  appName: "RainbowKit App",
  projectId: projectId,
  chains,
});
const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      //  argentWallet({ projectId, chains }),
      // trustWallet({ projectId, chains }),
      //ledgerWallet({ projectId, chains }),
    ],
  },
]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <SessionProvider refetchInterval={0} session={pageProps.session}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </SessionProvider>
    </WagmiConfig>
  );
}

export default MyApp;

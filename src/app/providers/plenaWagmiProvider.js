// app/providers/plenaWagmiProvider.js
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { rainbowWallet } from "@rainbow-me/rainbowkit/wallets";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { WagmiProvider, http } from "wagmi";
import { mainnet, polygon } from "wagmi/chains";
import { rainbowPlenaConnector } from "./plenaRainbowkitConnector"; // Adjust path as necessary

const queryClient = new QueryClient();
const config = getDefaultConfig({
  appName: "plena-dapp",
  projectId: "a9f89b9a755885ebf013bbe8693fa026",
  chains: [mainnet, polygon],
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
  },
  wallets: [
    {
      groupName: "Recommended",
      wallets: [ rainbowWallet, rainbowPlenaConnector],
    },
  ],
});

export function PlenaWagmiProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

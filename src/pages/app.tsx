import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { polygonMumbai } from 'wagmi/chains'

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()]
)

const config = createConfig({
  autoConnect: true,
  publicClient,
})

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
  )
}

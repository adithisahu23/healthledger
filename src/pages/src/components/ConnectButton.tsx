import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export function ConnectButton() {
  const { address } = useAccount()
  const { connect } = useConnect({ connector: new InjectedConnector() })
  const { disconnect } = useDisconnect()

  return (
    <button onClick={() => address ? disconnect() : connect()}>
      {address ? `Connected: ${address.slice(0, 6)}...` : "Connect Wallet"}
    </button>
  )
}

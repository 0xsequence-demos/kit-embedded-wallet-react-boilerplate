import { SequenceKit } from "@0xsequence/kit";
import { config } from "./config";
import "@0xsequence/design-system/styles.css";

import { useAccount, useDisconnect, useSwitchChain } from "wagmi";
import { NotConnected } from "./views/NotConnected";
import { Connected } from "./views/Connected";
import { SequenceBoilerplate } from "boilerplate-design-system";

export default function Layout() {
  return (
    <SequenceKit config={config}>
      <App />
    </SequenceKit>
  );
}

function App() {
  const { isConnected } = useAccount();
  return (
    <SequenceBoilerplate
      githubUrl="https://github.com/0xsequence-demos/kit-embedded-wallet-react-boilerplate"
      name="Sequence Kit Starter - React"
      description="Embedded Wallet"
      wagmi={{ useAccount, useDisconnect, useSwitchChain }}
    >
      {isConnected ? <Connected /> : <NotConnected />}
    </SequenceBoilerplate>
  );
}

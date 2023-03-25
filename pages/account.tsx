import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
// import Account from "../components/Account";
// import ETHBalance from "../components/ETHBalance";
// import Hexbin from "../components/Hexbin";
// import Honeycomb from "../components/Honeycomb";
// import TokenBalance from "../components/TokenBalance";
// import useEagerConnect from "../hooks/useEagerConnect";

// const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

function Home() {
  // const { account, library } = useWeb3React();

  // const triedToEagerConnect = useEagerConnect();

  // const isConnected = typeof account === "string" && !!library;

  return (
    <div>
      <Head>
        <title>Attention Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          🔯🔯🔯🔯
          <Link href="/">Attention Game</Link>
        </nav>
      </header>
      <main>
        <h1>Welcome!</h1>
      </main>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }

        main {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Home;

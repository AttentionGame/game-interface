import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import Hexbin from "../components/Hexbin";
// import Honeycomb from "../components/Honeycomb";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";
import Button from '@mui/material/Button';

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <div>
      <Head>
        <title>Attention Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Link href="/">🔯 Attention Game</Link>
          {/* <Button variant="outlined" size="large"> */}
          <Account triedToEagerConnect={triedToEagerConnect} />
          {/* </Button> */}
        </nav>
      </header>
      <main>
        <h1>
          Welcome to 🔯🔯🔯🔯 Attention Game
        </h1>
        <Link href="/account">Go to App Mint</Link>
        {/* <Button variant="outlined" size="large">Go to App Mint</Button> */}
        {isConnected && (
          <section>

            {/* <TokenBalance tokenAddress={DAI_TOKEN_ADDRESS} symbol="DAI" /> */}
          </section>
        )}
      </main>
      <Hexbin />

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

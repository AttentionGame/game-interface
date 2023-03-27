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
import styles from '../styles/laracon.module.scss'
import TextArt from "../components/TextArt";

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <div className={`${styles.laracon} font-display`}>
      <Head>
        <title>Attention Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button variant="outlined">Outlined</Button>
      <main>
        <h1 className="font-display">Laracon</h1>
        <TextArt />
      </main>
    </div>
  );
}

export default Home;

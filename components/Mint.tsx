import React, {useState, useEffect} from 'react';
import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import useTokenBalance from "../hooks/useTokenBalance";
import useHexNFTContract from "../hooks/useHexNFTContract";
import { parseBalance } from "../util";

type TokenBalanceProps = {
  tokenAddress: string;
  symbol: string;
};

const Mint = () => {
  const hexNFT = useHexNFTContract();
  const handleMint = () => {
    console.log('mint')
    hexNFT?.mint('0', '1', '-1').then((tx: any) => {
      console.log(tx);
    })
    hexNFT?.on('CreateHexagon', (owner, hexagonKey, hexagon) => {
      console.log(owner, hexagonKey, hexagon);
    })
    hexNFT?.on('Transfer', (from, to, tokenId) => {
      console.log(from, to, tokenId);
    })
  }
  const getHexGrid = async () => {
    const hexagon = await hexNFT.idToHexagon(1);
    const hexagon2 = await hexNFT.idToHexagon(2);
    const hexagon3 = await hexNFT.idToHexagon(3);
    const hexagon4 = await hexNFT.idToHexagon(4);
    console.log(hexagon);
    console.log(hexagon2);
    console.log(hexagon3);
    console.log(hexagon4);
  }
  useEffect(() => {
    if(hexNFT) getHexGrid()
  }, [hexNFT])
  return (
    <p>
      test
      <button onClick={handleMint}>
        Mint
      </button>
    </p>
  );
};

export default Mint;

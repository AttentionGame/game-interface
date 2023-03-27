import HexNFT_ABI from "../contracts/HexNFT.json";
import useContract from "./useContract";

const HexNFT_ADDRESS = '0x7a0a1F08Adb979aCd8432F20AB53DB7BC0aB1e23'
export default function useTokenContract(tokenAddress?: string) {
  return useContract(
    tokenAddress || HexNFT_ADDRESS,
    HexNFT_ABI
  );
}

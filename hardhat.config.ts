import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  paths: {
    artifacts: "generated/artifacts",
  },
  typechain: {
    outDir: "generated/types",
  },
};

export default config;

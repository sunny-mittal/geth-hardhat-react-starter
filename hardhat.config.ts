import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'

const config: HardhatUserConfig = {
  solidity: '0.8.17',
  paths: {
    artifacts: 'generated/artifacts',
  },
  typechain: {
    outDir: 'generated/types',
  },
  networks: {
    local: {
      url: 'http://localhost:8545',
      accounts: [
        'ce01be8202c3dce641a364ec624d60c4e59815658b87f5209e68e001ebdc3b6f',
      ],
    },
  },
}

export default config

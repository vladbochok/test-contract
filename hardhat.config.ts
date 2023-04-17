import { HardhatUserConfig } from "hardhat/config";
import '@typechain/hardhat';
import '@matterlabs/hardhat-zksync-solc';
import "@matterlabs/hardhat-zksync-deploy";
import "@nomiclabs/hardhat-ethers";

// dynamically changes endpoints for local tests
const zkSyncTestnet =
  process.env.NODE_ENV == "test"
    ? {
        url: "http://localhost:3050",
        ethNetwork: "http://localhost:8545",
        zksync: true,
      }
    : {
        url: "https://zksync2-testnet.zksync.dev",
        ethNetwork: "goerli",
        zksync: true,
      };


export default {
    defaultNetwork:  "zkSyncTestnet",
    zksolc: {
        version: '1.3.5',
        compilerSource: 'binary',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            },
            isSystem: true
        }
    },
    zkSyncDeploy: {
        zkSyncNetwork: 'https://zksync2-testnet.zksync.dev',
        ethNetwork: 'goerli'
    },
    solidity: {
        version: '0.8.17'
    },
    paths: {
        sources: './contracts'
    },
    networks: {
        hardhat: {
            zksync: true
        },
        zkSyncTestnet,
    }
};

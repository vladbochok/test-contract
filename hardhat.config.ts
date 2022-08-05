import '@nomiclabs/hardhat-solpp';
import '@typechain/hardhat';

export default {
    zksolc: {
        version: '0.1.0',
        compilerSource: 'binary',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    zkSyncDeploy: {
        zkSyncNetwork: 'https://zksync2-testnet.zksync.dev',
        ethNetwork: 'goerli'
    },
    solidity: {
        version: '0.8.8'
    },
    paths: {
        sources: './contracts'
    },
    networks: {
        hardhat: {
            zksync: true
        }
    }
};

import '@typechain/hardhat';
import '@matterlabs/hardhat-zksync-solc';

export default {
    zksolc: {
        version: '0.1.0',
        compilerSource: 'docker',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            },
            experimental: {
                dockerImage: 'matterlabs/zksolc',
                tag: 'beta'
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

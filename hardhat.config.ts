import '@typechain/hardhat';
import '@matterlabs/hardhat-zksync-solc';

export default {
    zksolc: {
        version: 'v1.32432421',
        compilerSource: 'binary',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            },
            compilerPath: "/Users/vlad/Desktop/Work/system-contracts/zksolc-dev1.3-cpr-848",
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
        }
    }
};

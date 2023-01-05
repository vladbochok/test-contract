import '@typechain/hardhat';
import '@matterlabs/hardhat-zksync-solc';

export default {
    zksolc: {
        version: 'v1.3243242',
        compilerSource: 'binary',
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            },
            compilerPath: "/Users/vlad/Desktop/Work/system-contracts/zksolc/zksolc_dev-vm1.3_only_for_tests",
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

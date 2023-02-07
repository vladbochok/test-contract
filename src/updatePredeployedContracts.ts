import * as fs from 'fs';

const SYSTEM_CONTRACTS = [
    ["AccountCodeStorage", "0x0000000000000000000000000000000000008002"],
    ["SystemContext", "0x000000000000000000000000000000000000800b"],
    ["ContractDeployer", "0x0000000000000000000000000000000000008006"],
    ["precompiles/Ecrecover", "0x0000000000000000000000000000000000000001"],
    ["ImmutableSimulator", "0x0000000000000000000000000000000000008005"],
    ["precompiles/Keccak256", "0x0000000000000000000000000000000000008010"],
    ["KnownCodesStorage", "0x0000000000000000000000000000000000008004"],
    ["L1Messenger", "0x0000000000000000000000000000000000008008"],
    ["L2EthToken", "0x000000000000000000000000000000000000800a"],
    ["MsgValueSimulator", "0x0000000000000000000000000000000000008009"],
    ["NonceHolder", "0x0000000000000000000000000000000000008003"],
    ["precompiles/SHA256", "0x0000000000000000000000000000000000000002"],
    ["BootloaderUtilities", "0x000000000000000000000000000000000000800c"],
    ["EventWriter", "0x000000000000000000000000000000000000800d"]
];

async function main() {
    console.log(`Update predeployed contracts`);

    const predeployedContractArtifacts = JSON.parse(await fs.promises.readFile(`./predeployed_contracts_artifacts.json`, { encoding: 'utf-8' }) as string);

    for (const contract of SYSTEM_CONTRACTS) {
        const fullPath = contract[0];
        const name = fullPath.split("/", 2)[1] || fullPath;
        
        const address = contract[1];
        const artifact = JSON.parse(await fs.promises.readFile(`../system-contracts/artifacts-zk/cache-zk/solpp-generated-contracts/${fullPath}.sol/${name}.json`, { encoding: 'utf-8' }) as string); 
        predeployedContractArtifacts[address] = artifact.bytecode;
    }

    await fs.promises.writeFile('./predeployed_contracts_artifacts.json', JSON.stringify(predeployedContractArtifacts, undefined, 4));
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error('Error:', err.message || err);
        process.exit(1);
    });

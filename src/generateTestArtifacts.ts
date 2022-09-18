import * as fs from 'fs';

async function main() {
    console.log(`Generate zkEVM test harness artifacts`);

    const predeployedContractArtifacts = JSON.parse(await fs.promises.readFile(`./predeployed_contracts_artifacts.json`, { encoding: 'utf-8' }) as string);
    const testContractByrecode = JSON.parse(await fs.promises.readFile('./artifacts-zk/contracts/basic_test/Main.sol/Main.json', { encoding: 'utf-8' }) as string).bytecode;
    const finalArtifacts = JSON.stringify({ 'entry_point_address': '0xc54E30ABB6a3eeD1b9DC0494D90c9C22D76FbA7e', 'entry_point_code': testContractByrecode, 'predeployed_contracts': predeployedContractArtifacts }, null, 4);
    await fs.promises.writeFile('./test_artifacts/basic_test.json', finalArtifacts);
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error('Error:', err.message || err);
        process.exit(1);
    });

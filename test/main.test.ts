import { expect } from 'chai';
import { Wallet, Contract } from 'zksync-web3';
import * as hre from 'hardhat';
import { Deployer } from '@matterlabs/hardhat-zksync-deploy';
import * as zk from 'zksync-web3'
import { BigNumber, ethers } from 'ethers';

const RICH_WALLET_PK =
  '0xe131bc3f481277a8f73d680d9ba404cc6f959e64296e0914dded403030d4f705';

export async function deployMain(): Promise<Contract> {
  const provider = new zk.Provider((hre.config.networks.zkSyncTestnet as any).url);
  const wallet = new Wallet(RICH_WALLET_PK, provider);
  const deployer = new Deployer(hre, wallet);

  const artifact = await deployer.loadArtifact('Main');
  const contract = await deployer.deploy(artifact);
  return contract;
}

describe('BuidlBuxx', function () {
  it("deposit funds if needed", async function () {
    const provider = new zk.Provider((hre.config.networks.zkSyncTestnet as any).url);
    const providerL1 = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
    const wallet = new Wallet(RICH_WALLET_PK, provider, providerL1);
    const balance = await wallet.getBalance('ETH');
    if (balance.lt(BigNumber.from(10).pow(18))) {
      const tx = await wallet.deposit({token: ethers.constants.AddressZero, amount: BigNumber.from(10).pow(19)});
      await tx.wait();
    }
  });


  it("Should deploy token, and premint it", async function () {
    const main = await deployMain();    
    const txResp = await main.fallback();
    const tx = await txResp.wait();

    console.log(tx);
  });
});

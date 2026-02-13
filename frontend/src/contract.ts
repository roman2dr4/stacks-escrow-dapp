import { openContractCall } from '@stacks/connect';

const contractAddress = "YOUR_CONTRACT_ADDRESS";
const contractName = "escrow";

export const depositFunds = async (amount: number) => {
  await openContractCall({
    contractAddress,
    contractName,
    functionName: 'deposit',
    functionArgs: [amount]
  });
};

export const releaseFunds = async (user: string) => {
  await openContractCall({
    contractAddress,
    contractName,
    functionName: 'release',
    functionArgs: [user]
  });
};

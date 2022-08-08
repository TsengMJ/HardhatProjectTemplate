require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox');
require('hardhat-contract-sizer');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },

    ethereum: {
      url: process.env.ETHEREUM_URL,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
    },

    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
    },

    polygon: {
      url: process.env.POLYGON_URL,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
    },

    mumbai: {
      url: process.env.MUMABI_URL,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      ethereum: process.env.ETHERSCAN_API_KEY,
      rinkeby: process.env.ETHERSCAN_API_KEY,
      polygon: process.env.POLYSCAN_API_KEY,
      polygonMumbai: process.env.POLYSCAN_API_KEY,
      bsc: process.env.BSC_API_KEY,
    },
  },
  gasReporter: {
    // enabled: process.env.REPORT_GAS !== undefined,
    // currency: 'USD',
  },

  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },
};

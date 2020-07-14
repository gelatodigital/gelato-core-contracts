const { usePlugin } = require("@nomiclabs/buidler/config");

// Classes
const Action = require("./src/classes/gelato/Action");
const Condition = require("./src/classes/gelato/Condition");
const GelatoProvider = require("./src/classes/gelato/GelatoProvider");
const Task = require("./src/classes/gelato/Task");
const TaskSpec = require("./src/classes/gelato/TaskSpec");
const TaskReceipt = require("./src/classes/gelato/TaskReceipt");

// Objects/Enums
const Operation = require("./src/enums/gelato/Operation");
const DataFlow = require("./src/enums/gelato/DataFlow");

// Helpers
// Async
const sleep = require("./src/helpers/async/sleep");
// Gelato
const convertTaskReceiptArrayToObj = require("./src/helpers/gelato/convertTaskReceiptArrayToObj");
const convertTaskReceiptObjToArray = require("./src/helpers/gelato/convertTaskReceiptObjToArray");
// Nested Arrays
const nestedArraysAreEqual = require("./src/helpers/nestedArrays/nestedArraysAreEqual");
// Nested Objects
const checkNestedObj = require("./src/helpers/nestedObjects/checkNestedObj");
const getNestedObj = require("./src/helpers/nestedObjects/getNestedObj");

// Go to https://buidler.dev/config/ to learn more
module.exports = {
  // Classes
  Action,
  Condition,
  GelatoProvider,
  Task,
  TaskSpec,
  TaskReceipt,

  // Objects/Enums
  Operation,
  DataFlow,

  // Helpers
  // Async
  sleep,
  // Gelato
  convertTaskReceiptArrayToObj,
  convertTaskReceiptObjToArray,
  // Nested Arrays
  nestedArraysAreEqual,
  // Nested Objects
  checkNestedObj,
  getNestedObj,

  // Buidler
  defaultNetwork: "buidlerevm",
  networks: {
    buidlerevm: {
      hardfork: "istanbul",
      allowUnlimitedContractSize: process.env.BUIDLER_DEBUG ? true : false,
      // Custom
      filters: { defaultFromBlock: 1, defaultToBlock: "latest" },
    },
    coverage: {
      url: "http://127.0.0.1:8555",
      // Custom
      filters: { defaultFromBlock: 1, defaultToBlock: "latest" },
    },
    localhost: {
      allowUnlimitedContractSize: process.env.BUIDLER_DEBUG ? true : false,
      filters: { defaultFromBlock: 1, defaultToBlock: "latest" },
    },
  },

  // This is a sample solc configuration that specifies which version of solc to use
  solc: {
    version: "0.6.10",
    optimizer: { enabled: true },
  },
  namedAccounts: {
    user: {
      default: 0,
    },
    provider: {
      default: 1,
    },
    executor: {
      default: 2,
    },
    sysAdmin: {
      default: 3,
    },
    gasPriceOracle: {
      default: 4,
    },
  },
};

// ================================= PLUGINS =========================================
usePlugin("@nomiclabs/buidler-ethers");
usePlugin("@nomiclabs/buidler-waffle");
usePlugin("solidity-coverage");
usePlugin("buidler-deploy");

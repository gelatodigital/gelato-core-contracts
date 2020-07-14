// Classes
const Action = require("./src/classes/gelato/Action").default;
const Condition = require("./src/classes/gelato/Condition").default;
const GelatoProvider = require("./src/classes/gelato/GelatoProvider").default;
const Task = require("./src/classes/gelato/Task").default;
const TaskSpec = require("./src/classes/gelato/TaskSpec").default;
const TaskReceipt = require("./src/classes/gelato/TaskReceipt").default;

// Objects/Enums
const Operation = require("./src/enums/gelato/Operation").default;
const DataFlow = require("./src/enums/gelato/DataFlow").default;

// Helpers
// Async
const sleep = require("./src/helpers/async/sleep").default;
// Gelato
const convertTaskReceiptArrayToObj = require("./src/helpers/gelato/convertTaskReceiptArrayToObj")
  .default;
const convertTaskReceiptObjToArray = require("./src/helpers/gelato/convertTaskReceiptObjToArray")
  .default;
// Nested Arrays
const nestedArraysAreEqual = require("./src/helpers/nestedArrays/nestedArraysAreEqual")
  .default;
// Nested Objects
const checkNestedObj = require("./src/helpers/nestedObjects/checkNestedObj")
  .default;
const getNestedObj = require("./src/helpers/nestedObjects/getNestedObj")
  .default;

// Go to https://buidler.dev/config/ to learn more
module.exports = {
  // Classes
  Action: Action,
  Condition: Condition,
  GelatoProvider: GelatoProvider,
  Task: Task,
  TaskSpec: TaskSpec,
  TaskReceipt: TaskReceipt,

  // Objects/Enums
  Operation: Operation,
  DataFlow: DataFlow,

  // Helpers
  // Async
  sleep: sleep,
  // Gelato
  convertTaskReceiptArrayToObj: convertTaskReceiptArrayToObj,
  convertTaskReceiptObjToArray: convertTaskReceiptObjToArray,
  // Nested Arrays
  nestedArraysAreEqual: nestedArraysAreEqual,
  // Nested Objects
  checkNestedObj: checkNestedObj,
  getNestedObj: getNestedObj,

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

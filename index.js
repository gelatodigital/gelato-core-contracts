// Contract ABIs
const GelatoCoreABI = require("./artifacts/GelatoCore.json").abi;
const GelatoGasPriceOracleABI = require("./artifacts/GelatoGasPriceOracle.json")
  .abi;
const GelatoActionPipelineABI = require("./artifacts/GelatoActionPipeline.json")
  .abi;

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

module.exports = {
  // Contract ABIs
  GelatoCoreABI,
  GelatoGasPriceOracleABI,
  GelatoActionPipelineABI,

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
};

<p  align="center"><img  src="https://i.imgur.com/ZvVG2b1.png"  width="250px"/></p>

<h1  align="center">Gelato Core Smart Contractss</h1>

## Overview

### Installation

```console
$ npm install @gelato/core
```

### Dependencies

This project is build on Buidler & Ethers.js

### Usage

Once installed, you can use the contracts in the library by importing them:

```solidity
pragma solidity ^0.6.10;

import {Condition, Action, Task, Operation, DataFlow} from "@gelato/core/contracts/gelato_core/IGelatoCore.sol";

contract AutomatedDapp {

    address public immutable gelatoCore;

    constructor(address _gelatoCore) public {
        gelatoCore = _gelatoCore
    }

    function createGelatoTask() public returns(Task memory) {
        Condition memory condition = Condition({
            inst: conditionAddress,
            data: abi.encodePacked(block.number + _blockNumberDelta);
        });

        Action memory condition = Action({
            addr: actionAddress,
            data: abi.encodeWithSignature("doAction(uint256)", actioninput);
            operation: Operation.Call,
            dataFlow: DataFlow.None,
            value: 0,
            termsOkCheck: false
        });

        Task memory task = Task({
            conditions: [condition],
            actions: [action],
            0,
            0
        }):

        return task;
    }

}
```

### Resources

- 🍦 Read our Gelato-V1 release announcement on our [blog](https://medium.com/@gelatonetwork/ethereums-automation-protocol-gelato-network-launches-on-mainnet-88647aa10d65)
- 🍦 Try out our demo tutorial [here](https://github.com/gelatodigital/Gelato-kyber)
- 🍦 Try out our advanced demo [here](src/demo/README.md)
- 🍦 Soon we will publish Developer Documentation. Bare with us!
- 🍦 Read the [Gelato Audit report](docs/audits/G0Group-Gelato2020Jun.pdf)
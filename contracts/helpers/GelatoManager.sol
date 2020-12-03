// SPDX-License-Identifier: GPLv3
pragma solidity 0.6.10;
pragma experimental ABIEncoderV2;

// Gelato Dependencies
import { IGelatoCore, Provider, Task } from "../gelato_core/interfaces/IGelatoCore.sol";
import { IGelatoProviders, TaskSpec } from "../gelato_core/interfaces/IGelatoProviders.sol";
import { IGelatoProviderModule } from "../gelato_provider_modules/IGelatoProviderModule.sol";

// OZ dependencies
import { Ownable } from "../external/Ownable.sol";
import { Address} from "../external/Address.sol";

/// @title GelatoManager
/// @author Hilmar X
/// @notice Deposits Funds, whitelits Tasks and Provider modules on GElato.
/// @dev An Aragon Agent or regular EOA can also directly deposit ETH on Gelato without this contract. Though it might sometimes be better to have a separate address doing it
contract GelatoManager is Ownable {

  address public gelatoCore;

  using Address for address payable;

  constructor(
    address _gelatoCore,
    IGelatoProviderModule[] memory _modules,
    TaskSpec[] memory _taskSpecs,
    address _executor

  )
    public
    payable
  {
    // Set GelatoCore Address
    gelatoCore = _gelatoCore;

    // Conduct Manager Setup
    IGelatoProviders(gelatoCore).multiProvide{value: msg.value } (
      _executor,
      _taskSpecs,
      _modules
    );
  }

  // This contract should receive ETH
  receive() external payable {}

  function setGelatoCore(address _gelatoCore)
    public
    onlyOwner
  {
    require(_gelatoCore != address(0), "GelatoCore: Cannot be Address Zero");
    gelatoCore = _gelatoCore;
  }

  // === GELATO INTERACTIONS ===

  // 1. Deposit ETH on gelato
  function provideFunds()
    public
    payable
  {
    IGelatoProviders(gelatoCore).provideFunds{value: msg.value}(address(this));
  }

  // 2. Withdraw ETH from gelato
  function withdrawFunds(uint256 _amount, address payable _receiver)
    public
    payable
    onlyOwner
  {
    uint256 realWithdrawAmount = IGelatoProviders(gelatoCore).unprovideFunds(_amount);
    _receiver.sendValue(realWithdrawAmount);
  }

  // 3. Set Standard Provider Module => Defines what kind of smart contract Gelato will interact with => Custom in this case
  function addProviderModules(IGelatoProviderModule[] memory _modules)
    public
    onlyOwner
  {
    IGelatoProviders(gelatoCore).addProviderModules(_modules);
  }

  // 4. Select Executor => Can be your own relayer or the standard gelato execution network (recommended)
  function assignExecutor(address _executor)
    public
    onlyOwner
  {
    IGelatoProviders(gelatoCore).providerAssignsExecutor(_executor);
  }

  // 5. Whitelist task spec
  function whitelistTaskSpecs(TaskSpec[] memory _taskSpecs)
    public
    onlyOwner
  {
    IGelatoProviders(gelatoCore).provideTaskSpecs(_taskSpecs);
  }

  // 6. Submit Tasks
  function submitTask(
    Provider memory _provider,
    Task memory _task,
    uint256 _expiryDate
  )
    public
    onlyOwner
  {
    IGelatoCore(gelatoCore).submitTask(_provider, _task, _expiryDate);
  }

  function submitTaskCycle(
    Provider memory _provider,
    Task[] memory _tasks,
    uint256 _expiryDate,
    uint256 _cycles  // how many full cycles should be submitted
  )
    public
    onlyOwner
  {
    IGelatoCore(gelatoCore).submitTaskCycle(_provider, _tasks, _expiryDate, _cycles);
  }

  function submitTaskChain(
    Provider memory _provider,
    Task[] memory _tasks,
    uint256 _expiryDate,
    uint256 _sumOfRequestedTaskSubmits  // see IGelatoCore for explanation
  )
    public
    onlyOwner
  {
    IGelatoCore(gelatoCore).submitTaskChain(_provider, _tasks, _expiryDate, _sumOfRequestedTaskSubmits);
  }

}

// Gelato Types
export class GelatoProvider {
    addr: string
    module: string

    constructor({
        addr: string,
        module: string
    })
}

export class Condition {
    inst: string
    data: string

    constructor({
        inst: string,
        data: string
    })
}

export enum Operation {
    Call,
    Delegatecall,
}

export enum DataFlow {
    None,
    In,
    Out,
    InAndOut,
}

export class Action {
    addr: string
    data: string
    value: BigNumber
    operation: Operation
    termsOkCheck: boolean
    dataFlow: DataFlow

    constructor({
        addr: string,
        data: string,
        value: BigNumber,
        operation: Operation,
        termsOkCheck: boolean,
        dataFlow: DataFlow
    })
}

export class Task {
    conditions: Condition[]
    actions: Action[]
    selfProviderGasLimit: BigNumber
    selfProviderGasPriceCeil: BigNumber

    constructor(
        conditions: Condition[],
        actions: Action[],
        selfProviderGasLimit: BigNumber,
        selfProviderGasPriceCeil: BigNumber
    )
}

export class TaskReceipt {
    id: number
    userProxy: string
    provider: GelatoProvider
    index: number
    tasks: Task[]
    expiryDate: number
    cycleId: number
    submissionsLeft: number

    constructor(
        id: number,
        userProxy: string,
        provider: GelatoProvider,
        index: number,
        tasks: Task[],
        expiryDate: number,
        cycleId: number,
        submissionsLeft: number
    )
}

export interface TaskReceiptWrapper {
    user: string
    taskReceipt: TaskReceipt
    submissionHash: string
    status: string
    submissionDate: number
    selectedExecutor: string
    executionDate: number
    executionHash: string
    selfProvided: boolean
}

export enum TaskReceiptStatus {
    awaitingExec,
    execSuccess,
    execReverted,
    canceled,
    expired,
}
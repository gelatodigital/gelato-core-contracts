// Gelato Types
export class GelatoProvider {
    addr: string
    module: string

    constructor({
        addr,
        module
    }: {
        addr: string
        module: string
    }) {
        this.addr = addr
        this.module = module
    }
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

export class Condition {
    inst: string
    data: string

    constructor({
        inst = "0x0000000000000000000000000000000000000000000000000000000000000000",
        data = "0x0000000000000000000000000000000000000000000000000000000000000000"
    }: {
        inst?: string
        data?: string
    }) {
        this.inst = inst
        this.data = data
    }
}

export class Action {
    addr: string
    data: string
    value: number
    operation: Operation
    termsOkCheck: boolean
    dataFlow: DataFlow

    constructor({
        addr,
        data = "0x0000000000000000000000000000000000000000000000000000000000000000",
        value = 0,
        operation,
        termsOkCheck = false,
        dataFlow = DataFlow.None
    }: {
        addr: string
        data?: string
        value?: number
        operation: Operation
        termsOkCheck?: boolean
        dataFlow?: DataFlow
    }) {
        this.addr = addr
        this.data = data
        this.operation = operation
        this.dataFlow = dataFlow
        this.value = value
        this.termsOkCheck = termsOkCheck
    }
}

export class Task {
    conditions: Condition[]
    actions: Action[]
    selfProviderGasLimit: number
    selfProviderGasPriceCeil: number

    constructor({
        conditions = [] as Condition[],
        actions,
        selfProviderGasLimit = 0,
        selfProviderGasPriceCeil = 0,
    }: {
        conditions?: Condition[],
        actions: Action[],
        selfProviderGasLimit?: number,
        selfProviderGasPriceCeil?: number
    }) {
        this.conditions = conditions
        this.actions = actions;
        this.selfProviderGasLimit = selfProviderGasLimit
        this.selfProviderGasPriceCeil = selfProviderGasPriceCeil
    }
}

interface TaskReceiptParams {
    id: number,
    userProxy: string,
    provider: GelatoProvider,
    index: number,
    tasks: Task[],
    expiryDate: number,
    cycleId: number,
    submissionsLeft: number
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

    constructor({
        id = 0,
        userProxy,
        provider,
        index = 0,
        tasks = [] as Task[],
        expiryDate = 0,
        cycleId = 0,
        submissionsLeft = 1
    }: {
        id?: number,
        userProxy: string,
        provider: GelatoProvider,
        index?: number,
        tasks?: Task[],
        expiryDate?: number,
        cycleId?: number,
        submissionsLeft?: number
    }) {
        this.id = id
        this.userProxy = userProxy
        this.provider = provider
        this.index = index
        this.tasks = tasks
        this.expiryDate = expiryDate
        this.cycleId = cycleId
        this.submissionsLeft = submissionsLeft
    }


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
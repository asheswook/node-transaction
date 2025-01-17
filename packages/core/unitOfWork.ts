export interface TransactionContext {
    execute(query: string, params: any[]): Promise<any>;
}

export abstract class AbstractUnitOfWork<Tx extends TransactionContext> {
    abstract beginTransaction(): Promise<Tx>;
    abstract commitTransaction(tx: Tx): Promise<void>;
    abstract rollbackTransaction(tx: Tx): Promise<void>;
}
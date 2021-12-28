export type status = 'pending' | 'completed';

export interface Todo {
    status: status,
    description: string
}

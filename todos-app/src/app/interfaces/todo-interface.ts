export type status = 'pending' | 'completed';

export interface Todo {
    id: string,
    status: status,
    description: string
}

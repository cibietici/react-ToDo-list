export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
    typr: CREATE_TODO,
    payload: { text },
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    typr: REMOVE_TODO,
    payload: { text },
});
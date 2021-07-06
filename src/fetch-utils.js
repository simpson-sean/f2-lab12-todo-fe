import request from 'superagent';

const URL = "https://f2-lab12-todo-list.herokuapp.com"

export async function signup(email, password) {
    const data = await request
        .post(`${URL}/auth/signup`)
        .send({
            email: email,
            password: password,
        })

    return data.body.token;

}

export async function login() {


}

export async function getTodo(token) {
    const data = await request
        .get(`${URL}/api/todo`)
        .set('Authorization', token)
    
    return data.body;

}

export async function addTodo(task, token) {
    const data = await request
        .post(`${URL}/api/todo`)
        .send({
            task: task,
            importance: '',
            })
        .set('Authorization', token);

    return data.body.token;

}

export async function completeTodo() {


}
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

export async function getTodo() {


}

export async function addTodo() {


}

export async function completeTodo() {


}
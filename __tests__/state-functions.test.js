
import { toggleDone } from '../app/state-functions';
import { deleteTodo } from '../app/state-functions';

// describes suite of test cases enmerated by 'it' functions

describe('Addition', () => {
    it('knows that 2 andS 2 make 4', () => {
        expect(2 + 2).toBe(4);
    })
})

//function name
describe('toggleDone', () => {
    //when you type the text below
    describe('when given an incomplete todo', () => {
        //it completes the action marked after it
        it('marks the todo as completed', () => {

        })
    })
})

test('toggleDone completes an incomplete todo', () => { })

const startState = {
    todos: [{ id: 1, done: false, name: 'Buy Milk' }]
};

const finState = toggleDone(startState, 1)

expect(finState.todos).toEqual([
    {
        id: 1, done: true, name: 'Buy Milk'
    }
])

test('deleteToDo removes an item on todo list', () => {
    const startState = {
        todos: [{ id: 1, done: false, name: 'Buy Milk' }]
    };

    const finState = deleteTodo(startState, 1)

    expect(finState.todos).toEqual([])

})



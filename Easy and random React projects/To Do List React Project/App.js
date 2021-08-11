import React from 'react';
import TodosData from './TodosData';
import TodoItem from './TodoItem';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: TodosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
   handleChange(id) {
       this.setState((prevState) => {
           const updatedState = prevState.todos.map((todo) => {
           if (todo.id === id) {
               todo.completed = !todo.completed
            }
            return todo
           })
           return {
               todos: updatedState
           }
       })
    
   }
    render() {
        const TodoItems = this.state.todos.map(item => <TodoItem key={item.id} handleChange={this.handleChange} item={item}/>)
        
        return (
            <div>
            {TodoItems}
            </div>
        )
    }
}


export default App;
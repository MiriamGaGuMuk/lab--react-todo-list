import React, { Component } from 'react';
import './App.css';
// import Sidebar from './Component/Sidebar';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          todoValue: "",
          filterType: "All",
          todos: [],
      }
  }

  handleChange = (event) => {
    event.preventDefault()
      this.setState({
          todoValue: event.target.value,
      })
  }

  handleClick = (event) => {
      event.preventDefault();
      if (this.state.todoValue !== "") {
          const todo = {
              id: Date.now(),
              text: this.state.todoValue,
              done: false,
          }
          this.setState({
              todoValue: "",
              todos: [todo, ...this.state.todos],
              
          })
          
      }
      
  }

  handleToggle = (id) => {
  
      this.setState((prevState) => {
          return {
              todos: prevState.todos.map((item, i) => {
                  if (item.id === id) {
                      return {
                          ...item,
                          done: !prevState.todos[i].done,
                      }
                  }
                  return item;
              })
          }
      })
  }

  handleDelete = (id) => {
      this.setState({
          todos: this.state.todos.filter(item => item.id !== id)
      })
  }

  deleteAll = () => {
      this.setState({
          todos: this.state.todos.filter(item => !item.done)
      })
  }

  getVisibleTodos = () => {

      const filterType = this.state.filterType;
      let filterState = null;
      switch (filterType) {
          case "Complited":
              return filterState = this.state.todos.filter(item => item.done);
          case "Incompleted":
              return filterState = this.state.todos.filter(item => !item.done);
          default:
              return filterState = this.state.todos;
      }
  }

  setActiveFilter = (text) => {
      this.setState({
          filterType: text,
      })
  }

  render() {
      return (
          <div className="container">
          {/* <Sidebar/> */}
                <Form 
                  countTodo={this.state.todos.length}
                  handleDelete={this.handleDelete} 
                  handleToggle={this.handleToggle}
                    
                   handleChange={this.handleChange} 
                   todoValue={this.state.todoValue} 
                   todos={this.getVisibleTodos()}
                   />
              <Sidebar setActiveFilter={this.setActiveFilter} 
                   deleteAll={this.deleteAll} 
                   filter={this.state.filterType}
                   handleClick={this.handleClick}
                   />
          </div>
      )
  }
}

class Sidebar extends Component {
    
  isActive = (text) => {
      let filter = this.props.filter === text ? "active" : "";
      return `sidebar__button ${filter}`
  }

  render() {
      return (
          <section className="sidebar">
              <input id="searchFor" placeholder="Search"/>
              <Button className={this.isActive}  text="All Task" setActiveFilter={this.props.setActiveFilter} />
              <Button className={this.isActive}  text="Complited" setActiveFilter={this.props.setActiveFilter}/>
              <Button className={this.isActive} text="Incompleted" setActiveFilter={this.props.setActiveFilter}/>
              <ButtonDelete className={"sidebar__button"} deleteAll={this.props.deleteAll} text="Delete "/>
              <button className="sidebar__button" type="submit" onClick={this.props.handleClick}>+ New Task</button>
          </section>
      )
  }
}

const ButtonDelete = ({text, className, deleteAll}) => {
  return <button className={`${className} deleteAll`} onClick={() => deleteAll()}>{text}</button>
}

const Button = ({className, text, setActiveFilter}) => {
  return <button className={className(text)} onClick={() => setActiveFilter(text)}>{text}</button>
}
  
  class Form extends Component {
    render() {
        return (
            <form className="form">
             <div className="Headers">
            <header className="header">
                <h1>Todo List</h1>
                <h3>All To-Do {this.props.countTodo}</h3>
                {/* <h3>{this.props.date}</h3> */}
            </header>
          </div>
                <input type="text" className="form__input" 
                placeholder="Add todo" onChange={this.props.handleChange} value={this.props.todoValue}/>
                
                <Todo 
                todos={this.props.todos}
                handleToggle={this.props.handleToggle} 
                handleDelete={this.props.handleDelete}
                />
            </form>
        )
    }
  }
  
  class Todo extends Component {
    render() {
        return (
            <ul className="todos-list">
                {
                    this.props.todos.map((item) => {
                        return (
                            <li className="todo-item" key={item.id} onClick={() => this.props.handleToggle(item.id)}>
                                <span className={item.done ? "todo-item__name disabled" : "todo-item__name"}>{item.text}</span>
                                <span className="todo-item__delete-button" onClick={() => this.props.handleDelete(item.id)}>×</span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
  }

export default App;



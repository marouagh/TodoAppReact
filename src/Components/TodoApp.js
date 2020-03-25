import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
export default class TodoApp extends Component {
    state={
        myInput:"",
        listTodo:[]
        
    }
    handleChange=(event)=>{
        this.setState({
            myInput:event.target.value
            
        })
        
    }
    handleAdd=(event)=>{
        event.preventDefault();
        if(this.state.myInput){
            this.setState({
                listTodo:[...this.state.listTodo,{todo:this.state.myInput, isComplete:false}],myInput:""
            })
        }
        else{
            alert('write something')
        }  
    }
    handleDelete=(a)=>{
        this.setState({
            listTodo:this.state.listTodo.filter((el,i)=> a!== i)
        })
    }
    handleComplete=(b)=>{
        this.setState({
            listTodo: this.state.listTodo.map((el, i)=> (b===i)?{todo : el.todo ,isComplete:!el.isComplete}:el)
        })
    }
    render() {
        
        return (
            <div>
                <div className="part1">
                <h1>To-Do App!</h1><br/>
                <h5>Add New To-Do</h5>
                <form >
                    <input class="txt_input" placeholder="Enter New task" size="100" value={this.state.myInput} onChange={this.handleChange}></input>
                    
                    <button class="add_btn" type='submit' onClick={this.handleAdd}>Add</button>
                </form>
                </div>
                <div className="part2">
                <h2>Lest's get some work done!</h2>
                <ul className="u_list">
                
                    {
                        this.state.listTodo.map((el,i)=>
                        <li key={i}>
                            <span className='btns'>
                            <Button className='btn' variant="outline-secondary" onClick={()=>this.handleDelete(i)}>Delete</Button>
                            <Button className='btn' variant="outline-secondary" onClick={()=>this.handleComplete(i)}>{el.isComplete ? 'Unodo' : 'Complete'}</Button>
                            </span>
                            <span style={{textDecoration:(el.isComplete ? "line-through":"")}}>{el.todo}</span>
                        </li>
                        )
                    }
                </ul>
                </div>
            </div>
        )
    }
}

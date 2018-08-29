import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['learn react', 'learn english']
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入数据</label>
                    <input 
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>add</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, idx)=>{
            return (
                <TodoItem 
                    idx={idx}
                    key={idx}
                    content={item} 
                    handleItemDelete={this.handleItemDelete}
                />
            )
        })
    }

    handleInputChange(ev){
        const value = ev.target.value;
        this.setState(()=>({
            inputValue: value
        }))
    }
    // 增加待办事项
    handleBtnClick() {
        this.setState((prevState)=>({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }
    // 删除待办事项
    handleItemDelete(idx){
        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(idx, 1);
            return {list};
        })
    }
}
export default TodoList;

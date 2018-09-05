import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store';
// import axios from 'axios';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange);
    }

    render(){
        return (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                    <Input 
                        value={this.state.inputValue} 
                        style={{width: '300px', marginRight: '10px'}} 
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleBtnClick}>submit</Button>
                </div>
                <List
                    style={{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, idx)=>(
                        <List.Item onClick={this.handleItemDelete.bind(this, idx)}>{item}</List.Item>
                    )}
                />
            </div>
        )
    }
    // componentDidMount() {
    //     axios.get('/api/todolist')
    //         .then((res)=>{
    //             console.log(res.data);
    //         })
    //         .catch(()=>{
    //             console.log('ajax /api/todolist 失败');
    //         })
    // }

    handleInputChange = (e) => {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        };
        store.dispatch(action);
    }

    handleStoreChange = ()=>{
        this.setState(store.getState());
    }

    handleBtnClick = ()=>{
        const action = {
            type: 'add_todo_item'
        };
        store.dispatch(action);
    }

    handleItemDelete(idx){
        const action = {
            type: 'delete_todo_item',
            idx
        };
        store.dispatch(action);
    }
}

export default TodoList;
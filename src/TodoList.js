import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators';
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

    handleStoreChange = ()=>{
        this.setState(store.getState());
    }

    // 输入更新
    handleInputChange = (e) => {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    // 增添任务
    handleBtnClick = ()=>{
        const action = getAddItemAction();
        store.dispatch(action);
    }
    // 删除任务
    handleItemDelete(idx){
        const action = getDeleteItemAction(idx);
        store.dispatch(action);
    }
}

export default TodoList;

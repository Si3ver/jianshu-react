import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    render() {
        const { content } = this.props;
        return (
            <li onClick={this.handleClick}>
                {content}
            </li>
        )
    }

    // 性能优化，减少子组件的刷新次数
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.content !== this.props.content;
    }

    handleClick(){
        const {handleItemDelete, idx} = this.props;
        handleItemDelete(idx);
    }
}

// 属性类型校验
TodoItem.propTypes = {
    idx: PropTypes.number,
    content: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    handleItemDelete: PropTypes.func
}

export default TodoItem;

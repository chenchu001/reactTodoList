import React, {
    Component, Fragment
}
from 'react'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChang = this.handleInputChang.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        className = "input"
                        id = "insertArea" 
                        value = {this.state.inputValue}
                        onChange = {this.handleInputChang}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this._getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    // 监听input的变化
    handleInputChang(e) {
        const value = e.target.value
        this.setState(() => ({
            inputValue: value
        }))
    }

    // 提交
    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ""
        }))
    }

    //删除
    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return {
                list: list
            }
        })
    }

    _getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem 
                    content={item} 
                    key={index} 
                    index={index} 
                    deleteItem={this.handleItemDelete} 
                />
            )
        })
    }
}

export default TodoList
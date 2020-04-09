import React, { Component } from 'react'

export class Addtodo extends Component {
    state = {
        title: ''
    }

onSubmit = (e) => {
    e.prevent.Default();
    this.props.addTodo(this.state.title);

}

onChange = (e) => this.setState({ [e.target.name]:
e.target.value });



    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                    <input 
                    type="text" 
                    name="title" 
                    placeholder="add Todo ..."
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.title}
                    onChange={this.onChange}
                    />
                    <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex:'1'}}
                    />
                </form>
            </div>
        )
    }
}

export default Addtodo

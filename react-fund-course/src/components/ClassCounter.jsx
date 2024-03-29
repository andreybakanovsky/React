import React from 'react';

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { /* инициализируем состояние в компоненте, 
                         для этого зарезервировано слово в компоненте - state */
            count: 0 // внутри состояния инициализируем поле count - это наш счетчик
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

    };

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    decrement() {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                <h1> {this.state.count} </h1>
                <button onClick={this.increment}> Increment </button>
                <button onClick={this.decrement}> Decrement </button>
            </div>
        )
    }
}
export default ClassCounter;
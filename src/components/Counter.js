import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: this.props.counter
        }

        this.increment = this.increment.bind(this);
        this.decriment = this.decriment.bind(this);
        this.random = this.random.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        if (this.state.count !== 30) {
            this.setState({
                count: this.state.count + 1
            });
        }
    }

    decriment() {
        if (this.state.count) {
            this.setState({
                count: this.state.count - 1 
            });
        }
    }

    random() {
        this.setState({
            count: this.state.count = Math.floor(Math.random() * (30 - 1) ) + 1
        });
    }

    reset() {
        this.setState({
            count: this.state.count = 0
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <div>
                    <button onClick={this.increment}>Inc</button>
                    <button onClick={this.decriment}>Dec</button>
                    <button onClick={this.random}>Ran</button>
                    <button onClick={this.reset}>Res</button>
                </div>
            </div>
        );
    }
}

export default Counter;
import React from 'react';
import {Button} from 'antd';

export default class Main extends React.Component {

    state = {num: 0};

    onToggle = () => {
        this.setState({num: (this.state.num + 1) % 2});
        console.log(this.state.num)
    }

    render() {
        return (
            <div>
                <h3>This is Main Page.</h3>
                <Button type="primary" onClick={this.onToggle}>toggle</Button>
            </div>
        )
    }
}
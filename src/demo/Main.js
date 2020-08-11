import React from 'react';
import {Button, Card, Radio, Modal} from 'antd';

export default class Main extends React.Component {

    state = {
        num: 0,
        isLoading: true,
        buttonSize: "default",
        showModalBasic: false,
        showModalDiy: false,
        showModalTop: false,
        showModalHorizen: false
    };

    onToggle = () => {
        this.setState({num: (this.state.num + 1) % 2});
        console.log(this.state.num)
    }

    handleCloseLoading = () =>{
        this.setState({
            isLoading:false
        });
    }

    handleRadioChange = (e) =>{
        this.setState({
            buttonSize: e.target.value
        })
    }

    handleModalOpen = (type) => {
        console.log(type)
        console.log(this.state.basic)
        this.setState({
            [type]: true
        })
    }

    render() {
        return (
            <div>
                <h3>This is Main Page.</h3>
                <Card title="第一行">
                <Button type="primary" onClick={this.onToggle} size={this.state.buttonSize} loading={this.state.isLoading}>toggle</Button>
                </Card>

                <Card title="按钮loading测试">
                    <Button type="primary" size={this.state.buttonSize} onClick={this.handleCloseLoading.bind(this)}>关闭loading</Button>
                </Card>

                <Card title="修改按钮尺寸">
                    <Radio.Group value={this.state.buttonSize} onChange={this.handleRadioChange.bind(this)}>
                        <Radio value="small">小按钮</Radio>
                        <Radio value="default">中按钮</Radio>
                        <Radio value="large">大按钮</Radio>
                    </Radio.Group>
                </Card>

                <Card title="基础模态框，弹框" style={{marginRight: '10px'}}>
                    <Button onClick={() => this.handleModalOpen("showModalBasic")}>基本弹框</Button>
                    <Button onClick={() => this.handleModalOpen('showModalDiy')}>自定义页脚弹框</Button>
                    <Button onClick={() => this.handleModalOpen('showModalTop')}>顶部200px弹框</Button>
                    <Button onClick={() => this.handleModalOpen('showModalHorizen')}>水平垂直居中</Button>
                </Card>
                <Modal title="React" visible={this.state.showModalBasic} onCancel={()=>{
                    this.setState({
                        showModalBasic: false
                    })
                }}>
                    <p>This is phraces.</p>
                </Modal>

                <Card title="信息确认框">

                </Card>

            </div>
        )
    }
}
import React from 'react'
import { Tabs, Card, Button, message } from "antd";
import { SyncOutlined, LoadingOutlined } from "@ant-design/icons";
import './style.css'

const TabPane = Tabs.TabPane;

 export default class TabPage extends React.Component{

    callback=(key)=>{
        message.info("当前选择的是:"+key)
    }

    componentWillMount(){
        const panes = [
            {
                title: 'Tab 1',
                content: 'Tab 1',
                key: '1'
            },
            {
                title: 'Tab 2',
                content: 'Tab 2',
                key: '2'
            },
            {
                title: 'Tab 3',
                content: 'Tab 3',
                key: '3'
            }
        ]
        this.setState({
            panes
        })
    }

     render(){
         return (
             <div>
                 <Card title="Tab 页签" className='card-wrap'>
                     <Tabs defaultActiveKey="1" onChange={this.callback}>
                         <TabPane tab='tab 1' key='1'>Tab1</TabPane>
                         <TabPane tab='tab 2' key='2'>Tab2</TabPane>
                         <TabPane tab='tab 3' key='3'>Tab3</TabPane>
                     </Tabs>
                 </Card>
                 <Card title="带logo 的 Tab 页签" className='card-wrap'>
                     <Tabs defaultActiveKey="1" onChange={this.callback}>
                         <TabPane tab={<span><SyncOutlined spin />tab 1</span>} key='1'>Tab1</TabPane>
                         <TabPane tab={<span><LoadingOutlined/>tab 2</span>} key='2'>Tab2</TabPane>
                         <TabPane tab={<span><SyncOutlined spin />tab 3</span>} key='3'>Tab3</TabPane>
                     </Tabs>
                 </Card>
                 <Card title="动态的 Tab 页签" className='card-wrap'>
                     // todo
                     <Tabs defaultActiveKey="1" onChange={this.callback}>
                         {
                             this.state.panes.map((pane) => {
                                return <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>
                             })
                         }
                     </Tabs>
                 </Card>
             </div>
         )
     }
 }
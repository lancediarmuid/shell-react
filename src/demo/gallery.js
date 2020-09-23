import React from 'react'
import { Card, Row, Col, Modal } from 'antd'

export default class Gallery extends React.Component {

    state = {
        visible: false
    }

    openImg = (imgPath) => {
        this.setState({
            visible: true,
            imgPath: '/gallery/' + imgPath
        })
    };

    render () {
        const imgs = [
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['11.png', '12.png', '13.png', '14.png', '15.png'],
        ]
        const imgList = imgs.map((list) => list.map((item) => {
            return <Card
                style={{ marginBottom: 10 }}
                hoverable
                cover={<img alt="img example" src={"/gallery/" + item} onClick={() => this.openImg(item)} />}
            >
                <Card.Meta title="Foo" description="Bar" />
            </Card>
        }))
        return (

            <div>
                <Row gutter={10}>
                    <Col md={5}>
                        {imgList[0]}
                    </Col>
                    <Col md={5}>
                        {imgList[1]}
                    </Col>
                </Row>

                <Modal
                    footer={null}
                    visible={this.state.visible}
                    title="图片预览"
                    onCancel={() => {
                        this.setState({
                            visible: false
                        })
                    }}
                    style={{ top: 20 }}
                >
                    <img alt="" src={this.state.imgPath} width='100%' height='100%' />
                </Modal>
            </div>

        )
    }
}
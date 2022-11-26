import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Space, Table, Tag, Modal, Col, Row, Button, Form, Input, Radio } from 'antd';
import { remove, update } from '../store/actions/actAccount'
import withUseFormHook from '../hocs/withUseFormHook'
class TableSV extends Component {
    state = {
        isModalOpen: false,
    }
    closeModal = () => {
        this.setState({
            isModalOpen: false
        })
    }
    updateSV = (sv) => {
        this.props.update(sv)
        this.closeModal()
    }
    render() {
        const { isModalOpen } = this.state
        let initKey = 0
        const dataSource = this.props.sinhViens.map(sv => {
            return { ...sv, key: initKey++ }
        })

        const columns = [
            {
                title: 'Mã sv',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: 'Tên SV',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Số điện thoại',
                dataIndex: 'phone',
                key: 'phone',
            },
            {
                title: 'Email',
                dataIndex: 'mail',
                key: 'mail',
            },
            {
                title: '',
                dataIndex: '',
                key: 'id',
                render: ({ id }) => (
                    <button onClick={() => {
                        this.props.remove(id)
                    }}>xóa</button>
                )

            },
            {
                title: '',
                dataIndex: '',
                key: 'id',
                render: (sv) => (
                    <button onClick={() => {
                        this.props.form.setFieldsValue(sv)
                        this.setState({
                            isModalOpen: true,
                        })
                    }}>sửa</button>
                )

            },
        ];
        const details = this.props.form.getFieldsValue()
        return (
            <div>
                <Table dataSource={dataSource} columns={columns} pagination={false} />;
                <Modal title="Basic Modal" open={isModalOpen} onCancel={this.closeModal} onOk={() => {
                    this.updateSV(this.props.form.getFieldsValue())
                }} destroyOnClose={true}>
                    <Form layout='vertical' form={this.props.form} >
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label="Mã SV" name="id" initialValue={details.id}>
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Họ tên" name='name' initialValue={details.name}>
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label="Số điện thoại" name='phone' initialValue={details.phone}>
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Email" name='mail' initialValue={details.mail}>
                                    <Input placeholder="input placeholder" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Modal >

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sinhViens: state.accountReducer.sinhViens
})
const mapDispatchToProps = dispatch => ({
    remove: (id) => dispatch(remove(id)),
    update: (sv) => dispatch(update(sv))
})


export default connect(mapStateToProps, mapDispatchToProps)(withUseFormHook(TableSV))
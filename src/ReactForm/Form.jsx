import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row, Button, Form, Input, Radio } from 'antd';
import { add } from '../store/actions/actAccount'
import withUseFormHook from '../hocs/withUseFormHook'
class FormSV extends Component {
    render() {

        return (
            <div>
                <Form layout='vertical' form={this.props.form} initialValues={{
                    id: 1, name: 'nam',
                }}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Mã SV" name="id">
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Họ tên" name='name'>
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Số điện thoại" name='phone'>
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Email" name='mail'>
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

                <Button style={{ backgroundColor: 'green', color: 'white' }} onClick={() => {
                    let sinhVien = this.props.form.getFieldsValue()
                    this.props.add(sinhVien)
                }}>Thêm sinh viên</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sinhViens: state.accountReducer.sinhViens
})

const mapDispatchToProps = dispatch => ({
    add: (sinhVien) => dispatch(add(sinhVien))
})

export default connect(mapStateToProps, mapDispatchToProps)(withUseFormHook(FormSV))
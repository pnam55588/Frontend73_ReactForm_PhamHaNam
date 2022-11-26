import { Form } from 'antd';
const withUseFormHook = (Component) => {
    return props => {
        const [form] = Form.useForm();;
        return <Component {...props} form={form} />
    }
}

export default withUseFormHook
import {React} from "react"
import {Row, Col, Space, Layout, PageHeader, Button} from 'antd';
import {setDelivery} from "../store/slices/cartSlice";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom"
const Main = () => {
    const dispatch=useDispatch()
    const history=useHistory()
    const set=(value)=>{
        dispatch(setDelivery(value))
        history.push('/pizzas')
    }
    return (
        <section className="section1-img">
            <div className="container-fluid bg-black">
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Pizza Shop"
                subTitle="Buy online pizza"
            ></PageHeader>
            </div>
            <Row>
                <Col span={24} offset={0} className="pt-300">
                    <Button className="w-30p h-2-4em f-w-bold b-radius-left blue-bg-btn fs-2em" onClick={()=>set(true)} type="primary" size="large">PICK UP</Button>
                    <span className="or-position-style">OR</span>
                    <Button className="w-30p h-2-4em f-w-bold b-radius-right red-bg-btn fs-2em" onClick={()=>set(false)}  type="primary" size="large">DELIVERY</Button>

                </Col>
                
            </Row>
            


        </section>
    )
}
export default Main

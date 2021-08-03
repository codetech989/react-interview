import {PageHeader, List, Avatar, Row,Col,Button} from "antd";
import React from "react";
import {useHistory} from "react-router-dom";
import {DeleteOutlined} from '@ant-design/icons';

import {useDispatch, useSelector} from "react-redux";
import {remove} from "../store/slices/cartSlice";
import {Link} from "react-router-dom";

const Checkout=()=>{
    const {addedItems,total,isPickup} = useSelector(({cart}) => cart)
    const history = useHistory()
    const dispatch=useDispatch()
    return(
        <>
        <PageHeader
            className="site-page-header"
            onBack={() => history.push('/pizzas')}
            title="Pizza Shop"
            subTitle="Buy online pizza"
        />
        <Row className="pt-100 ">
            <Col className="order-detail-style" span={8} offset={4}>
                <List
                    itemLayout="horizontal"
                    dataSource={addedItems}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={item.image} />}
                                title={
                                    <a className="fs-16" href="https://ant.design">{item.name}</a>
                                }

                                description={

                                    <div >
                                    <br/>
                                    <span><b>Size:</b>{item.size} </span>
                                    <span><b>Cheese:</b>{item.cheese?'Yes':'No'} </span>
                                    <span><b>Quantity:</b>{item.quantity} </span>
                                    <span onClick={()=>dispatch(remove(item.key))} style={{color:"red",cursor:"pointer"}}><DeleteOutlined/></span>
                                    </div>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Col>
            <Col className="order-summary-style" span={8}>
                <h3>Order Summary</h3>
                <br/>

                <h4>Total Amount</h4>
                <p>{total}$</p>
                <h4>Delivery</h4>
                <p>{isPickup?'Pick Up':'Delivery'}</p>
                {
                    addedItems.length !==0&&
                    <Button type="primary"><Link to="/thankyou">Place Order</Link></Button>
                }

            </Col>
        </Row>

        </>
    )
}
export default Checkout

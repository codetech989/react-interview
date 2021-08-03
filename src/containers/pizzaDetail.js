import {Link, useHistory, useParams} from "react-router-dom"
import {PageHeader, Card, Row, Col, InputNumber, Select, Space, Radio,message,Button} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined, ShoppingOutlined} from '@ant-design/icons';
import {getPizza} from "../store/slices/pizzaSlice";
import {addToCartQuantity} from "../store/slices/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";

const gridStyle = {
    width: '100%',
    textAlign: 'center',
};

const {Meta} = Card;
const PizzaDetail = () => {
    const {slug} = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const [quantity, setQuantity] = React.useState(1);
    const [size, setSize] = React.useState('small');
    const [cheese, setCheese] = React.useState(true);
    const {pizza} = useSelector(({pizzas}) => pizzas)

    useEffect(() => {
        dispatch(getPizza(slug))
    }, [])
    const onCheeseChange = e => {
        setCheese(e.target.value);
    };

    function onChange(value) {
        setQuantity(value)
    }

    const {Option} = Select;

    const addToCart=(pizza)=> {
        let cartObject = {
            pizza,
            quantity,
            size,
            cheese

        }
        dispatch(addToCartQuantity(cartObject))
        message.success('Pizza added to your cart');
    }

    function onSelectChange(value) {
        setSize(value)
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    return (
        <>
            <PageHeader
                className="site-page-header"
                onBack={() => history.push('/pizzas')}
                title="Pizza Shop"
                subTitle="Buy online pizza"
            />
            <Link className="style-btn-cout" to="/checkout">Checkout</Link>
            <Row>
                <Col span={3}></Col>
                <Col  span={4}>
                    <Card
                        cover={
                            <img
                                alt="example"
                                src={pizza.image}
                            />
                        }
                        >
                        <Meta
                            title={pizza.name}
                            description={pizza.price + "$"}
                        />
                    </Card>
                </Col>
                <Col span={3}></Col>
                <Col className="order-summary-style" span={8}>
                    <Card>
                        <Card.Grid style={gridStyle}>
                            <h4>Select Size</h4>
                            <Select
                                showSearch
                                style={{width: 200}}
                                placeholder="Select a size"
                                optionFilterProp="children"
                                onChange={onSelectChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                defaultValue="small"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="small">Small</Option>
                                <Option value="medium">Medium</Option>
                                <Option value="large">Large</Option>
                            </Select>

                            <>
                                <br/>
                                <h4>Quantity </h4>
                                <InputNumber min={1} max={10} defaultValue={1} onChange={onChange}/>
                            </>


                            <>
                                <br/>
                                <h4>Add Extra Cheese </h4>
                                <Radio.Group onChange={onCheeseChange} value={cheese}>
                                    <Radio value={true}>Yes</Radio>
                                    <Radio value={false}>No</Radio>
                                </Radio.Group>
                            </>
                            <>
                            <br/>
                            <button className="btn btn-primary" onClick={() => addToCart(pizza)}  key="Add To Cart">Add To Cart</button>
                            </>
                            
                        </Card.Grid>

                    </Card>
                    
                </Col>
                

            </Row>
        </>
    )

}
export default PizzaDetail

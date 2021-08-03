import { Card, Avatar,Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

const { Meta } = Card;
const PizzaCard=(props)=>{
    return(

        <Col span={4}>
            <Link to={"/pizza/"+props.pizza.slug}>
        <Card
            cover={
                <img
                    alt="example"
                    src={props.pizza.image}
                />
            }

        >
            <Meta
                title={props.pizza.name}
                description={props.pizza.price+"$"}
            />
        </Card>
            </Link>

        </Col>
    )


}
export default PizzaCard

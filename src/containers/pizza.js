import PizzaCard from "../components/PizzaCard";
import React from "react";
import {PageHeader, Row, Col} from "antd";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom"

const Pizza = () => {
    const {pizzas} = useSelector(({pizzas}) => pizzas)
    const history=useHistory()
    return (
        <>
            <div className="container-fluid bg-black">

            <PageHeader
                className="site-page-header"
                onBack={() => history.push('/')}
                title="Pizza Shop"
                subTitle="Buy online pizza"
            />
            </div>
            <Row className="p-100-50">
                {
                    pizzas.map(pizza =>
                        <>

                            <PizzaCard key={pizza.key} pizza={pizza}/>
                            <Col span={1}></Col>

                        </>
                    )
                }
            </Row>
        </>
    )
}
export default Pizza

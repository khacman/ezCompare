import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
class ComparisonTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : props.products
        };
        // console.log(props.products);
    }

    render() {
        const products = this.state.products;
        let productList = products.map(product => {
            return <p key={product.id}>{product.name}</p>
        });
        return (
            <Row>
                <Col xs={12}>
                    {productList}
                </Col>
            </Row>
        );
    }
}

export default ComparisonTable;
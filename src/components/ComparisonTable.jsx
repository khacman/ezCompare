import React, {Component} from "react";
import {Row, Col, Table} from "react-bootstrap";
class ComparisonTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : props.products,
            indexedData: ComparisonTable.indexData(props.products)
        };
        // console.log(props.products);
    }

    static indexData(productList) {
        let result = [];
        for (const prop in productList[0]) {
            const row = [prop];
            productList.forEach(product => {
                row.push(product[prop]);
            });
            result.push(row);
        }
        return result;
    }

    render() {
        const th = this.state.products.map(p => {
            return (<th key={p.id}>{p.name}</th>);
        });
        const indexes = this.state.indexedData.map((r, i) => {
            const values = r.map((v, j) => {
                return (
                    <td key={`${i}.${j}`}>{v}</td>
                );
            });
            return (
                <tr key={i}>
                    {values}
                </tr>
            );
        });
        return (
            <Row>
                <Col xs={12}>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Specs</th>
                                {th}
                            </tr>
                        </thead>
                        <tbody>
                            {indexes}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        );
    }
}

export default ComparisonTable;
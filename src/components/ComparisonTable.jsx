import "./comparisonTable.css";
import React, {Component} from "react";
import {Row, Col, Table, Button} from "react-bootstrap";

class ComparisonTable extends Component {
    // constructor(props) {
    //     super(props);
    //     // console.log(props.products);
    // }

    /**
     * Data structure transform service
     * @param [
     *      {name: "t2.micro",  memory: "1GB",     vCPU: "1 CPU"},      // Product 1
     *      {name: "c4.large",  memory: "3.75GB",  vCPU: "2 CPUs"},     // Product 2
     *      ...                                                         // Product n
     * ]
     * @returns [
     *      ["name",    "t2.micro", "c4.large", ...]
     *      ["memory",  "1GB",      "3.75GB",   ...]
     *      ["vCPU",    "1 CPU",    "2 CPUs",   ...]
     * ]
     */
    static indexData(productList, attributes) {

        let result = [];
        if (!attributes) {
            for (const prop in productList[0]) {
                const row = [prop];
                productList.forEach(product => {
                    row.push(product[prop]);
                });
                result.push(row);
            }
        } else {
            attributes.forEach(attribute => {
                const row = [attribute];
                productList.forEach(product => {
                    row.push(product[attribute]);
                });
            });
        }

        return result;
    }

    render() {
        const indexedData = ComparisonTable.indexData(this.props.products);
        const th = this.props.products.map(p => { // Add productColumns
            return (
                <th key={p.id}>
                    <img src={p.photo} alt={p.name}/>
                    <br/>
                    {p.name}
                </th>
            );
        });

        const mainInfo = ["cameraBack", "cameraFront", "condition", "model", "operatingSystem", "networkConnections", "ramMemory", "storageCapacityNew", "processorTpe", "warranty", "price"];
        const indexes = indexedData
            .filter(i => mainInfo.includes(i[0])) // Filter attributes
            .map((r, i) => { // Add table rows for each product's attributes

                const values = r.map((v, j) => { // Add columns for each row
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
                    <Row>
                        <h2>Comparison</h2>
                    </Row>
                    <Row>
                        <Table id="mainTable" striped responsive>
                            <thead>
                                <tr>
                                    <th>Specs</th>
                                    {th}
                                </tr>
                            </thead>
                            <tbody>
                                {indexes}
                                <tr>
                                    <td>Purchase</td>
                                    <td>
                                        <Button bsStyle="danger" bsSize="large" block>Buy now</Button>
                                    </td>
                                    <td>
                                        <Button bsStyle="danger" bsSize="large" block>Buy now</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default ComparisonTable;
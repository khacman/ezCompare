import React, {Component} from "react";
import {Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button} from "react-bootstrap";

class Compare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product1Url: "",
            product2Url: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = event.target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        // console.log(this.state);
    }

    submitHandler(e) {
        e.preventDefault();
        console.log(this);
        const body = {
            urls: [this.state.product1Url, this.state.product2Url]
        };
        const reqOptions = {
            method: "POST",
            headers: new Headers({"Content-Type": "application/json"}),
            body: JSON.stringify(body)
        };
        fetch("http://localhost:5000/getPages", reqOptions).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
        });
    }

    render() {
        return (
            <main>
                <Grid>
                    <Row>
                        <Col xs={12} md={6} >
                            <form onSubmit={this.submitHandler.bind(this)}>
                                <FormGroup controlId="product1">
                                    <ControlLabel>Product 1</ControlLabel>
                                    <FormControl
                                        name="product1Url"
                                        id="product1"
                                        type="text"
                                        value={this.state.product1Url}
                                        placeholder="Product 1 URL"
                                        onChange={this.handleInputChange}
                                    />
                                </FormGroup>
                                <FormGroup controlId="product2">
                                    <ControlLabel>Product 2</ControlLabel>
                                    <FormControl
                                        name="product2Url"
                                        id="product2"
                                        type="text"
                                        value={this.state.product2Url}
                                        placeholder="Product 2 URL"
                                        onChange={this.handleInputChange}
                                    />
                                </FormGroup>
                                <Button bsStyle="primary" type="submit">
                                    Compare
                                </Button>
                            </form>
                        </Col>
                    </Row>
                </Grid>
            </main>
        );
    }
}

export default Compare;
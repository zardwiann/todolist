

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../App.css'
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import React, { Component } from 'react';

class TODOLIST extends Component {
    constructor(props) {
        super(props);

        // Setting up state 
        this.state = {
            userInput: "",
            list: [],
        
        };

    }

    // Set a user input value 
    updateInput(value) {
        this.setState({
            userInput: value,
        });
    }
    // Add item if user input in not empty 
    addItem() {
        if (this.state.userInput !== "") {
            const userInput = {
                id: Math.random(),
                value: this.state.userInput,
            };
            const list = [...this.state.list];
            list.push(userInput);
            this.setState({
                list,
                userInput: "",
            });
        }
    }

    deleteItem(key) {
        const list = [...this.state.list];
        const updateList = list.filter((item) => item.id !== key);
        this.setState({
            list: updateList,
        });
    }

    editItem = (index) => {
        const todos = [...this.state.list];
        const editedTodo = prompt('Edit the todo:');
        if (editedTodo !== null && editedTodo.trim() !== '') {
            let updatedTodos = [...todos]
            updatedTodos[index].value = editedTodo
            this.setState({
                list: updatedTodos,
            });
        }
    }

    render() {
        return (
            <section className="container-app">
                <Container className='  '>
                    <Row
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "3rem",
                            fontWeight: "bolder",
                        }}
                    >
                        <h1 className='text-center mt-4 text-white'>TODO LIST APPLICATION</h1>
                    </Row>
                    <hr className='bg-white' />
                    <Row>
                        <Col md={{ span: 5, offset: 4 }} className='mt-4'>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="add task today....  "
                                    size="lg"
                                    value={this.state.userInput}
                                    onChange={(item) =>
                                        this.updateInput(item.target.value)
                                    }
                                    aria-label="add something"
                                    aria-describedby="basic-addon2"
                                />

                                <button
                                    className=" btn row buttonsave"
                                    onClick={() => this.addItem()}
                                >
                                    SAVE
                                </button>
                            </InputGroup>
                        </Col>
                    </Row>

                </Container>
                <hr className='text-white'></hr>
                <Row className='list-task-container'>
                    <Col md={{ span: 5, offset: 4 }}>
                        <ListGroup>
                            {/* map over and print items */}
                            {this.state.list.map((item, index) => {
                                return (
                                    <div key={index} className='m-2 ' >
                                        <ListGroup.Item
                                            action
                                            className=' mb-1 list-task'
                                            style={{
                                                display: "flex",
                                                justifyContent: 'space-between'
                                            }}
                                        >
                                            <h4 className='mt-2 shadow-lg'>   <i className="mx-2 bi bi-pen"></i> {item.value}</h4>
                                            <span>
                                                <button style={{ marginRight: "10px" }}

                                                    className=' btn button-del'
                                                    onClick={() => this.deleteItem(item.id)}>
                                                    <i className="bi bi-trash-fill fs-4"></i>
                                                </button>
                                                <button className='btn button-del'
                                                    onClick={() => this.editItem(index)}>
                                                    <i class="bi bi-pencil-square fs-4"></i>
                                                </button>
                                            </span>
                                        </ListGroup.Item>
                                    </div>
                                );
                            })}
                        </ListGroup>
                    </Col>
                </Row>

            </section>

        );
    }
}

export default TODOLIST; 
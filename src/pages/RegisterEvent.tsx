import React, { useState } from "react"
import { Container, Card, Form, Button, Row, Col, Badge } from "react-bootstrap"

type EventType = {
    eventName: string;
    venue: string;
    date: string;
    organizer: string;
    capacity: number;
    registeredStudents: string[];
}

type Props = {
    addEvent: (event: any) => void
}

export default function RegisterEvent({ addEvent }: Props) {

    const [studentInput, setStudentInput] = useState("")

    const [event, setEvent] = useState<EventType>({
        eventName: "",
        venue: "",
        date: "",
        organizer: "",
        capacity: 0,
        registeredStudents: []
    })

    const handlingInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;

        setEvent(prev => ({
            ...prev,
            [name]: name === "capacity" ? Number(value) : value
        }))
    }

    const addStudent = () => {

        if (studentInput.trim() === "") return;

        setEvent(prev => ({
            ...prev,
            registeredStudents: [
                ...prev.registeredStudents,
                studentInput
            ]
        }))

        setStudentInput("")
    }

    const removeStudent = (index: number) => {

        const updated = event.registeredStudents.filter(
            (_, i) => i !== index
        )

        setEvent(prev => ({
            ...prev,
            registeredStudents: updated
        }))
    }

    const handlingButton = (e: React.FormEvent) => {

        e.preventDefault()

        addEvent(event)

        alert("Event Successfully Registered")

        setEvent({
            eventName: "",
            venue: "",
            date: "",
            organizer: "",
            capacity: 0,
            registeredStudents: []
        })
    }

    return (

        <Container className="py-5">

            <Card className="shadow border-0">

                <Card.Header className="text-white text-center" style={{ background: "#1399c6" }}>
                    <h4>Register New Event</h4>
                </Card.Header>

                <Card.Body>
                    <Form onSubmit={handlingButton}>
                        <Row className="mb-3">
                            <Col>
                                <Form.Group>
                                    <Form.Label>Event Name</Form.Label>
                                    <Form.Control
                                        name="eventName"
                                        value={event.eventName}
                                        onChange={handlingInputChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Form.Label>Venue</Form.Label>
                                    <Form.Control
                                        name="venue"
                                        value={event.venue}
                                        onChange={handlingInputChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                        </Row>

                        <Row className="mb-3">
                            <Col>
                                <Form.Group>
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="date"
                                        value={event.date}
                                        onChange={handlingInputChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group>
                                    <Form.Label>Organizer</Form.Label>
                                    <Form.Control
                                        name="organizer"
                                        value={event.organizer}
                                        onChange={handlingInputChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-4">
                            <Form.Label>Capacity</Form.Label>
                            <Form.Control
                                type="number"
                                name="capacity"
                                value={event.capacity}
                                onChange={handlingInputChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Add Students</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control
                                        value={studentInput}
                                        onChange={(e) => setStudentInput(e.target.value)}
                                        placeholder="Student name"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button variant="success"onClick={addStudent}>
                                        Add
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Group>
                        <div className="mt-3">
                            {event.registeredStudents.map((student, index) => (
                                <Badge key={index} bg="primary" className="me-2 p-2">
                                    {student}
                                    <Button size="sm" variant="danger" className="ms-2" onClick={() => removeStudent(index)}>
                                        x
                                    </Button>
                                </Badge>

                            ))}

                        </div>

                        <div className="mt-4 text-center">

                            <Button type="submit" style={{ background: "#1399c6" }} className="border-0 px-5">
                                Register Event
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}
import EventCard from "../components/EventCard"
import { Container, Row, Col } from 'react-bootstrap'

type Props = {
  events: any[]
}

export default function ViewEvent({ events }: Props) {

  return (

    <Container fluid className="min-vh-100" style={{ backgroundColor: "#1399c642" }}>
      <Container className="py-5">
        <header className="mb-5 text-center">
          <h1 className="display-5 fw-bold text-primary">
            University Event Registration Dashboard
          </h1>
          <p className="text-muted">
            Manage and view upcoming campus events
          </p>
        </header>
        <Row className="g-4">
          {events.map((event, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <EventCard {...event} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import StudentList from './StudentList'
type EventProps = {
    eventName: string;
    venue: string;
    date: string;
    organizer: string;
    capacity: number;
    registeredStudents: string[];
}
export default function EventCard({ eventName, venue, date, organizer, capacity, registeredStudents }: EventProps) {
    return (
        <>
            <Card className="h-100 border-0 shadow-sm">
                <Card.Header className="text-primary-emphasis py-3 border-0" style={{ backgroundColor: "#1399c6"}}>
                    <Card.Title className="mb-0 fs-5 fw-semibold text-center text-white">{eventName}</Card.Title>
                </Card.Header>
                <Card.Body className="d-flex flex-column bg-white">
                    <ListGroup variant="flush" className="mb-3">
                        <ListGroup.Item className="px-0 border-0">
                            <small className="text-uppercase text-muted fw-bold d-block mb-1">Schedule & Location</small>
                            <div className="d-flex align-items-center mb-1">
                                <strong>Date:</strong> <span className="ms-2 text-secondary">{date}</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <strong>Venue:</strong> <span className="ms-2 text-secondary">{venue}</span>
                            </div>
                        </ListGroup.Item>

                        <ListGroup.Item className="px-0 border-0">
                            <small className="text-uppercase text-muted fw-bold d-block mb-1">Host Information</small>
                            <div><strong>Organizer:</strong> {organizer}</div>
                            <div><strong>Total Capacity:</strong> {capacity} Seats</div>
                        </ListGroup.Item>
                    </ListGroup>

                    <div className="mt-auto">
                        <h6 className="fw-bold mb-2 border-bottom pb-2">Registered Students ({registeredStudents.length})</h6>
                        <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
                            <StudentList students={registeredStudents} />
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer className="bg-transparent border-top-0 pb-3">
                    <div className="progress" style={{ height: '8px' }}>
                        <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: `${(registeredStudents.length / capacity) * 100}%` }}
                        ></div>
                    </div>
                    <small className="text-muted mt-1 d-block text-center">
                        {capacity - registeredStudents.length} spots remaining
                    </small>
                </Card.Footer>
            </Card>
        </>
    )
}
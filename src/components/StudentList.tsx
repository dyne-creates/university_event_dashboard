import ListGroup from 'react-bootstrap/ListGroup'

type StudentList = {
    students: string[];
}
export default function StudentList({ students }: StudentList) {
    return (
        <>
            <ListGroup variant="flush" className="small">
                {students.length > 0 ? (
                    students.map((student, index) => (
                        <ListGroup.Item key={index} className="py-1 px-0 border-0 text-muted">
                            • {student}
                        </ListGroup.Item>
                    ))
                ) : (
                    <ListGroup.Item className="py-1 px-0 border-0 text-muted italic">
                        No students registered yet.
                    </ListGroup.Item>
                )}
            </ListGroup>
        </>
    )
}


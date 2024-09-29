import CardComponent from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GridExample() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <CardComponent>
            <CardComponent.Img variant="top" src="holder.js/100px160" />
            <CardComponent.Body>
              <CardComponent.Title>Card title</CardComponent.Title>
              <CardComponent.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardComponent.Text>
            </CardComponent.Body>
          </CardComponent>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;

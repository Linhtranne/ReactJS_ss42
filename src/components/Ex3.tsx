import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Ex3() {
  return (
    <><p>Bai 3</p>
        <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
              <Card.Title>Mac pro 2018</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
          </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
              <Card.Title>Mac pro 2019</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
          </Card.Body>
      </Card>
        </div>
      </>
      
  );
}

export default Ex3;
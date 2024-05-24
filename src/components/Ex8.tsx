import Nav from 'react-bootstrap/Nav';

function Ex8() {
  return (
    <><p>Bai 8</p><Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
              <Nav.Link href="/home">Trang chủ</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link eventKey="link-1">Giới thiệu</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link eventKey="link-2">
                  Liên hệ
              </Nav.Link>
          </Nav.Item>
      </Nav></>
  );
}

export default Ex8;
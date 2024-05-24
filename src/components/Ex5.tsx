import Alert from 'react-bootstrap/Alert';

function AdditionalContentExample() {
  return (
    <><p>Bai 5</p><Alert variant="success">
          <Alert.Heading>Thêm tài khoản thành công</Alert.Heading>
      </Alert>
      <Alert variant="success">
          <Alert.Heading>Thêm tài khoản thất bại</Alert.Heading>
      </Alert>
      <Alert variant="success">
          <Alert.Heading>Tên không được để trống</Alert.Heading>
      </Alert>
      </>

  );
}

export default AdditionalContentExample;
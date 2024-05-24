import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Ex4() {
  return (
    <><p>Bai 4</p><DropdownButton id="dropdown-basic-button" title="Nguyễn Văn Nam">
          <Dropdown.Item href="#/action-1">Cài đặt</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Đổi mật khẩu</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Đăng xuất</Dropdown.Item>
      </DropdownButton></>
  );
}

export default Ex4;
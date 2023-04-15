import { Button } from 'react-bootstrap';

function MyButton(props) {
  function handleClick() {
    const { path } = props;
    window.location.href = path;
  }

  return (
    <Button variant="primary" onClick={handleClick}>Se connecter</Button>
  );
}

export default MyButton;

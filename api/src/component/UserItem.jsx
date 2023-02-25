import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function UserItem({name,email,phone,id}) {
  return (
    <Card className="card" style={{ width: "15rem" }}>
      <Card.Img
        variant="top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqRPBOeet4nYclhDLrDZwF2w2kBObHgLVdg&usqp=CAU"
      />
      <Card.Body>
        <Card.Text> {name}</Card.Text>
        <Card.Text> {email}</Card.Text>
        <Card.Text> {phone}</Card.Text>

       
      </Card.Body>
    </Card>
  );
}

export default UserItem;

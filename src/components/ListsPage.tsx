import { useContext, useState } from "react";
import { ListContext } from "../context/ListContext.tsx";
import {
  Button,
  Container,
  Form,
  ListGroup,
  ListGroupItem,
  Modal,
} from "react-bootstrap";
import SeeListButton from "./SeeListButton.tsx";

function ListsPage() {
  const listContext = useContext(ListContext);
  const [createName, setCreateName] = useState("");
  const [showCreate, setShowCreate] = useState(false);

  const handleCreateClose = () => setShowCreate(false);
  const handleCreateShow = () => setShowCreate(true);

  const handleCreateList = () => {
    if (
      createName !== "" &&
      Object.keys(listContext.lists).indexOf(createName) === -1
    )
      listContext.addList(createName);
    handleCreateClose();
  };

  return (
    <>
      <Container fluid className={"text-center w-25"}>
        <ListGroup as={"ol"} numbered className={"mb-4"}>
          {Object.keys(listContext.lists).map((key) => (
            <ListGroupItem as={"li"} key={key}>
              {key} <SeeListButton value={key} />{" "}
              <Button
                variant={"danger"}
                size={"sm"}
                onClick={() => listContext.removeList(key)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
        {Object.keys(listContext.lists).length === 0 && (
          <p>Vous n'avez pas de liste</p>
        )}
        <Button variant="primary" onClick={handleCreateShow}>
          Créer une liste
        </Button>

        <Modal show={showCreate} onHide={handleCreateClose}>
          <Modal.Header>
            <Modal.Title>Créer une liste</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entrer un nom"
                onChange={(e) => setCreateName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleCreateList();
                }}
                autoFocus
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCreateList}>
              Créer
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default ListsPage;

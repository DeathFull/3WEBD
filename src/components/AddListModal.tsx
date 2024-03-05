import { createPortal } from "react-dom";
import { Button, Form, Modal } from "react-bootstrap";
import { useContext, useState } from "react";
import { ListContext } from "../context/ListContext.tsx";

function AddListModal({ value }: { value: string }) {
  const listContext = useContext(ListContext);
  const [show, setShow] = useState(true);
  const [list, setList] = useState(Object.keys(listContext.lists)[0]);
  const modal = (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>Actions liste</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select
            aria-label="select"
            onChange={(e) => setList(e.currentTarget.value)}
          >
            {Object.keys(listContext.lists).map((list) => (
              <option key={list} value={list}>
                {list}
              </option>
            ))}
          </Form.Select>
          <Button
            onClick={() => {
              listContext.addToList(list, value);
            }}
          >
            Ajouter à la liste
          </Button>
          <Button onClick={() => listContext.removeFromList(list, value)}>
            Retirer de la liste
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
  return createPortal(modal, document.getElementById("root")!);
}

export default AddListModal;

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { updateSearch } from "./../../features/search/searchSlice";

export default function TopBar() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.value);

  const handleSearch = (e) => {
    dispatch(updateSearch(e.target.value));
  };

  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">React Tet App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleSearch}
              value={search}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

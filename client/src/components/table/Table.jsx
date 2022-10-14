import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import TableB from "react-bootstrap/Table";
import Item from "./Item";
import { useSelector } from "react-redux";

export default function Table() {
  const [files, setFiles] = useState([]);
  const search = useSelector((state) => state.search.value);

  useEffect(() => {
    const getData = async () => {
      const fetchFiltes = await fetch(
        `http://localhost:4000/files/data?fileName=${search}`
      );
      const files = await fetchFiltes.json();
      setFiles(() => [...files]);
    };
    getData();
  }, [search]);

  const iterateFiles = () => {
    return files.map(({ lines, file }) => {
      return (
        lines &&
        file &&
        lines.map((line, index) => {
          return <Item key={index} file={file} line={line} />;
        })
      );
    });
  };

  return (
    <Container>
      <TableB striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>{iterateFiles()}</tbody>
      </TableB>
    </Container>
  );
}

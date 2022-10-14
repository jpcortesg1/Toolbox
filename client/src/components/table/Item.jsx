import React from "react";

export default function Item({ file, line }) {
  return (
    <tr>
      <td>{file}</td>
      <td>{line.text}</td>
      <td>{line.number}</td>
      <td>{line.hex}</td>
    </tr>
  );
}

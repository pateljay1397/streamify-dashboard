import React from "react";
import { Table } from "react-bootstrap";
import { recentStreamsData } from "../Datasets/recentStreamsData";

const DataTable: React.FC = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Song Name</th>
          <th>Artist</th>
          <th>Date Streamed</th>
          <th>Stream Count</th>
          <th>User ID</th>
        </tr>
      </thead>
      <tbody>
        {recentStreamsData.map((row, index) => (
          <tr key={index}>
            <td>{row.songName}</td>
            <td>{row.artist}</td>
            <td>{row.dateStreamed}</td>
            <td>{row.streamCount}</td>
            <td>{row.userId}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;

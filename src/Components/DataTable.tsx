import React, { useState } from "react";
import { Table, Form, Row, Col } from "react-bootstrap";
import { recentStreamsData } from "../Datasets/recentStreamsData";

interface StreamData {
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
}

const DataTable: React.FC = () => {
  const [data, setData] = useState<StreamData[]>(recentStreamsData);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof StreamData;
    direction: string;
  } | null>(null);
  const [filter, setFilter] = useState({ artist: "", songName: "" });

  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const requestSort = (key: keyof StreamData) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key: keyof StreamData) => {
    if (!sortConfig) return null;
    if (sortConfig.key !== key) return null;
    if (sortConfig.direction === "ascending") {
      return <span>↑</span>;
    }
    return <span>↓</span>;
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const filteredData = sortedData.filter((item) => {
    return (
      item.artist.toLowerCase().includes(filter.artist.toLowerCase()) &&
      item.songName.toLowerCase().includes(filter.songName.toLowerCase())
    );
  });

  return (
    <div>
      <Form className="mb-3">
        <Row>
          <Col>
            <Form.Group controlId="filterArtist">
              <Form.Label>Filter by Artist</Form.Label>
              <Form.Control
                type="text"
                name="artist"
                value={filter.artist}
                onChange={handleFilterChange}
                placeholder="Enter artist name"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="filterSongName">
              <Form.Label>Filter by Song Name</Form.Label>
              <Form.Control
                type="text"
                name="songName"
                value={filter.songName}
                onChange={handleFilterChange}
                placeholder="Enter song name"
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => requestSort("songName")}>
              Song Name {getSortIcon("songName")}
            </th>
            <th onClick={() => requestSort("artist")}>
              Artist {getSortIcon("artist")}
            </th>
            <th onClick={() => requestSort("dateStreamed")}>
              Date Streamed {getSortIcon("dateStreamed")}
            </th>
            <th onClick={() => requestSort("streamCount")}>
              Stream Count {getSortIcon("streamCount")}
            </th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
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
    </div>
  );
};

export default DataTable;

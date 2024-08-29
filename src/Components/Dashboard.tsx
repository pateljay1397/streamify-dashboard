import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Container, Row, Col } from "react-bootstrap";
import MetricsCard from "./MetricsCard";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import Spinner from "./Spinner";
// import DataTable from "./DataTable";

const DataTable = React.lazy(() => import("./DataTable"));

const Dashboard: React.FC = () => {
  const metrics = useSelector((state: RootState) => state.metrics);

  return (
    <Container>
      <h1 className="my-4">Streamify Dashboard</h1>

      <Row className="mb-4">
        <Col xs={12} sm={6} md={4}>
          <MetricsCard title="Total Users" value={metrics.totalUsers} />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <MetricsCard title="Active Users" value={metrics.activeUsers} />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <MetricsCard title="Total Streams" value={metrics.totalStreams} />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <MetricsCard title="Revenue" value={`$${metrics.revenue}`} />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <MetricsCard title="Top Artist" value={metrics.topArtist} />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs={12} lg={6}>
          <LineChart />
        </Col>
        <Col xs={12} lg={6}>
          <PieChart />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs={12}>
          <BarChart />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col xs={12}>
          <Suspense fallback={<Spinner />}>{<DataTable />}</Suspense>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

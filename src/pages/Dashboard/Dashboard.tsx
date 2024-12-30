import React from "react";
import { Line, Pie } from "@ant-design/plots";  // Importing multiple chart types
import { Col, Row } from "antd";

const Dashboard = () => {
  // Sample data for the Line chart
  const lineData = [
    { date: '2020-01-01', value: 100 },
    { date: '2020-01-02', value: 200 },
    { date: '2020-01-03', value: 300 },
    { date: '2020-01-04', value: 400 },
    { date: '2020-01-05', value: 500 },
  ];

  // Sample data for the Pie chart
  const pieData = [
    { type: 'Category A', value: 27 },
    { type: 'Category B', value: 34 },
    { type: 'Category C', value: 67 },
    { type: 'Category D', value: 91 },
  ];

  // Line Chart configuration
  const lineConfig = {
    data: lineData,
    xField: 'date',
    yField: 'value',
    point: { size: 5, shape: 'diamond' },
    lineStyle: { stroke: '#5B8FF9', lineWidth: 2 },
  };

  // Pie Chart configuration
  const pieConfig = {
    data: pieData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.6,
    label: { type: 'spider', content: '{name} {percentage}' },
  };

  return (
    <div className="dashboard-container">
      <h1 className="text-center py-4">Dashboard</h1>
      <Row>
      <Col span={11}>
      {/* Line Chart */}
      <div className="chart-container">
        <h2>Line Chart</h2>
        <Line {...lineConfig} />
      </div>
      </Col>
      <Col span={11} offset={2}>
      {/* Pie Chart */}
      <div className="chart-container">
        <h2>Pie Chart</h2>
        <Pie {...pieConfig} />
      </div>
        
      </Col>
    </Row>
      
    </div>
  );
};

export default Dashboard;

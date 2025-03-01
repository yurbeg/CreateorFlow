import { useState, useEffect, useRef } from 'react';
import { BarChart, PieChart } from '@mui/x-charts';
const ChartsComponent = () => {
    const [barChartWidth, setBarChartWidth] = useState(700);
    const [pieChartWidth, setPieChartWidth] = useState(314);
    const barChartRef = useRef(null);
    const pieChartRef = useRef(null);

    useEffect(() => {
        const updateChartWidths = () => {
          if (barChartRef.current) {
            const containerWidth = barChartRef.current.offsetWidth;
            setBarChartWidth(containerWidth - 40);
          }
          if (pieChartRef.current) {
            const containerWidth = pieChartRef.current.offsetWidth;
            setPieChartWidth(containerWidth - 40);
          }
        };
    
        const resizeObserver = new ResizeObserver(updateChartWidths);
        
        if (barChartRef.current) resizeObserver.observe(barChartRef.current);
        if (pieChartRef.current) resizeObserver.observe(pieChartRef.current);
    
        return () => {
          resizeObserver.disconnect();
        };
      }, []);
    
    return (
      <div className="first_charts">
        <div className="BarChart">
          <span>TRANSITION STATE</span>
          <select>
            <option value="All">All</option>
          </select>
          <select>
            <option value="current">Current State</option>
          </select>
          <BarChart
          width={barChartWidth}
          height={250}
          borderRadius={13}
          series={[{ data: [1.5, 5.5, 4, 3.5, 2.5] }]}
          xAxis={[
            {
              scaleType: 'band',
              data: ['TASKS', 'KNOWLEDGE\nTRANSFER', 'PRODUCTION\nPARALLEL', "LIVE EXECUTION", "COMPLETED"],
              colorMap: {
                type: 'ordinal',
                colors: ['#1fc599', '#43bccd', '#6d32a5', '#f53361', '#f2a201'],
              },
              tickPlacement: "middle",
              categoryGapRatio: 0.7,
            },
          ]}
        />
        </div>
        <div className="pieChart">
          <span>DUE DATE</span>
          <select>
            <option value="All">All</option>
          </select>
          <div style={{ display: 'flex', alignItems: 'center', paddingLeft: "20px" }}>
            <div style={{ width: '150px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#43bccd',
                    marginRight: '5px',
                  }}
                />
                <p style={{ color: '#43bccd', fontSize: '12px' }}>Completed due date (3)</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#6d32a5',
                    marginRight: '5px',
                  }}
                />
                <p style={{ color: '#6d32a5', fontSize: '12px' }}>Nearing due date (2)</p>
              </div>
            </div>
            <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 5, color: "#43bccd" },
                  { id: 1, value: 2, color: "#6d32a5" },
                ],
                innerRadius: 55,
                outerRadius: 100,
                cx: 150,
                cy: 125,
              },
            ]}
            width={pieChartWidth}
            height={250}
          />
          </div>
        </div>
      </div>
    );
  };

  export default ChartsComponent
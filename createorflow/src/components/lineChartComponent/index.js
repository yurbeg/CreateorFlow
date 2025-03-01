import { useState, useEffect, useRef } from "react";
import { LineChart } from '@mui/x-charts';

const LineChartComponent = () => {
    const [chartWidth, setChartWidth] = useState(1200);
    const chartContainerRef = useRef(null);

    useEffect(() => {
        const updateWidth = () => {
            if (chartContainerRef.current) {
                const containerWidth = chartContainerRef.current.offsetWidth;
                setChartWidth(containerWidth - 40);
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <div className="linerChart" ref={chartContainerRef}>
            <span style={{ color: "#A3A6B9" }}>CYCLE TIME</span>
            <select>
                <option value="All">All phases</option>
            </select>
            <LineChart
                xAxis={[
                    {
                        scaleType: 'band',
                        data: ['TASKS', 'KNOWLEDGE\nTRANSFER', 'PRODUCTION\nPARALLEL', "LIVE EXECUTION"],
                    },
                ]}
                series={[
                    { curve: "linear", data: [9, 10, 20, 5], color: "#43bccd" },
                    { curve: "linear", data: [16, 4, 15, 18], color: "#6d32a5" },
                ]}
                width={chartWidth}
                height={300}
            />
        </div>
    );
};

export default LineChartComponent;
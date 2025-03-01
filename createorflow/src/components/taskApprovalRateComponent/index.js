import { useState, useEffect, useRef } from 'react';
import { BarChart } from "@mui/x-charts";

const TaskApprovalRateComponent = () => {
    const [chartWidth, setChartWidth] = useState(300);
    const chartContainerRef = useRef(null);

    useEffect(() => {
        const updateChartWidth = () => {
            if (chartContainerRef.current) {
                const containerWidth = chartContainerRef.current.offsetWidth;
                setChartWidth(containerWidth - 40);
            }
        };

        const resizeObserver = new ResizeObserver(updateChartWidth);

        if (chartContainerRef.current) {
            resizeObserver.observe(chartContainerRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div className='task_approval'>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <div style={{ fontSize: '13px', color: "#A3A6B9" }}>TASKS APPROVAL RATE</div>
                <select defaultValue="All phases" style={{ width: 120 }}>
                    <option value="All phases">All phases</option>
                </select>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: '150px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <div style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: '#43bccd',
                            marginRight: '5px'
                        }} />
                        <p style={{ color: '#43bccd', fontSize: '12px' }}>Reviewed tasks (26)</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: '#6d32a5',
                            marginRight: '5px'
                        }} />
                        <p style={{ color: '#6d32a5', fontSize: '12px' }}>Not reviewed tasks (18)</p>
                    </div>
                </div>
                <div
                    style={{ width: '60%' }}
                    ref={chartContainerRef}
                >
                    <BarChart
                        width={chartWidth}
                        height={300}
                        borderRadius={13}
                        series={[
                            { data: [71], color: '#43bccd' },
                            { data: [29], color: '#6d32a5' },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default TaskApprovalRateComponent;
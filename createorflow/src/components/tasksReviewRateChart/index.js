import { BarChart, PieChart } from '@mui/x-charts';

const TasksReviewRateChart = () => {
    return (
        <div className="first_charts">
            <div className="pieChart">
                <span>TASKS REVIEW RATE</span>
                <select>
                    <option value="All">All phases</option>
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
                            <p style={{ color: '#43bccd', fontSize: '12px' }}>Reviewed tasks (26)</p>
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
                            <p style={{ color: '#6d32a5', fontSize: '12px' }}>Not reviewed tasks (18)</p>
                        </div>
                    </div>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 26, color: "#43bccd" },
                                    { id: 1, value: 18, color: "#6d32a5" },
                                ],
                                innerRadius: 55,
                                outerRadius: 100,
                                cx: 150,
                                cy: 125,
                            },
                        ]}
                        width={314}
                        height={250}
                    />
                </div>
            </div>
            <div className="BarChart">
                <span>COMPLETION RATE</span>
                <select>
                    <option value="All">All</option>
                </select>
                <select>
                    <option value="current">Current State</option>
                </select>
                <BarChart
                    width={700}
                    height={250}
                    borderRadius={13}
                    series={[
                        { data: [4, 3, 5, 1], color: "#43bccd" },
                        { data: [1, 6, 3, 5], color: "#6d32a5" },
                        { data: [2, 5, 6, 7], color: "#f53361" },
                    ]}
                    xAxis={[
                        {
                            scaleType: 'band',
                            data: ['TASKS', 'KNOWLEDGE\nTRANSFER', 'PRODUCTION\nPARALLEL', "LIVE EXECUTION"],
                            tickPlacement: "middle",
                            categoryGapRatio: 0.7,
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default TasksReviewRateChart;
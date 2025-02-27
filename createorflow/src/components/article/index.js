import { FlagOutlined } from "@ant-design/icons"
import { BarChart, PieChart, LineChart } from '@mui/x-charts';
import { Switch, Pagination } from 'antd';
import RecentTransitionItem from "../recentTransitionsItem";
import { useState } from "react";
import high from "../../images/high.png"
import message from "../../images/message.png"
import normalIcon from "../../images/normal.png"
import paperclip from "../../images/paperclip.png"
import eyeIcon from "../../images/eyeIcon.png"
import uploadIcon from "../../images/uploadIcon.png"
import time from "../../images/time.png"
import done from "../../images/done.png"
import "./index.css"
const collapseArr = [{
    text: "UI/UX Designer",
    color: "#f53361",
    role: "Creator",
    status: "READY TO BE CONCLUDED"
},
{
    text: "Tech Lead",
    color: "#6d32a5",
    role: "Collaborator",
    status: "PRODUTION PARALLEL"
},
{
    text: "HR Manager",
    color: "#43bccd",
    role: "Transitor",
    status: "KNOWLEDGE TRANSFER"
}
]


const Article = () => {
    const [switchBgColor, setSwitchBgColor] = useState("#6d32a5")
    const onChange = (checked) => {
        if (checked) {
            setSwitchBgColor("#6d32a5")
        }
        else {
            setSwitchBgColor("#f5f5f6")
        }
    };
    const slideData = [
        {
            date: "OCT 6TH,2020",
            role: "UI / UX DESIGNER",
            title: "Title of the task with a short description",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            comments: 10,
            attachments: 5,
            priority: "Normal",
            criticality: "High",
        },
        {
            date: "OCT 7TH,2020",
            role: "Tech Lead",
            title: "Another task with a description",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            comments: 12,
            attachments: 3,
            priority: "High",
            criticality: "Medium",
        },
    ];
    const [currentPage, setCurrentPage] = useState(1);

    const slidesPerPage = 1;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const indexOfLastSlide = currentPage * slidesPerPage;
    const indexOfFirstSlide = indexOfLastSlide - slidesPerPage;

    const currentSlide = slideData.slice(indexOfFirstSlide, indexOfLastSlide)[0];
    const handleDotClick = (index) => {
        setCurrentPage(index + 1);
    };
    return (
        <div className="article_div">
            <div className="transition_div">
                <div>
                    <FlagOutlined style={{ color: "red", fontSize: "20px", marginRight: "20px" }} />
                    <div>
                        <h4>Transition ready to be conculded</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quidem praesentium          </p>
                    </div>
                </div>
                <div className="transition_buttons">
                    <button>ADD OTHER TASKS</button>
                    <button>CONCULDED TRANSITION</button>
                </div>
            </div>
            <div className="first_charts">

                <div className="BarChart">
                    <span>TRANSITION STATE</span>
                    <select>
                        < option value="All">All</option>

                    </select>
                    <select>
                        < option value="current">Current State</option>

                    </select>
                    <BarChart
                        width={700}
                        height={250}
                        borderRadius={13}


                        series={[{ data: [1.5, 5.5, 4, 3.5, 2.5] }]}
                        xAxis={[{
                            scaleType: 'band', data: ['TASKS', 'KNOWLEDGE\nTRANSFER', 'PRODACTION\nPARALLEL', "LIVE EXECUTION", "COMPLETED"],
                            colorMap: {
                                type: 'ordinal',
                                colors: ['#1fc599', '#43bccd', '#6d32a5', '#f53361', '#f2a201']
                            },
                            tickPlacement: "middle",

                            categoryGapRatio: 0.7,
                        }]}

                    />
                </div>
                <div className="pieChart">
                    <span>DUE DATE</span>
                    <select>
                        < option value="All">All</option>
                    </select>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 3, label: "Complated due date(3)", color: "#43bccd" },
                                    {
                                        id: 1, value: 2, label: "Complated due date(2)", color: "#6d32a5"
                                    },
                                ],
                                innerRadius: 55,
                                outerRadius: 100,
                                cx: 150,
                                cy: 125,
                            },
                        ]}
                        width={480}
                        height={250}
                    />
                </div>
            </div>
            <div className="linerChart">
                <LineChart
                    xAxis={[{ scaleType: 'band', data: ['TASKS', 'KNOWLEDGE\nTRANSFER', 'PRODACTION\nPARALLEL', "LIVE EXECUTION"], }]}
                    series={[
                        { curve: "linear", data: [9, 10, 20, 5], color: "#43bccd" },
                        { curve: "linear", data: [16, 4, 15, 18], color: "#6d32a5" },
                    ]}
                    width={1200}
                    height={300}
                />
            </div>
            <div className="first_charts">
                <div className="pieChart">
                    <span>TASKS REVIEW RATE</span>
                    <select>
                        < option value="All">All phases</option>
                    </select>
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 26, label: "Reviewed tasks (26)", color: "#43bccd" },
                                    {
                                        id: 1, value: 18, label: "Not reviewed tasks (18)", color: "#6d32a5"
                                    },
                                ],
                                innerRadius: 55,
                                outerRadius: 100,
                                cx: 150,
                                cy: 125,
                            },
                        ]}
                        width={480}
                        height={250}
                    />
                </div>
                <div className="BarChart">
                    <span>COMPLATION RATE</span>
                    <select>
                        < option value="All">All</option>

                    </select>
                    <select>
                        < option value="current">Current State</option>

                    </select>
                    <BarChart
                        width={700}
                        height={250}
                        borderRadius={13}
                        series={[{ data: [4, 3, 5, 1], color: "#43bccd" }, { data: [1, 6, 3, 5], color: "#6d32a5" }, { data: [2, 5, 6, 7], color: "#f53361" },]}
                        xAxis={[{
                            scaleType: 'band', data: ['TASKS', 'KNOWLEDGE\nTRANSFER', 'PRODACTION\nPARALLEL', "LIVE EXECUTION"],

                            tickPlacement: "middle",

                            categoryGapRatio: 0.7,
                        }]}

                    />
                </div>

            </div>
            <div className="recent_transitions">
                <div className="recent_transitions_title">
                    <span>RECENT TRANSITIONS</span>
                    <div>
                        <span>Hide complated </span><Switch defaultChecked onChange={onChange} style={{ backgroundColor: `${switchBgColor}`, marginLeft: "10px" }} />
                    </div>
                </div>
                {
                    collapseArr.map((item, i) => {
                        return <RecentTransitionItem text={item.text} color={item.color} role={item.role} status={item.status} key={i} />
                    })
                }

            </div>
            <div className="first_charts">
                <div className="review_tasks">
                    <div>
                        <span>RECENT TASKS TO REVIEW
                            <select>
                                < option value="All">All phases</option>
                            </select>
                        </span>

                        <Pagination
                            simple={{
                                readOnly: true,
                            }}
                            current={currentPage}
                            total={slideData.length}
                            pageSize={slidesPerPage}
                            onChange={handlePageChange}
                            defaultCurrent={1}
                        />

                    </div>

                    <div className="slide_container">
                        <div className="slide_container_header">
                            <h4>{currentSlide.date}</h4>
                            <h4>{currentSlide.role}</h4>
                        </div>
                        <h4 className="slide_container_title">{currentSlide.title}</h4>
                        <div className="slide_container_content">
                            <div>
                                <h4>Name of the project</h4>
                                <p>{currentSlide.description}</p>
                            </div>
                            <div>
                                <img src={uploadIcon} alt="Ulpoad Icon" />
                                <img src={eyeIcon} alt="Eye Icon" />
                            </div>
                        </div>
                        <div className="slide_container_footer">
                            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                                <img src={message} alt="messege icon" width={"17px"} height={"16px"} />
                                <p>{currentSlide.comments} comments</p>
                            </div>
                            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                                <img src={paperclip} alt="paperclip icon" width={"17px"} height={"16px"} />
                                <p>{currentSlide.attachments} attachments</p>
                            </div>
                            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                                <img src={normalIcon} alt="normal" width={"17px"} height={"16px"} />
                                <p>Normal priority</p>
                            </div>
                            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                                <img src={high} alt="high icon" width={"17px"} height={"16px"} />
                                <p>High criticality</p>
                            </div>
                        </div>
                        <div className="pagination-dots">
                            {slideData.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    style={{
                                        margin: '0 2px',
                                        cursor: 'pointer',
                                        width: "10px",
                                        height: "10px",
                                        border: "1px solid",
                                        backgroundColor: currentPage === index + 1 ? 'black' : 'white',
                                        borderRadius: '50%',
                                    }}
                                />
                            ))}
                        </div>

                    </div>

                </div>
                <div className="current_state">
                    <span>CURRENT STATE
                        <select>
                            < option value="All">All </option>
                        </select>
                    </span>
                    <div className="current_state_content">
                        <div className="current_state_content_item">
                            <img src={done} alt="done" />
                            <div >
                                <h4>79%</h4>
                                <p>COMPLETED</p>
                            </div>
                        </div>
                        <div className="current_state_content_item">
                            <img src={time} alt="days" />
                            <div>
                                <h4>22</h4>
                                <p>DAYS TO GO</p>
                            </div>
                        </div>
                    </div>
                    <div className="current_state_content_item2">
                        <div className="current_state_content_item2_child">
                            <p>Tasks</p>
                            <p>36/48</p>
                        </div >
                        <div className="current_state_content_item2_child">
                            <p>Completion rate</p>
                            <p>-8%</p>
                        </div>
                        <div className="current_state_content_item2_child">
                            <p>Transition timeframe</p>
                            <p>56 days</p>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '10px', borderRadius: '5px', overflow: 'hidden', display: 'flex', marginTop: "20px" }}>
                        <div
                            style={{
                                width: '60%',
                                backgroundColor: "#43bccd",
                                height: '100%',
                            }}
                        />
                        <div
                            style={{
                                width: '20%',
                                backgroundColor: '#6d32a5',
                                height: '100%',
                            }}
                        />
                        <div
                            style={{
                                width: '20%',
                                backgroundColor: '#f53361',
                                height: '100%',
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            marginTop: '10px',
                        }}
                    >
                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            <div
                                style={{
                                    display: "flex",
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: '#43bccd',
                                }}
                            />
                            <p style={{ fontSize: '12px' }}>Current state</p>
                        </div>

                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            <div
                                style={{
                                    display: "flex",

                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: '#6d32a5',
                                }}
                            />
                            <p style={{ fontSize: '12px' }}>Agreed timing</p>
                        </div>

                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            <div
                                style={{

                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: '#f53361',
                                }}
                            />
                            <p style={{ fontSize: '12px' }}>Time left</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: '40%', backgroundColor: "white", borderRadius: "30px", marginTop: "20px", padding: "10px 20px" }}>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                    <div style={{
                        fontSize: '13px', color: "#A3A6B9"
                    }}>TASKS APPROVAL RATE</div>
                    <select defaultValue="All phases" style={{ width: 120 }}>
                        <option value="All phases">All phases</option>
                    </select>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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

                    <div style={{ width: '60%' }}>
                        <BarChart
                            width={300}
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
        </div>
    )
}
export default Article
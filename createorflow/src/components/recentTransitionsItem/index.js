import { Collapse, Progress } from "antd";
import { MessageOutlined, DownOutlined, UploadOutlined, EyeOutlined, CheckOutlined } from "@ant-design/icons"
import "./index.css"
const RecentTransitionItem = ({ text, color, role, status }) => {

    const items = [
        {
            key: '1',
            label: <div className="collapse_container_label">
                <h3>{text}</h3>
                <div>
                    <h5 style={{ opacity: "0.3" }}>MY ROLE</h5>
                    <h4>{role}</h4>
                </div>
                <div>
                    <h5 style={{ opacity: "0.3" }}> STATUS</h5>
                    <div style={{
                        backgroundColor: `${color}`,
                        color: "white",
                        padding: "5px 15px",
                        borderRadius: "12px"
                    }}>{status}</div>
                </div>
                <div>
                    <h5 style={{ opacity: "0.3" }}>DAYS TO GO</h5>
                    <h4>26</h4>
                </div>
                <div>
                    <span style={{ marginRight: "10px" }}>15</span>
                    <MessageOutlined />
                </div>
            </div>,
            children:
                <div className="collapse_children">
                    <div className="collapse_children_left">
                        <div className="collapse_children_left_names">
                            <div>
                                <h5 style={{ opacity: "0.3" }}>CEATOR</h5>
                                <h4>John Adams</h4>
                            </div>
                            <div>
                                <h5 style={{ opacity: "0.3" }}>COLLABORATOR(S)</h5>
                                <h4>NIshant Mehra | Lu Shih</h4>
                            </div>
                            <div>
                                <h5 style={{ opacity: "0.3" }}>TRANSITOR</h5>
                                <h4>Sammy Jo</h4>
                            </div>


                            <div>
                                <h5 style={{ opacity: "0.3" }}>TRANSITEE(S)</h5>
                                <h4>Vladimir Nikolsky</h4>
                            </div>
                        </div>
                        <div className="collapse_children_left_progress">
                            <div style={{ color: `${color}`, fontSize: "12px" }}>COMPLETION PERCENTAGE</div>
                            <Progress percent={100}
                                percentPosition={{
                                    align: 'center',
                                    type: 'inner',
                                }}
                                size={[800, 15]}
                                strokeColor={color} style={{ width: "80%" }} />
                        </div>
                        <div className="collapse_children_left_numbers">
                            <div>
                                <h5 style={{ opacity: "0.3" }}>TASKS</h5>
                                <h4>26</h4>
                            </div>
                            <div>  <h5 style={{ opacity: "0.3" }}>KNOWLEDGE TRANSFER</h5>
                                <h4>12</h4></div>
                            <div>  <h5 style={{ opacity: "0.3" }}>PRODACTION PARALLEL</h5>
                                <h4>6</h4></div>
                            <div>
                                <h5 style={{ opacity: "0.3" }}>LIVE EXECUTION</h5>
                                <h4>N/A</h4>
                            </div>
                        </div>
                    </div>
                    <div className="collapse_children_right">
                        <UploadOutlined style={{ fontSize: "20px", borderRadius: "100%", border: `1px solid ${color}`, padding: "10px", color: `${color}` }} />
                        <EyeOutlined style={{ fontSize: "20px", borderRadius: "100%", border: `1px solid ${color}`, padding: "10px", backgroundColor: `${color}`, color: "white" }} />
                        <CheckOutlined style={{ fontSize: "20px", borderRadius: "100%", border: "1px solid", padding: "10px", backgroundColor: '#2b0f4d', color: "white" }} />
                    </div>
                </div>

        },
    ];
    return (
        <div className="collapse_container">
            <Collapse items={items} style={{ borderLeft: `15px solid ${color}`, borderRadius: "20px" }} expandIconPosition="end"
                expandIcon={({ isActive }) => <DownOutlined style={{ fontSize: "20px" }} rotate={isActive ? 180 : 0} />}
            />
        </div>
    )
}

export default RecentTransitionItem
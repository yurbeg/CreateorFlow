import { Collapse } from "antd";
import { DownOutlined, UploadOutlined, EyeOutlined, CheckOutlined } from "@ant-design/icons"
import messageIcon from "../../images/messageIcon.png"
import "./index.css"

const RecentTransitionItem = ({ text, color, role, status }) => {

    const items = [
        {
            key: '1',
            label: <div className="collapse_container_label">
                <h3 style={{ width: "150px" }}>{text}</h3>
                <div style={{ width: "100px" }}>
                    <h5 style={{ opacity: "0.3" }}>MY ROLE</h5>
                    <h4>{role}</h4>
                </div>
                <div style={{ width: "200px" }}>
                    <h5 style={{ opacity: "0.3" }}> STATUS</h5>
                    <div style={{
                        backgroundColor: `${color}`,
                        color: "white",
                        padding: "5px 15px",
                        borderRadius: "12px"
                        , textAlign: "center"
                    }}>{status}</div>
                </div>
                <div>
                    <h5 style={{ opacity: "0.3" }}>DAYS TO GO</h5>
                    <h4 style={{ fontSize: "17px" }}>26</h4>
                </div>
                <div style={{ display: 'flex', alignItems: "center" }}>
                    <span style={{ marginRight: "10px", fontSize: "17px" }}>15</span>
                    <img src={messageIcon} alt="message Icon" />
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
                        <div className="collapse_children_left_progress" style={{ position: 'relative', marginTop: "5px" }}>
                            <div style={{ color: `${color}`, fontSize: "12px" }}>COMPLETION PERCENTAGE</div>

                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '15px',
                                    right: '15px',
                                    fontSize: '14px',
                                    color: '#000',
                                    paddingRight: '5px',
                                }}
                            >
                                100%
                            </div> <div className="progress" style={{ backgroundColor: `${color}` }} />
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
                        <UploadOutlined style={{ fontSize: "20px", borderRadius: "100%", border: `1px solid ${color}`, padding: "10px", color: `${color}`, width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center" }} />
                        <EyeOutlined style={{ fontSize: "20px", borderRadius: "100%", border: `1px solid ${color}`, padding: "10px", backgroundColor: `${color}`, color: "white", width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center" }} />
                        <CheckOutlined style={{ fontSize: "20px", borderRadius: "100%", border: "1px solid", padding: "10px", backgroundColor: '#2b0f4d', color: "white", width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center" }} />
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
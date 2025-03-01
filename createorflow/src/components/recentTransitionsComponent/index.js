import { Switch } from 'antd';
import RecentTransitionItem from "../recentTransitionsItem";
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

const RecentTransitionsComponent = ({ switchBgColor, onChange }) => {
    return (
        <div className="recent_transitions">
            <div className="recent_transitions_title">
                <span>RECENT TRANSITIONS</span>
                <div>
                    <span>Hide completed </span>
                    <Switch defaultChecked onChange={onChange} style={{ backgroundColor: `${switchBgColor}`, marginLeft: "10px" }} />
                </div>
            </div>
            {collapseArr.map((item, i) => (
                <RecentTransitionItem text={item.text} color={item.color} role={item.role} status={item.status} key={i} />
            ))}
        </div>
    );
};

export default RecentTransitionsComponent
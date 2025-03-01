import time from "../../images/time.png"
import done from "../../images/done.png"
const CurrentStateComponent = () => {
    return (
      <div className="current_state">
        <span>CURRENT STATE
          <select>
            <option value="All">All</option>
          </select>
        </span>
        <div className="current_state_content">
          <div className="current_state_content_item">
            <img src={done} alt="done" />
            <div>
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
          </div>
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
          <div style={{ width: '60%', backgroundColor: "#43bccd", height: '100%' }} />
          <div style={{ width: '20%', backgroundColor: '#6d32a5', height: '100%' }} />
          <div style={{ width: '20%', backgroundColor: '#f53361', height: '100%' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '10px' }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#43bccd' }} />
            <p style={{ fontSize: '12px' }}>Current state</p>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#6d32a5' }} />
            <p style={{ fontSize: '12px' }}>Agreed timing</p>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f53361' }} />
            <p style={{ fontSize: '12px' }}>Time left</p>
          </div>
        </div>
      </div>
    );
  };

  export default CurrentStateComponent
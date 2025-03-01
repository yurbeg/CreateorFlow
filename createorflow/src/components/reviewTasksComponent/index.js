import { Pagination } from "antd";
import message from "../../images/message.png"
import paperclip from "../../images/paperclip.png"
import eyeIcon from "../../images/eyeIcon.png"
import uploadIcon from "../../images/uploadIcon.png"
import high from "../../images/high.png"

import normalIcon from "../../images/normal.png"

const slideData = [
    {
        date: "OCT 6TH,2020",
        role: "UI / UX DESIGNER",
        title: "Title of the task with a short description",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
        comments: 12,
        attachments: 3,
        priority: "High",
        criticality: "Medium",
    },
];
const ReviewTasksComponent = ({ currentSlide, currentPage, handlePageChange, handleDotClick, animate }) => {
    const slidesPerPage = 1;

    return (
      <div className="review_tasks">
        <div>
          <span>RECENT TASKS TO REVIEW
            <select>
              <option value="All">All phases</option>
            </select>
          </span>
          <Pagination
            simple={{ readOnly: true }}
            current={currentPage}
            total={slideData.length}
            pageSize={slidesPerPage}
            onChange={handlePageChange}
            defaultCurrent={1}
          />
        </div>
        <div className={`slide_container ${animate ? `slide${animate}` : ''}`}>
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
              <img src={uploadIcon} alt="Upload Icon" />
              <img src={eyeIcon} alt="Eye Icon" />
            </div>
          </div>
          <div className="slide_container_footer" style={{ marginTop: "20px" }}>
            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <img src={message} alt="message icon" width={"17px"} height={"16px"} />
              <p style={{ fontSize: "13px" }}>{currentSlide.comments} comments</p>
            </div>
            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <img src={paperclip} alt="paperclip icon" width={"17px"} height={"16px"} />
              <p style={{ fontSize: "13px" }}>{currentSlide.attachments} attachments</p>
            </div>
            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <img src={normalIcon} alt="normal" width={"17px"} height={"16px"} />
              <p style={{ fontSize: "13px" }}>Normal priority</p>
            </div>
            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <img src={high} alt="high icon" width={"17px"} height={"16px"} />
              <p style={{ fontSize: "13px" }}>High criticality</p>
            </div>
            <div style={{ display: "flex", gap: "5px", alignItems: "center", marginLeft: "50px" }}>
              <p><i>Integrated with Jira</i></p>
              <img src="https://static-00.iconduck.com/assets.00/jira-icon-2048x2048-nmec2job.png" alt="high icon" width={"28px"} height={"29px"} />
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
                  marginBottom: "15px",
                  backgroundColor: currentPage === index + 1 ? 'black' : 'white',
                  borderRadius: '50%',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default ReviewTasksComponent
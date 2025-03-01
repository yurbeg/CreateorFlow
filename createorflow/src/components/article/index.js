import { useEffect, useState } from 'react';
import HeaderComponent from '../headerComponent';
import ChartsComponent from '../chartsComponent';
import RecentTransitionsComponent from '../recentTransitionsComponent';
import ReviewTasksComponent from '../reviewTasksComponent';
import CurrentStateComponent from '../currentStateComponent';
import TaskApprovalRateComponent from '../taskApprovalRateComponent';
import TasksReviewRateChart from '../tasksReviewRateChart';
import LineChartComponent from '../lineChartComponent';
import "./index.css"
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
const Article = () => {
    const [switchBgColor, setSwitchBgColor] = useState("#6d32a5");
    const [currentPage, setCurrentPage] = useState(1);
    const [animate, setAnimate] = useState("");
  
    const onChange = (checked) => {
      setSwitchBgColor(checked ? "#6d32a5" : "#f5f5f6");
    };
  
    const slidesPerPage = 1;
    const indexOfLastSlide = currentPage * slidesPerPage;
    const indexOfFirstSlide = indexOfLastSlide - slidesPerPage;
    const currentSlide = slideData.slice(indexOfFirstSlide, indexOfLastSlide)[0];
  
    const handlePageChange = (page) => {
      setAnimate(currentPage > page ? "Right" : "Left");
      setCurrentPage(page);
    };
  
    const handleDotClick = (index) => {
      setCurrentPage(index + 1);
      setAnimate(currentPage > index + 1 ? "Right" : "Left");
    };
  
    useEffect(() => {
      if (animate) {
        const timer = setTimeout(() => setAnimate(""), 700);
        return () => clearTimeout(timer);
      }
    }, [animate]);
  
    return (
      <div className="article_div">
        <HeaderComponent />
        <ChartsComponent />
        <LineChartComponent />
        <TasksReviewRateChart />
        <RecentTransitionsComponent switchBgColor={switchBgColor} onChange={onChange} />
        <div className="first_charts">
          <ReviewTasksComponent
            currentSlide={currentSlide}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            handleDotClick={handleDotClick}
            animate={animate}
          />
          <CurrentStateComponent />
        </div>
        <TaskApprovalRateComponent />
      </div>
    );
  };

  export default Article
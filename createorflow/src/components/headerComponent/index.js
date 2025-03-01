import flag from "../../images/flag.svg"

const HeaderComponent = () => {
    return (
        <div className="transition_div">
            <div>
                <img src={flag} alt="flag" style={{ color: "red", fontSize: "20px", marginRight: "20px" }} />
                <div>
                    <h4>Transition ready to be concluded</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quidem praesentium</p>
                </div>
            </div>
            <div className="transition_buttons">
                <button>ADD OTHER TASKS</button>
                <button>CONCLUDE TRANSITION</button>
            </div>
        </div>
    );
};
export default HeaderComponent 
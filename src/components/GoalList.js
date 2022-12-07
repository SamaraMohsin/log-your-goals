import FirstGoal from "./FirstGoal";
import SecondGoals from "./SecondGoals";
import ThirdGoal from "./ThirdGoal";

function GoalList(){
    return( 
        <div className="goalList">
        <ul>
            <li> <div> <FirstGoal></FirstGoal></div></li>
            <li><div><SecondGoals></SecondGoals></div></li>
            <li><div><ThirdGoal></ThirdGoal></div></li>

        </ul>
       
        </div> 
       
    );
}
export default GoalList;
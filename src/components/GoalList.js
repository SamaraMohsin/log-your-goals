import FirstGoal from "./FirstGoal";
import SecondGoals from "./SecondGoals";
import ThirdGoal from "./ThirdGoal";

function GoalList(){
    return( 
        <>
        <ul>
            <li> <div> <FirstGoal></FirstGoal></div></li>
            <li><div><SecondGoals></SecondGoals></div></li>
            <li><div><ThirdGoal></ThirdGoal></div></li>

        </ul>
       
        </> 
       
    );
}
export default GoalList;
import './App.css';

function Football(){
    
    const shoot = () =>{
        alert("Great Kick !!!");
    }

    const goal = (a) =>{
        alert(a);
    }
    return(
        <div>
            <p className="fb">This if Football function.<br/>
            I am called by App function.</p>
            <button className="btn" onClick={shoot}>Kick!</button>
            <p>Above is a button without arguments</p>
            <br/><br/>
            <button className="btn2" onClick={()=>goal("You made a goal !")}>Goal!</button>
            <p>Passing arguments</p>
            <br/><br/>
        </div>
    );
}

export default Football;
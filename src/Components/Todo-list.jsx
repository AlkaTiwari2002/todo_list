import { useState } from "react";

function TodoList(){
    const [activity, setActivity] = useState("");
    const [listData, setlistData] = useState([]);
    function addActivity() {
        setlistData((listData) => {
            const trimmedActivity = activity.trim(); 
            if (trimmedActivity) { 
                const updatedList = [...listData, trimmedActivity];
                setActivity(''); 
                return updatedList;
            }
            return listData; 
        });
    }
    
    function removeActivity(i){
          const updatedListData = listData.filter((elememt, id)=>{
            return i!=id;
          })
          setlistData(updatedListData);
    }
    function removeAll(){
        setlistData([])
    }
    return(
        <>
        <div className="container">
            <div className="header">TODO LIST</div>
            <input type="text" placeholder="Add Activity" value={activity} onChange={(e) => setActivity(e.target.value)}/>
            <button onClick={addActivity} className="btn">Add</button>
            <p className="List-heading"> Here is your List:{")"}</p>
            {listData!=[] && listData.map((data, i)=>{
               return(
                <>
                <p key = {i}>
                    <div className="listData">{data}</div>
                    <div className="btn-position"><button onClick={()=>removeActivity
                        (i)}>remove(-)</button></div>
                </p>
                </>
               ) 
            })}
            {listData.length>=2 && <button onClick={removeAll}>Remove All</button>}
            
        </div>
        
        </>
    )
}
export default TodoList;



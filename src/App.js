import {useState} from "react";
import './App.css';


function App() {
  const to_do=["DSA Assignment","OSD Assignment","DSA Elab"]
  const [tasks,setTasks]=useState(to_do);
  const [NewTask,setNewTask]=useState('');
  return (
    <div className="App">
      <div className="Title">
        <p className="Tp">TO DO LIST</p><i class="fi fi-rr-edit"></i>
      </div>
      <div className="Main">
        <div className="Main_ip">
          <p className="main_hp"><b>ADD TASK</b></p>
          <input type="text" placeholder="Enter Your Task..." value={NewTask} onChange={(assign)=>setNewTask(assign.target.value)} className="main_input"></input>
          <button className="add_button" 
          onClick={()=>{
                          const new_to_do=[...tasks,NewTask];
                          setTasks(new_to_do)
                        }}><p className="Mainp">ADD</p><i class="fi fi-br-plus"></i>
          </button>
        </div>
        {
          (tasks.length)>0?
            <>
              <div className='output'>
              <p className="main_hp">
              <b>YOUR TASKS</b>
              </p>
              <table className='output_table'>
                  <tr>
                      <th width="30%">Tasks</th>
                      <th width="15%">Action</th>
                    </tr>
                    {
                      tasks.map((data,index) => 
                      <tr>
                        <td>{data}</td>
                        <td><button className="delete_button" onClick={()=>{
                          const new_to_do=[...tasks];
                          new_to_do.splice(index,1)
                          setTasks(new_to_do)
                        }}>DELETE</button></td>
                      </tr>
                      )
                    }
                </table>
                <button className="del_all" onClick={()=>{const new_to_do=[ ];setTasks(new_to_do)}}><p className="da_p">DELETE ALL</p></button>
              </div>
            </>
          :
            <>
              <div>
                <h2>No Tasks</h2>
              </div>
            </>
        }
      </div>
    </div>
  );
}

export default App;

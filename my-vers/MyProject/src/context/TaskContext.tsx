import React, { createContext,useState,ReactNode } from "react";
import {TaskProps} from "../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface TaskContextProps{
task:TaskProps;
selectTask: (task:TaskProps)=> void;
clearTask: ()=>void;
}

interface TaskProviderProps{
    children: React.ReactNode;
}

export const TaskContext=createContext<TaskContextProps>(
{task: {id:'0', title:'', status: false},
selectTask:()=>{},
clearTask:()=>{}}
)
function TaskProvider({children}:TaskProviderProps){
    const [task, setTask] = useState<TaskProps>({id:'0', title:'',status: false})
    const [tasks,setTasks]=useState<TaskProps[]>([] as TaskProps[])

    async function storeTasks(tasks:TaskProps[]) {
        try{
            await AsyncStorage.setItem("@tasks",JSON.stringify(tasks));
        }catch(error){
            console.log(error);
        }
    }

    function selectTask(task: TaskProps){
        setTask(task)
    }

    function clearTask(){
        setTask({id:'0', title:'', status: false})
    }

    return (
        <TaskContext.Provider value={{task, selectTask,clearTask}}>
            {children}
        </TaskContext.Provider>
    )
}


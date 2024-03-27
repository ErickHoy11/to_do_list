import { useState } from "react"
import styles from "./ToDo.module.css"
import x from "../assets/x.png"
import up from "../assets/up.png"
import down from "../assets/down.png"


function ToDo(){
    
    const [toDoList, setToDoList] = useState([]);

    function addItem(){
        const item = document.querySelector("input").value;

        setToDoList(toDoList => [...toDoList, item])
    }

    function removeItem(index){
        setToDoList((toDoList) => [...toDoList.filter((_, i) => i!=index)]);
    }

    function raiseItem(index){
        const newArray = [...toDoList];
        if(index!=0){
            console.log(index);
            [newArray[index], newArray[index - 1]] = [newArray[index - 1], newArray[index]];
            setToDoList(newArray);
        };
    }

    function lowerItem(index){
        const newArray = [...toDoList];
        if(index!= (toDoList.length-1)){
            console.log(index);
            [newArray[index], newArray[index + 1]] = [newArray[index + 1], newArray[index]];
            setToDoList(newArray);
        };
    }


    return(
        <div className={styles.to_do}>
            <h2>To Do</h2>
            <ol>
                {toDoList.map((item, index) => 
                    <div key={index} className={styles.list_item}>
                        <li>{item}</li>
                        <div className={styles.item_icons}>
                            <img className={styles.button} src={x} onClick={() => removeItem(index)}></img>
                            <img className={styles.button} src={up} onClick={() => raiseItem(index)}></img>
                            <img className={styles.button} src={down} onClick={() => lowerItem(index)}></img>
                        </div>
                    </div>
                )}
            </ol>
            <div className={styles.input_div}>
                <input type="text" placeholder="Add item here..." onKeyDown={e => {if (e.key == "Enter"){addItem()}}}/>
                <button className={styles.add_button} onClick={addItem}>Add Item</button>
            </div>
        </div>
    )
}

export default ToDo


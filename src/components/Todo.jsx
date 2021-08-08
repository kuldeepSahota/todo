import React, { useState } from 'react'
import img from '../images/todo.png';





const Todo = () => {
const [todo, setTodo] = useState();
const [item, setItems] = useState([]);
const [btn, setBtn] = useState(true);
const [editTodo, setEditTodo] = useState(null);
const [line, setLine] = useState(false);


const addItem = () => {
    if(!todo){
        alert(` 🔺 Please add item you can't add empty todo⚠️⚠️⚠️`)
    }else if(todo && !btn){
        setItems(
            item.map((elem) => {
                if(elem.id === editTodo) {
                    return{...elem, name:todo}
                }
                return elem;
            })
        )
        setBtn(true);
        setTodo('')
        setEditTodo(null);
    }
    else{
        const allInputData = { id: new Date().getTime().toLocaleString(), name:todo}
        setItems([...item,allInputData])
        setTodo('');
    }
}

const deleteItem = (idNo) => {
    const updatedItem = item.filter((elem) => {
        return idNo !== elem.id;
    });
    setItems(updatedItem);
}

const editItem = (newIdNO) => {
    const editItem = item.find((elem) => {
        return newIdNO === elem.id;
    })
    console.log(editItem)
    setBtn(false);
    setTodo(editItem.name)
    setEditTodo(newIdNO);
}

const removeAll = () => {
    setItems([]);
}



    
    return(
        <>
            <div  className="todo">
                <div className="todo_wrapper">
                    <figure>
                        <img src={img} alt="Todo image" />
                        <figcaption>Add Your Daily List Here ✌️</figcaption>
                    </figure>
                    <div className="input_wrapper">
                        <input value={todo} name={todo} onChange={ (e) => setTodo(e.target.value) } type="text" placeholder="✍️ Add Item..." />
                        {
                            btn ? <i  onClick={addItem} className="fa fa-plus add-btn" title="Add Item"></i> : 
                            <i  onClick={addItem} className="far fa-edit add-btn" title="Add Item"></i>  
                          }
                        
                    </div>
                    <div className="output_wrapper" >

                        {
                            item.map( (elem) => {
                                return(
                                    <div className="Inner" key={elem.id}>
                                        <h3 style={{textDecoration : line ? 'line-through' : 'none'}}>{elem.name}</h3>
                                        <div className="both_btn">
                                            <i style={{marginRight:'15px'}} onClick={() => editItem(elem.id) }  className="far fa-edit add-btn" title="Edit Item"></i>
                                            <i onClick={() => deleteItem(elem.id) }  className="far fa-trash-alt add-btn" title="Delete Item"></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                                
                    </div>
                    <button onClick={removeAll} className="remove_all_btn"></button>

                </div>
            </div>
        </>
    )
}
export default Todo;

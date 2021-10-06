import React, { useState } from "react";

import Form from './components/Form';
import Section from "./components/Section";
import List from "./components/List";
import Drop from "./components/Drop";
//import Index from "./components/index.css"
import Calendar from "./components/Calendar"; 





const appTitle = "Aplikacja webowa";

const list = [
    { id: 1, title: "Test #1", completed: false},
    { id: 2, title: "Test #2", completed: false},
    { id: 3, title: "Test #3", completed: false}
];



const App = () => {
    const [todolist, setTodoList] = useState(list);

    const addTodo = (item) =>{
        setTodoList((oldList) => [...oldList, item]);
    };

    const removeTodo  = (id) => {
        setTodoList((oldList) => oldList.filter((item) => item.id !== id));

    };

    return(
         <div className="ui container center aligned">
        <Section>
     <h1>{appTitle}</h1>
        </Section>
        <Drop />
     <br /> <br />
    <Section>
        <Form addTodo={addTodo}/>
    </Section>

    <Calendar>
 

    </Calendar>

    <Section>
        <List removeTodoListProp={removeTodo} list={todolist}/>
    </Section>
 
 



    </div>
    
    );
};


export default App;

/*
<Date>
    
</Date>

<Drop>

</Drop>
*/

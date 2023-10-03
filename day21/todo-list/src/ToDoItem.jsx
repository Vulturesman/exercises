import { Toggle } from "./Toggle";
 
export const TodoItem = (props) => {
    return (
        <div>
            <p>{props.text}</p>
            <Toggle/>
        </div>
    )
};
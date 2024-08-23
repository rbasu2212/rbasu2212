import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendData  } from "../ducks/CounterSlice";
import { selectUsers } from "../ducks/Selectors";

const FormComp = () => {
    const nameRef= useRef(null);
    const ageRef = useRef(null);
    const dispatch = useDispatch();
    const {name, age} = useSelector(selectUsers);
    console.log('name', name);
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(sendData(nameRef.current.value, ageRef.current.value));
    }
    return (
        <div>
            {name} : {age} <br />
            <input ref={nameRef} type="text" name="usr_name" />
            <input ref={ageRef} type="text" name="usr_age" />
            <button onClick={e => handleSubmit(e)} >Submit </button>
        </div>
    )
}
export default FormComp;
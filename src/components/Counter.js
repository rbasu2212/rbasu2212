import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, fetchDataRequest  } from "../ducks/CounterSlice";
import { selectCount, selectData } from "../ducks/Selectors";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(selectCount);
    const data = useSelector(selectData);
    return(
        <>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(fetchDataRequest())}>Fetch</button>
        <ul>
        {data && data.map(item => (
            <li key={item.id}>
            {item.title}
            </li>
        )) }
        </ul>
        </>
    )
}
export default Counter;
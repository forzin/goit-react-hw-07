import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";


const SeacrhBox = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <h5>Find your contacts by name</h5>
            <input onChange={(event) => {
                const action = changeFilter(event.target.value);
                dispatch(action); 
            }} type="text" placeholder="Elli"/>
        </div>
    );
}

export default SeacrhBox;
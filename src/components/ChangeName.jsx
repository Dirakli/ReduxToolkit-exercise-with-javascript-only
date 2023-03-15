import { updatename } from "../store/nameSlice";
import { useDispatch } from "react-redux"

function ChangeName() {
    const dispatch = useDispatch();

     const handleChange = () => {
        console.log("Bron")
        dispatch(updatename("Bron"))
    }

    return (
        <div>
        <button onClick={handleChange} >Click to change name</button>
        </div>
    )
}

export default ChangeName;
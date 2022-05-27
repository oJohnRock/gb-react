import { useCallback } from "react";
import { changeVisible, changeCheckbox } from "../store/profile/actions";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
    const { name, showName, checkbox } = useSelector((state) => state);
    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch(changeVisible);
    }, [dispatch]);

    const setCheckbox = useCallback(() => {
        dispatch(changeCheckbox);
    }, [dispatch]);

    return (
        <div>
            <h2>Profile</h2>
            <button onClick={setShowName}>Show Name</button>
            <p>{showName && name}</p>
            <input type="checkbox" onChange={setCheckbox} checked={checkbox} />
            {checkbox && <h2>{name}</h2>}
        </div>
    );
};

export default Profile;

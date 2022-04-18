import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import store from "../store";
import { changeCheckbox, changeVisible } from "../store/profile/actions";

const Profile = () => {
    const { showName, name, checkbox } = useSelector((state) => state);
    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch(changeVisible);
    }, [dispatch]);

    const setCheckbox = useCallback(() => {
        dispatch(changeCheckbox);
    }, [dispatch]);

    return (
        <div>
            <h2>Text of Profile-page</h2>
            <button onClick={setShowName}>Show Name</button>
            <p>{showName && <h2>{name}</h2>}</p>
            <input type="checkbox" onClick={setCheckbox} checked={checkbox} />
            <p>{checkbox && <h2>{name}</h2>}</p>
        </div>
    );
};

export default Profile;

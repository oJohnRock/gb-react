import { useState } from "react";
import { updateName } from "../store/profile/actions";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Profile = () => {
    const { name } = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const [value, setValue] = useState("");
    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const saveName = () => {
        dispatch(updateName(value));
        setValue("");
    };

    return (
        <div>
            <h2>Profile</h2>
            <p>Текущее имя: {name}</p>
            <form className="author-update">
                <TextField
                    id="outlined-basic"
                    label="Изменить имя"
                    variant="outlined"
                    className="author-name"
                    value={value}
                    onChange={handleInput}
                    autoFocus
                />
                <Button
                    variant="contained"
                    className="author-save"
                    type="button"
                    onClick={saveName}
                >
                    Сохранить
                </Button>
            </form>
        </div>
    );
};

export default Profile;

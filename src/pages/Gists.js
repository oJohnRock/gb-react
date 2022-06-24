import { CircularProgress } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { API_URL_PUBLIC } from "../constants/gists";
import { getAllGists } from "../store/gists/actions";
import {
    selectGists,
    selectGistsError,
    selectGistsLoading,
} from "../store/gists/selectors";
import { useDispatch, useSelector } from "react-redux";

const Gists = () => {
    const dispatch = useDispatch();
    const gists = useSelector(selectGists);
    const loading = useSelector(selectGistsLoading);
    const error = useSelector(selectGistsError);

    const requestGists = () => {
        dispatch(getAllGists());
    };

    useEffect(() => {
        requestGists();
    }, []);

    const renderGists = useCallback(
        (gist) => <li key={gist.id}>{gist.description || "No description"}</li>,
        []
    );

    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Обновить</button>
            </>
        );
    }

    if (loading) {
        return <CircularProgress />;
    }

    return <ul>{gists.map(renderGists)}</ul>;
};

export default Gists;

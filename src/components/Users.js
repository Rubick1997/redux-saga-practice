import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUsers } from "../features/actions/usersAction";
import Card from "./Card";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers("users"));
  }, []);

  return (
    <div>
      {users.loading && <p>Loading ...</p>}
      {users.length > 0 && !isLoading ? (
        users.map((user) => <Card user={user} key={user.id} />)
      ) : (
        <p>No Users available</p>
      )}
      {error && !isLoading && <p>{error}</p>}
    </div>
  );
};

export default Users;

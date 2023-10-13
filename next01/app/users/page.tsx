import { getAllUsers } from "@/lib/getAllUsers";
import Link from "next/link";
import React from "react";

const Users = async () => {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return (
    <div>
      <h2>
        <Link href="/">Back To Home</Link>
      </h2>
      {users.map((user) => {
        return (
          <p key={user.id}>
            <Link href={`users/${user.id}`}>{user.name}</Link>
          </p>
        );
      })}
    </div>
  );
};

export default Users;

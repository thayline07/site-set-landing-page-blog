type UserListProps = {
  id: number;
  name: string;
};

async function fetchUsers(): Promise<UserListProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
      ]);
    }, 2000);
  });
}

async function UserList() {
  const userList = await fetchUsers();
  console.log("SERVER", userList);

  return (
    <div>
      {userList.map((user) => (
        <p key={user.id}>
          {user.id}: {user.name}
        </p>
      ))}
    </div>
  );
}

export default function UserListPage() {
  return (
    <>
      <h2>User List</h2>
      <UserList />
    </>
  );
}

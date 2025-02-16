import AddUserModal from "@/components/modules/users/AddUserModal";
import { useAppSelector } from "@/redux/hook";
import UserCard from "@/components/modules/users/userCard";

const User = () => {
  const users = useAppSelector((state) => state.user.users);
  return (
    <div className="mx-auto max-w-6xl mt-20">
      <div className="flex justify-between items-center mb-4">
        <h1>Tasks</h1>
        <AddUserModal></AddUserModal>
      </div>
      <div className="space-y-2">
        {users.map((user, index) => (
          <UserCard user={user} key={index}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default User;

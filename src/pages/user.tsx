import AddUserModal from "@/components/modules/users/AddUserModal";

const User = () => {
  return (
    <div className="mx-auto max-w-6xl mt-20">
      <div className="flex justify-between items-center mb-4">
        <h1>Tasks</h1>
        <AddUserModal></AddUserModal>
      </div>
      <div className="space-y-2">
      </div>
    </div>
  );
};

export default User;

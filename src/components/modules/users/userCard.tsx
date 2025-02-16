import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/feature/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="border px-5 py-4 rounded-md   mx-auto">
      <div className="flex justify-between items-center">
        <h3>{user.name} </h3>
        <div className=" flex gap-3 items-center justify-end">
          <Button
            onClick={() => dispatch(removeUser(user.id))}
            className="p-0 text-red-500"
          >
            <Trash2 />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

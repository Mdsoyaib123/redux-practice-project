import { selectTask, updateFilter } from "@/redux/feature/tasks/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import TaskCard from "./../components/modules/tasks/taskCard";
import AddTaskModal from "@/components/modules/tasks/AddTaskModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Task = () => {
  const tasks = useAppSelector(selectTask);
  const dispatch = useAppDispatch();
  return (
    <div className="mx-auto max-w-6xl mt-20">
      <div className="flex justify-between items-center mb-4">
        <h1>Tasks</h1>
        <Tabs defaultValue="all" className="">
          <TabsList className="">
            <TabsTrigger
              onClick={() => dispatch(updateFilter("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("medium"))}
              value="medium"
            >
              Medium{" "}
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("high"))}
              value="high"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Task;

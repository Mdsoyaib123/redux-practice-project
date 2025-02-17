import AddTaskModal from "@/components/modules/tasks/AddTaskModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Task = () => {
  return (
    <div className="mx-auto max-w-6xl mt-20">
      <div className="flex justify-between items-center mb-4">
        <h1>Tasks</h1>
        <Tabs defaultValue="all" className="">
          <TabsList className="">
            <TabsTrigger
              value='all'
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              value="medium"
            >
              Medium{" "}
            </TabsTrigger>
            <TabsTrigger
              value="high"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="space-y-2">
      </div>
    </div>
  );
};

export default Task;

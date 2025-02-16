import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";

type TInitialState = {
  tasks: ITask[];
  filter: "all" | "low" | "medium" | "high";
};
const initialState: TInitialState = {
  tasks: [
    {
      id: "kldlfsd",
      title: "computer",
      des: "lsdfsdlfk kfldsjf ljflsdf",
      isCompleted: true,
      priority: "high",
      dueDate: "20 november ",
      assignTo: null,
    },
  ],
  filter: "all",
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const id = nanoid();
      console.log(id);
      const taskData = {
        ...action.payload,
        assignTo: action.payload.assignTo ? action.payload.assignTo : null,
        id,
        isCompleted: false,
      };
      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "low" | "medium" | "high">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeUser, (state, action) => {
      state.tasks.forEach((task) =>
        task.assignTo === action.payload ? (task.assignTo = null) : task
      );
    });
  },
});

export const selectTask = (state: RootState) => {
  const filter = state.task.filter;
  if (filter === "low") {
    return state.task.tasks.filter((task) => task.priority === "low");
  }
  if (filter === "medium") {
    return state.task.tasks.filter((task) => task.priority === "medium");
  }
  if (filter === "high") {
    return state.task.tasks.filter((task) => task.priority === "high");
  } else {
    return state.task.tasks;
  }
};
export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;
export default taskSlice.reducer;

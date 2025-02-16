export interface ITask {
  id: string;
  title: string;
  des: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "high" | "medium" | "low";
}

export interface IUser {
  id:string;
  name: string;
}

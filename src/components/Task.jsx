import React from "react";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const Task = () => {
  return (
    <div className='p-4 flex'>
      <Button className='bg-neutral-800 text-white ml-auto hover:bg-neutral-600'>
        <Plus className='h-4 w-4' />
        New Task
      </Button>
      <Dialog>
        <DialogContent>
          <DialogHeader>
          <DialogTitle>Add new Task</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    placeholder="Enter task title"
                  />
                </div>
                <div className="grid gap-2">
                  <Label >Description</Label>
                  <Textarea
                    id="description"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    placeholder="Enter task description"
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Priority</Label>
                  <select
                    id="priority"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={addTask}>Add Task</Button>
              </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Task;

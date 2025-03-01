"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Task = () => {
  const [task, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "medium",
  });
  const [open, setOpen] = useState(false);

  const addTask = () => {
    if ((newTask.title, trim() === "")) return;

    const task = {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      priority: newTask.priority,
      completed: false,
    };
  };
  return (
    <div className='p-4 flex'>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className=' font-title bg-neutral-800 text-white ml-auto hover:bg-neutral-600 '>
            <Plus className='h-4 w-4' />
            New Task
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className='font-title'>Add new Task</DialogTitle>
          </DialogHeader>
          <div className='grid gap-4 py-4 font-title'>
            <div className='grid gap-2'>
              <Label>Title</Label>
              <Input id='title' placeholder='Enter task title' />
            </div>
            <div className='grid gap-2 font-title'>
              <Label>Description</Label>
              <Textarea id='description' placeholder='Enter task description' />
            </div>
            <div className='grid gap-2 font-title'>
              <Label>Priority</Label>
              <select
                id='priority'
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              >
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>
              </select>
            </div>
          </div>
          <div className='flex justify-end font-title'>
            <Button>Add Task</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Task;

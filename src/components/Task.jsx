import React from "react";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";

const Task = () => {
  return (
    <div className='p-4 flex'>
      <Button className='bg-neutral-800 text-white ml-auto hover:bg-neutral-600'>
        <Plus className='mr-2 h-4 w-4' /> New Task
      </Button>
    </div>
  );
};

export default Task;

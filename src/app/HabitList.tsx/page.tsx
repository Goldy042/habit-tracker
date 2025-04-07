"use client";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

interface Habit {
  id: string;
  name: string;
  completed: boolean;
}

const initialHabits: Habit[] = [
  { id: "1", name: "Drink Water", completed: false },
  { id: "2", name: "Exercise", completed: false },
  { id: "3", name: "Read a Book", completed: false },
];

const HabitList: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>(initialHabits);

  // Handle checkbox change
  const toggleHabitCompletion = (id: string) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  // Handle Drag & Drop
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const reorderedHabits = Array.from(habits);
    const [movedHabit] = reorderedHabits.splice(result.source.index, 1);
    reorderedHabits.splice(result.destination.index, 0, movedHabit);
    setHabits(reorderedHabits);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Your Habits</h2>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="habitList">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} className="space-y-3">
              {habits.map((habit, index) => (
                <Draggable key={habit.id} draggableId={habit.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`flex items-center justify-between p-3 bg-gray-100 rounded-md shadow-sm transition ${
                        habit.completed ? "opacity-50" : ""
                      }`}
                    >
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={habit.completed}
                          onChange={() => toggleHabitCompletion(habit.id)}
                          className="w-5 h-5 text-blue-600"
                        />
                        <span className={`text-lg ${habit.completed ? "line-through text-gray-500" : ""}`}>
                          {habit.name}
                        </span>
                      </label>
                      <span className="text-gray-400 cursor-move">☰</span>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default HabitList;

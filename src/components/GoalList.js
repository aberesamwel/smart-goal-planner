import React from 'react';
import GoalCard from './GoalCard';

const GoalList = ({ goals, updateGoal, deleteGoal }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">All Goals</h2>
      {goals.map(goal => (
        <GoalCard
          key={goal.id}
          goal={goal}
          updateGoal={updateGoal}
          deleteGoal={deleteGoal}
        />
      ))}
    </div>
  );
};

export default GoalList;

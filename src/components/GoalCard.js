import React from 'react';

const GoalCard = ({ goal, deleteGoal }) => {
  const { name, targetAmount, savedAmount, deadline, category } = goal;
  const progress = Math.min((savedAmount / targetAmount) * 100, 100);
  const remaining = targetAmount - savedAmount;
  const daysLeft = Math.ceil((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24));
  const overdue = daysLeft < 0 && savedAmount < targetAmount;
  const warning = daysLeft <= 30 && !overdue && savedAmount < targetAmount;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 relative hover:scale-[1.01] transition">
      <h3 className="text-xl font-semibold text-gray-800">{name} <span className="text-sm text-gray-500">({category})</span></h3>
      <p className="mt-2">🎯 Target: ${targetAmount}</p>
      <p>💰 Saved: ${savedAmount}</p>
      <p>🔻 Remaining: ${remaining}</p>
      <p>🗓️ Deadline: {deadline} ({daysLeft} days left)</p>

      <div className="w-full bg-gray-200 h-4 rounded mt-3">
        <div className="h-full bg-green-500 rounded" style={{ width: `${progress}%` }}></div>
      </div>

      {warning && <p className="text-yellow-500 font-semibold mt-2">⚠️ Deadline approaching!</p>}
      {overdue && <p className="text-red-500 font-semibold mt-2">❌ Overdue!</p>}

      <button
        className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
        onClick={() => deleteGoal(goal.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default GoalCard;

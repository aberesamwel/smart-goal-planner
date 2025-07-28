import React from 'react';

const GoalCard = ({ goal, deleteGoal }) => {
  const { name, targetAmount, savedAmount, deadline, category } = goal;
  const progress = Math.min((savedAmount / targetAmount) * 100, 100);
  const remaining = targetAmount - savedAmount;
  const daysLeft = Math.ceil((new Date(deadline) - new Date()) / (1000 * 60 * 60 * 24));
  const overdue = daysLeft < 0 && savedAmount < targetAmount;
  const warning = daysLeft <= 30 && !overdue && savedAmount < targetAmount;

  return (
    <div className="relative bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl p-6 rounded-2xl mb-6 hover:shadow-pink-500/20 transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 tracking-tight">{name}</h3>
          <span className="text-sm text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">{category}</span>
        </div>
        <button
          className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-3 py-1.5 rounded-lg transition-colors duration-200"
          onClick={() => deleteGoal(goal.id)}
        >
          Delete
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-gray-700">
        <p className="text-base">
          <span className="text-green-600 mr-1">🎯</span> Target: <span className="font-semibold">${targetAmount.toLocaleString()}</span>
        </p>
        <p className="text-base">
          <span className="text-blue-600 mr-1">💰</span> Saved: <span className="font-semibold">${savedAmount.toLocaleString()}</span>
        </p>
        <p className="text-base">
          <span className="text-red-600 mr-1">🔻</span> Remaining: <span className="font-semibold">${remaining.toLocaleString()}</span>
        </p>
        <p className="text-base">
          <span className="text-purple-600 mr-1">🗓️</span> Deadline: <span className="font-semibold">{deadline} ({daysLeft} days left)</span>
        </p>
      </div>

      <div className="mt-4">
        <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              progress === 100 ? 'bg-green-500' : 'bg-gradient-to-r from-green-400 to-green-600'
            }`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-1 text-right">{progress.toFixed(1)}% Complete</p>
      </div>

      {warning && (
        <p className="mt-3 text-yellow-600 font-semibold bg-yellow-50 px-3 py-1.5 rounded-lg flex items-center">
          <span className="mr-2">⚠️</span> Deadline approaching!
        </p>
      )}
      {overdue && (
        <p className="mt-3 text-red-600 font-semibold bg-red-50 px-3 py-1.5 rounded-lg flex items-center">
          <span className="mr-2">❌</span> Overdue!
        </p>
      )}
    </div>
  );
};

export default GoalCard;

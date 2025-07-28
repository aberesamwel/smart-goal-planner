import React from 'react';

const Overview = ({ goals }) => {
  const totalSaved = goals.reduce((sum, g) => sum + Number(g.savedAmount), 0);
  const completedGoals = goals.filter(g => g.savedAmount >= g.targetAmount).length;

  return (
    <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-xl text-gray-800 border border-gray-200/30 mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Overview</h2>
      <p className="mb-2 text-lg">📌 <span className="font-semibold text-indigo-700">Total Goals:</span> {goals.length}</p>
      <p className="mb-2 text-lg">💸 <span className="font-semibold text-green-700">Total Saved:</span> ${totalSaved}</p>
      <p className="mb-2 text-lg">✅ <span className="font-semibold text-emerald-600">Goals Completed:</span> {completedGoals}</p>
    </div>
  );
};

export default Overview;

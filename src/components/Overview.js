import React from 'react';

const Overview = ({ goals }) => {
  const totalSaved = goals.reduce((sum, g) => sum + Number(g.savedAmount), 0);
  const completedGoals = goals.filter(g => g.savedAmount >= g.targetAmount).length;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Overview</h2>
      <p className="mb-2">📌 <strong>Total Goals:</strong> {goals.length}</p>
      <p className="mb-2">💸 <strong>Total Saved:</strong> ${totalSaved}</p>
      <p className="mb-2">✅ <strong>Goals Completed:</strong> {completedGoals}</p>
    </div>
  );
};

export default Overview;

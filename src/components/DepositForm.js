import React, { useState } from 'react';

const DepositForm = ({ goals, updateGoal }) => {
  const [amount, setAmount] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const goal = goals.find(g => g.id === selectedGoal);
    if (!goal) return;
    const newAmount = parseFloat(goal.savedAmount) + parseFloat(amount);
    updateGoal(goal.id, { savedAmount: newAmount });
    setAmount('');
    setSelectedGoal('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/20 backdrop-blur-xl border border-gray-100/30 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Make a Deposit</h2>
      <select value={selectedGoal} onChange={e => setSelectedGoal(e.target.value)}
        className="w-full border border-gray-300 rounded p-3 mb-4 bg-white/30 text-gray-800" required>
        <option value="">Select Goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount"
        className="w-full border border-gray-300 rounded p-3 mb-4 bg-white/30 text-gray-800" required />
      <button type="submit"
        className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
        Deposit
      </button>
    </form>
  );
};

export default DepositForm;
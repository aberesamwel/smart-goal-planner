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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Make a Deposit</h2>
      <select value={selectedGoal} onChange={e => setSelectedGoal(e.target.value)}
        className="w-full border border-gray-300 rounded p-2 mb-4" required>
        <option value="">Select Goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount"
        className="w-full border border-gray-300 rounded p-2 mb-4" required />
      <button type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Deposit</button>
    </form>
  );
};

export default DepositForm;

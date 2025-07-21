import React, { useState } from 'react';

const AddGoalForm = ({ addGoal }) => {
  const [form, setForm] = useState({
    name: '',
    targetAmount: '',
    category: '',
    deadline: '',
    savedAmount: 0,
    createdAt: new Date().toISOString().split('T')[0],
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addGoal(form);
    setForm({ ...form, name: '', targetAmount: '', category: '', deadline: '' });
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg mb-6 border border-gray-100 transform hover:scale-[1.01] transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 tracking-tight mb-6">Add New Goal</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Goal Name"
            className="w-full border border-gray-200 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            required
          />
        </div>
        <div>
          <input
            name="targetAmount"
            type="number"
            value={form.targetAmount}
            onChange={handleChange}
            placeholder="Target Amount"
            className="w-full border border-gray-200 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            required
          />
        </div>
        <div>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full border border-gray-200 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            required
          />
        </div>
        <div>
          <input
            name="deadline"
            type="date"
            value={form.deadline}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-4 py-2.5 rounded-lg transition-all duration-200"
        >
          Add Goal
        </button>
      </form>
    </div>
  );
};

export default AddGoalForm;
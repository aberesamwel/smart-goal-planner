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
    <div className="bg-white/20 backdrop-blur-md border border-white/30 p-8 rounded-2xl shadow-xl transition-transform hover:scale-[1.015] mb-6">
      <h2 className="text-2xl font-bold text-gray-800 tracking-tight mb-6">Add New Goal</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Goal Name"
            className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none py-3 px-1 text-gray-800 placeholder-gray-400 transition-all duration-300"
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
            className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none py-3 px-1 text-gray-800 placeholder-gray-400 transition-all duration-300"
            required
          />
        </div>
        <div>
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none py-3 px-1 text-gray-800 placeholder-gray-400 transition-all duration-300"
            required
          />
        </div>
        <div>
          <input
            name="deadline"
            type="date"
            value={form.deadline}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none py-3 px-1 text-gray-800 placeholder-gray-400 transition-all duration-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
        >
          Add Goal
        </button>
      </form>
    </div>
  );
};

export default AddGoalForm;
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
    <form className="bg-white p-6 rounded-lg shadow-md mb-6" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add New Goal</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Goal Name"
        className="w-full border border-gray-300 rounded p-2 mb-4" required />
      <input name="targetAmount" type="number" value={form.targetAmount} onChange={handleChange} placeholder="Target Amount"
        className="w-full border border-gray-300 rounded p-2 mb-4" required />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category"
        className="w-full border border-gray-300 rounded p-2 mb-4" required />
      <input name="deadline" type="date" value={form.deadline} onChange={handleChange}
        className="w-full border border-gray-300 rounded p-2 mb-4" required />
      <button type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Add Goal</button>
    </form>
  );
};

export default AddGoalForm;

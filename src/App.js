import React, { useState, useEffect } from 'react';
import api from './components/api';
import GoalList from './components/GoalList';
import AddGoalForm from './components/AddGoalForm';
import DepositForm from './components/DepositForm';
import Overview from './components/Overview';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    api.get('/goals').then(res => setGoals(res.data));
  }, []);

  const addGoal = (goal) => {
    api.post('/goals', goal).then(res => {
      setGoals([...goals, res.data]);
    });
  };

  const updateGoal = (id, updatedData) => {
    api.patch(`/goals/${id}`, updatedData).then(res => {
      setGoals(goals.map(goal => goal.id === id ? res.data : goal));
    });
  };

  const deleteGoal = (id) => {
    api.delete(`/goals/${id}`).then(() => {
      setGoals(goals.filter(goal => goal.id !== id));
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">Smart Goal Planner</h1>
      <Overview goals={goals} />
      <AddGoalForm addGoal={addGoal} />
      <DepositForm goals={goals} updateGoal={updateGoal} />
      <GoalList goals={goals} updateGoal={updateGoal} deleteGoal={deleteGoal} />
    </div>
  );
}

export default App;

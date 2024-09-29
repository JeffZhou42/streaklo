<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState, useEffect } from "react";
>>>>>>> 12c3781250c4d7ade394240907275f1d92aee498
import { Link } from 'react-router-dom';
import './Habits.css';
import axios from "axios";

function HabitContainer({ title, emoji, goal, streak, progress, rank, friends }) {
  return (
    <div className="habit-container">
      <h2>{title} {emoji}</h2>
      <p>Track your {title.toLowerCase()} {emoji} habit</p>
      
      <h3>Goal</h3>
      <p>{goal}</p>
      
      <h3>Streak</h3>
      <p className="streak">{streak} days 🔥</p>
      <div className="progress-bar">
        <div className="progress" style={{width: `${progress}%`}}></div>
      </div>
      
      <h3>Your place</h3>
      <p>{rank}</p>
      
      <h3>Highest streak friends</h3>
      <ul className="friend-list">
        {friends.map((friend, index) => (
          <li key={index}>{friend.name} - {friend.streak} days {friend.medal}</li>
        ))}
      </ul>
      
      <button className="track-button">Track Today 📅</button>
    </div>
  );
}

<<<<<<< HEAD
function PlaceholderContainer() {
  return (
    <div className="habit-container placeholder">
      <h2>No habits yet</h2>
      <p>Add a new habit to get started!</p>
      <div className="placeholder-icon">➕</div>
    </div>
  );
}

function FriendsSidebar({ isOpen, onClose }) {
  return (
    <div className={`friends-sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-sidebar" onClick={onClose}>×</button>
      <div className="sidebar-content">
        <input type="text" className="search-friends" placeholder="Search..." />
        <h2>friends</h2>
        <button className="new-tab">+ New Friend</button>
=======
function Habits() {
  const [habit, setHabit] = useState([{habitName: "Gym"}]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getHabit")
      .then((result) => {
        setHabit(result.data), location.update();
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="habits-page">
      <header className="habits-header">
        <button className="add-habit-button">Add Habit +</button>
        <nav>
          <Link to="/">Home 🏠</Link>
          <Link to="/user">User 👤</Link>
          <Link to="/habits" className="active">Habit 📊</Link>
        </nav>
      </header>
      <div className="habits-grid">
        <HabitContainer 
          title={habit[0].habitName}
          emoji="💪"
          goal="Complete gym 5 times a week"
          streak={habit[0].personalStreak}
          progress={80}
          rank="3rd place 🥉"
          friends={[
            { name: "Ray", streak: 7, medal: "🥇" },
            { name: "Bob", streak: 5, medal: "🥈" },
            { name: "Charlie", streak: 4, medal: "🥉" }
          ]}
        />
        <HabitContainer 
          title="Reading"
          emoji="📚"
          goal="Read for 30 minutes daily"
          streak={5}
          progress={75}
          rank="2nd place 🥈"
          friends={[
            { name: "David", streak: 8, medal: "🥇" },
            { name: "Eve", streak: 6, medal: "🥈" },
            { name: "Frank", streak: 3, medal: "🥉" }
          ]}
        />
        <HabitContainer 
          title="Studying"
          emoji="📝"
          goal="Study for 2 hours daily"
          streak={2}
          progress={40}
          rank="5th place"
          friends={[
            { name: "Grace", streak: 10, medal: "🥇" },
            { name: "Henry", streak: 7, medal: "🥈" },
            { name: "Ivy", streak: 5, medal: "🥉" }
          ]}
        />
>>>>>>> 12c3781250c4d7ade394240907275f1d92aee498
      </div>
    </div>
  );
}

function Habits() {
  const [isAddingHabit, setIsAddingHabit] = useState(false);
  const [isDeletingHabit, setIsDeletingHabit] = useState(false);
  const [newHabit, setNewHabit] = useState('');
  const [habitToDelete, setHabitToDelete] = useState('');
  const [habits, setHabits] = useState([]);
  const [isFriendsSidebarOpen, setIsFriendsSidebarOpen] = useState(false);

  const handleAddHabit = () => {
    if (isAddingHabit && newHabit.trim()) {
      const newHabitObject = {
        title: newHabit,
        emoji: "📌", // Default emoji
        goal: "New goal",
        streak: 0,
        progress: 0,
        rank: "New",
        friends: []
      };
      setHabits([...habits, newHabitObject]);
      setNewHabit('');
    }
    setIsAddingHabit(!isAddingHabit);
  };

  const handleDeleteHabit = () => {
    if (isDeletingHabit && habitToDelete.trim()) {
      const updatedHabits = habits.filter(habit => 
        habit.title.toLowerCase() !== habitToDelete.toLowerCase()
      );
      if (updatedHabits.length === habits.length) {
        alert("Habit not found. Please check the habit name and try again.");
      } else {
        setHabits(updatedHabits);
        setHabitToDelete('');
      }
    }
    setIsDeletingHabit(!isDeletingHabit);
  };

  const toggleFriendsSidebar = () => {
    setIsFriendsSidebarOpen(!isFriendsSidebarOpen);
  };

  return (
    <div className="habits-page">
      <header className="habits-header">
        <div className="habit-actions">
          <div className="add-habit-container">
            <button 
              className={`add-habit-button ${isAddingHabit ? 'active' : ''}`} 
              onClick={handleAddHabit}
            >
              <span className="add-habit-icon">+</span>
              {isAddingHabit ? 'Add' : 'Add habit'}
            </button>
            {isAddingHabit && (
              <input
                type="text"
                className="add-habit-input"
                value={newHabit}
                onChange={(e) => setNewHabit(e.target.value)}
                placeholder="Enter new habit"
                autoFocus
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleAddHabit();
                  }
                }}
              />
            )}
          </div>
          <div className="delete-habit-container">
            <button 
              className={`delete-habit-button ${isDeletingHabit ? 'active' : ''}`} 
              onClick={handleDeleteHabit}
            >
              <span className="delete-habit-icon">-</span>
              {isDeletingHabit ? 'Delete' : 'Delete habit'}
            </button>
            {isDeletingHabit && (
              <input
                type="text"
                className="delete-habit-input"
                value={habitToDelete}
                onChange={(e) => setHabitToDelete(e.target.value)}
                placeholder="Enter habit to delete"
                autoFocus
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleDeleteHabit();
                  }
                }}
              />
            )}
          </div>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <button onClick={toggleFriendsSidebar}>Friends</button>
          <Link to="/user">User</Link>
          <Link to="/habits" className="active">Habit</Link>
        </nav>
      </header>
      <div className="habits-grid">
        {habits.length > 0 ? (
          habits.map((habit, index) => (
            <HabitContainer 
              key={index}
              title={habit.title}
              emoji={habit.emoji}
              goal={habit.goal}
              streak={habit.streak}
              progress={habit.progress}
              rank={habit.rank}
              friends={habit.friends}
            />
          ))
        ) : (
          <PlaceholderContainer />
        )}
      </div>
      <FriendsSidebar isOpen={isFriendsSidebarOpen} onClose={toggleFriendsSidebar} />
    </div>
  );
}

export default Habits;
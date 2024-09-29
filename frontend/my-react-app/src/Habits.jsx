import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Habits.css';

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
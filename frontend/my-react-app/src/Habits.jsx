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

function AddHabitModal({ isOpen, onClose, onSave }) {
  const [title, setTitle] = useState('');
  const [goal, setGoal] = useState('');
  const [friend, setFriend] = useState('');
  const [friends, setFriends] = useState([]);

  const handleAddFriend = () => {
    if (friend.trim()) {
      setFriends([...friends, friend.trim()]);
      setFriend('');
    }
  };

  const handleSave = () => {
    onSave({ title, goal, friends });
    setTitle('');
    setGoal('');
    setFriends([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Habit</h2>
        <input
          type="text"
          placeholder="Habit Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <div className="friend-input">
          <input
            type="text"
            placeholder="Add Friend"
            value={friend}
            onChange={(e) => setFriend(e.target.value)}
          />
          <button onClick={handleAddFriend}>Add</button>
        </div>
        <ul className="friend-list">
          {friends.map((f, index) => (
            <li key={index}>{f}</li>
          ))}
        </ul>
        <div className="modal-actions">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
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
  const [isAddHabitModalOpen, setIsAddHabitModalOpen] = useState(false);

  const handleAddHabit = () => {
    setIsAddHabitModalOpen(true);
  };

  const handleSaveHabit = (habitData) => {
    const newHabitObject = {
      title: habitData.title,
      emoji: "", // Default emoji
      goal: habitData.goal,
      streak: 0,
      progress: 0,
      rank: "New",
      friends: habitData.friends.map(name => ({ name, streak: 0, medal: '🥉' }))
    };
    setHabits([...habits, newHabitObject]);
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
          <button className="add-habit-button" onClick={handleAddHabit}>
            <span className="add-habit-icon">+</span>
            Add habit
          </button>
          <button className="delete-habit-button" onClick={handleDeleteHabit}>
            <span className="delete-habit-icon">-</span>
            Delete habit
          </button>
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
      <AddHabitModal 
        isOpen={isAddHabitModalOpen}
        onClose={() => setIsAddHabitModalOpen(false)}
        onSave={handleSaveHabit}
      />
    </div>
  );
}

export default Habits;
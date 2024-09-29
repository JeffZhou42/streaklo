import React, { useState, useEffect } from "react";
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
      </div>
    </div>
  );
}

export default Habits;
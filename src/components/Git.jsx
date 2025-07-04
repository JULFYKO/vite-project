import React, { useState } from 'react';
import '../index.css';

export default function Git() {
  const [login, setLogin] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    setUser(null);
    if (!login) return;
    try {
      const res = await fetch(`https://api.github.com/users/${login}`);
      if (!res.ok) {
        setError('User not found');
        return;
      }
      const data = await res.json();
      setUser(data);
    } catch {
      setError('Error fetching data');
    }
  };

  return (
    <div className="git-container">
      <form onSubmit={handleSearch} className="git-form">
          <input
            type="text"
            value={login}
            onChange={e => setLogin(e.target.value)}
            placeholder="Enter GitHub username"
            className="git-input"
          />
        <button type="submit" className="git-btn">Search</button>
      </form>
      {error && <div className="git-error">{error}</div>}
      {user && (
        <div className="git-user-card">
          <img
            src={user.avatar_url}
            alt="avatar"
            className="git-avatar"
          />
          <div className="git-user-info">
            <div>
              <b>Url to github:</b> <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.html_url}</a>
            </div>
            <div>
              <b>Blog:</b> {user.blog ? <a href={user.blog} target="_blank" rel="noopener noreferrer">{user.blog}</a> : 'No Blog'}
            </div>
            <div>
              <b>City:</b> {user.location || 'No City'}
            </div>
            <div>
              <b>Email:</b> {user.email || 'No Email'}
            </div>
            <div>
              <b>Followers:</b> {user.followers}
            </div>
            <div>
                <b>Following:</b> {user.following}
            </div>
            <div>
              <b>Name:</b> {user.name || 'No Name'}
            </div>
            <div>
              <b>Login:</b> {user.login}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

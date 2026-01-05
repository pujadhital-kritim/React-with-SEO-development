// DIsplay list of user
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { deleteUser, getUser, updateUser } from '../api/userApi';
import { useMemo } from 'react';
import { useCallback } from 'react';

const User = ({ refreshTrigger }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const data = await getUser();
        setUsers(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [refreshTrigger]);  // refetch data when refresh trigger change

  const userCount = useMemo(() => {
    console.log("Calculating user count...");
    return users.length;
  }, [users]);

  // useCallback prevents recreation on every render
  const handleDelete = useCallback(async (id) => {
    try {
      await deleteUser(id);
      setUsers(prev => prev.filter(user => user.id !== id));
    } catch (error) {
      setError(error.message)
    }
  }, []);

  const handleUpdate = useCallback(async (id) => {
    try {
      const data = await updateUser(id, { name: editName });
      setUsers(prev =>
        prev.map(user => user.id === id ? { ...user, name: editName } : user)
      );

      setEditingUserId(null);
    } catch (error) {
      setError(error.message);
    }
  }, [editName]);

  return (
    <main>
      {loading && <p>User Loading...</p>}
      {error && <p>{error}</p>}

      <h2>Users({userCount})</h2>

      {users.map((user) => (
        <section key={user.id}>
          {editingUserId === user.id ? (
            <>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <button onClick={() => handleUpdate(user.id)}>Save</button>
            </>
          ) : (
            <>
              <p>{user.name}</p>
              <button onClick={() => {
                setEditingUserId(user.id);
                setEditName(user.name);
              }}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </>
          )}
        </section>
      ))}
    </main>
  )
}
export default User
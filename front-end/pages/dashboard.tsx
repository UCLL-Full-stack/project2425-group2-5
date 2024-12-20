import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Dashboard: React.FC = () => {
  const [role, setRole] = useState('');
  const router = useRouter();

  useEffect(() => {
    const userRole = sessionStorage.getItem('role');
    if (!userRole) {
      router.push('/login'); // Redirect if not logged in
    } else {
      setRole(userRole);
    }
  }, [router]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Welcome to the Dashboard</h2>
      {role && (
        <p>Your role: {role}</p>
      )}
      {/* Render content based on role */}
      {role === 'admin' && <p>Admin Content</p>}
      {role === 'lecturer' && <p>Lecturer Content</p>}
      {role === 'student' && <p>Student Content</p>}
      {role === 'guest' && <p>Guest Content</p>}
    </div>
  );
};

export default Dashboard;

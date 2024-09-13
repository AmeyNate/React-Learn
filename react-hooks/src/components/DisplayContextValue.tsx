import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types for the context state and actions
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

// Define a User type
interface User {
  id: number;
  username: string;
}

// Default context values
const defaultContext: AuthContextType = {
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
};

// Create the context
const AuthContext = createContext<AuthContextType>(defaultContext);

interface AuthProviderProps {
  children: ReactNode;
}

// Create the provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (username: string, password: string) => {
    // Mock login function
    // Replace this with real authentication logic
    if (username && password) {
      setUser({ id: 1, username });
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Example components that use the Auth context

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isAuthenticated } = useAuth();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    login(username, password);
  };

  if (isAuthenticated) {
    return <div>You are logged in as {username}.</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

const Profile: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div>
      <div>Welcome, {user?.username}!</div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

// Main App component
const context: React.FC = () => {
  return (
    <AuthProvider>
      <div>
        <Login />
        <Profile />
      </div>
    </AuthProvider>
  );
};

export default context;

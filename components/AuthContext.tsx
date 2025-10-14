import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  users: Array<User & { password: string }>;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<Array<User & { password: string }>>([]);

  const login = (email: string, password: string) => {
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser({ id: foundUser.id, name: foundUser.name, email: foundUser.email });
      return true;
    }
    return false;
  };

  const register = (name: string, email: string, password: string) => {
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'Este correo ya está registrado' };
    }
    if (password.length < 6) {
      return { success: false, error: 'La contraseña debe tener al menos 6 caracteres' };
    }
    const newUser = { id: Date.now(), name, email, password };
    setUsers([...users, newUser]);
    return { success: true };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, users, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth debe usarse dentro de AuthProvider');
  return context;
};
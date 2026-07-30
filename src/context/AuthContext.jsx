import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const savedUser = localStorage.getItem("user");

    if (isAuthenticated === "true" && savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  // Login
  const login = async (email, password, remember = true) => {
    // Replace this with your backend API later
    if (
      email === "admin@example.com" &&
      password === "admin123"
    ) {
      const loggedInUser = {
        name: "Administrator",
        email,
      };

      setUser(loggedInUser);

      if (remember) {
        localStorage.setItem(
          "user",
          JSON.stringify(loggedInUser)
        );

        localStorage.setItem(
          "isAuthenticated",
          "true"
        );
      }

      return {
        success: true,
      };
    }

    return {
      success: false,
      message: "Invalid email or password.",
    };
  };

  // Register
  const register = async (data) => {
    // Replace with backend API

    const newUser = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
    };

    localStorage.setItem(
      "registeredUser",
      JSON.stringify({
        email: data.email,
        password: data.password,
      })
    );

    return {
      success: true,
      user: newUser,
    };
  };

  // Logout
  const logout = () => {
    setUser(null);

    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
  };

  const value = {
    user,
    loading,
    login,
    logout,
    register,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
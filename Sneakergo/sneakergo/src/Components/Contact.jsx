// Contact.js
import React, { useState } from "react";
import UserProfile from "./Userprofile";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [signInSuccess, setSignInSuccess] = useState(false); // State to track sign-in success
  const [userData, setUserData] = useState(null); // State to store user data

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      };

      if (isSignUp) {
        // Sign-up
        await fetch("http://localhost:5001/signup", requestOptions);
        console.log("User registered successfully");
      } else {
        // Sign-in
        const response = await fetch(
          "http://localhost:5001/signin",
          requestOptions
        );
        if (response.ok) {
          console.log("Authentication successful");
          setSignInSuccess(true); // Set sign-in success
          setUserData({ email }); // Store user data in state
        } else {
          console.error("Sign-in failed:", response.statusText);
          // Clear user data if sign-in fails
          setSignInSuccess(false);
          setUserData(null);
        }
      }
      // Clear form inputs after submission
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-full max-w-md bg-orange-500 p-8 rounded-lg">
        {!signInSuccess ? (
          <>
            <h2 className="text-3xl mb-4 text-black font-semibold">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-black text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-black text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className="bg-black hover:bg-gray-800 text-orange-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>
            <p className="text-black mt-4">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <button
                className="text-gray-500 ml-2"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </>
        ) : (
          <UserProfile userData={userData} />
        )}
      </div>
    </div>
  );
};

export default Contact;

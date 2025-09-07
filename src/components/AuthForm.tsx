import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, Lock, Mail, User } from "lucide-react";

const AuthForm = ({ isLogin = true }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9E5] to-[#FFEFA0]">
      <div className="max-w-md mx-auto pt-24 px-4 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 sm:p-10"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="p-3 rounded-full bg-gradient-to-br from-[#D6A900] to-[#B88F00] shadow-md mb-4">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              {isLogin ? "Welcome Back to TerraPods" : "Join TerraPods"}
            </h2>
            <p className="text-gray-500 mt-2">
              {isLogin
                ? "Sign in to continue your journey"
                : "Create your free account"}
            </p>
          </div>

          <form className="space-y-6">
            {!isLogin && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
                <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#D6A900] focus-within:border-transparent">
                  <User className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full ml-2 outline-none bg-transparent"
                    autoComplete="name"
                  />
                </div>
              </motion.div>
            )}

            <div className="relative">
              <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#D6A900] focus-within:border-transparent">
                <Mail className="h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full ml-2 outline-none bg-transparent"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#D6A900] focus-within:border-transparent">
                <Lock className="h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full ml-2 outline-none bg-transparent"
                  autoComplete={isLogin ? "current-password" : "new-password"}
                />
              </div>
            </div>

            {!isLogin && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
                <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#D6A900] focus-within:border-transparent">
                  <Lock className="h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full ml-2 outline-none bg-transparent"
                    autoComplete="new-password"
                  />
                </div>
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-br from-[#D6A900] to-[#B88F00] text-white py-3 rounded-lg font-medium hover:shadow-md transition-all"
              type="submit"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </motion.button>

            <div className="text-center mt-6">
              <p className="text-gray-500">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <Link
                  to={isLogin ? "/signup" : "/login"}
                  className="text-[#D6A900] hover:text-[#B88F00] font-medium underline underline-offset-4 hover:decoration-2"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </Link>
              </p>
            </div>
          </form>

          {/* Divider + Google button */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center text-lg gap-2 bg-white border rounded-lg px-4 py-2.5 text-gray-700 hover:bg-gray-50"
              >
                {/* Fixed Google SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 256 262"
                >
                  <path
                    fill="#4285F4"
                    d="M255.96 133.451c0-10.734-.868-18.567-2.757-26.69H130.55v50.448h71.947c-3.1 16.523-12.326 29.99-26.362 39.22v32.57h42.587c24.924-23.0 39.03-56.874 39.03-95.548z"
                  />
                  <path
                    fill="#34A853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.548l-42.587-32.57c-11.84 7.935-27.04 12.57-43.866 12.57-33.796 0-62.448-22.813-72.654-53.418H13.775v33.579C35.574 236.353 79.86 261.1 130.55 261.1z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M57.896 156.37c-2.66-7.915-4.195-16.38-4.195-25.02s1.536-17.105 4.195-25.02V73.75H13.775C5.018 92.11 0 114.522 0 133.35s5.018 41.24 13.775 59.6l44.121-36.58z"
                  />
                  <path
                    fill="#EB4335"
                    d="M130.55 50.479c19.19 0 32.077 8.322 39.39 15.26l29.56-28.65C195.392 19.83 165.798 0 130.55 0 79.86 0 35.574 24.747 13.775 61.75l44.121 36.58c10.206-30.605 38.858-53.418 72.654-53.418z"
                  />
                </svg>
                <span>Google</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthForm;

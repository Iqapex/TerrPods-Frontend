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
            <div className="p-3 rounded-full bg-gradient-to-br from-[#D4A017] to-[#B38912] shadow-md mb-4">
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative"
              >
                <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#D4A017] focus-within:border-transparent">
                  <User className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full ml-2 outline-none bg-transparent"
                  />
                </div>
              </motion.div>
            )}

            <div className="relative">
              <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#D4A017] focus-within:border-transparent">
                <Mail className="h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full ml-2 outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#D4A017] focus-within:border-transparent">
                <Lock className="h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full ml-2 outline-none bg-transparent"
                />
              </div>
            </div>

            {!isLogin && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative"
              >
                <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-[#D4A017] focus-within:border-transparent">
                  <Lock className="h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full ml-2 outline-none bg-transparent"
                  />
                </div>
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-br from-[#D4A017] to-[#B38912] text-white py-3 rounded-lg font-medium hover:shadow-md transition-all"
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
                  className="text-[#D4A017] hover:text-[#B38912] font-medium underline underline-offset-4 hover:decoration-2"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center text-lg gap-2 bg-white border rounded-lg px-4 py-2.5 text-gray-700 hover:bg-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 262"
                  id="google"
                >
                  <path
                    fill="#4285F4"
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  ></path>
                  <path
                    fill="#EB4335"
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  ></path>
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

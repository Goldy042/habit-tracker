"use client"
import React, { useState } from "react"

const Login = () => {

const [formData, setFormData] = useState({
    email: "",
    password: "",
});
const [error, setError] = useState("");
const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("hello")
};
return(
    <div className="w-full min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                <p className="text-gray-400">Sign in to access your account</p>
            </div>
            <div className="backdrop-blur-xl bg-white/5 border border-gray-800 p-8 rounded-lg">
                <form onSubmit={handleSumbit} className="space-y-6">
                    {error && <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-y-3 rounded-lg flex items-center gaps"> <p>{error}</p> </div>}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <input id="email" type="email" required value={formData.email} onChange={e => setFormData({
                                ...formData,
                                email: e.target.value
                            })} className="w-full bg-white/5 border-gray-800 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="janedoe@example.com"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input id="password" type="password" required value={formData.password} onChange={e => setFormData({
                                ...formData,
                                password: e.target.value
                            })} className="w-full bg-white/5 border-gray-800 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="Enter Password"/>
                        </div>
                        <button type="submit" className="w-full bg-gradiet-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 rounded-lg font-smibold hover:from-yellow-400 hover:to-yellow-500 transition all">
                            Sign In
                        </button>
                    </div>
                    <div className="flex items-center justify">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-800 bg-white/5 text-yellow-500 focus:ring-0 focus:ring-offset-0" />
                            <span className="text-sm text-gray-400">Remember me</span>
                        </label>
                    </div>
                    <button type="button" onClick={() => setIsForgotPasswordOpen(true)} className="text-sm text-blue-500 hover:text-blue-400 transition-colors">
                Forgot Password?
              </button>
                    <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-black px-6 py-3 rounded-lg font-semibold hover:from-blue-400 hover:to-blue-500 transition-all">
              Sign In
            </button>
                </form>
            </div>
            {/* Sign Up Link */}
        <p className="text-center mt-8 text-gray-400">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:text-blue-400 transition-colors font-semibold">
            Sign up now
          </a>
        </p>
        </div>
         {/* Forgot Password Modal
      <ForgotPasswordModal isOpen={isForgotPasswordOpen} onClose={() => setIsForgotPasswordOpen(false)} />
    </div>; */}
};
    </div>    
)
}
export default Login;
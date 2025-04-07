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
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-white text-white pt-18 pb-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl text-gray-900 font-bold mb-2">Welcome Back</h1>
                <p className="text-gray-700">Sign in to access your account</p>
            </div>
            <div className="bg-white shadow-2xl p-8 rounded-lg">
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
                            })} className="w-full bg-white/5 border border-gray-400 rounded-lg pl-10 pr-4 py-3 text-gray-500 focus:outline-none focus:border-gray-700 transition-colors" placeholder="janedoe@example.com"/>
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
                            })} className="w-full bg-white/5 border border-gray-400 rounded-lg pl-10 pr-4 py-3 text-gray-500 focus:outline-none focus:border-gray-600 transition-colors" placeholder="Enter Password"/>
                        </div>
                    </div>
                    <div className="flex items-center justify">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-800 bg-white/5 text-gray-500 focus:ring-0 focus:ring-offset-0 checked:bg-gray-800" />
                            <span className="text-sm text-gray-400">Remember me</span>
                        </label>
                    </div>
                    <button type="button" onClick={() => setIsForgotPasswordOpen(true)} className="text-sm text-gray-900 hover:text-gray-800 transition-colors">
                Forgot Password?
              </button>
                    <button type="submit" className="w-full  bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-gray-800 hover:to-gray-900 transition-all">
              Sign In
            </button>
                </form>
            </div>
            {/* Sign Up Link */}
        <p className="text-center mt-8 text-gray-400">
          Don't have an account?{" "}
          <a href="/signup" className="text-gray-500 hover:text-gray-400 transition-colors font-semibold">
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
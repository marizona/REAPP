import React from 'react'

export default function Signin() {
    return (
        <div className="lg:container lg:mx-auto lg:max-w-7xl">
        <div class=" mx-auto lg:mt-64 md:mt-34 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" action="#">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in</h3>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
            </div>
            <div class="flex items-start">
                <div class="flex items-start">
                    <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                    </div>
                    <div class="ml-3 text-sm">
                    <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                </div>
                <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
            </div>
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
            </div>
        </form>
    </div>
   </div>
    )
}
"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import { useRouter } from "next/navigation";
import register from "../lib/Register";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [confirmedPassword, setConfirmedPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = {
      name: name,
      email: email,
      password: password,
      password_confirmation: confirmedPassword,
      username: username,
    };
    const resp = await register(formdata);
    console.log(resp);
    router.push("/login");
  };

  return (
    <div className="bg-[#e7e8e2] min-h-screen overflow-x-hidden">
      <Navbar></Navbar>

      <section class="">
        <div class="min-h-screen mb-20">
          <main class=" flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div class="max-w-xl lg:max-w-3xl">
              <form
                action="#"
                class="xl:mt-12 grid grid-cols-6 gap-6"
                onSubmit={handleSubmit}
              >
                <div class="col-span-6">
                  <label
                    for="Username"
                    class="xl:text-2xl block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>

                  <input
                    type="text"
                    id="Username"
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    name="Username"
                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div class="col-span-6">
                  <label
                    for="Name"
                    class="xl:text-2xl block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    name="Name"
                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
                <div class="col-span-6">
                  <label
                    for="Email"
                    class="xl:text-2xl block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="Email"
                    name="email"
                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="Password"
                    class="block text-sm xl:text-2xl font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="PasswordConfirmation"
                    class="block xl:text-2xl text-sm font-medium text-gray-700"
                  >
                    Password Confirmation
                  </label>

                  <input
                    type="password"
                    onChange={(e) => {
                      setConfirmedPassword(e.target.value);
                    }}
                    id="PasswordConfirmation"
                    name="password_confirmation"
                    class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div class="col-span-6">
                  <label for="MarketingAccept" class="flex gap-4">
                    <input
                      type="checkbox"
                      id="MarketingAccept"
                      name="marketing_accept"
                      class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span class="text-sm text-gray-700">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div class="col-span-6">
                  <p class="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <a href="#" class="text-gray-700 underline">
                      terms and conditions
                    </a>
                    and
                    <a href="#" class="text-gray-700 underline">
                      {" "}
                      privacy policy
                    </a>
                    .
                  </p>
                </div>

                <div class=" col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    class="inline-block shrink-0 rounded-md border border-[#940242] bg-[#958f89] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#940242] focus:outline-none focus:ring active:text-[#940242]"
                  >
                    Create an account
                  </button>

                  <p class="mt-4 xl:text-2xl text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a href="login" class="text-gray-700 underline">
                      {" "}
                      Log in
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

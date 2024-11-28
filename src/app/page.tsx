"use client";

import { use, useEffect, useState } from "react";
import { CalculateMaximumTime, CalculateExpectedTime, CalculateAmountOfPossibleCharacters, CalculateTotalHashes } from "./calculation";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [speed, setSpeed] = useState(5000);
  const [maximumTime, setMaximumTime] = useState("");
  const [expectedTime, setExpectedTime] = useState("");
  const [amountOfPossibleCharacters, setAmountOfPossibleCharacters] = useState(0);
  const [totalHashes, setTotalHashes] = useState(0);
  const [advancedSettingsOpen, setAdvancedSettingsOpen] = useState(false);
  const [mathsOpen, setMathsOpen] = useState(false);

  useEffect(() => {
    CalculateMaximumTime(password, speed).then((time) => {
      setMaximumTime(time);
    });
    CalculateExpectedTime(password, speed).then((time) => {
      setExpectedTime(time);
    });
    setAmountOfPossibleCharacters(CalculateAmountOfPossibleCharacters(password));
    setTotalHashes(CalculateTotalHashes(password));
  }, [password, speed]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 px-4 py-8">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-black">
              <h1 className="font-sans text-4xl font-bold">
                How long would a hacker take?
              </h1>
              <div className="mt-4" />
              <h2 className="font-sans text-xl font-semibold">
                How secure is your password?
              </h2>
              <div className="mt-4" />

              <p>
                Hackers use some of the fastest computers in the world to try
                and crack your password. But their computers are no match for a
                strong password.
              </p>
              <p>
                Let's see how long it would take a hacker to crack your
                password.
              </p>
              <div className="mt-2" />
              <p>
                TIP: Increase the time a hacker would take by using a longer
                password with a mix of upper and lowercase letters, numbers, and
                symbols.
              </p>
              <div className="mt-4" />

              <div className="relative">
                <input
                  type={visible ? "text" : "password"}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter a password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    setVisible(!visible);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {visible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="18px"
                      width="18px"
                      viewBox="0 -960 960 960"
                      fill="currentColor"
                    >
                      <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="18px"
                      width="18px"
                      viewBox="0 -960 960 960"
                      fill="currentColor"
                    >
                      <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="mt-2" />
              <div className="flex items-center">
                <button
                  type="button"
                  className="flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  onClick={() => {
                    setAdvancedSettingsOpen(!advancedSettingsOpen);
                  }}
                >
                  Advanced Settings
                  {advancedSettingsOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </button>
              </div>
              {advancedSettingsOpen && (
                <div className="mt-2">
                  <label className="text-sm text-gray-600 dark:text-gray-400">
                    Megahashes per second (MH/s):
                  </label>
                  <input
                    type="number"
                    className="ml-2 w-24 rounded-md border border-gray-300 p-1 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    value={speed}
                    onChange={(e) => {
                      setSpeed(parseInt(e.target.value));
                    }}
                  />
                </div>
              )}
              <div className="mt-4" />

              <div className="flex items-center justify-between">
                <label className="font-sans text-lg font-semibold">
                  Maximum Time:{" "}
                </label>
                <span className="font-sans text-lg font-semibold">
                  {maximumTime}
                </span>
              </div>
              <div className="mt-2" />

              <div className="flex items-center justify-between">
                <label className="font-sans text-lg font-semibold">
                  Expected Time:{" "}
                </label>
                <span className="font-sans text-lg font-semibold">
                  {expectedTime}
                </span>
              </div>

              <div className="mt-4" />
              <div className="flex items-center">
                <button
                  type="button"
                  className="flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  onClick={() => {
                    setMathsOpen(!mathsOpen);
                  }}
                >
                  Explain the maths
                  {mathsOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </button>
              </div>
              {mathsOpen && (
                <div className="mt-2">
                  <h2 className="font-sans text-xl font-bold">Amount of possible characters</h2>
                  <div className="mt-1" />
                  <h3 className="text-lg font-regular">Letters in one case only: 26</h3>
                  <h3 className="text-lg font-regular">Letters in one case and numbers only: 36</h3>
                  <h3 className="text-lg font-regular">Letters in one case and special characters only: 60</h3>
                  <h3 className="text-lg font-regular">Letters in mixed case only: 52</h3>
                  <h3 className="text-lg font-regular">Letters in one case, numbers, and special characters only: 60</h3>
                  <h3 className="text-lg font-regular">Letters in mixed case and numbers only: 62</h3>
                  <h3 className="text-lg font-regular">Letters in mixed case and special characters only: 86</h3>
                  <h3 className="text-lg font-regular">Letters in mixed case, numbers, and special characters: 96</h3>
                  <div className="mt-2" />

                  <h2 className="font-sans text-xl font-bold">Amount of possible different passwords</h2>
                  <div className="mt-1" />
                  <h3 className="text-lg font-regular">Amount of possible characters ^ Password Length</h3>
                  <div className="mt-2" />

                  <h2 className="font-sans text-xl font-bold">Maximum amount of time to crack</h2>
                  <div className="mt-1" />
                  <h3 className="text-lg font-regular">Amount of possible different passwords / Megahashes per second</h3>
                  <div className="mt-2" />

                  <h2 className="font-sans text-xl font-bold">Expected amount of time to crack</h2>
                  <div className="mt-1" />
                  <h3 className="text-lg font-regular">Maximum amount of time to crack / 2</h3>
                  <div className="mt-2" />

                  <h2 className="font-sans text-xl font-bold">For your password</h2>
                  <div className="mt-1" />
                  <h3 className="text-lg font-regular">Amount of possible characters: {amountOfPossibleCharacters}</h3>
                  <h3 className="text-lg font-regular">Total amount of different passwords: {totalHashes}</h3>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

# Unhandled Promise Rejections in Node.js Express Server

This repository demonstrates a common issue in Node.js Express servers: unhandled promise rejections.  The `bug.js` file contains a simple Express server that simulates an asynchronous operation with a 5-second delay.  While this is a simple example, the delay could represent a longer-running operation that might fail, leading to unhandled rejections.  The `bugSolution.js` provides a solution to properly handle potential errors.

## Bug
The original code lacks error handling for the asynchronous operation. If any error occurs during the 5-second delay (not shown in the simplified example), it would result in an unhandled promise rejection, leading to potential crashes or instability in the application.

## Solution
The solution incorporates proper error handling using `.catch()` to handle potential errors during the asynchronous operation. This ensures that the server gracefully handles any unexpected issues and prevents unhandled promise rejections.
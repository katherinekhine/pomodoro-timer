# Pomodoro Timer

This project is a simple Pomodoro Timer built with HTML, CSS, and JavaScript. The timer counts down from 25 minutes (1500 seconds) and allows users to start, stop, and reset the timer. When the timer reaches zero, an alert notifies the user that the time is up, and the timer automatically resets to 25 minutes.

## Features

- Start Timer: Begins the countdown from 25 minutes.
- Stop Timer: Pauses the countdown at the current time.
- Reset Timer: Resets the timer to the initial 25-minute duration.
- Alert Notification: Alerts the user when the time is up.

## Files

- index.html: The main HTML file that contains the structure of the Pomodoro Timer interface.
- style.css: The CSS file that provides styling for the Pomodoro Timer. (Note: You need to create this file to style your timer as desired.)
- index.js: The JavaScript file that contains the functionality for the timer, including start, stop, and reset actions.

## Usage

- Open the index.html file in a web browser to use the Pomodoro Timer.
- Click "Start" to begin the countdown.
- Click "Stop" to pause the timer at any time.
- Click "Reset" to reset the timer back to 25 minutes.

## How It Works

- Timer Countdown: The timer starts at 1500 seconds (25 minutes). Every second, the startTimer function decreases the time by 1 second and updates the timer display.
- Stop Timer: The stopTimer function stops the countdown by clearing the interval.
- Reset Timer: The resetTimer function stops the countdown and resets the time to 1500 seconds.
- Alert: When the timer reaches zero, an alert pops up, and the timer resets automatically to 25 minutes.

## Customization

- You can adjust the initial timer duration by changing the timeLeft variable in index.js.
- Customize the alert message by modifying the text inside the alert() function in the startTimer function.

## Requirements

- A modern web browser (Chrome, Firefox, Safari, etc.)
- Basic knowledge of HTML, CSS, and JavaScript if you plan to modify the timer.

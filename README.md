# monty-hall-playtester

Project Name
ModiP

Goal
Create a visual play tester for the Monty Hall Problem with a binary choice for example

Requirements

Layout
Two pillars, each with 5 columns.
Each pillar represents 100 iterations of a strategy for a variation of the Monty Hall game.
Each cell in the pillars represents one iteration.

Running Tally
Display a running tally of the number of wins for each pillar above them.

Game Rules
Randomly choose one of the 2 options (binary choice)
Each pillar represents a player choosing a strategy.

Outcomes
Each cell has a binary outcome: right (correct) or wrong.
Correct plays turn the cell green and increment the wins tally.

Strategies
Both pillars use the same initial strategy: a random first choice.
First Pillar: "Don’t Switch" group, always keeps the initial choice.
Second Pillar: "Switch" group, always switches to the remaining option.

Controls
Add a start button at the top.
The start button resets colors, begins iterating through the 200 plays, assigns wins and losses, and tallies the results. Each iteration should proceed "head-to-head," with one iteration of each pillar calculated simultaneously so the iterations proceed at the same pace and finish together.

Additional Notes
Ensure the first choice is always random.
Correct plays turn the cell green, incorrect plays do not change the cell color.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React with shadcn-ui and Tailwind CSS.

- Vite
- React
- shadcn-ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/monty-hall-playtester.git
cd monty-hall-playtester
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

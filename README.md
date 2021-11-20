# Implementation/Notes

- Pulled out the timer/round information from my svg circles as suggested in previous assignment feedback
- Realized I had alot of conditional rendering which properly displayed or excluded information such as rounds based on what type of timer it was already so decided to scrap having a component for each individual timer and have one generic one that handles all cases in an attempt to repeat code less.
- Inspiration for my implementation of the timer selection bar comes from [this article](https://callmenick.com/dev/level-up-animations-cubic-bezier/). Also utilized [this visualization tool](https://cubic-bezier.com) to figure out the exact values for my cubic bezier curve.
- I ran into some issues with the flipping mechanism when testing on chrome for a bit. I believe I solved one issue but there still maybe some bugs present on chrome due to the backface-visibility property.
- I would also like to say I have made an attempt to clear out some warnings present in the website but trying to clear all the use effect dependency warnings resulted in my application breaking.
- Swapping between timers counts as a "hard reset" so settings are not maintained between timer switches.
- Would have liked to add animations to the circle progress bar to smooth out the effect from resetting from 100 progress to 0 progress.
- Fixed deploy issue by changing import from "react/cjs/react.development" to the normal react library
- There is a warning with my styled component rerendering a bunch of times due to the way I handled the circle. I tried to implement the .attrs method suggested but was unable to get it to work.
- Not happy with the way my useEffects are laid out, but trying to fix them when adding to the dependency array broke functionality everywhere.

Submission: https://prof-tejera.github.io/assignment-2-aali2537/

# Objective

In this assignment, we will start using the foundation we lay in A1 and make our timers fully functional. Each timer will function as described in A1 and the user flow should be the following:

- User opens the application
- Select a type of timer (Stopwatch, Countdown, XY, TABATA)

- Configure timer based on type (time, rounds, work/rest, etc)

- Run timer. While running, user should be able to:

  - Pause/Resume
  - When paused, user can reset back to initial state
  - Ability to "fast forward" (ends the timer)

- When timer is complete, you can decide how to congratulate the user and allow them to start over or select a different timer

## Deliverable

- Convert all classes components that you have added to functional components. You are welcome to convert all components (including ones added by us), but this is not required.
- Get all timers functional
- Application state should be managed with context. That is, timers should NOT track time, rounds, etc, locally or pass it down to its children
- Make sure that you can switch between timers without breaking the app (e.g. I should not have to refresh in order to run another timer after a run has been completed)
- Update documentation as your components change.
- Your application must be deployed and the link pasted somewhere in this README

### Deployment Instructions (GH actions)

- Go to `Settings`
- Go to `Pages`
- in `Source`, select `gh-pages` branch
- Click Save
- In `package.json`, add a new key/value as: `"homepage": "https://prof-tejera.github.io/<repo>"`

Once the `build-deploy` action finishes running, the app should be live
at `https://prof-tejera.github.io/<repo>`

For other ways to deploy see https://github.com/prof-tejera/react-deployment-code

## Grading Rubric

- All components you have added are functional components
- All timers are functioning properly
- Timers can be run one after another and it should not break the application
- Application state is managed with context
- DRY (do not repeat yourself). we should not see the same code copy pasted all over the codebase.
- Console is free of warnings/errors

## Bonus

For people looking for an additional challenge, we have provided some bonus features that you can implement. These are not required! You can still get a 100% on the assignment without them.

- Before the timer starts, have a 10-second countdown to give user time to prepare (3pt)
- User settings
  - custom number of seconds before the timer starts (1pt)
  - configurable audio notifications (3-2-1-GO, halfway, 1 minute left, last round, beep every minute, etc) (1pt)
- Persisting state so refreshing the page does not clear application state. (2pt)

## Installing and Running the project

As you have noticed this repository is empty. To begin this assignment you must copy over all of our files from A1 into this repo. I recommend not copying over `node_modules` and instead re-install here. You can then commit and deploy as usual from this repo.

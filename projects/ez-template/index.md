---
slug: about-ez-template
title: EZ-Template
date: 2024-06-10T10:00
authors: [jess]
tags: [vex, mentoring, tutorials, software, open source, wip]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[EZ-Template](https://ez-robotics.github.io/EZ-Template/) is a simple plug-and-play PROS template that handles drive-base functions for VEX robots with over 8000 downloads.  

![](banner.jpg)

<!--truncate-->

:::note

EZ-Template has its own website for documentation [here](https://ez-robotics.github.io/EZ-Template/).

:::

## About
Many students using VEXcode rely on the built-in [Drivetrain class](https://www.youtube.com/watch?v=JGGtvVNTGJw), but it often falls short in addressing the nuances of creating consistent autonomous routines, leading to frustration for new programmers. Issues like wheel slop and mechanical obstructions can be challenging to diagnose, causing students to lose interest in robotics.

EZ-Template solves these problems by giving simple code that has been tested to work.  If something goes wrong, a student can try to tune the PID after fixing mechanical problems (which you can't do in VEXcode).  It eliminates one point of failure to keep students more interested in robotics.  

This project taught me the importance of listening to user feedback and making adjustments accordingly.  I got feedback that users would prefer instructions in the code rather than figure it out from scratch in the docs, so I made sure every version was released with functions used in an example project.  

EZ-Template started out as my own personal template to make switching between robots easier.  I wanted it to be as simple and quick as possible to get a new robot to a point where I can start making autonomous routines.  This project was public, caught some attention early on, and exploded in popularity with over 8000 downloads at the time of writing this.  

## [v1.x](https://github.com/EZ-Robotics/EZ-Template/tree/f4c287dc3cea8c95cdbbd47939ef41c1d5a2f749)
### About
The goal of EZ-Template shifted over time. This started as my [codebase on my Tower Takeover robot](https://github.com/EZ-Robotics/EZ-GOOFY), and as I progressed through Change Up I got increasingly annoyed at how convoluted it was to give the code all the information it needed.  I made a brand new project and copied over all of my drive base code, and had a [single configuration file](https://github.com/EZ-Robotics/EZ-Template/blob/f4c287dc3cea8c95cdbbd47939ef41c1d5a2f749/include/EZ-Template/setup.hpp).  

### Features
- simple to set up a project
- drive, turn, and swing turn PID 
- speed ramp-up for driving
- asynchronous PID with blocking functions until settled and until a specific position has come
- joystick input curves
- live adjustment of the curves through the controller
- basic autonomous selector

### Issues
The code for this version was less than ideal.  The [main file was ~500 lines](https://github.com/EZ-Robotics/EZ-Template/blob/f4c287dc3cea8c95cdbbd47939ef41c1d5a2f749/src/EZ-Template/auton_drive_functions.cpp), with no real structure to anything.  The code worked, and because this was originally intended for only me to use I felt this was fine.  As more people used it, more errors were caught and it was clunky for users to update the library.  

The code needed to be cleaned and it had to be easier for users to update the library.

## [v2.x](https://github.com/EZ-Robotics/EZ-Template/tree/c4a5fd048f90363cc3f841abcb05c95eec2d36c3)
### About
This was a complete rewrite of EZ-Template taking advantage of [PROS templates](https://pros.cs.purdue.edu/v5/cli/conductor.html), done with the help of a group of students.  Setup was now done in a constructor and an example project comes loaded with comments and autonomous routines for users to test and play with how the library works.  

### Features
- SD card saving 
- "tug of war" detection in autonomous
- PID exits for when drive motors overheat
- right stick arcade
- loading animation during IMU calibration
- 3 wire / smart encoder encoder support
- add/remove motors from the drive dynamically if a team uses a PTO
- exposed PID class 
- classed away autonomous selector that is easier to use

### Issues
My biggest problem with v1.x and v2.x of EZ-Template is they are *too* easy.  EZ-Template comes with PID and exit condition constants that I tuned for some of my robots.  They were working pretty well within my similar robots, but I assumed everyone would have to tune their own PID because of variances in their robots to mine.  Throughout a few seasons, this assumption has been proven very wrong.  The average team has to do little to no tuning to get consistent results, and that isn't my goal with EZ-Template.  The next version of EZ-Template will need to find a way to solve this.

## [v3.0](https://github.com/EZ-Robotics/EZ-Template/tree/6b1c8ea469149a5c8ba15618f7339698d389f373)
### About
This version needs to solve the pre-tuned PID values.  The obvious solution to the problem is to not ship EZ-Template with pre-tuned constants but leave everything else the same.  Teams will know to copy/paste old constants, and my problem isn't solved. 

EZ-Template uses a base unit of "ticks".  One tick means different things depending on the gear ratio of the drive, wheel size, motor cartridge, and what encoder they are using.  This means if a team wanted to switch from using the motor's built-in encoders to tracking wheels, they would have to completely retune everything. 

This version of EZ-Template will solve this problem by using a base unit of inches.  No matter what sensor the user has, the code will always use inches.  This adds clarity for users by giving units, makes it so users can switch from built-in encoders to tracking wheels and keep the same constants, and stops forward/reverse v2 constants from working in v3.  
<Tabs
  groupId="ex1"
  defaultValue="v2"
  values={[
    { label: 'v2.x',  value: 'v2', },
    { label: 'v3.x',  value: 'v3', },
  ]
}>

<TabItem value="v2">

```cpp
chassis.set_drive_pid(24, DRIVE_SPEED);
chassis.wait_drive();

chassis.set_turn_pid(45, TURN_SPEED);
chassis.wait_drive();
```

</TabItem>


<TabItem value="v3">

```cpp
chassis.pid_drive_set(24_in, DRIVE_SPEED);
chassis.pid_wait();

chassis.pid_turn_set(45_deg, TURN_SPEED);
chassis.pid_wait();
```



</TabItem>
</Tabs>

3.x of EZ-Template will also include a complete redo of all function names.  Function names previously were made by what made the most sense to me.  Need to set the drive to move using PID?  `.set_drive_pid`.  This makes sense in English, but while I was working with [LVGL](https://lvgl.io/) I realized the benefit of naming in order of what you're looking for.  So now it'd be `.pid_drive_set`.  If you're looking to see everything you can do with PID on the drive, if you type `.pid_drive_` autocomplete will show you everything you can modify with the drive's PID.  This makes autocomplete a powerful tool when you don't know everything you can do in the library.

### Features
- renamed functions
- a relative turn function so it's not always absolute
- a relative swing function so it's not always absolute
- slew for turns and swings
- heading correction now uses vector scaling
- swing turns can move in different diameters
- add piston class
- practice mode for driving
- runtime pid tuner for ease of use
- [okapi units](https://okapilib.github.io/OkapiLib/md_docs_api_units.html) (so you can now use cm, in, meters, tiles, etc.)

### Issues
Between v2.x -> v3.x, my thought process was "everything is too easy and people need to learn to tune PID!!!".  Now, I think this way of thinking is inherently flawed.  Blaming users for using something a certain way is my problem, not theirs.  If teams are using default constants and not putting effort into really trying to fine tune everything, then users do not understand the importance of fine tuning everything, and it's my failure for not explaining it well enough.  
  
## [v3.1](https://github.com/EZ-Robotics/EZ-Template)
### About
With this version came a documentation revamp to better explain generally how to use PROS and clearer step-by-step instructions for everything.  Every page will have more of a focus on "why is this important" rather than "this is how you do this thing, I'm assuming you already know why it's important".  

Close to Over Under worlds, teams started reporting an issue where movements would randomly skip.  It turns out this is due to users trying to "motion chain" where you exit motions early to carry momentum into the next motion instead of fully stopping.  This ended up being a really interesting issue that I explained [here](https://github.com/EZ-Robotics/EZ-Template/issues/117), this is a bug that has existed since v1 but this new way of using EZ-Template brought light to this bug.  How people were pushing EZ-Template can be seen [here](https://ez-robotics.github.io/EZ-Template/showcase/overunder).  

### Features 
- **!! Motion Chaining !!**
-  PROS 4.1.0
- Better default constants 
- New simple constructor 
- IMU acceleration is used in addition to your drive encoders for determining 0 velocity 
- IMU scaling 
- Random motion skipping is fixed 
- Derivative kick fixed
- All exit conditions print error to terminal 
- Drive motions now slew correctly 
- Exit conditions actually work 
- Changing max speed actually works 
- Capped decimal count in prints 
- Fixed chaining drives into turns 
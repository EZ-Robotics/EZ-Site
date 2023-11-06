---
slug: about-ez-template
title: EZ-Template
authors: [jess]
tags: [vex, mentoring, tutorials, software, open source]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[EZ-Template](https://github.com/EZ-Robotics/EZ-Template) is a simple plug-and-play PROS template that handles drive base functions for VEX robots.  

https://github.com/EZ-Robotics/EZ-Template

<!--truncate-->

## About
Many students using VEXcode rely on the built-in Drivetrain class, but it often falls short in addressing the nuances of creating consistent autonomous routines, leading to frustration for new programmers. Issues like wheel slop and mechanical obstructions can be challenging to diagnose, causing students to lose interest in robotics.

EZ-Template solves these problems by giving simple code that has been tested to work.  If something goes wrong, a student can try to tune the PID after fixing mechanical problems (which you can't do in VEXcode).  It eliminates one point of failure to keep students more interested in robotics.  

This project taught me the importance of listening to user feedback and making adjustments accordingly.  I got feedback that users would prefer instructions in the code rather than figure it out from scratch in the docs, so I made sure every version was released with functions used in an example project.

## [v1.x](https://github.com/EZ-Robotics/EZ-Template/tree/f4c287dc3cea8c95cdbbd47939ef41c1d5a2f749)
### About
The goal of EZ-Template shifted over time. This started out as my [codebase on my Tower Takeover robot](https://github.com/EZ-Robotics/EZ-GOOFY), and as I progressed through Change Up I got increasingly annoyed at how convoluted it was to give the code all the information it needed.  I made a brand new project and copied over all of my drive base code, and had a [single configuration file](https://github.com/EZ-Robotics/EZ-Template/blob/f4c287dc3cea8c95cdbbd47939ef41c1d5a2f749/include/EZ-Template/setup.hpp).  

### Features
- simple to set up project
- drive, turn, and swing turn PID 
- speed ramp-up for driving
- asynchronous PID with blocking functions until settled and until a specific position has come
- joystick input curves
- live adjustment of the curves through the controller
- basic autonomous selector

### Issues
The code for this version was less than ideal.  The [main file was ~500 lines](https://github.com/EZ-Robotics/EZ-Template/blob/f4c287dc3cea8c95cdbbd47939ef41c1d5a2f749/src/EZ-Template/auton_drive_functions.cpp), with no real structure to anything.  The code worked, and because this was originally intended for only me to use I felt this was fine.  As more people used it, more errors were and it was clunky for users to update the library.  

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
My biggest problem with v1.x and v2.x of EZ-Template is they are *too* easy.  EZ-Template comes with PID and exit condition constants that I tuned for some of my robots.  They were working pretty well within my similar robots, but I assumed everyone would have to tune their own PID because of variances in their robots to mine.  Over the course of a few seasons, this assumption has been proven very wrong.  The average team has to do little to no tuning to get consistent results, and that isn't my goal with EZ-Template.  The next version of EZ-Template will need to find a way to solve this.

## v3.x
### About
This version needs to solve the pre-tuned PID values.  The obvious solution to the problem is to not ship EZ-Template with pre-tuned constants but leave everything else the same.  My problem with this is teams will know to copy/paste old constants, and my problem isn't solved. 

EZ-Template has a base unit of "ticks".  One tick means different things depending on the gear ratio of the drive, wheel size, motor cartridge, and what encoder they are using.  This means if a team wanted to switch from using the motor's built-in encoders to tracking wheels, they would have to completely retune everything. 

This version of EZ-Template will solve this problem by using a base unit of inches.  No matter what sensor the user has, the code will always use inches.  This adds clarity for users by giving numbers units and stops v2 constants from working in v3.  
<Tabs
  groupId="ex1"
  defaultValue="v2"
  values={[
    { label: 'v3.x',  value: 'v3', },
    { label: 'v2.x',  value: 'v2', },
  ]
}>

<TabItem value="v2">

```cpp
  chassis.set_drive_pid(24, DRIVE_SPEED, true);
  chassis.wait_drive();

  chassis.set_turn_pid(45, TURN_SPEED);
  chassis.wait_drive();
```

</TabItem>


<TabItem value="v3">

```cpp
  chassis.set_drive_pid(24_in, DRIVE_SPEED, true);
  chassis.wait_drive();

  chassis.set_turn_pid(45_deg, TURN_SPEED);
  chassis.wait_drive();
```



</TabItem>
</Tabs>


### Features
- a relative turn function so it's not always absolute
- a relative swing function so it's not always absolute
- add piston and pistongroup class
- practice mode for driving
- [okapi units](https://okapilib.github.io/OkapiLib/md_docs_api_units.html) (so you can now use cm, in, meters, tiles, etc.)
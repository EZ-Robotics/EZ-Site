---
slug: vexcode-tutorials
title: VEXcode Tutorials
authors: [jess]
tags: [vex, mentoring, tutorials, software, open source]
---

After I saw the success of the CAD tutorials, I decided to do the same for code.  I made click-by-click tutorials on code concepts to enable students to ask specific questions instead of "How do I code the robot?".  

There are tutorials for super kit robots, and there are discussions on forums about advanced software like pure pursuit and motion profiling, but there is a lack of resources for the middle ground.  Code that is more complex than moving the robot with joysticks, and less complex than motion profiling.  That's where these tutorials come in.

The tutorials start basic with spinning motors, joystick control, and more advanced control schemes like toggles, ladders, feedback loops using P from PID, and a GUI selector for selecting an autonomous routine.  

https://github.com/EZ-Robotics/VEXcode-Tutorials

<!--truncate-->

The biggest difference between teaching CAD and code through documentation is people can copy/paste code, and cannot copy/paste CAD without the source files.  To combat this I made sure to have a section on debugging, which goes into how to use the `printf()` function to read what variables are set to.  

In autonomous routines for VRC, robots usually move straight and turn.  I wanted to teach students how to use feedback controllers to get the robot to move, but if I have code for turning and driving students will copy/paste both.  I only have a tutorial for turning, and students can extrapolate how to modify the code for going straight.

---
slug: harvard-westlake-amogo-dogo
title: Harvard-Westlake- AMOGO x DOGO
authors: [jess]
tags: [vex, mentoring, tutorials, tipping point, hardware, software, cad]
---

Inspired by the [118 Everybot](https://www.118everybot.org/), Harvard-Westlake wanted to make simple, competitive designs for the VEX Robotics Competition Tipping Point.  

<iframe width="560" height="315" src="https://www.youtube.com/embed/mmhPOVIbJWI?si=anLpK8ux69RY1DQh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<!--truncate-->

## About
Harvard-Westlake hosted three one-week long summer camps where ~12 students would come for a one-week intensive of robotics where we wanted to condense an entire season into one week.  We split students into 4 groups and had two groups make AMOGO and two groups make DOGO.  The goal of the summer camp is to teach students the importance of build quality and how it leads to consistency and longevity in every part of a robot.  

During this one-week intensive, students learned build quality, and the importance of squaring drives, and had a full day and a half of tournaments where over 20 matches were run.  Students learned to maintain their robots as screws would come loose and learned to iterate flaws in the design in an attempt to make it more consistent. 

My role in the summer camp was to mentor students in build quality, maintain and iterate the example robots to be more consistent and easier to assemble, and develop software for the robots that gives simple-to-use controls for students who haven't driven a robot before. I also responded to community questions on the [forums](https://www.vexforum.com/t/harvard-westlake-robotics-amogo-x-dogo-reveal/92670) to make sure as much information as possible was clear about these robots. 

## Code

There were two versions of the code for each robot, one made in [VEXcode](https://www.vexrobotics.com/vexcode) and one made in [PROS](https://pros.cs.purdue.edu/).  

### VEXcode
The VEXcode versions of the code are much simpler and more digestible.  This is what most teams use to program their robots, so I wanted this code to be easily understandable by someone who had seen very little/no code before.  Everything is in a single file and all code relating to subsystems are bunched together so students can pick apart the code piece by piece.  
[AMOGO VEXcode - GitHub](https://github.com/Unionjackjz1/HW-AMOGO-VEXCODE/)  
[DOGO VEXcode - GitHub](https://github.com/Unionjackjz1/HW-DOGO-VEXCODE/)  

### PROS
On the other hand, the PROS versions of the code are more complex.  The code is split up into multiple files, where each subsystem has its own file.  The code for the drive base was based on the first version of [EZ-Template](https://www.roboticsisez.com/ez-template), which was my codebase that dealt with PID for getting the robot from point A to point B with very little setup.  
[AMOGO PROS - GitHub](https://github.com/Unionjackjz1/HW-AMOGO-PROS/)   
[DOGO PROS - GitHub](https://github.com/Unionjackjz1/HW-DOGO-PROS/)  

The PROS version of the code also came with a more complex autonomous routine that could complete the Autonomous Win Point by itself.  The Autonomous Win Point is a series of tasks that an alliance must complete during Autonomous to get an additional ranking point.  Doing this task by yourself can guarantee more opportunities for additional ranking points.  Because of the importance of solo AWP, we wanted to showcase that these simple robots could accomplish it.  
[AMOGO Solo AWP Autonomous Video](https://youtu.be/p1lgbKy1ZBE)  
[DOGO Solo AWP Autonomous Video](https://youtu.be/wpvR_m3cUFk)

## CAD
The CAD for each robot was also released so students could look at how different parts of the robot were assembled and see parts deep in the robot clearly.  There were some unique build techniques done specifically on the drive, where screws were used instead of axles.  
[AMOGO CAD - STEP](https://drive.google.com/file/d/1teWAX4Hb_rwtznO7sPc-pv1EVGZGrDgA/view?usp=sharing)  
[DOGO CAD - STEP](https://drive.google.com/file/d/1Y3QqJmkoS1UeejjGi8d0tq-_WFdEoL06/view?usp=sharing)  

## Scrimmages
At the end of the day, VEX robotics is a sport where matches are played competitively.  Everything else that was done for these robots was educational, but the end goal for all of this was to compete with a robot.  Scrimmages were published of both example robots competing head to head, while I was operating DOGO.
<iframe width="560" height="315" src="https://www.youtube.com/embed/yB3He_QHhds?si=IOW3jZL6EZ7wj8Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/7XZg8rz2fpE?si=HI677s-tDK2tyWO3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/NCoMXwhrikM?si=jPz_Y9EtdrjJtDcx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
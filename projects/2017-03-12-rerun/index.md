---
slug: rerun
title: Rerun
authors: [jess]
tags: [vex, software, open source, starstruck]
---

[Rerun](https://github.com/Unionjackjz1/ROBO-DANNY/blob/master/RerunFunctions.c  ) allows you to record robot movements and play them back during autonomous.

![](banner.gif)

<!--truncate-->

Rerun works by tracking the velocities of all motors on the robot and running a velocity controller during autonomous to match those velocities.  The biggest problem with this code is it cannot react to changes in the robot, such as different banding or friction on a mechanism.  This version of the code is best used soon after the recording is made to ensure little to no changes to the robot.  

While recording, the code would print to the terminal in a format that could be copied/pasted back into the code for running autonomously. 
```cpp
task
record( ) {
    startTask( calculateRPMs );
    int j = 20, s = 1;
    for( int i = 0; i < 400; i++ ) {
        if( j == 20 ) {
            writeDebugStream( "\n" );
            writeDebugStream( "\n   /* %i Second(s) */", s );
            s++;
            j = 0;
        }
        j++;

        writeDebugStream( "\n   auton( %i, %i, %i, %i, %i, %i, %i, %i);", iArmCurrentRPM, motor[ arm_l1 ], iChassisLeftRPM, motor[ chassis_l ], iChassisRightRPM, motor[ chassis_r ], iClawRPM, motor[ intake_l ] );

        delay( 50 );
    }
    stopTask( calculateRPMs );
    writeDebugStream( "\n\n /* Stop the robot */\n  auton( 0, 0, 0, 0, 0, 0, %i, %i );", iClawRPM, motor[ intake_l ] );
}
```

Playing the recorded run back uses a velocity controller.  The velocity controller is a P loop that `+=` to the motor.  This means if the motor is behind a bit, the motor will get a kick to get up to speed.  This is more accurate than setting the same PWM signal to the motors because it ensures at least the velocities are the same.  

The drivetrain used a modified version of this system.  I kept track of the PWM signal being sent to the drive as well, so the velocity controller used the recorded PWM signal as a starting point and modified it from there. 

```cpp
void
auton( int iArmDes, int iArmSpeed, int iChassisLeftDes, int iChassisLeftSpeed, int iChassisRightDes, int iChassisRightSpeed, int iClawDes, int iClawSpeed ) {
    int iArmError = 0, iChassisLeftError = 0, iChassisRightError = 0, iClawError = 0;
    for( int i = 0; i < 50; i++ ) {
        iArmError          -= (iArmDes - iArmCurrentRPM) * 0.015;
        iChassisLeftError  -= (iChassisLeftDes - iChassisLeftRPM) * 0.01;
        iChassisRightError -= (iChassisRightDes - iChassisRightRPM) * 0.01;
        iClawError         -= (iClawDes - iClawRPM) * 0.01;

        arm( iArmError + iArmSpeed );
        motor[ intake_l ] =
        motor[ intake_r ] = (iClawError + iClawSpeed );

        if( !bSide )
            tankWithoutTrueSpeed( iChassisLeftError + iChassisLeftSpeed, iChassisRightError + iChassisRightSpeed );
        else
            tankWithoutTrueSpeed( iChassisRightError + iChassisRightSpeed, iChassisLeftError + iChassisLeftSpeed );

        delay( 1 );
    }
}
```
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1425],{93005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(85893),r=n(11151);const o={slug:"adaptive-pid",title:"Adaptive PID",authors:["jess"],tags:["software","vex","wip"]},i=void 0,a={permalink:"/projects/adaptive-pid",source:"@site/projects/2023-11-22-adaptive-pid/index.md",title:"Adaptive PID",description:"Adaptive PID is a modification of PID that scales constants based on the robot's tested velocity curve.",date:"2023-11-22T00:00:00.000Z",formattedDate:"November 22, 2023",tags:[{label:"software",permalink:"/projects/tags/software"},{label:"vex",permalink:"/projects/tags/vex"},{label:"wip",permalink:"/projects/tags/wip"}],readingTime:3.9233333333333333,hasTruncateMarker:!0,authors:[{name:"Jess Zarchi",title:"Roboticist",url:"https://roboticsisez.com",imageURL:"https://github.com/Unionjackjz1.png",key:"jess"}],frontMatter:{slug:"adaptive-pid",title:"Adaptive PID",authors:["jess"],tags:["software","vex","wip"]},unlisted:!1,prevItem:{title:"PVC Bipod",permalink:"/projects/pvc-bipod"},nextItem:{title:"Spraypaint Booth",permalink:"/projects/spraypaint-booth"}},l={authorsImageUrls:[void 0]},c=[{value:"About",id:"about",level:2},{value:"EZ-Templates Implemented Solution",id:"ez-templates-implemented-solution",level:2},{value:"Detecting When Speed Drops",id:"detecting-when-speed-drops",level:2},{value:"Moving Target with Motion Profiling",id:"moving-target-with-motion-profiling",level:2},{value:"Acceleration Test",id:"acceleration-test",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Adaptive PID is a modification of PID that scales constants based on the robot's tested velocity curve."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(37781).Z+"",width:"696",height:"428"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"about",children:"About"}),"\n",(0,s.jsx)(t.p,{children:"When a robot is moving it generates momentum.  PID is extremely consistent when the momentum of the system is constant."}),"\n",(0,s.jsx)(t.p,{children:"When tuning constants for moving, I always notice that after ~2' of movement the robot is extremely consistent.  In the closer distances, the constants aren't quite right, because the momentum is different from when it's going full speed.  This is an even larger problem with turns, as the robot never reaches a constant momentum."}),"\n",(0,s.jsx)(t.p,{children:"A solution I want to avoid is tuning PID constants for multiple turn amounts and interpolating between them.  I haven't tested this, but I'm extremely confident this would be the best solution.  I do not like how much time this takes to set up and tune for each new robot.  My goal is to find a lazier solution that gets almost all of the way there."}),"\n",(0,s.jsx)(t.h2,{id:"ez-templates-implemented-solution",children:"EZ-Templates Implemented Solution"}),"\n",(0,s.jsx)(t.p,{children:"I had this problem when I was a competitor, and my solution was to:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"not run turns as fast as I could, at ~70% power"}),"\n",(0,s.jsx)(t.li,{children:"slow down the robot within some band of the target"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"This allowed me to have 1 tuned constant and the robot would slow down early for larger movements making everything more similar than without this.  It isn't a perfect solution though, it has all of the same problems as not having it but less."}),"\n",(0,s.jsx)(t.h2,{id:"detecting-when-speed-drops",children:"Detecting When Speed Drops"}),"\n",(0,s.jsx)(t.p,{children:"The first thing I tried was to find 2 parameters: what was the max power being sent to the motors and for how long?  I'd keep track of all of this during the turn, and when the power started to go down I recognized that as my stopping point.  Now I have these two numbers and I use them to modify all of my PID constants."}),"\n",(0,s.jsx)(t.p,{children:"This would sometimes look promising but overall it felt like I needed to tune how much pull/push the two parameters gave to the PID constants for different distances, which defeats the purpose of what I'm trying to do."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'void time_full_speed() {\r\n  default_constants();\r\n  pros::delay(50);\r\n  int time_passed = 50;\r\n  int i = 0;\r\n  std::vector<int> last_power = chassis.drive_get();\r\n  std::vector<int> all_powers;\r\n  while (true) {\r\n    pros::delay(ez::util::DELAY_TIME);\r\n    time_passed += ez::util::DELAY_TIME;\r\n    printf("%i:   %i != %i\\n", time_passed, chassis.drive_get()[0], last_power[0]);\r\n\r\n    int error = abs(chassis.drive_get()[0]) - abs(last_power[0]);\r\n    all_powers.push_back(abs(chassis.drive_get()[0]));\r\n\r\n    if (error < -1) {\r\n      i++;\r\n    } else {\r\n      i = 0;\r\n    }\r\n\r\n    if (i >= 3) {\r\n      printf("%i\\n\\n\\n", time_passed);\r\n      break;\r\n    }\r\n\r\n    last_power = chassis.drive_get();\r\n  }\r\n  double average_power = 0.0;\r\n  for (auto i : all_powers) {\r\n    average_power += i;\r\n  }\r\n  average_power /= all_powers.size();\r\n  double time_conversion = (360.0 / (double)time_passed);\r\n  double speed_conversion = 80.0 / average_power;\r\n  auto consts = chassis.pid_turn_constants_get();\r\n  double conversion = (time_conversion) + (speed_conversion);\r\n  double max = 1.75;\r\n  // conversion = conversion > max ? max : conversion;\r\n  conversion = conversion < 1 ? 1 : conversion;\r\n  // consts.kp = consts.kp * conversion;\r\n  // consts.kd = consts.kd * conversion;\r\n  consts.start_i = consts.start_i / conversion;\r\n  chassis.turnPID.integral = 0;\r\n  chassis.pid_turn_min_set(chassis.pid_turn_min_get() / (conversion * 1.5));\r\n  // chassis.pid_speed_max_set(chassis.pid_speed_max_get() / conversion);\r\n  chassis.pid_turn_constants_set(consts.kp, consts.ki, consts.kd, consts.start_i);\r\n  printf("Time Passed: %i  Last Power: %i Average Power: %.2f    \\nTime Conversion: %.2f  Speed Conversion: %.2f  Conversion: %.2f   \\nkP: %.2f  kD: %.2f  start i: %.0f  min: %i  max: %i\\n", time_passed, last_power[0], average_power, time_conversion, speed_conversion, conversion, consts.kp, consts.kd, consts.start_i, chassis.pid_turn_min_get(), chassis.pid_speed_max_get());\r\n}\r\n\r\nvoid turning_test() {\r\n  chassis.pid_turn_set(90_deg, TURN_SPEED);\r\n  time_full_speed();\r\n  chassis.pid_wait();\r\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"moving-target-with-motion-profiling",children:"Moving Target with Motion Profiling"}),"\n",(0,s.jsx)(t.p,{children:"I took the motion profile test I made for Captain R3X and implemented it here.  This works in the same way it would with a servo, where it sets new target positions for the PID to reach and the rate of change of new targets is being controlled.  This seemed promising, but because I'm not controlling velocity this wasn't working too well.  The robot would move nicely until the end of the motion where the robot would reach its target and stop, then go to the next target, etc.  The robot was stuttering through the end of the motion."}),"\n",(0,s.jsx)(t.h2,{id:"acceleration-test",children:"Acceleration Test"}),"\n",(0,s.jsxs)(t.p,{children:["I keep thinking back to ",(0,s.jsx)(t.a,{href:"https://www.vexforum.com/t/24cs-motor-control-value-remapping/23959/1",children:"TrueSpeed"}),", a fix for VEX's motor controllers that weren't linear.  The values were remapped and normalized giving a linear output through a LUT (look-up table)."]}),"\n",(0,s.jsx)(t.p,{children:"I tried something similar.  I told the robot to go at some speed and read the rate of change of the IMU.  After some target degree was passed I stopped reading velocity.  This was done for 17 different target values, running each test 6 times, 3 left and 3 right."}),"\n",(0,s.jsxs)(t.p,{children:["All of that gave me this graph.  The x-axis is the target we were reading to, and the y-axis is the average velocity in the time it took to get there.\r\n",(0,s.jsx)(t.img,{src:n(37781).Z+"",width:"696",height:"428"})]}),"\n",(0,s.jsx)(t.p,{children:"To use this graph I scaled the Y axis down to 1 by dividing everything by the largest tested Y point.  That left me with many points I can draw lines through and find new conversion rates for untested turn amounts.  I took my conversion rate and I changed my constants by that.  And... it worked!"}),"\n",(0,s.jsx)(t.p,{children:"In this test, the first set of turns is the standard EZ-Template.  The second set of turns is using the modified constants."}),"\n",(0,s.jsx)("iframe",{width:"315",height:"560",src:"https://youtube.com/embed/qdRAPPe5oj8?si=n4ZuJxHNptZo0IWk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'std::vector<std::vector<double>> scaling = {\r\n    {0, 0},\r\n    {2.5, 0.09400453473},\r\n    {7.5, 0.2022555992},\r\n    {12.5, 0.2646745481},\r\n    {17.5, 0.3548182873},\r\n    {22.5, 0.3951412327},\r\n    {27.5, 0.4499251424},\r\n    {42.5, 0.5630226236},\r\n    {57.5, 0.6381967848},\r\n    {72.5, 0.6967510482},\r\n    {87.5, 0.7629670943},\r\n    {102.5, 0.7982267571},\r\n    {117.5, 0.8649159207},\r\n    {132.5, 0.8999937274},\r\n    {147.5, 0.9429511551},\r\n    {162.5, 0.976136005},\r\n    {177.5, 1},\r\n};\r\n\r\ndouble get_scale(double target) {\r\n  // Find a point that is larger than then target\r\n  double initial_error = target - chassis.turnPID.target_get();\r\n  initial_error = fabs(initial_error);\r\n  int i = 0;\r\n  for (auto j : scaling) {\r\n    if (j[0] >= fabs(initial_error)) \r\n      break;\r\n    i++;\r\n  }\r\n\r\n  // If target is equal to or larger than our largest tested point, return 1.0\r\n  if (i == scaling.size())\r\n    return 1.0;\r\n  // If target is equal to or smaller than our smallest tested point, return the smallest conversion\r\n  else if (initial_error == scaling[i][0])\r\n    return scaling[i][1];\r\n\r\n  // Draw lines between each point\r\n  double m = (scaling[i][1] - scaling[i - 1][1]) / (scaling[i][0] - scaling[i - 1][0]);  // (y2-y1) / (x2-x1)\r\n  double b = scaling[i][1] - (m * scaling[i][0]);                                        // b = y - mx\r\n  double y = (m * initial_error) + b;                                                    // y = mx + b\r\n\r\n  return y;\r\n}\r\n\r\nvoid smooth-turn(okapi::QAngle p_target, int speed) {\r\n  default_constants();\r\n  double conversion = get_scale(p_target.convert(okapi::degree));\r\n  auto consts = chassis.pid_turn_constants_get();\r\n  consts.kp = consts.kp * conversion;\r\n  consts.kd = consts.kd * conversion;\r\n  consts.ki = consts.ki * conversion;\r\n  consts.start_i = consts.start_i * conversion;\r\n  chassis.pid_turn_constants_set(consts.kp, consts.ki, consts.kd, consts.start_i);\r\n  printf("\\nConversion: %.2f   kP: %.2f  kD: %.2f  start i: %.0f  min: %i  max: %i\\n", conversion, consts.kp, consts.kd, consts.start_i, chassis.pid_turn_min_get(), chassis.pid_speed_max_get());\r\n\r\n  chassis.pid_turn_set(p_target, speed);\r\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"In the tests for the data that was collected, the speed that the robot was going at is constant.  A potential improvement is to allow multiple tests with multiple speeds and make a 3D graph to find new scaling values.  At some point, this defeats the purpose of being easier than the alternative though."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},37781:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/banner-c4b8f2f09fc56838b3a2dd09793f2f91.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(67294);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
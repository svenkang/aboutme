---
id: problem-solving
title: Problem Solving
sidebar_label: Problem Solving
slug: /problem-solving
---

Problem solving is an incredibly valuable skill no matter what you do but it is especially important for software enigneers. 
Contrary to what most people think, problem solving is indeed a skill that you need to cultivate over many years.
Utilizing some key principles and guidlines can be a great starting point to become a 
better problem solver. In this article I would like to discuss the high level problem solving approach and mindset
especially when it comes to algorithms and computational thinking. This is primarily applied in solving algorithm
problems but can be used in other contexts as well. 

### Understand the problem

This may sound like an awfully obvious or even silly step but this is something that can be easily
skipped in many cases. A lot of us have a tendency to jump to conclusions and solutions before we
really understand what is going on and what the problem is. This is probably the most crucial mistake
you can make in the whole process since you can end up wasting a significant amount of time working on
a solution to a problem that does not even exist.

- Restate the problem: <br/>
When you are given the problem, try to restate the probem in your own words to see if you really understand it.
By restating the problem, you can see the problem in a deeper and clearer way. If you cannot explain the problem to someone
then it is a good indication that there are missing pieces that you need to clarify still.
- Define the inputs: <br/>
As you are trying to understand the problem as a whole, you can also try to clearly define what the inputs need to be.
There may be multiple dimensions to defining the inputs such as what would be the type of data that the input would be given as?
How many inputs would there be? What would be the limitations of the inputs given? What is the nature and significance of these inputs?
- Define the outputs: <br/>
This is a very similar step to defining the inputs. What kind of end result are we looking to get to? What would the output
look like specifically? What types of outputs could we anticipate? Could there be or should there be more than one output?
- Define the unknowns: <br/>
What are some things that could go wrong in the problem specification? What would happen if the given inputs are 
not supplied as we expected? How would we respond to that kind of situation? Is there anything that we need
in order to solve the problem that is outside the given inputs such as external factors? Are there any external
resources we can utilize to solve this problem?

### Concrete Examples

Once you understand the problem, try to take a very simple and straight forward example and walk through 
the progression of the what we expect to happen. This will help you start seeing the patterns of what should
happen on a normal execution. However this is not where you want to stop. 

Once you walk through the simplest example, now, try to walk through a more complex example and see if you 
notice anything new or different. With a more complex example, you may start to notice what was not immediately
obvious with a simpler example. Try to come up with specifications that are "technically" true but not necessarily
obvious. For example, if the initial problem was to count characters, it may seem obvious at first as to what 
characters are referring to. But as you try more complex examples, you may start to see that characters include a large number
of things such as digits, alphabetical characters that may be upper case, lower case, and special characters.

Another edge case example that is always good to check is empty values. What is to happen when we give an empty
input? This seemingly simple case of empty input can crash the whole program.

Lastly, another edge case is considering invalid inputs. Perhaps we are expecting a certain type of input such as 
characters. But what if we are given something entirely different, such as an object or an array? How should we best
handle those situations? Thinking through these scenarios can really help you write more robust, bullet-proof program/system.

### Break down the problem

As the problem gets more complex, it can feel very overwhelming to solve the problem. One of the best strategies 
for this kind of situation is to break things down into smaller steps or chunks. Without worrying about the 
actual details of the implementation, you can start to think high level what needs to heppen. This helps you to
make sure you are getting the solution you need and also to tackle the one big complex problem as a set of smaller 
and simpler problems that you can solve one at a time. At this stage, you can simply write comments of pseudo code - your plan of action.

### Solve and Simplify

At this point, once you have already have broken down the exact steps to solve the problem, actually solving the problem
with implementation should be relatively trivial and it is just a matter of execution. However, if you find yourself struggling
with a particularly difficult part of the problem, it may be a good idea to solve for a simpler version of the problem and 
worry about the difficult part later on. Once you solve for the simpler version, you may be able to then think about the difficult 
part separately and exclusively. This can help you make progress and give your brain a bit of a break of not having to deal with the whole problem
at once.

### Refactor

Once you solve the problem correctly, before you celebrate, it is a good time to take a look at how you may be able to
improve your solution. One of the more obvious things to look out for is whether or not you can improve the efficiency or 
or performance of the solution. Are there any other approaches of thinking about the problem or solution that may be even better? 
Even if you can't find a whole different approach, you may be able to find certain parts of the solution that you can optimize. 
Another point of improvment is readability of the code in terms of naming and structure. This may result in rewriting portions 
of the code and breaking it into multiple functions so that it is easier to read and maintain the code. 


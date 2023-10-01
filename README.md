# 🔔 Elo Rating Algorithm

### ⏳ Elo Rating Algorithm History

The Elo Rating algorithm, created by Arpad Elo _(a Hungarian-Amerian Physics Professor)_, is one of the most common algoritms used for rating because of the logic & functionality behind it.

It is used by developers wanting to rank chess players to college students wanting to rank girls _(Mark Zucherberg's Facemash)._

![Markdown Logo](https://miro.medium.com/max/559/1*FNfXGwHiRJ9wCjN502CX2w.jpeg)

**_But how does it work? How can I implement it into my code?_**

---

### 🔧 Demystifying The Algorithm

The algorith is **based on two key formulas**.

1. The first formula tells you how to predict the outcome of the game.
2. The second formula tells you how to update your rating depending on the outcome of the game.

**This is how they look:**

_Formula A:_

<!-- $\huge E_a=\frac{1}{1+10(^{R_b-R_a})^{/400}}$ -->

<img src="formulas/formula4.png">

_Formula B:_

<!--$\huge E_b=1-E_a$-->
<img src="formulas/formula3.png">

**Don't get discouraged by how the formulas look!** We'll go through this step by step.

---

### 🧠 Understanding the Algorithm

When Arpad Elo first invented the algorithm, his idea was to asume that **each players ability forms a bell curve.**

Image that each player brings a box with them to every game. Before every game, they pull out a number from that box. **Whoever has the highest number wins.**

That number represent a players ability to win the match.

This means that every player has the potencial of playing at a range of different abilities.

> _Somedays, a player might be feel great and pick a high number._

> _Other days, that player might feel sick or unlucky and pick a low number._

> _Most of the time, however, that player picks a number in the middle of their range._

**An elite player will generally be picking from a box of very high numbers. _So they are more likely to win but not always..._**

If you pay attention at the frequency of the numbers, you'll realize that they form bell curves.

<img src="graph/graph1.png">

_Notice how the bell curves are **exactly the same.** The only difference is the center of the curves._

**The center of the curves represents the mean or averge and the averege is that players rating.**

---

### 🏀 Formula 1 (Probability of Winning The Game)

To get the probability of a player winning a game, we need to find the _**frequency of the differences between the two players.**_

If you plot that, you get a bell curve. **It's called a logistic curve.**

<img src="graph/graph2.png">

**The idea is that the more of the curve is to the right of 0, the more likely that player is to win.**

_Basically, the Elo Rating Algorithm is designed so that if a player has a rating that is 400 points more than another player, they are 10 times more likely to win._

So in the curve, the area to the right of 0 would be 10 times the area of the curve to the left of 0.

**_If you turn that into a formula, this is the formula that you would get:_**

So, If Player A has a rating of _R<sub>a</sub>_, and Player B has a rating of _R<sub>b</sub>_, the exact formula for the expected score of Player A is:

<img src="formulas/formula3.png">

You can simmilarly look at the probability for Player B to win by:

<img src="formulas/formula2.png">

With this, you can predict who will win.

**EXAMPLE:** _If the probability of winning is 1, your going to win the game. If the probability of winning is 0, your going to loose the game._

**IMPORTANT:** If the probability of winning is 0.5 (half), then your going to win as many games as you loose. Basically a draw.

Now, lets say that:

| Win | Loose | Draw |
| --- | ----- | ---- |
| 1   | 0     | 0.5  |

**Then, the probability can be used as the expected score.**

> It can be wierd like if you have a probability of **0.75**.

> _This means that you could win 75% of the games and loose the other 25%._

> _But it also means that you coud win 50% of the games and draw the other 50% of the games._

> **Either way, we would say the expected score is 0.75**

---

### 🛥 Formula 2 (The Update Formula)

**Whenever a player does better than expected, their rating will increse. The more surprising that the win is, the more points they will get. Up to a max of 32 points.**

_Nothing special about 32, just a choice that they made._

**The same way, if a player does worse than expected, their rating will decrease up to 32 poibts.**

Throughout a tournament, a players raiting **is updated using an update formula.**

_This is how said formula looks:_

<img src="formulas/formula4.png">

**For Example:** Let's say that player A has a rating of 1656 and Player B has a rating of 1763. Since player A is the weaker player, he's expected to loose. His expected win is 0.35 . However, he actually wins the game.

**_If this was the case, we would apply the formula like this:_**

<img src="formulas/formula_example.png">

---

### ☝️ Before you leave...

**In the next few paragraphs, I will explain how and why I did this. Keep reading in if you want to:**

_**a) Feel bad for me.**_

_**b) Have a couple laughs**_

**_c) Be thankfull that you didn't have to do it yourself._**

This project originated when my friend ([Filippo](https://twitter.com/filippofonseca)) asked me to bet on which team was going to with the 2020, NBA title. I said _"Sure!"_, and proceeded to overcomplicate my life since I knew very little _(basically nothing)_ about basketball.

The idea was to create a program that would run every possible scenerio for which a team could win depending on how many games the team had won. Of couse, it would have been 10 times more effective to just do reseach and make an educated guess, but there was one, criticall problem with that take. _It was simply not a cool enough option._

I knew I wanted to include the [The Social Network](https://www.imdb.com/title/tt1285016/)'s rating algorithm but instead of ranking girls, I would rank teams. So I looked up the formula online and **vuala**, there it was, The Elo Rating System in all its glory.

I then watched a couple videos, read some medium articles and proceeded to rethink my life decisions. After some close encounters with mental breakdowns, I ran the command which would determain if the last 48 hours of my life were worth it...

```
ts-node algorithm.ts
```

The next 5 seconds felt like they would never end. I closed my eyes and of course it didn't work. So I was back to the drawing board. And after many tries and **soooo mannyyyyyy erorrrrssssss**, it worked.

### Built and maintained with ❤️ by [@markmusic2727](https://www.twitter.com/MarkMusic2727)

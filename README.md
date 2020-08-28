# 🔗 Elo Rating Algorithm

## ⏳ Elo Rating Algorithm History

The Elo Rating algorithm, created by Arpad Elo, is one of the most common algoritms used for rating because of the logic & functionality behind it.

It is used by developers that want to rank chess players to college students wanting to rank girls _(Mark Zucherberg's Face Smash)._

![Markdown Logo](https://miro.medium.com/max/559/1*FNfXGwHiRJ9wCjN502CX2w.jpeg)

**_But how does it work? How can I implement it into my code?_**

---

## 🔧 Demystifying The Algorithm

The algorith is **based on two key formulas**.

1. The first formula tells you how to predict the outcome of the game.
2. The second formula tells you how to update your rating depending on the outcome of the game.

**This is how they look:**

_Formula A:_

<!-- $\huge E_a=\frac{1}{1+10(^{R_b-R_a})^{/400}}$ -->

<img src="formulas/formula1.png">

_Formula B:_

<!--$\huge E_b=1-E_a$-->
<img src="formulas/formula2.png">

**Don't get disencouraged by how the formulas look!** We'll go through this step by step.

---

## 🧠 Understanding the Algorithm

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

## 🏀 Formula 1 (Probability of Winning The Game)

To know this, you need to look at the _**frequency of the differences between the two players.**_

If you plot that, you also get a bell curve. **It's called a logistic curve.**

<img src="graph/graph2.png">

**The idea is that the more of the curve is to the right of 0, the more likely that player is to win.**

_Basically, the Elo Rating Algorithm is designed so that if a player has a rating that is 400 points more than another player, they are 10 times more likely to win._

So in the curve, the area to the right of 0 would be 10 times the area of the curve to the left of 0.

**_If you turn that into a formula, this is the formula that you would get:_**

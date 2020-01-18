---
layout: post
title:  "Yes! It's possible to create a cross-platform software without knowing a backend language."
date:   2019-08-05
categories: design development products electron
local_thumbnail: back-end-for-designers.png
---

If me, as Web Designer managed to successfully build cross-platform (OSX, Windows, Linux) software, with user authentication and real-time database, then you can either!


### Why would we do something like that?

All of us have ideas that could help someone or that are just cool. Unfortunately, so many times we don't have the power to implement the whole idea by ourselves and we just quit. That's happened to me too. 
I'm from the Web world, designer, who knows nothing about the backend (I know something about front-end tho), and I wanted to create a desktop app.

> I was thinking 'Naah, maybe sometimes in the future when I find someone who likes an idea'. 

But there is a technology that could help me do it, I just couldn't remember it at that moment. 

I was hyped about the idea of a cross-platform app with HTML, CSS, JS, via [Electron JS]. When I saw that **Visual Code, Skype, Atom, Slack** and many more apps I'm familiar with were built with Electron It was final, I decided to use Electron to build App I wanted.


With Electron I can use Local and Session Storage, and that's something I already used to store data for begging.

After I created a functional app (Front-End and used local storage for storing data) I start looking more into Firebase since I wanted to have DB so a user can sync data on all devices.



With the help of [Fireship] and [Coursetro] videos I successfully integrated the electron-angular app with Firestore. 
Finally, users could register/login and use all apps features. They can customize an app, track time and use every feature regardless of the platform.

All this couldn’t be possible without this amazing [repo] for Angular and Electron, Stack Overflow, and amazing tutorials on Youtube. 


### I published app on [Product Hunt] (Got better than expected results), and you can take a look at [The Track Website]. 



It's great to know that you could create Software or App without being a big expert on native programming languages, database, etc... I will probably try in the future and React Native or Ionic Framework if I get an idea for a mobile app.


>Long-time ago, to make your idea happen you would need a team of developers to create an app for different platforms (Not mentioning user auth, DB, etc...). It's amazing how nowadays with the right tools we can make our idea into reality so easy.



![Creating Cross Platforms App](https://thepracticaldev.s3.amazonaws.com/i/m56otj2rhnshyuvc73dp.png)




[Electron JS]: https://electronjs.org/
[Fireship]: https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA
[Coursetro]: https://www.youtube.com/channel/UCVyRiMvfUNMA1UPlDPzG5Ow
[repo]: https://github.com/maximegris/angular-electron
[The Track Website]: https://thetrack.app/
[Product Hunt]: https://www.producthunt.com/posts/the-track

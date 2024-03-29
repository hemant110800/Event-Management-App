# Event-Management-App
Created a App for Event Management using MERN , uses concept of react-router-dom library and created different different routes like Home, Events , Newsletter , and Authentication in top header bar , and user can add any New Event , Update Existing Event , Remove Existing Event and they can do all after user is authenticated from backend and every route is authenticated based on **JWT Token** concept.

![image](https://github.com/hemant110800/Event-Management-App/assets/48346161/670548d2-9c8c-44cc-ae7e-93f6da997504)

Top header bar contains navigation bar , which has some options like Home, Events, Newsletter and Authentication , Home Page is the index page. If user is new to application they can signup by going to Authentication Page and on successfully signup and successfully login we will get authentication token from backend so that on every request to backend we will append token value with Authentication Header.

**Authentication Action on UI**

**1)User successfully login/signup**

If user is authenticated then will see Logout Button on top Navigation bar in place of Authentication Link , and on token expire from backend user automatically Logout and again Authentication Link will come.

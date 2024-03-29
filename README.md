# Event-Management-App
Created a App for Event Management using MERN , uses concept of react-router-dom library and created different different routes like Home, Events , Newsletter , and Authentication in top header bar , and user can add any New Event , Update Existing Event , Remove Existing Event and they can do all after user is authenticated from backend and every route is authenticated based on **JWT Token** concept.

![image](https://github.com/hemant110800/Event-Management-App/assets/48346161/670548d2-9c8c-44cc-ae7e-93f6da997504)

Top header bar contains navigation bar , which has some options like Home, Events, Newsletter and Authentication , Home Page is the index page. If user is new to application they can signup by going to Authentication Page and on successfully signup and successfully login we will get authentication token from backend so that on every request to backend we will append token value with Authentication Header.

**Authentication Action on UI**

**1)User successfully login/signup**

If user is authenticated then will see Logout Button on top Navigation bar in place of Authentication Link , and on token expire from backend user automatically Logout and again Authentication Link will come.

![image](https://github.com/hemant110800/Event-Management-App/assets/48346161/5df2a4e4-9882-4811-b12d-37b4ddf6cd18)

On Events Page , If user is authenticated then we are allowing users to perform some actions:-

1)User can add new Events , where we are taking some details from user like Image, Event Name , Description and Date, and on Save we will send all this details to backend with access token value and if all things are valid then we will get Events added to Events list as we will retrieve all Events from backend.

![image](https://github.com/hemant110800/Event-Management-App/assets/48346161/9ef8638d-c957-4dff-a6e3-601362c1d6bd)
![image](https://github.com/hemant110800/Event-Management-App/assets/48346161/6ca8e4ae-f1b0-48d6-b9b9-2c7ce442e5ae)

2) User can update any existing Event
![image](https://github.com/hemant110800/Event-Management-App/assets/48346161/a75e9fac-9bb5-407b-9aa3-24749e5fbe63)

3) User can remove any existing Event, on removing we are confirming from user for deletion
![image](https://github.com/hemant110800/Event-Management-App/assets/48346161/885abfec-3af4-4bca-a5d8-0eba6e2c77a8)

**2)User not login or signup**

If user is not authenticated then we are blocking some actions from application, like not allowing user to Add new Event , Update any Event and Remove any Event we are hiding all this features from app.

![image](https://github.com/hemant110800/Event-Management-App/assets/48346161/c5e6b476-06d3-4739-9352-33d247f1e556)

**Tech Used**

**FrontEnd**:- React, react-router-dom , react-router,HTML , CSS , Javacript,  handling all route errors in Error Wrapper Component and using concepts of loaders , action etc in routers and hooks like useSubmit, useLoaderData, useActionData, useRouterError, ReactRouter etc from react-router-dom.

**BackEnd:**:- NodeJs, ExpressJs, JWT , File handling , Express Router, validating event data and user related data at backend and on successful validations creating a token through JWT at login or signup api and sending to frontend.

**DataBase**:- Using JSON files like events.json etc at backend.

![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React Tweets 

## Introduction

Passing data throughprops is an important concept that is best understood by hands on practice. We'll use this exercise to help you solidify your understanding of props. 

We will be cloning an existing piece of UI from a popular app, Twitter. Let's get started!

<br>

## Requirements

- Fork this repo
- Clone this repo

<br>

## Submission

- Upon completion, run the following commands

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so that your TAs can check up your work.

  <br>

## Getting Started

1. After forking and cloning, open the project in VS Code.

2. In the terminal, navigate to the root folder of the LAB.

3. Create a new React app _in the current directory_:

   ```bash
   $ npx create-react-app .
   ```

4. Clean the `App.js` component so that it has the following structure:

   ```jsx
   // src/App.js
   import "./App.css";
   
   function App() {
     return <div className="App"></div>;
   }
   export default App;
   ```

5. Run the React app:

   ```bash
   $ npm start
   ```

   

6. We will use [Font Awesome ](https://fontawesome.com/v5.15/icons?d=gallery&p=1) for the icons in our app. Add the following stylesheet in the `head` of the `public/index.html` page:
  
  ```html
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossorigin="anonymous"
      />
  ```

<br>

## Instructions

### Iteration 1 | Initial Content

We will start by creating and setting up the files that we need for the exercise:

<br>

**`Tweet.js`**

<details>

<summary>Click here for the code</summary>
<br>

> Create a new folder `src/components/` and inside it a new file `Tweet.js`.
>
> As a starting point, we will provide you with the HTML structure for the `Tweet` component Paste the following code to the component `src/components/Tweet.js`:

> ```jsx
> // src/compoenents/Tweet.js
> 
> function Tweet() {
>   return (
>     <div className="tweet">
> 
>       <img src="https://i.imgur.com/9yw1Fyw.jpg" className="profile" alt="profile"/>
> 
>       <div className="body">
> 
>         <div className="top">
> 
>           <span className="user">
>             <span className="name">Ironhack</span>
>             <span className="handle">@ironhack</span>
>           </span>
> 
>           <span className="timestamp">Nov 30, 2020</span>
>         </div>
> 
>         <p className="message">
>           On December 7th, we will be hosting a #webinar that will introduce you
>           to #SQL! Are you ready? 🚀
>         </p>
> 
>         <div className="actions">
>           {/* Font Awesome icons */}
>           <i class="far fa-comment"></i>
>           <i class="fas fa-retweet"></i>
>           <i class="far fa-heart"></i>
>           <i class="fas fa-share"></i>
>         </div>
> 
>       </div>
> 
>       <i class="fas fa-ellipsis-h"></i>
>     </div>
>   );
> }
> 
> export default Tweet;
> ```



<hr>

<br>

</details> 

<br>**`App.js`**

<details>

<summary>Click here for the code</summary>

<br>

>  Copy the following starter code to the root component `src/App.js`:

> ```jsx
> // src/App.js
> 
> import "./App.css";
> import Tweet from "./components/Tweet";
> 
> const tweetsArray = [
>   {
>     user: {
>       name: "Thoughts of Dog®",
>       image: "https://i.imgur.com/b0EdHVV.jpg",
>       handle: "dog_feelings",
>     },
>     timestamp: "1h ago",
>     message: "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
>   },
>   {
>     user: {
>       name: "Thoughts of Dog®",
>       image: "https://i.imgur.com/b0EdHVV.jpg",
>       handle: "dog_feelings",
>     },
>     timestamp: "2h ago",
>     message: "sometimes. the human presses their noggin against mine. to figure out what i’m thinking. so i just think really hard. about how much i love them. and hope they figure it out",
>   },
>   {
>     user: {
>       name: "Thoughts of Dog®",
>       image: "https://i.imgur.com/b0EdHVV.jpg",
>       handle: "dog_feelings",
>     },
>     timestamp: "3h ago",
>     message: "here is what. i plan to accomplish today: \n\n2. bark loudly. but at nothing \n7. lose my ball under the couch\n7b. politely ask the human. to get my ball\n3. immediately lose it again. under the same couch\n4. big nap. you have worked hard\n2. repeat",
>   },
> ];
> 
> 
> function App() {
>   return (
>     <div className="App">
>       <Tweet />
>     </div>
>   );
> }
> 
> 
> export default App;
> ```



<hr>


<br>

</details>

<br>

**`index.css`**

<details>

<summary>Click here for the code </summary>

<br>

>  To allow you to focus on React without having to worry about the styling, we will provide you with the CSS sytles. Paste the below code to your `src/index.css` file:

> ```css
> /*   src/index.css   */
> 
> body {
>   margin: 0;
>   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
>     "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
>     sans-serif;
>   -webkit-font-smoothing: antialiased;
>   -moz-osx-font-smoothing: grayscale;
> }
> 
> .App {
>   padding: 20px;
> }
> 
> .tweet {
>   margin: 0 auto;
>   min-width: 480px;
>   max-width: 640px;
>   min-height: 80px;
>   padding: 10px;
>   border: 1px solid #ccc;  
>   display: flex;
>   font-size: 1.1rem;
>   line-height: 18px;
> }
> 
> 
> .body {
>   display: flex;
>   flex-direction: column;
>   width: 100%;
> }
> 
> .top {
>   display: flex;
>   line-height: 1.4rem;
> }
> 
> .more {
>   margin-left: 20px;
> }
> 
> .profile {
>   width: 50px;
>   height: 50px;
>   border-radius: 50px;
>   margin-right: 10px;
> }
> 
> .name {
>   font-weight: bold;
>   margin-bottom: 0.5em;
>   margin-right: 0.3em;
> }
> 
> .handle {
>   color: #536471;
>   margin-left: 3px;
>   margin-right: 3px;
> }
> 
> .timestamp {
>   color: #536471;
>   font-size: 1.1rem;
> }
> 
> .timestamp::before {
>   content: "·";
>   padding-right: 0.3em;
>   font-size: 1.1rem;
>   font-weight: 600;
> }
> 
> .message {
>   text-align: left;
>   font-stretch: 100%;
>   font-weight: 400;
>   line-height: 1.6rem;
>   overflow-wrap: break-word;
>   white-space: pre-wrap;
> }
> 
> .actions {
>   padding: 5px 5px;
>   width: 360px;
>   display: flex;
>   justify-content: space-between;
>   color: #536471;
> }
> ```

<hr>


<br>

</details>

<br>

**Expected Result**

When you are done setting up the above files, your app should display the `Tweet` component as show here:

![Tweet component after the initial setup](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-tweets-1.png)

<hr>
<br>

### Iteration 2 | Pass the Tweet as a Prop

In the `App.js`  we have an array named `tweetsArray` that holds *tweet* objects.  We will use the `Tweet` component to display the content from the objects. In the `Tweet` we will display user's `name`, user's `image`, user's `handle`, tweet `timestamp` and the `message`. 



**Pass the tweet as a prop**

Pass the first object from the `tweetsArray`  as a prop to the `Tweet` component:

```jsx
// src/App.js
// ...
<Tweet tweet={ tweetsArray[0] }>
```

<br>

**Display the tweet content in the `Tweet` component**

Update the `Tweet` component to display the values coming from the `tweet` prop. Remember that  the value we passed is an object, so you may want to check the sturcture of the object.

<br>

**Expected Result**

When you are finished, your `Tweet` component should display the following content:

![Tweet component after passing the "tweets" prop](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-tweets-2.png)

<!--

<details>

<summary>Click to see the image</summary>

![Tweet component after passing the "tweets" prop](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-tweets-2.png)

<hr>

<br>

</details>

-->

<br>



### Iteration 3 | Create the Components

We will now create new files for the components that we'll make in the following iterations. Inside the folder `src/components/` create the following new files:

- `src/components/ProfileImage.js` ,
- `src/components/User.js` ,
- `src/components/Timestamp.js` ,
- `src/components/Message.js`  and
- `src/components/Actions.js`.



In the following iterations you will refactor the `Tweet` component. You will be asked to extract parts of the existing HTML structure into new components:

![Example - Refactoring the "Tweet" component](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-tweets-3.png)<br>

**When done with all iterations** the final version of your `Tweet` component will look like this:

<details>
<summary>Click to see the code</summary>

```jsx
// FINAL VERSION

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />
        <Actions />
        
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}
```

:heavy_exclamation_mark: Don't copy-paste the below code directly into the `Tweet` component!

You will do it in the next iterations, one step at a time, replacing parts of HTML as you create each new component.

<hr>
<br>
</details>



<br>

### Iteration 4 | ProfileImage Component

**Extract HTML**

Extract the existing `img` tag and render it through the `ProfileImage` component:

```jsx
<img src="IMAGE_URL" className="profile" alt="profile"/>
```

<br>

**Render the component**

Once you are done, import the `ProfileImage` component to `Tweet.js`.  After importing it, render the component inside of `Tweet` in the following way:

```jsx
// ...

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

// ...
```

<br>

**Access the Props**

`ProfileImage` receives a prop `image`. Set this value as the `src` of the `<img />` tag.



<br>

### Iteration 4 | User Component

**Extract HTML**

Extract the existing `span` tags displaying the user information and render them through the `User` component:

```jsx
    <span className="user">
      <span className="name"> USER_NAME </span>
      <span className="handle">@ USER_HANDLE</span>
    </span>
```

<br>

**Render the component**

Import the `User` component to `Tweet.js`.  After importing it, render the component inside of `Tweet` in the following way:

```jsx
// ...

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          
          <User userData={props.tweet.user} />

// ...
```

<br>

**Access the Props**

We passed the object with the user information through the prop `userData`. Access and display the user's `name` and the `handle`.





### Iteration 5 | Timestamp Component 

**Extract HTML**

Extract the existing `span` tag displaying the *timestamp* information and render it through the `Timestamp` component:

```jsx
  <span className="timestamp"> TWEET_TIMESTAMP </span>
```



<br>

**Render the component**

Import the `Timestamp` component to `Tweet.js`.  After importing it, render the component inside of `Tweet` in the following way:

```jsx
// ...

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>          
// ...
```

<br>

**Access the Props**

`Timestamp` receives a prop `time`. Display this value as the content of the `span` tag.



<br>



### Iteration 6 | Message Component

**Extract HTML**

Extract the existing message `p` tag and render it through the `Message` component:

```jsx
        <p className="message"> TWEET_MESSAGE </p>
```

<br>

**Render the component**

When done, import the `Message` component and render it in the `Tweet.js` in the following way:

```jsx
// ...

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />        
// ...
```

<br>

**Access the Props**

`Message` receives a prop `message`. Display this value in the `p` tag.



<br>



### Iteration 7 | Actions Component

**Extract HTML**

Extract the existing message `div.actions` tag and render it through the `Actions` component:

```jsx
    <div className="actions">
      <i class="far fa-comment"></i>
      <i class="fas fa-retweet"></i>
      <i class="far fa-heart"></i>
      <i class="fas fa-share"></i>
    </div>
```

<br>

**Render the component**

When done, import the `Actions` component and render it in the `Tweet.js` like this:

```jsx
// ...

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />   
        
        <Actions />
// ...
```

<br>

The component doesn't take any props.

<br>



<br>



### Iteration 7 |Render mutliple `Tweet`s

Once you are done refactoring the `Tweet` component, update `App.js` to display three `<Tweet />` components. Each `<Tweet />` should receive a separate *tweet object* from the `tweetsArray`. 

Once finished, your app should be displaying the following content:



<details>

<summary>Click to see the image</summary>

![Example - Final Result](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-tweets-4.png)

<hr>
<br>
</details>



Happy coding! :blue_heart:
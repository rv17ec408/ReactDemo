import React, { useEffect, useState } from "react";

const BasicsDemo = () => {
  // how to get the root element using Id
  document.getElementById("root");
  document.querySelector("#root");

  // ----------jsx--------------
  // How to Create Html element using javascript
  const h1 = document.createElement("h1");
  h1.textContent = "helloworld";
  h1.className = "customH1";
  console.log(h1);
  //--------------How to use JSX element directly------------
  const nav = (
    <nav>
      <img src="../images/icon.png" alt="" height="40px" />
      <h1>Header</h1>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </nav>
  );

  console.log("See how js converts JSX into objects", nav);

  //------------- React component Declaration-------------
  /*
    Naming convention - Pascal casing
    MyComponent - parent,  div - Child component
  */
  function MyComponent() {
    return <div>my Component</div>;
  }

  // -------------props-----------
  function PropsExample(props) {
    console.log("propsExample", props);
    return <div>{props.name && "props example"}</div>;
  }
  // --------------render array of jsx elements--------------
  const h3Array = [<h3>Girish</h3>, <h3>Mahesh</h3>, <h3>tilak</h3>];

  // --------------useState------------------------
  const count = React.useState(1);
  console.log(count); //it returns [1, fun()], so we destructure to use it via variable
  const [result, setResult] = useState(1);
  // Best practice of using old value in State setter
  // setResult((prevValue) => prevValue + 1);
  // adding new element into a array using spread operator
  // const [names, setNames] = useState([]);
  // setNames((prevValue) => [...prevValue, "New Value"]);

  function handleClick() {
    setResult((prev) => prev + 1);
    callAnotherFunc();
  }
  function callAnotherFunc() {
    console.log("result", result);
  }
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {nav}
      <MyComponent />
      <PropsExample
        name="props"
        value="value"
        fun={() => {
          console.log("callback function");
        }}
      />
      {h3Array}
      {h3Array.map((e) => e)}
    </div>
  );
};

// --------------Conditional Rendering-------------
/*
    display or not One option -> use &&
    choose one among two option -> Ternary operator
    >two options -> If elseif, switch statements.
    */

function ConditionalDemo() {
  const [isExist, setIsExist] = useState(false);
  const obj = {
    name: "Ram",
  };
  const arr = ["apple"];
  const morethan2display = () => {
    if (isExist && new Date().getMonth === 1) {
      return <div>Month is {new Date().getMonth}</div>;
    } else if (isExist && new Date().getMonth > 2) {
      return <div>Month is {new Date().getMonth}</div>;
    } else if (isExist && new Date().getMonth === 12) {
      return <div>Month is {new Date().getMonth}</div>;
    } else {
      return <div>Month is {new Date().getMonth}</div>;
    }
  };
  return (
    <div>
      {isExist && <div>Dispaly Exist Data</div>}
      {isExist ? <div> True Data</div> : <div>False Data</div>}
      {morethan2display}
      {
        // Check array has elements/ object property has truthy value
        obj.name && arr.length && <div> array is {arr}</div>
      }
    </div>
  );
}
/*
  Given array of messages
  display when no messages "You're all Caught up"
  if message is only one dispaly "you have 1 unread Message" or "you have {length} unread Message's"
  */
function DisplayMessageTernaryUsage() {
  const [messages, setMessages] = useState(["one", "other"]);
  return (
    <div>
      {messages.length
        ? `you have ${messages.length} unread ${
            messages.length === 1 ? "message" : "message's"
          }`
        : "You're all Caught up"}
      {
        // avoid nested ternary messages.length ? "" : messages.length ===1 ? "" :""
      }
    </div>
  );
}

// ---------------Forms----
function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    comments: "",
    isDispalyed: false,
    employment: "",
    favColor: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checked" ? checked : value,
      };
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <form className="demo-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <br />
        <textarea
          name="comments"
          value={formData.comments}
          placeholder="Enter your thoughts"
          onChange={handleChange}
        />
        {/* {using htmlFor, we able to tie label to checkbox input. when you click on label, it updates checkbox} */}
        <input
          type="checkbox"
          id="checked"
          name="isDispalyed"
          checked={formData.isDispalyed}
          onChange={handleChange}
        />
        <label htmlFor="checked">are you want to display</label>
        <br />
        <fieldset>
          <legend>Employment Status</legend>
          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            onChange={handleChange}
          />
          <label htmlFor="unemployed">UnEmployed</label>
          <br />
          <input
            type="radio"
            id="fullTime"
            name="employment"
            value="fullTime"
            checked={formData.employment === "fullTime"}
            onChange={handleChange}
          />
          <label htmlFor="fullTime">fullTime</label>
          <br />
          <input
            type="radio"
            id="partTime"
            name="employment"
            value="partTime"
            checked={formData.employment === "partTime"}
            onChange={handleChange}
          />
          <label htmlFor="partTime">partTime</label>
          <br />
        </fieldset>
        <br />
        <label>Choose your Favorite Color</label>
        <br />
        <select
          name="favColor"
          value={formData.favColor}
          onChange={handleChange}
        >
          <option value="">--Choose--</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="orange">Orange</option>
        </select>
        <br />
        <button>Submit</button>
        {/* {any button placed inside form, has default type=submit so works as Submit Button} */}
      </form>
    </div>
  );
}

function UseEffectPractices() {
  /*
  UseEffect with Clean-up function
  */
  useEffect(() => {
    function resizeHandler() {
      console.log(window.innerWidth);
    }
    /* Event-Listers run only when event is triggered. It won't run whenever useEffect is runs. Even when component first render.*/
    window.addEventListener("resize", resizeHandler);
    return function () {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  /*
  Using an sync function inside useEffect
  useEffect takes a function as it's paramter. if that  function return something, it needs to be clean up fucntion. Otherwise, it should return nothing. If we make it an async function, it automatically return a promise instead of function or nothing. Therefore if you want to use async operations inside useEffects, you need to define the functio seperately inside of the callback function. As seen below
  */
  useEffect(() => {
    async function apiCall() {
      const res = await new Promise((resolve, reject) => resolve("done"));
    }
    apiCall();
  }, []);

  return (
    <div>
      <h1>Size of window</h1>
    </div>
  );
}

/*
----------------LocalStorage--------------
*/
function localStorageExample(key) {
  localStorage.setItem("Key", JSON.stringify(key));
  console.log(
    "Reading Original data in JSON from local storage",
    JSON.parse(localStorage.getItem("Key"))
  );
  localStorage.removeItem("Key");
}

/*
Lazy Initialize the react state, so that state variable not initialized every time when component get re-rendered
when we use localstorage to initialize the state, it will cause state to update everytime when component re-rendered.
you can visualize using console.log() in useState()
  this can be avoided by using ()=>
*/

function LazyStateInitialize() {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("key")) || []
  );
  // const [data, setData] = useState(
  //   console.log("re-initializing every time when re-rendered")
  // );
  const [count, setCount] = useState(0);
  return (
    <div>
      count is {count}
      <button
        onClick={(event) =>
          setCount((pre) => {
            // console.log("Accessing Event via arrow", event);
            return pre + 1;
          })
        }
      >
        Increment
      </button>
    </div>
  );
}
// -------Passing Index through callBack function to a Child-------
function defaultArgCallBackFunToChild() {
  const printId = (id) => console.log(id);
  function MyComp(props) {
    // props.printId hold index which is passed from parent function
    return <div onCLick={props.printId}>Data</div>;
  }
  const arrElement = [1, 2, 3, 4].map((val, index) => {
    <MyComp printId={() => printId(index)} />;
  });
}

const Basics = () => {
  return (
    <div>
      {/* <Forms /> */}
      {/* <UseEffectPractices /> */}
      <LazyStateInitialize />
    </div>
  );
};
export default Basics;
export const Head = () => <title>Basics</title>;

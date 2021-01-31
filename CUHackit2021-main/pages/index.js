import Head from "next/head";
import styles from "../styles/Home.module.css";
//import styles from "../styles/globals.css"
import axios from "axios";
import React from "react";


export default function Home() {
  let blankMaker;
  let i, j, x;
  var name;
  const [blankSize, setBlankSize] = React.useState();
  const [valueSize, setValueSize] = React.useState();
  const [storyVisibility, setStoryVisibility] = React.useState("invisible");
  let blankList = "";
  let listArray = [];
  let valueArray = [];
  const [fillBlank, setFillBlank] = React.useState("");
  
  //let runOnce = React.useState(false);

  const onStart = (event) => {

}

const changeVisibility = () => {
  console.log("here");
  //document.getElementById("story").class = "visible";
  setStoryVisibility("visible");
}

const onSubmit = (event) => {
    document.getElementById("story").innerHTML = "";
    setStoryVisibility("invisible");

       event.preventDefault();
    axios.get(`http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25`).then(function (response) {
      console.log(response.data.blanks);
      console.log(response.data.title);
      console.log(response.data.blanks.length);
      console.log(response.data.value[0]);
      console.log(response.data.value.length);

      setBlankSize(response.data.blanks.length);
      setValueSize(response.data.value.length);
      console.log(response.data.blanks.length);

      listArray.length = response.data.blanks.length

      listArray = [];
      valueArray = [];
      var holder = document.getElementById("holder");
      //for(i = 0; i < blankSize; i++){
      //  myString += response.data.blanks[i].toString();
      //  myString += " ";
      //}

      //console.log(myString)
      //setFillBlank(myString)

      for(j=0; j < blankSize; j++){
        listArray[j] = response.data.blanks[j];
        valueArray[j] = response.data.value[j];
        
        if(typeof valueArray[j] !== 'undefined')
          add2(valueArray[j].toString());

        if (typeof listArray[j] !== 'undefined')
            add(listArray[j].toString());
      }
      
      if(typeof valueArray[valueSize - 1] !== 'undefined')
          add2(valueArray[valueSize - 1].toString());

      //blankMaker = p => <BlankList blank={response.data.blanks[i]}></BlankList>
      //JSON.stringify(response.data.blanks[i][0])



        //holder.innerHTML += "<input/>";


  })
}



 function add(name) {

  //Create an input type dynamically.
  var element = document.createElement("input");
  
  
  //Create Labels
  //var label = document.createElement("Label");
  //label.innerHTML = "New Label";     
  
  //Assign different attributes to the element.
  element.setAttribute("type", "text");
  element.setAttribute("value", "");
  element.setAttribute("class", "inline-block bg-black text-white placeholder-gray-500 border border-gray-200 rounded-md p-2 m-2 visible");
  element.setAttribute("name", "Test Name");
  element.setAttribute("style", "width:200px");
  element.setAttribute("placeholder", name)
  


  //label.setAttribute("style", "font-weight:normal border border-black");
  
  // 'foobar' is the div id, where new fields are to be added
  var foo = document.getElementById("story");
  
  //Append the element in page (in span).
  //foo.appendChild(label);
  foo.appendChild(element);
  }

function add2(name) {
  var element = document.createElement("P");
  var textNode = document.createTextNode(name);
  
  element.appendChild(textNode);
  
  element.setAttribute("class", "text-white inline-block");
  //element.setAttribute("id", "storyText");
  
  var foo = document.getElementById("story");
  foo.appendChild(element);
}

return(
  <main>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <title>SnailzLibz</title>
      <img 
        rel="shortcut icon" 
        href="https://discord.com/channels/@me/805089351276953640/805282609541939271"
        type="image/x-icon" 
        ></img>
      <link rel="stylesheet" type="text/css" href="syntax.css"></link>      
    </head>

    <body>
    <div className = "bg-black h-screen text-white">
      <div>
        <img src="https://cdn.discordapp.com/attachments/805089351276953640/805264804402167828/snail_white.png" align="left" vspace="5" width="150" height="150" alt="Snailz"/>
        <h1 className = "font-bold text-8xl text-white">SnailzLibz</h1>
      </div>
      <div className = "md:container md:mx-auto py-10">
    
      <form onSubmit={onSubmit}>
        <h1 width="100" vspace="50" className = "text-center" align="left">We love Snailz</h1>
      <section class="text-center">
        <button
          rel="noopener noreferrer"
          target="_blank"
          type="submit"
          class="mt-10 bg-white rounded-lg px-8 py-4 text-black inline-block">Make me a SnailzLibz!</button>
        </section>
        {/* <label htmlFor="thisone">Enter Here:</label> */}
        {/* <input class="bg-black" id="thisone">
        </input> */}
        <h1 className = "text-white">{}</h1>
        <p className = "text-white" id='demo'>{}</p>
        </form>

        <div id="holder" class="my-5">
          <div id = "story" class={storyVisibility}>
            
          </div>
        </div>

        {/* <div class="invisible">*/}
        <div>
        {/*<form onSubmit={this.handleSubmit}>
        <section class="text-center">
        <button
          rel="noopener noreferrer"
          target="_blank"
          type="submit"
          class="mt-10 bg-white rounded-lg px-8 py-4 text-black inline-block"
          onClick="">
            Submit</button>
        </section>
      </form>*/}
          
        </div>
      <section class="text-center">
        <button
          rel="noopener noreferrer"
          target="_blank"
          type="button"
          class="mt-10 bg-white rounded-lg px-8 py-4 text-black inline-block"
          onClick={changeVisibility}
          >Submit Here!</button>
      </section>
        
      </div>
    </div>
  </body>
  </main>
)
}

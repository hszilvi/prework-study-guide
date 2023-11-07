var shape = "circle";
// var topics = "HTML, CSS, Git, JavaScript";
// console.log(topics);

// var topic = "CSS";

// if (topic === 'HTML') {
//   console.log("Let's study HTML!");
// } else if (topic === 'CSS') {
//   console.log("Let's study CSS!");
// } else if (topic === 'Git') {
//   console.log("Let's study Git!");
// } else if (topic === 'JavaScript') {
//   console.log("Let's study JavaScript!");
// } else {
//   console.log('Please try again!');
// }

// var shapes = ["triangle", "square", "pentagon", "circle"];

// var studentInfo = ["Lu", 54, true];

// console.log(shapes[0]);

// for loop
var shapes = ["triangle", "square", "pentagon", "circle"];
// console.log(shapes[0]);
// console.log(shapes[1]);
// console.log(shapes[2]);
// console.log(shapes[3]);

// for(var x = 0; x < shapes.length; x++) {
//     console.log(shapes[x]);
// }

// for loop for topics 
// var topics = ["HTML", "CSS", "Git", "JavaScript"];
// for(var x = 0; x < topics.length; x++) {
//     console.log(topics[x]);
// }

// learning function

// function helloWorld() {
//     console.log('this is a function');
// }
// helloWorld();

// function listTopics() {
//     for (var x = 0; x < topics.length; x++ ) {
//         console.log(topics[x]);
//     }
// }
// listTopics();

// function selectTopic() {
//     if (topic === 'HTML') {
//       console.log("Let's study HTML!");
//     } else if (topic === 'CSS') {
//       console.log("Let's study CSS!");
//     } else if (topic === 'Git') {
//       console.log("Let's study Git!");
//     } else if (topic === 'JavaScript') {
//       console.log("Let's study JavaScript!");
//     } else {
//       console.log('Please try again!');
//     }
//   }
//   selectTopic();


//   add random to function
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];
function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }


  console.log('here are the topics we learned through Prework');
  listTopics();
  console.log('which topic shoul we study first?')
  selectTopic();
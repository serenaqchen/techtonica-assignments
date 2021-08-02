//create a class called event
class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }
}

//below statement creates an object
const eventObj1 = new Event(
  "KLOS Golden Gala",
  "An evening with hollywood vampires"
);

//adding more instances of Event 
const eventObj2 = new Event("Skillet & Sevendust", "Victorious war tour");
const eventObj3 = new Event("Jenny Lewis", "On the line tour 2019");

//creating an empty event array using the Array constructor 
const eventArray = new Array();

// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

// in order to check whether the elements are pushed, use console.log
console.log(eventArray);

//select html element 
let eventList = document.getElementById('event');

//iterate through the list of objects and add a new element, li, to the parent with the event name and description
for (let anEvent of eventArray){
    let li = document.createElement('li');
    li.innerHTML = `${anEvent['name']} - ${anEvent['description']}`;
    eventList.appendChild(li);
}


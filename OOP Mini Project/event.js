//create a class called event
class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
    this.addAvailableTickets = function(name, price){
        this.availableTickets.push(new TicketType(name, price))
    };
    this.allTickets = function () {
        let result = "";
        for (let i = 0; i <= this.availableTickets.length; i++){
            result = result.concat(` ${i+1}. ${this.availableTickets[i].name} ($${this.availableTickets[i].price})`)
      }
        return 'All tickets:'.concat(result)
    };
    this.searchTickets = function (lower, upper) {
        let result = "";
        for (let i = 0; i < this.availableTickets.length; i++){
            let ticketPrice = this.availableTickets[i].price
            if (ticketPrice > lower && ticketPrice < upper){
                result = result.concat(` ${i+1}. ${this.availableTickets[i].name} ($${this.availableTickets[i].price})`);
            }
        }
        if (result.length === 0){
            return "No tickets available.";
        } else {
            return 'Eligible:'.concat(result);
        }
    };
  }
}
//create new class 
class TicketType {
    constructor (name, price) {
        this.name = name;
        this.price = price;
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
// console.log(eventArray);

//adding new ticket types
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);
eventObj3.addAvailableTickets("Balcony", 100);
eventObj3.addAvailableTickets("Orchestra", 300);
eventObj3.addAvailableTickets("Mezzanine", 200);

console.log(eventObj3.searchTickets(10, 110))

//select html element 
let eventList = document.getElementById('event');

//iterate through the list of objects and add a new element, li, to the parent with the event name and description
for (let anEvent of eventArray){
    let li = document.createElement('li');
    li.innerHTML = `${anEvent['name']} - ${anEvent['description']} - ${anEvent.searchTickets(10, 110)}`;
    eventList.appendChild(li);
}


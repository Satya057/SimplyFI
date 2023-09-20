
// Assignment 2: Using JavaScript
// Q . Your son took a vacation through Europe without telling you. When the kid returned from the vacation you asked him where did he go. The kid told you: Dad I went to these cities: Amsterdam, Kiev, Zurich, Prague, Berlin, Barcelona.
// I used only train as transportation and these were the available tickets:
// Paris-Skopje, Zurich-Amsterdam, Prague-Zurich, Barcelona-Berlin, Kiev-Prague, Skopje-Paris, Amsterdam-Barcelona, Berlin-Kiev, Berlin-Amsterdam.
// You know that your kid started with Kiev
// Write a data structure and algorithm that will give you the route which your son was traveling.






const startingPoint = "kiev";

//The first path of the route would be starting point, which in this case is Kiev
const route = [startingPoint];

//The tickets son having
const availableTickets = {
  paris: "skopje",
  zurich: "amsterdam",
  prague: "zurich",
  barcelona: "berlin",
  kiev: "prague",
  skopje: "paris",
  amsterdam: "barcelona",
  berlin: "amsterdam",
  berlin: "kiev",
};

//The loop for run the same amount of time as tickets

for (let i = 0; i < Object.keys(availableTickets).length; i++) {
  // Your last stop of the route would be your current stop
  const currentStop = route[route.length - 1];
  // After getting the current I am finding the your next stop from available tickets
  const nextStop = availableTickets[currentStop];
  // Pushing it to the route
  route.push(nextStop);
  // If you reached to stop from your started you would break out of the loop
  if (startingPoint === nextStop) {
    break;
  }
}
console.log(route.join("-"));
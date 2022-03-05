//Vaizle internship assignment

export function solution(D) {
  let dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let solution = { Sun: 0, Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0 };
  for (let [key, value] of Object.entries(D)) {
    //Getting day of week
    const newDate = new Date(key);
    let day = newDate.getDay();

    // Adding value for that day
    solution[dayArray[day]] = solution[dayArray[day]] + value;
  }
  //Returning Array
  return solution;
}

export let data = {
  "2020-01-01": 4,
  "2020-01-02": 4,
  "2020-01-03": 6,
  "2020-01-04": 8,
  "2020-01-05": 2,
  "2020-01-06": -6,
  "2020-01-07": 2,
  "2020-01-08": -2,
};

console.log(solution(data));

// Event Listeners
const personalActivity = document
  .getElementById("personalActivity")
  .addEventListener("click", getPersonalActivity);

const groupActivity = document
  .getElementById("groupActivity")
  .addEventListener("click", getGroupActivity);


// FUNCTIONS

//  Personal Activity Function
function getPersonalActivity () {
  const activityType = document.getElementById("activity-type").value;
  const url = `https://www.boredapi.com/api/activity?type=${activityType}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

// Group Activity Function
function getGroupActivity () {
const peopleCount = document.getElementById("people").value;
  const url = `https://www.boredapi.com/api/activity?participants=${peopleCount}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

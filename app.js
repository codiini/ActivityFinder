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

      // removes svg from page
      let imgRemove = document.getElementById("joy-svg");
      imgRemove.remove();

      let headerDiv = document.getElementById("header-div");

      // created the main card div
      let response = document
        .createElement("div")
        .classList.add("card", "w-75", "p-5", "mx-auto");
      console.log(data);
    });
  
  // Add main card Div to header Div
  headerDiv.appendChild(response);

  

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

// Event Listeners
const personalActivity = document
  .getElementById("personalActivity")
  .addEventListener("click", getPersonalActivity);

const groupActivity = document
  .getElementById("groupActivity")
  .addEventListener("click", getGroupActivity);

// FUNCTIONS

// Function to handle the creation of card containing activity for both personal and group activities

showActivity = (data) => {
  let imgRemove = document.getElementById("joy-svg");
  // imgRemove.remove();

  let headerDiv = document.getElementById("header-div");

  // created the main card div
  let response = document.createElement("div");
  response.classList.add("card", "w-75", "p-5", "mx-auto");

  // Append main card Div to header Div
  headerDiv.appendChild(response);

  // Create sub card div
  let subResponse = document.createElement("div");
  subResponse.classList.add("card-body");

  // Append sub card div to main card div
  response.appendChild(subResponse);

  // Create sub card div Title text and append to sub card
  let subResponseTitle = document.createElement("p");
  subResponseTitle.innerHTML = "You can:";
  subResponse.appendChild(subResponseTitle);

  // Create sub card div body text and append to sub card
  let subResponseBody = document.createElement("p");
  subResponseBody.innerHTML = `${data.activity}`;
  subResponse.appendChild(subResponseBody);
};

//  Personal Activity Function
function getPersonalActivity() {
  const activityType = document.getElementById("activity-type").value;
  const url = `https://www.boredapi.com/api/activity?type=${activityType}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showActivity(data);
    });
}

// Group Activity Function
function getGroupActivity() {
  const peopleCount = document.getElementById("people").value;
  const url = `https://www.boredapi.com/api/activity?participants=${peopleCount}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      showActivity(data);
    });
}

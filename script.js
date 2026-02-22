//Creating Two Blank Array to count interview or rejected value
let interviewArray = [];
let rejectedArray = [];

//Accessing all the item we need:

const mainDiv = document.querySelector("main");

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectBtn = document.getElementById("reject-btn");
const jobListSection = document.getElementById("job-list-content");
const interviewSection = document.getElementById("interview-section");
const rejectSection = document.getElementById("reject-section");

const interviewCount = document.getElementById("interview-job");
const rejectedJob = document.getElementById("rejected-job");

//Making logic:

//to make active btn colorful using javaScript
function seeJob(id) {
  allBtn.classList.remove("stay-blue");
  interviewBtn.classList.remove("stay-blue");
  rejectBtn.classList.remove("stay-blue");

  const selectedId = document.getElementById(id);

  selectedId.classList.add("stay-blue");
}

//Main Logic Here:
mainDiv.addEventListener("click", function (event) {
  const grandParentNode = event.target.parentNode.parentNode;
  const companyName = grandParentNode.querySelector(".company-name").innerText;
  const jobTittle = grandParentNode.querySelector(".job-tittle").innerText;
  const deleteBtn = grandParentNode.querySelector(".delete-icon");
  const jobSalary = grandParentNode.querySelector(".job-salary").innerText;
  const jobStatus = grandParentNode.querySelector(".job-status-btn").innerText;
  const jobDetails = grandParentNode.querySelector(".job-details").innerText;

  console.log(
    companyName,
    jobTittle,
    deleteBtn,
    jobSalary,
    jobStatus,
    jobDetails,
  );

  // if (event.target.innerText == "INTERVIEW") {
  //   interviewArray.push(parentDiv);

  //   totalJobCount();
  // } else if (event.target.innerText == "REJECTED") {
  //   rejectedArray.push(parentDiv);

  //   totalJobCount();
  // }
});

//Calculating all job
function totalJobCount() {
  document.getElementById("totalJob").innerText =
    jobListSection.children.length;
  document.getElementById("totalJobCount").innerText =
    jobListSection.children.length;

  interviewCount.innerText = interviewArray.length;
  rejectedJob.innerText = rejectedArray.length;
}

totalJobCount();

//Creating Two Blank Array to count interview or rejected value
let interviewArray = [];
let rejectedArray = [];

//Accessing all the item we need:

const mainDiv = document.querySelector("main");

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectBtn = document.getElementById("reject-btn");
const jobListSection = document.getElementById("job-list-container");

const interviewSection = document.getElementById("interview-section");
const rejectedSection = document.getElementById("rejected-section");
const emptySection = document.getElementById("empty-section");

const interviewCount = document.getElementById("interview-job");
const rejectedJob = document.getElementById("rejected-job");

//Making logic:

//to make active btn colorful using javaScript
function seeJob(id) {
  //All three btn will be reset
  allBtn.classList.remove("stay-blue");
  interviewBtn.classList.remove("stay-blue");
  rejectBtn.classList.remove("stay-blue");

  //All three section will be hidden
  // jobListSection.classList.add("hidden");
  // filterSection.classList.add("hidden");
  // emptySection.classList.add("hidden");

  //target btn will be stay blue color
  document.getElementById(id).classList.add("stay-blue");
}

//Main Logic Here:
mainDiv.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-selection-btn")) {
    const grandParentNode = event.target.parentNode.parentNode;
    const companyName =
      grandParentNode.querySelector(".company-name").innerText;
    const jobTittle = grandParentNode.querySelector(".job-tittle").innerText;
    const deleteBtn = grandParentNode.querySelector(".delete-icon");
    const jobSalary = grandParentNode.querySelector(".job-salary").innerText;
    const jobStatus =
      grandParentNode.querySelector(".job-status-btn").innerText;
    const jobDetails = grandParentNode.querySelector(".job-details").innerText;

    const jobCard = {
      companyName,
      jobTittle,
      deleteBtn,
      jobSalary,
      jobStatus,
      jobDetails,
    };

    // console.log(jobCard);

    const checkJobDeclared = interviewArray.find(
      (item) =>
        item.companyName === jobCard.companyName &&
        item.jobTittle === jobCard.jobTittle,
    );

    grandParentNode.querySelector(".job-status-btn").innerText =
      "Interview Called";
    grandParentNode
      .querySelector(".job-status-btn")
      .classList.add("btn-success");

    if (!checkJobDeclared) {
      interviewArray.push(jobCard);
      totalJobCount();
    }
  }

  if (event.target.classList.contains("reject-selection-btn")) {
    const grandParentNode = event.target.parentNode.parentNode;
    const companyName =
      grandParentNode.querySelector(".company-name").innerText;
    const jobTittle = grandParentNode.querySelector(".job-tittle").innerText;
    const deleteBtn = grandParentNode.querySelector(".delete-icon");
    const jobSalary = grandParentNode.querySelector(".job-salary").innerText;
    const jobStatus =
      grandParentNode.querySelector(".job-status-btn").innerText;
    const jobDetails = grandParentNode.querySelector(".job-details").innerText;

    const jobCard = {
      companyName,
      jobTittle,
      deleteBtn,
      jobSalary,
      jobStatus,
      jobDetails,
    };

    const checkRejectedJob = rejectedArray.find(
      (item) =>
        item.companyName === jobCard.companyName &&
        item.jobTittle === jobCard.jobTittle,
    );

    console.log(!checkRejectedJob);
  }
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

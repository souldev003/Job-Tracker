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

function createJobCard(jobCard) {
  const div = document.createElement("div");
  div.className =
    "interview-card bg-white p-6 rounded-md space-y-4 cursor-pointer transition-all duration-150 hover:shadow-md hover:-translate-y-1";

  div.innerHTML = `<div class="flex items-start justify-between align-middle">
    <div class="heading">
        <h1 class="company-name text-[#002C5C] text-lg font-semibold">${jobCard.companyName}</h1>
        <h3 class="job-tittle text-[#64748B] text-base font-normal">${jobCard.jobTittle}</h3>
    </div>
    <i
        class="delete-icon fa-solid fa-trash-can cursor-pointer transition-all duration-300 hover:scale-110"></i>
</div>

<div>
    <p class="job-salary text-[#64748B] text-sm font-normal">${jobCard.jobSalary}</p>
</div>

<div class="job-status-btn btn uppercase text-[#002C5C] text-xs">
    ${jobCard.jobStatus}
</div>

<p class="job-details text-[#323B49] font-normal text-sm">${jobCard.jobDetails}</p>

<div class="flex items-center gap-4">
    <button class="interview-selection-btn btn btn-outline btn-success">INTERVIEW</button>
    <button class="reject-selection-btn btn btn-outline btn-error">REJECTED</button>
</div>`;

  return div;
}

function jobStatusChecker(jobCard, targetIdName) {
  interviewArray = interviewArray.filter(
    (item) =>
      !(
        item.companyName === jobCard.companyName &&
        item.jobTittle === jobCard.jobTittle
      ),
  );

  rejectedArray = rejectedArray.filter(
    (item) =>
      !(
        item.companyName === jobCard.companyName &&
        item.jobTittle === jobCard.jobTittle
      ),
  );

  if (targetIdName === "Interview") {
    interviewArray.push(jobCard);

    const newDiv = createJobCard(jobCard);
    interviewSection.appendChild(newDiv);
  }

  if (targetIdName === "Rejected") {
    rejectedArray.push(jobCard);

    const newDiv = createJobCard(jobCard);
    rejectedSection.appendChild(newDiv);
  }

  totalJobCount();
}

//to make active btn colorful using javaScript
function seeJob(id) {
  //All three btn will be reset
  allBtn.classList.remove("stay-blue");
  interviewBtn.classList.remove("stay-blue");
  rejectBtn.classList.remove("stay-blue");

  // All three section will be hidden
  jobListSection.classList.add("hidden");
  interviewSection.classList.add("hidden");
  rejectedSection.classList.add("hidden");
  emptySection.classList.add("hidden");

  //target btn will be stay blue color
  document.getElementById(id).classList.add("stay-blue");

  if (id === "all-btn") {
    jobListSection.classList.remove("hidden");
  } else if (id === "interview-btn") {
    if (interviewArray.length === 0) {
      emptySection.classList.remove("hidden");
    } else {
      interviewSection.classList.remove("hidden");
    }
  } else if (id === "reject-btn") {
    if (rejectedArray.length === 0) {
      emptySection.classList.remove("hidden");
    } else {
      rejectedSection.classList.remove("hidden");
    }
  }
}

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

//Main Logic Here:
mainDiv.addEventListener("click", function (event) {
  //Interview Btn logic here:
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

    jobStatusChecker(jobCard, "Interview");

    const statusBtn = grandParentNode.querySelector(".job-status-btn");
    statusBtn.innerText = "INTERVIEW CALLED";
    statusBtn.classList.remove("btn-active", "btn-success", "btn-error");
    statusBtn.classList.add("btn-active", "btn-success");
  }

  //Rejected Btn Logic here:
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

    jobStatusChecker(jobCard, "Rejected");

    //Showing user job btn status:
    const statusBtn = grandParentNode.querySelector(".job-status-btn");
    statusBtn.innerText = "REJECTED";
    statusBtn.classList.remove("btn-active", "btn-success", "btn-error");
    statusBtn.classList.add("btn-active", "btn-error");
  }
});

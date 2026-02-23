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

// Helper Function:
//Calculating all job
function totalJobCount() {
  interviewCount.innerText = interviewArray.length;
  rejectedJob.innerText = rejectedArray.length;

  let currentCount = 0;

  if (!jobListSection.classList.contains("hidden")) {
    currentCount = jobListSection.children.length;
  } else if (!interviewSection.classList.contains("hidden")) {
    currentCount = interviewSection.children.length;
  } else if (!rejectedSection.classList.contains("hidden")) {
    currentCount = rejectedSection.children.length;
  }

  document.getElementById("job-count").innerText = currentCount;
  document.getElementById("totalJob").innerText =
    jobListSection.children.length;
}

totalJobCount();
//it will change the 'Not Applied' BTN when user clicked.
function checkJobStatus(jobStatusBtn, status) {
  jobStatusBtn.classList.remove("btn-active", "btn-success", "btn-error");

  if (status === "INTERVIEW CALLED") {
    jobStatusBtn.innerText = "INTERVIEW CALLED";
    jobStatusBtn.classList.add("btn-active", "btn-success");
  } else if (status === "REJECTED") {
    jobStatusBtn.innerText = "REJECTED";
    jobStatusBtn.classList.add("btn-active", "btn-error");
  } else {
    jobStatusBtn.innerText = "Not Applied";
  }
}

// TO create new div call this function
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

  const statusBtn = div.querySelector(".job-status-btn");
  if (jobCard.jobStatus === "INTERVIEW CALLED") {
    statusBtn.classList.remove("btn-active", "btn-success", "btn-error");
    statusBtn.classList.add("btn-active", "btn-success");
  } else if (jobCard.jobStatus === "REJECTED") {
    statusBtn.classList.remove("btn-active", "btn-success", "btn-error");
    statusBtn.classList.add("btn-active", "btn-error");
  }
  return div;
}

// it will check interviewArray and rejectedArray;
function filterArrayChecker(sectionChildren, jobCard) {
  for (let i = 0; i < sectionChildren.length; i++) {
    const card = sectionChildren[i];
    const companyName = card.querySelector(".company-name").innerText;
    const jobTittle = card.querySelector(".job-tittle").innerText;

    if (
      companyName === jobCard.companyName &&
      jobTittle === jobCard.jobTittle
    ) {
      return true;
    }
  }
  return false;
}

function updateAllTabCard(jobCard) {
  const allCards = jobListSection.children;
  for (let card of allCards) {
    const companyName = card.querySelector(".company-name").innerText;
    const jobTittle = card.querySelector(".job-tittle").innerText;
    if (
      companyName === jobCard.companyName &&
      jobTittle === jobCard.jobTittle
    ) {
      const statusBtn = card.querySelector(".job-status-btn");
      checkJobStatus(statusBtn, jobCard.jobStatus);
      break;
    }
  }
}

//It will Check what is the job name by user clicked btn and push data to interviewArray or rejectedArray by user clicked btn.
function jobStatusChecker(jobCard, targetIdName) {
  // To check duplicate interviewSection
  for (let card of interviewSection.children) {
    const companyName = card.querySelector(".company-name").innerText;
    const jobTittle = card.querySelector(".job-tittle").innerText;
    if (
      companyName === jobCard.companyName &&
      jobTittle === jobCard.jobTittle
    ) {
      card.remove();
      break;
    }
  }

  // To check duplicate rejectedSection
  for (let card of rejectedSection.children) {
    const companyName = card.querySelector(".company-name").innerText;
    const jobTittle = card.querySelector(".job-tittle").innerText;
    if (
      companyName === jobCard.companyName &&
      jobTittle === jobCard.jobTittle
    ) {
      card.remove();
      break;
    }
  }

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
    if (!filterArrayChecker(interviewSection.children, jobCard)) {
      const newCard = createJobCard(jobCard);
      interviewSection.appendChild(newCard);
    }
  }

  if (targetIdName === "Rejected") {
    rejectedArray.push(jobCard);
    if (!filterArrayChecker(rejectedSection.children, jobCard)) {
      const newCard = createJobCard(jobCard);
      rejectedSection.appendChild(newCard);
    }
  }

  updateAllTabCard(jobCard);
  totalJobCount();
}

function removeJobFromSection(section, companyName, jobTittle) {
  const children = [...section.children];
  children.forEach((card) => {
    const targetCompanyName = card.querySelector(".company-name").innerText;
    const targetJobTittle = card.querySelector(".job-tittle").innerText;

    if (targetCompanyName === companyName && targetJobTittle === jobTittle) {
      card.remove();
    }
  });
}

//Worker Function:
//to make active and colorful btn and to show up selected Section:
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

  let currentCount = 0;

  if (id === "all-btn") {
    jobListSection.classList.remove("hidden");
    currentCount = jobListSection.children.length;
  } else if (id === "interview-btn") {
    if (interviewArray.length === 0) {
      emptySection.classList.remove("hidden");
    } else {
      interviewSection.classList.remove("hidden");
      currentCount = interviewSection.children.length;
    }
  } else if (id === "reject-btn") {
    if (rejectedArray.length === 0) {
      emptySection.classList.remove("hidden");
    } else {
      rejectedSection.classList.remove("hidden");
      currentCount = rejectedSection.children.length;
    }
  }

  document.getElementById("job-count").innerText = currentCount;
}

//Main Logic Here:
mainDiv.addEventListener("click", function (event) {
  //Interview Btn logic here:
  if (event.target.classList.contains("interview-selection-btn")) {
    const grandParentNode = event.target.closest(".interview-card");

    const jobStatusBtn = grandParentNode.querySelector(".job-status-btn");
    checkJobStatus(jobStatusBtn, "INTERVIEW CALLED");

    const jobCard = {
      companyName: grandParentNode.querySelector(".company-name").innerText,
      jobTittle: grandParentNode.querySelector(".job-tittle").innerText,
      jobSalary: grandParentNode.querySelector(".job-salary").innerText,
      jobStatus: grandParentNode.querySelector(".job-status-btn").innerText,
      jobDetails: grandParentNode.querySelector(".job-details").innerText,
    };

    jobStatusChecker(jobCard, "Interview");
    totalJobCount();

    if (
      !jobListSection.classList.contains("hidden") &&
      jobListSection.children.length === 0
    ) {
      jobListSection.classList.add("hidden");
      emptySection.classList.remove("hidden");
    } else if (
      !interviewSection.classList.contains("hidden") &&
      interviewSection.children.length === 0
    ) {
      interviewSection.classList.add("hidden");
      emptySection.classList.remove("hidden");
    } else if (
      !rejectedSection.classList.contains("hidden") &&
      rejectedSection.children.length === 0
    ) {
      rejectedSection.classList.add("hidden");
      emptySection.classList.remove("hidden");
    }
  }

  //Rejected Btn Logic here:
  if (event.target.classList.contains("reject-selection-btn")) {
    const grandParentNode = event.target.closest(".interview-card");

    const jobStatusBtn = grandParentNode.querySelector(".job-status-btn");
    checkJobStatus(jobStatusBtn, "REJECTED");

    const jobCard = {
      companyName: grandParentNode.querySelector(".company-name").innerText,
      jobTittle: grandParentNode.querySelector(".job-tittle").innerText,
      jobSalary: grandParentNode.querySelector(".job-salary").innerText,
      jobStatus: grandParentNode.querySelector(".job-status-btn").innerText,
      jobDetails: grandParentNode.querySelector(".job-details").innerText,
    };

    jobStatusChecker(jobCard, "Rejected");
    totalJobCount();

    if (
      !jobListSection.classList.contains("hidden") &&
      jobListSection.children.length === 0
    ) {
      jobListSection.classList.add("hidden");
      emptySection.classList.remove("hidden");
    } else if (
      !interviewSection.classList.contains("hidden") &&
      interviewSection.children.length === 0
    ) {
      interviewSection.classList.add("hidden");
      emptySection.classList.remove("hidden");
    } else if (
      !rejectedSection.classList.contains("hidden") &&
      rejectedSection.children.length === 0
    ) {
      rejectedSection.classList.add("hidden");
      emptySection.classList.remove("hidden");
    }
  }

  if (event.target.classList.contains("delete-icon")) {
    const grandParentNode = event.target.closest(".interview-card");
    const companyName =
      grandParentNode.querySelector(".company-name").innerText;
    const jobTittle = grandParentNode.querySelector(".job-tittle").innerText;

    grandParentNode.remove();

    removeJobFromSection(interviewSection, companyName, jobTittle);
    removeJobFromSection(rejectedSection, companyName, jobTittle);

    // removeJobFromSection(jobListSection, companyName, jobTittle);

    interviewArray = interviewArray.filter(
      (item) =>
        !(item.companyName === companyName && item.jobTittle === jobTittle),
    );

    rejectedArray = rejectedArray.filter(
      (item) =>
        !(item.companyName === companyName && item.jobTittle === jobTittle),
    );

    const jobCard = {
      companyName: companyName,
      jobTittle: jobTittle,
      jobStatus: "Not Applied",
    };

    totalJobCount();
    updateAllTabCard(jobCard);

    if (
      !jobListSection.classList.contains("hidden") &&
      jobListSection.children.length === 0
    ) {
      jobListSection.classList.add("hidden");
      emptySection.classList.remove("hidden");
    } else if (
      !interviewSection.classList.contains("hidden") &&
      interviewSection.children.length === 0
    ) {
      interviewSection.classList.add("hidden");
      emptySection.classList.remove("hidden");
    } else if (
      !rejectedSection.classList.contains("hidden") &&
      rejectedSection.children.length === 0
    ) {
      rejectedSection.classList.add("hidden");
      emptySection.classList.remove("hidden");
    }
  }
});

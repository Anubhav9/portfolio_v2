//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Engineering Intern",
    cardImage: "assets/images/experience-page/st.png",
    place: "ST Microelectronics",
    time: "(Feb, 2021 - Present)",
    desp: "<li>Currently deployed as an intern in the Systems Research and Application Team (SRA) and working on an application that involves extensive use of the concepts of Computer Network and Bluetooth.</li> <li>My work also involves the use of web technology frameworks and therefore I am quite well versed with MEAN Stack + Vue</li>"
  },
  {
    title: "Software Developer Engineer (Intern)",
    cardImage: "assets/images/experience-page/occupassion.png",
    place: "Occupassion",
    time: "(April - June, 2020)",
    desp: "<li>Worked as a part of the SDE Team to develop an automated tool using Machine Learning and Deep Learning algorithms to help potential job seekers find the right job based on their passion and skill set.</li>",
  },
  {
    title: "Freelancer",
    cardImage: "assets/images/experience-page/upwork.png",
    place: "Upwork",
    time: "(June, 2018 - Present)",
    desp:"<li>Working as a freelancer on a host of different tasks ranging from Machine Learning, Web Development and Content Writing.</li><li>Currently having a Job Success Score of 92% which means 92% of my clients had an awesome experience working with me. I have completed around 35 projects and having an average rating of 4.7. Also, awared with Rising Talent Badge.</li>",
  },
  {
    title: "Technical Video Maker",
    cardImage: "assets/images/experience-page/qst.png",
    place: "Quick Silver Technologies Pvt Ltd",
    time: "(June, 2018 - Aug 2018)",
    desp:"<li>Created Technical & Programming Videos for a Youtube Channel in Hindi. Received excellent feedback from the viewers.Undertaken: SQL, Flask, and Data Analysis.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards


document.addEventListener("DOMContentLoaded", showCards3);

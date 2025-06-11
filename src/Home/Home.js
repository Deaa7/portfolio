import { useState } from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CountUp from "react-countup";
import Slider from "react-slick";
export default function Home() {
  let str1 = "Hello";
  let str2 = ", my name is Deaa ";
  let str3 = "I am full-stack web developer using React.js & Django";

  let delay = 0;

  let job1 = str1.split("").map((e) => {
    delay += 70;
    return (
      <span
        style={{
          animationDelay: delay.toString() + "ms",
          animationName: "show_name",
          opacity: "0",
        }}
        onAnimationEnd={(e) => (e.target.style.opacity = "1")}>
        {e}
      </span>
    );
  });

  let job2 = str2.split("").map((e) => {
    delay += 70;
    return (
      <span
        style={{
          animationDelay: delay.toString() + "ms",
          animationName: "show_name",
          opacity: "0",
        }}
        onAnimationEnd={(e) => (e.target.style.opacity = "1")}>
        {e}
      </span>
    );
  });

  let job3 = str3.split("").map((e) => {
    delay += 50;
    return (
      <span
        style={{
          animationDelay: delay.toString() + "ms",
          animationName: "show_name",
          opacity: "0",
        }}
        onAnimationEnd={(e) => (e.target.style.opacity = "1")}>
        {e}
      </span>
    );
  });

  delay += 100;
  let image = (
    <img
      style={{
        width: "50%",
        animationDelay: delay.toString() + "ms",
        animationName: "show_name",
        opacity: "0",
      }}
      onAnimationEnd={(e) => (e.target.style.opacity = "1")}
      src={require("./React&Django.png")}
    />
  );

  let exp = `
  In my journey as a front-end web developer, I have honed my skills in HTML, CSS, tailwind, TypeScript and JavaScript, 
laying the foundation for creating visually appealing and interactive web interfaces.
  By practicing my craft through building simple web applications
I have utilized tools like Axios and the fetch API to make asynchronous API calls,
 handle responses, and update the UI with the fetched data. Additionally,
 I have taken my skills a step further by deploying eight web projects online,
 allowing me to showcase my work to a wider audience and gain valuable experience in
 the deployment process.
 
 `;

  let exp2 = `
 In my experience with the React.js framework, 
 I have dived deep into understanding and effectively utilizing the core concepts and features of React,
 particularly focusing on React hooks.  
  this has empowered me to handle state management, side effects, context-sharing, 
 and DOM manipulations in a more functional and efficient manner. 
 
   I have honed my skills in developing scalable and maintainable 
 React applications by strategically employing advanced state management techniques like Context API
  ensuring that components update only when necessary and enhancing the overall responsiveness and
 efficiency of the application.
  `;
  let exp3 = `
  With my practical experience in backend development using Python with Django
I have a solid understanding of working with databases using Django ORM.
 I am skilled in creating and managing RESTful APIs using Django Rest Framework,
 ensuring that my web services follow best practices. Moreover, I am proficient in implementing JWT
 protection for enhanced security in user authentication. My ability to use Django ORM, build RESTful APIs,
 and integrate JWT protection reflects my capability to design secure, efficient, and reliable backend
 solutions for modern web applications.
  `;
  let exp4 = `
  I have a good understanding of data analysis, especially in writing optimized SQL queries to 
efficiently retrieve data from databases. I have honed my skills by solving around 30 SQL problems on the
 LeetCode platform, improving my query writing and problem-solving abilities. Additionally, 
 I am familiar with visualization tools like Tableau for creating insightful visual representations 
 of data. Furthermore, I have experience in generating formal reports using tools
 like Excel and Google Sheets, In addition, I have completed two online projects on data visualization using Tableau,
 showcasing my practical experience in utilizing visualization tools `;

  let exp5 = `I have spent three years sharpening my problem-solving skills and critical thinking abilities,
   focusing on writing efficient code and finding smart solutions using different data structures and algorithms.
   I have solved over 1400 problems on the Codeforces platform,
    showcasing my expertise in problem-solving and coding challenges.
     Additionally, I actively participate in coding contests, where I test my skills against a diverse range of problems and competitors,
     This experience has helped me
     become adept at analyzing complex problems, creating creative solutions, and writing optimized code that
     demonstrates a strong grasp of data structures and algorithms.
`;
  return (
    <>
      <div id="home_root">
        <div id="home_first_section">
          <div className="image_and_bio_container">
            <img id="my_photo" src={require("./my_photo.jpg")} alt="my photo" />
            <h4 id="main_name" className="colored_text">
              Deaa Naser
            </h4>
            <div id="bio">full-stack web developer</div>
            <div id="personal_details">
              <div id="personal_details_section1">
                <div>
                  <span className="sec1"> Nationality </span>{" "}
                  <span className="sec2"> Syrian </span>{" "}
                </div>

                <div>
                  <span className="sec1"> City </span>{" "}
                  <span className="sec2"> Homs </span>{" "}
                </div>

                <div>
                  <span className="sec1"> Age </span>{" "}
                  <span className="sec2"> 23 </span>{" "}
                </div>

                <div>
                  <span className="sec1"> Phone Number </span>{" "}
                  <span className="sec2"> +963 980 734 524 </span>{" "}
                </div>

                <div>
                  <span className="sec1"> Gmail </span>{" "}
                  <span className="sec2">
                    {" "}
                    <a
                      href="mailto:deaanaser209@gmail.com"
                      className="link"
                      target="blank"
                      style={{ color: "gray" }}>
                      deaa.work7@gmail.com
                    </a>{" "}
                  </span>{" "}
                </div>
              </div>

              <div id="personal_details_section2">
                <p id="section2_title" className="colored_text">
                  Skills{" "}
                </p>

                <Skill text={"React.js"} percentage={"96%"} />
                <Skill text={"Redux"} percentage={"66%"} />
                <Skill text={"JavaScript"} percentage={"92%"} />
                <Skill text={"TypeScript"} percentage={"71%"} />
                <Skill text={"HTML & CSS"} percentage={"87%"} />
                <Skill text={"tailwind"} percentage={"57%"} />
                <Skill text={"Django"} percentage={"74%"} />
                <Skill text={"Problem Solving"} percentage={"68%"} />
                <Skill text={"C++"} percentage={"73%"} />
                <Skill text={"Java"} percentage={"51%"} />
                <Skill text={"python"} percentage={"60%"} />

                <Skill text={"Mysql"} percentage={"62%"} />
                <Skill text={"Tableau"} percentage={"41%"} />
                <Skill text={"Data Analysis"} percentage={"52%"} />

                <Skill text={"Communication & team work"} percentage={"71%"} />
                <Skill text={"Design Patterns"} percentage={"41%"} />
                <Skill text={"Arabic Language"} percentage={"98%"} />
                <Skill text={"English Language"} percentage={"82%"} />

                <div id="contact_me">
                  <a href="https://wa.me/+963980734524" target="blank">
                    <i className="bx bxl-whatsapp fa-whatsapp"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/deaa.naser.52/"
                    target="blank">
                    <i class="bx bxl-facebook fa-facebook"></i>
                  </a>

                  <a href="https://t.me/Deaa0000" target="blank">
                    {/* <i className="fa-brands fa-telegram"></i> */}
                    <i class="bx bxl-telegram fa-telegram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/deaa-naser-9b622b336/"
                    target="blank">
                    {/* <i className="fa-brands fa-linkedin"></i> */}
                    <i class="bx bxl-linkedin-square fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="section2">
            <div id="explain_me">
              <h1 className="line1 colored_text">
                <span className="hello_word"> {job1} </span>
                {job2} <br />
                <span className="part2_of_line1"> {job3}</span>
              </h1>

              {/* <i className="fa-brands fa-python " id="python_icon"></i> */}
              <i class="bx bxl-python" id="python_icon"></i>
            </div>

            <div id="counters_container">
              <div className="single_counter_container">
                <div className="single_counter_part1 colored_text">
                  +
                  <CountUp start={1} end={8} />
                </div>
                <div className="single_counter_part2">
                  deployed web projects
                </div>
              </div>

              <div className="single_counter_container">
                <div className="single_counter_part1 colored_text">
                  +
                  <CountUp start={1} end={2} />
                </div>
                <div className="single_counter_part2">years of experience</div>
              </div>

              <div className="single_counter_container">
                <div className="single_counter_part1 colored_text ">
                  +
                  <CountUp start={1} end={30} />
                </div>
                <div className="single_counter_part2">SQL problems solved</div>
              </div>

              <div className="single_counter_container">
                <div className="single_counter_part1 colored_text">
                  +
                  <CountUp start={1} end={2} />
                </div>
                <div className="single_counter_part2">
                  Data Analysis projects
                </div>
              </div>

              <div className="single_counter_container">
                <div className="single_counter_part1 colored_text">
                  +
                  <CountUp start={1} end={1400} />
                </div>
                <div className="single_counter_part2">problems solved</div>
              </div>
            </div>

            <div id="my_experience">
              {/* <i className="fa-brands fa-react" id="react_icon"></i> */}
              <i class="bx bxl-react" id="react_icon"></i>

              <h2 id="my_experience_title">Experience </h2>

              <div id="my_experience_body">
                <Experience name="Front-end" text={exp} />
                <Experience name="React.js" text={exp2} />
                <Experience name="Django" text={exp3} />
                <Experience name="Problem Solving" text={exp5} />
                <Experience name="Data Analysis" text={exp4} />
              </div>

              <i className="bx bxl-typescript typescript"></i>
            </div>
          </div>
          <AchievementsCourses />
        </div>
      </div>
    </>
  );
}

function Skill({ text, percentage }) {
  return (
    <>
      <div className="skill_container">
        <div className="skill_text_container">
          <div className="skill_text"> {text} </div>
          <div className="skill_percentage"> {percentage} </div>
        </div>

        <div className="skill_bar_container">
          <div className="empty_bar">
            <div className="full_bar" style={{ width: percentage }}></div>
          </div>
        </div>
      </div>
    </>
  );
}

function Experience({ name = "", text = "" }) {
  return (
    <>
      <div className="experience_root">
        <h2 className="experience_title">{name}</h2>
        <p className="experience_text">{text} </p>
      </div>
    </>
  );
}

function AchievementsCourses() {
  return (
    <div id="achievements_and_courses_container">
      {/* <i class="fa-brands fa-github github_icon"></i> */}
      <i class="bx bxl-github github_icon"></i>
      <h2 id="achievements_and_courses_title">Achievements & Courses</h2>
      <div id="scpc_course">
        <h2
          id="scpc_course_title"
          className="single_achievement_title colored_text">
          Syrian Collegiate Programming Contest (SCPC) &nbsp;
          <img src={require("./scpc.png")} id="scpc_image" />
        </h2>
        <div id="scpc_course_body" className="single_achievement_body">
          <div>
            I have certificates of participation as a contestant in the years
            2022, 2023 and 2024 <br />
            I was training mainly on the Codeforces platform. <br />
            <li>
              {" "}
              Codeforces account : &nbsp;&nbsp;
              <a
                href="https://codeforces.com/profile/Deaa"
                className="link"
                target="blank">
                Deaa
              </a>
            </li>
            <li>
              {" "}
              Leetcode account : &nbsp;&nbsp;
              <a
                href="https://leetcode.com/u/Deaa1"
                target="blank"
                className="link">
                Deaa1
              </a>
            </li>
            <div>
              <h4> Certificates of participation in pdf format:</h4>

              <li>
                <a
                  href={require("./scpc/2023-ICPC Al-baath and Hama UC-Deaa Naser-PLACE.pdf")}
                  className="link"
                  download="2023-ICPC Al-baath and Hama UC-Deaa Naser-PLACE">
                  2023-ICPC Al-baath and Hama UC-Deaa Naser-PLACE
                </a>{" "}
              </li>
              <li>
                <a
                  href={require("./scpc/2023-ICPC Syrian CPC-Deaa Naser-PLACE.pdf")}
                  className="link"
                  download="2023-ICPC Syrian CPC-Deaa Naser-PLACE">
                  2023-ICPC Syrian CPC-Deaa Naser-PLACE
                </a>
              </li>
              <li>
                <a
                  href={require("./scpc/2024-ICPCAlbaathandHamaUC-Deaa Naser-PLACE.pdf")}
                  className="link"
                  download="2024-ICPCAlbaathandHamaUC-Deaa Naser-PLACE">
                  2024-ICPCAlbaathandHamaUC-Deaa Naser-PLACE
                </a>
              </li>
              <li>
                <a
                  href={require("./scpc/2025-ICPCAlbaathandHamaUC-Deaa-PLACE.pdf")}
                  className="link"
                  download="2025-ICPCAlbaathandHamaUC-Deaa-PLACE">
                  2025-ICPCAlbaathandHamaUC-Deaa-PLACE
                </a>
              </li>
              <li>
                <a
                  href={require("./scpc/2025-ICPC Syrian CPC-Deaa-PLACE.pdf")}
                  className="link"
                  download="2025-ICPC Syrian CPC-Deaa-PLACE">
                  2025-ICPC Syrian CPC-Deaa-PLACE
                </a>
              </li>
            </div>
          </div>

          <div className="single_achievement_body_image_section">
            <div className="row1">
              <div className="big_image f"></div>
              <div className="small_image f"></div>
            </div>

            <div className="row2">
              <div className="small_image s"></div>
              <div className="big_image s"></div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end of a single course  */}
      <div id="data_analysis_course">
        <h2
          id="data_analysis_course_title"
          className="single_achievement_title colored_text">
          Data Analytics
        </h2>
        <div id="data_analysis_course_body" className="single_achievement_body">
          <p>
            I have experience in the field of data analysis and dealing with
            several tools. <br />
            I enrolled in a course on the Coursera platform in data analysis,
            where I <br /> learned several skills and tools for data analysis,
            such as Sql, Tableau <br /> and Google Sheets.
            <li>
              <a
                href={require("./GoogleDataAnalyticsCertificate_Badge20231022-29-l8lret.pdf")}
                className="link"
                download="Google Data Analytics Certificate">
                Google Data Analytics Certificate.pdf
              </a>
            </li>{" "}
            <li>
              Leetcode account : &nbsp;
              <a
                href="https://leetcode.com/u/Deaa1"
                target="blank"
                className="link">
                Deaa1
              </a>
            </li>
            <li>
              <a
                href="https://public.tableau.com/app/profile/deaa.naser/viz/Book1_16978608027080/MyAnalysis"
                className="link">
                data visualization project number 1
              </a>
            </li>
            <li>
              <a
                href=" https://public.tableau.com/app/profile/deaa.naser/viz/Book_16979156430920/Dashboard1"
                className="link">
                data visualization project number 2
              </a>
            </li>
          </p>
          {/* Google Data Analytics Certificate.pdf */}

          <div className="single_achievement_body_image_section">
            <div className="row1">
              <div className="big_image f"></div>
              <div className="small_image f"></div>
            </div>

            <div className="row2">
              <div className="small_image s"></div>
              <div className="big_image s"></div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end of a single course  */}
      <div id="web_programming_course">
        <h2
          id="data_analysis_course_title"
          className="single_achievement_title colored_text">
          Web Programming &nbsp;
        </h2>

        <div
          id="web_programming_course_body"
          className="single_achievement_body">
          <p>
            I have 2 years of experience in web development using React library
            and Django framework, I have deployed 8 web projects online :
          </p>

          <ol id="web_project_list">
            <li className="wheretogo">
              <h3 className="web_project_link">
                <a
                  href="https://wheretogofrontend.vercel.app/"
                  className="link"
                  target="blank">
                  {" "}
                  WhereToGo
                </a>
              </h3>

              <div className="techniques_used">
                <span>HTML</span>
                <span>CSS</span>
                <span> JavaScript</span>
                <span> React.js</span>
                <span> Django</span>
                <span> Rest Framework</span>
                <span> JWT </span>
              </div>
              <div className="web_list_project_body">
                <p>
                  A website for reviewing and booking tourist trips, hotels and
                  means <br />
                  of transportation,where the user can create an account, log
                  in,
                  <br />
                  modify his personal data and book trips (written in English)
                </p>
                <ImagesGallery folder="wheretogo" />
              </div>
            </li>

            <li>
              <h3 className="web_project_link">
                <a
                  href="https://new-svi.vercel.app/"
                  className="link"
                  target="blank">
                  SVI (Syrian Virtual Institution )
                </a>
              </h3>

              <div className="techniques_used">
                <span> React.js</span>
                <span> Redux </span>
                <span> Tanstack Query (ReactQuery) </span>
                <span>HTML</span>
                <span>CSS</span>
                <span> JavaScript</span>
                <span> Quill.js</span>
                <span> math-live</span>
                <span> Latex </span>
                <span> MathJax </span>
                <span> material-UI</span>
                <span> Django</span>
                <span> Rest Framework</span>
                <span> JWT </span>
              </div>

              <div className="web_list_project_body">
                <p>
                  An educational platform for teaching high school students in
                  Syria Where the student can take an exam or read a note, and
                  the site has a <br />
                  reach text editor that allows teachers to write questions of
                  all kinds, <br />
                  as it supports various mathematical formulas (written in
                  Arabic)
                </p>
                <ImagesGallery folder="SVI" />
              </div>
            </li>

            <i className="bx bxl-javascript javascript"></i>
            <li>
              <h3 className="web_project_link">
                <a
                  href="https://svm-cyan.vercel.app/"
                  className="link"
                  target="blank">
                  SVM ( Syrian Virtual Market )
                </a>
              </h3>

              <div className="techniques_used">
                <span>HTML</span>
                <span>CSS</span>
                <span> JavaScript</span>
                <span> React.js</span>
                <span> Context API</span>
                <span> material-UI</span>
                <span> Django</span>
                <span> Rest Framework</span>
                <span> JWT </span>
              </div>

              <div className="web_list_project_body">
                <p>
                  A virtual marketing site that allows merchants to publish and
                  display <br /> their products for customers to see and
                  communicate with <br /> merchants in the event of a purchase
                  (written in Arabic)
                </p>
                <ImagesGallery folder="SVM" />
              </div>
            </li>
                        <li>
              <h3>
                <a
                  href="https://kanban-one-chi.vercel.app/"
                  className="link"
                  target="blank">
                  Kanban
                </a>
              </h3>

              <div className="techniques_used">
                <span>HTML</span>
                <span>CSS</span>
                <span> Typescript</span>
                <span> React.js</span>
                <span> Redux </span>
                <span> tailwind </span>
                <span> vite </span>
                <span> shadcn / ui </span>
                <span> lucide react </span>
                <span> python </span>
                <span> django </span>
                <span> rest framework </span>
                <span> mysql </span>

              </div>

              <div className="web_list_project_body">
                <p>
                  Kanban: Senior Task Manager for Modern Productivity <br />
                  <strong>-</strong> instant real-time updates <br />
                  <strong>-</strong> smart dark/light mode
                </p>

                <ImagesGallery folder="kanban" />
              </div>
            </li>

            <li>
              <h3 className="web_project_link">
                <a
                  href="https://rich-text-editor-taupe.vercel.app/"
                  className="link"
                  target="blank">
                  Teacher Editor
                </a>
              </h3>

              <div className="techniques_used">
                <span>HTML</span>
                <span>CSS</span>
                <span> JavaScript</span>
                <span> React.js</span>
                <span> Quill.js</span>
                <span> math-live</span>
                <span> Latex </span>
                <span> MathJax </span>
                <span> jsPDF</span>
                <span> html2canvas </span>
              </div>

              <div className="web_list_project_body">
                <p>
                  A platform that gives a way to add exam or note , it has a
                  rich text editor (quill.js) <br />
                  that supports multiple math formulas using MathJax and Latex{" "}
                  <br />
                  so that a user can easily insert math equation , after writing
                  the textual content <br />
                  the user can download the content in form of Exam or Note as
                  PDF file <br />
                </p>

                <ImagesGallery folder="teacherEditor" />
              </div>
            </li>
            <i className="bx bxl-tailwind-css tailwind_icon"></i>
            <li>
              <h3>
                <a
                  href="https://redux-mini-store.vercel.app/"
                  className="link"
                  target="blank">
                  ReduxStore
                </a>
              </h3>

              <div className="techniques_used">
                <span>HTML</span>
                <span>CSS</span>
                <span> JavaScript</span>
                <span> React.js</span>
                <span> Redux</span>
                <span> Redux toolkit</span>
                <span> axios </span>
                <span> React Router </span>
                <span> vite </span>
              </div>

              <div className="web_list_project_body">
                <p>
                  Designed and developed a simple web store application
                  utilizing Redux and Redux Toolkit for efficient state
                  management. Implemented features such as product listing and
                  shopping cart functionality, ensuring a seamless shopping
                  experience. Leveraged best practices for asynchronous data
                  handling and state updates, resulting in a responsive and
                  user-friendly interface. This project highlights my skills in
                  building scalable web applications and managing complex state
                  interactions.
                </p>

                <ImagesGallery folder="ReduxStore" />
              </div>
            </li>

            <li>
              <h3>
                <a
                  href="https://redux-blog-app-rho.vercel.app/"
                  className="link"
                  target="blank">
                  Redux blog app
                </a>
              </h3>

              <div className="techniques_used">
                <span>HTML</span>
                <span>CSS</span>
                <span> JavaScript</span>
                <span> React.js</span>
                <span> Redux</span>
                <span> Redux toolkit</span>
                <span> axios </span>
                <span> React Router </span>
                <span> vite </span>
              </div>

              <div className="web_list_project_body">
                <p>
                  Developed a simple blog application that allows users to list,
                  create, edit, and delete posts. Utilized React for the
                  frontend and implemented Redux for state management, enabling
                  efficient handling of user interactions and data flow. This
                  project showcases my ability to build dynamic web applications
                  and manage state effectively while providing a smooth user
                  experience.
                </p>

                <ImagesGallery folder="ReduxBlogApp" />
              </div>
            </li>

            <li>
              <h3>
                <a
                  href="https://tailwind-css-project-flame.vercel.app/"
                  className="link"
                  target="blank">
                  tailwind-css-project
                </a>
              </h3>

              <div className="techniques_used">
                <span>HTML</span>
                <span>CSS</span>
                <span> Typescript</span>
                <span> React.js</span>
                <span> tailwind </span>
                <span> vite </span>
              </div>

              <div className="web_list_project_body">
                <p>
                  Developed a simple web responsive page that support dark/light
                  mode using the latest features of tailwind v4
                </p>

                <ImagesGallery folder="tailwind-css-project" />
              </div>
            </li>

            <li>
              <h3>
                <a
                  href="https://weather-app-8yo1.vercel.app/"
                  className="link"
                  target="blank">
                  Klimate
                </a>
              </h3>

              <div className="techniques_used">
                <span>HTML</span>
                <span>CSS</span>
                <span> Typescript</span>
                <span> React.js</span>
                <span> Redux </span>
                <span> tailwind </span>
                <span> vite </span>
                <span> shadcn / ui </span>
                <span> lucide react </span>
              </div>

              <div className="web_list_project_body">
                <p>
                  I developed a dynamic and responsive web application that
                  provides real-time weather updates for the user's current
                  location, as well as the ability to check the weather
                  conditions for any city around the globe. This project
                  showcases my proficiency in modern web development
                  technologies and my ability to create user-friendly
                  interfaces , it also supports toggling between dark or light mode
                </p>

                <ImagesGallery folder="klimate" />
              </div>
            </li>
          </ol>
        </div>
      </div>
      {/* end of a single course  */}
      <div id="git_course">
        <h2 id="git_course" className="single_achievement_title colored_text">
          {" "}
          Git Version Control System
        </h2>
        <p>
          I have mid-level experience in the git system, where I <br />
          can use a good number of commands to clone/modify/upload a project
        </p>
        <li>
          <a href="https://github.com/Deaa7" className="link" target="blank">
            {" "}
            my github account{" "}
          </a>
        </li>
        <li>
          <a
            href="https://gitlab.com/deaanaser209"
            className="link"
            target="blank">
            {" "}
            my gitlab account
          </a>
        </li>
      </div>
    </div>
  );
}

function ImagesGallery({ folder = "" }) {
  let [index, set_index] = useState(1);

  let url = "";

  let images = [];
  if (folder == "wheretogo")
  {
    for (let i = 1; i <= 7; i++)
    {
      images.push(<div>
        <img
          src={require("./" + folder + "/" + i.toString() + ".jpg")}
          alt="" />
      </div>);
    }
  }

    if (folder == "SVI")
  {
    for (let i = 1; i <= 4; i++)
    {
      images.push(<div>
        <img
          src={require("./" + folder + "/" + i.toString() + ".png")}
          alt="" />
      </div>);
    }
  } 

      if (folder == "SVM")
  {
    for (let i = 1; i <= 5; i++)
    {
      images.push(<div>
        <img
          src={require("./" + folder + "/" + i.toString() + ".png")}
          alt="" />
      </div>);
    }
  }

        if (folder == "teacherEditor")
  {
    for (let i = 1; i <= 4; i++)
    {
      images.push(<div>
        <img
          src={require("./" + folder + "/" + i.toString() + ".png")}
          alt="" />
      </div>);
    }
  }

   if (folder == "ReduxStore")
  {
    for (let i = 1; i <= 3; i++)
    {
      images.push(<div>
        <img
          src={require("./" + folder + "/" + i.toString() + ".png")}
          alt="" />
      </div>);
    }
  }
     if (folder == "ReduxBlogApp")
  {
    for (let i = 1; i <= 5; i++)
    {
      images.push(<div>
        <img
          src={require("./" + folder + "/" + i.toString() + ".png")}
          alt="" />
      </div>);
    }
  }


  if (folder == "tailwind-css-project")
  {
    for (let i = 1; i <= 2; i++)
    {
      images.push(<div>
        <img
          src={require("./" + folder + "/" + i.toString() + ".png")}
          alt="" />
      </div>);
    }
  }

    if (folder == "klimate")
  {
    for (let i = 1; i <=4; i++)
    {
      images.push(<div>
        <img
          src={require("./" + folder + "/" + i.toString() + ".png")}
          alt="" />
      </div>);
    }
  }
      if (folder == "kanban")
  {
    for (let i = 1; i <= 4; i++)
    {
      images.push(<div>
        <img
          src={require("./" + folder + "/" + i.toString() + ".png")}
          alt="" />
      </div>);
    }
  }
 
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  console.log(images);
  return (
    <>
      <Slider className="slider"  {...settings}>
     {images}
      </Slider>

   
    </>
  );
}

 
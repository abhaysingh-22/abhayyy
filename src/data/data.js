import project1 from "../../public/images/projects/ait.png";
import project2 from "../../public/images/projects/cidc.png";
import project3 from "../../public/images/projects/ecotravel.png";
import project4 from "../../public/images/projects/meta.png";
import project5 from "../../public/images/projects/nexabots.png";
import project6 from "../../public/images/projects/profolio.png";
import project7 from "../../public/images/projects/ragent.png";
import project8 from "../../public/images/projects/sendbox.png";
import project9 from "../../public/images/projects/snapexx.png";
import project10 from "../../public/images/projects/sniffi.png";
import project11 from "../../public/images/projects/todo.png";
import project12 from "../../public/images/projects/tripnow.png";
import project13 from "../../public/images/projects/SIH.png";
import project14 from "../../public/images/projects/snapexxApp.png";
import project15 from "../../public/images/projects/hackathon.jpg";

export const books = [
  {
    id: 1,
    author: "MERN Stack",
    title: "Army Institute of Technology",
    image: project1,
    description:
      "This is the official website of AIT, Pune, where I served as a full stack developer, contributing to building scalable system, improving user experience, collaborating with team & with 2000+ active users.",
    content: `<p>
Building the Official AIT Pune Website: From Nervous Start to Production System
</p>
<br>
<p>
The journey of building the official website for Army Institute of Technology (AIT), Pune began in my second year, and honestly, it felt like a mix of luck and responsibility. Getting the opportunity to work on something that would be used by 2000+ students and faculty wasn’t just another MERN project—it was a real production system that needed to be scalable, secure, and reliable.
</p>
<br>
<p>
Our team consisted of a few third-year members and only two second-year students, including me. When I joined, the project was barely started—only the homepage UI existed. Everything else had to be built from scratch. We began by analyzing the existing website, identifying all required pages, and rebuilding them one by one. Initially, I worked primarily on the frontend, focusing on designing and improving the UI of each page while ensuring responsiveness and performance.
</p>
<br>

<p>
Once most of the UI was completed, I transitioned into full-stack development based on project needs. This is where things became significantly more challenging. We had to build multiple panels including admin, master admin, department panels, library, IQAC, and more—each with dynamic sections and strict access control. Every request had to go through an approval workflow before being reflected on the main website, which meant implementing features like add, edit, delete, archive, and approval pipelines.
</p>
<br>

<p>
The real complexity came with authentication systems. We were not allowed to use any third-party services, which made tasks like signup, forgot password, and multi-factor authentication (MFA) much harder. Designing the signup flow was particularly tricky—users could register with any email, but access had to be restricted based on department selection, along with admin approval. For MFA, I initially used Redis to temporarily store verification codes, but had to rework the entire logic using MongoDB when i got to know that third-party tools were restricted.
</p>
<br>

<p>
Implementing the forgot password system was another challenge. After extensive research, I discovered how to use Google App Passwords with SMTP to securely send reset links. It took multiple days of trial and error, but eventually, the system worked reliably.
</p>
<br>

<p>
Beyond features, there were countless unseen challenges—debugging issues, optimizing performance, handling responsiveness, meeting deadlines, and dealing with GitHub merge conflicts (which were far more complex than I initially thought). These weren’t just technical problems, but learning experiences in collaboration, patience, and problem-solving.
</p>
<br>

<p>
After nearly three months of continuous work, the project was successfully developed. More than just the final product, this experience gave me real exposure to building large-scale systems, working in a team, and handling production-level challenges. It wasn’t just about writing code—it was about building something meaningful that would actually be used every day, and leaving a lasting impact associated with our college’s name.
    </p>`,
  },
  {
    id: 2,
    author: "Supabase, NextJs",
    title: "SendBox",
    image: project8,
    description:
      "SendBox is an automation system used by AIT Pune officials to send automated messages and wishes to students, staff, and faculty. Tested on 1700+ users, it ensures seamless and efficient communication at scale. ",
    content: `<p>
       
   Building SendBox: Automating Communication at Scale
   </p>
   <br>

   <p>
SendBox started as a real institutional requirement, not just an idea. The goal was simple but impactful—to automate sending wishes and messages to students, faculty, and alumni of Army Institute of Technology via WhatsApp. Instead of manual effort, the system needed to handle communication automatically, reliably, and at scale.
</p>
<br>

<p>
This project was built by a team of just two people—me and my batchmate—which meant we were responsible for everything from architecture to deployment. We chose Next.js for its clean routing, smooth user experience, and simple deployment workflow. For the backend and database, we used Supabase instead of MongoDB. The reason was straightforward: building a full backend and managing complex database queries from scratch would have been unnecessary for this use case. Supabase allowed us to move faster and focus on the actual problem rather than reinventing infrastructure.
</p>
<br>

<p>
For automation, we integrated scheduling using cron jobs to trigger message workflows at specific times. To handle WhatsApp messaging, we used WaSendAPI instead of official Meta WhatsApp API—and this decision came from experience, not preference.
</p>
<br>

<p>
On paper, integrating Meta’s API seems simple: create a business account, verify it, submit documents, apply for API access, and get templates approved. In reality, the process is slow, restrictive, and filled with friction. During the process, I even had one of my numbers permanently restricted, which made it clear that this path was not practical for small teams or individual developers.
</p>
<br>

<p>
The key takeaway was simple: if you’re building at a small or mid scale, avoid getting stuck in approval loops. Focus on building and shipping. While WaSendAPI comes with a higher cost, it allowed us to move fast and deliver a working system. For enterprise-scale systems, going through Meta directly might make sense—but for us, speed and execution mattered more.
</p>
<br>

<p>
Today, SendBox is actively used within the institution to automate communication and deliver messages seamlessly. More than the product itself, this project taught me how to make practical engineering decisions—balancing cost, scalability, and speed while working under real-world constraints.
       </p>`,
  },
  {
    id: 3,
    author: "NextJs",
    title: "Portfolio",
    image: project6,
    description:
      "A personal portfolio showcasing my work in full-stack development, AI-driven applications, and real-world systems built with modern technologies.",
    content: `<p>
    Building My Portfolio: More Than Just a Website
   </p>

   <p>
If you’re reading this, you’re already on my portfolio—and that’s exactly the point of building it.
</p>
   <br>

<p>
Unlike many developers who create their portfolio early in their journey, I built mine a bit later. Not because I couldn’t, but because I didn’t fully understand its importance at the beginning. Over time, I realized something important: a resume is limited—you have to fit everything into one page and tailor it for every opportunity. But a portfolio is different. It gives you the space to showcase everything you’ve built, learned, and experienced without constraints.
</p>
   <br>

<p>
This portfolio is built using Next.js along with modern tools and animations like GSAP, focusing on performance and clean design. I intentionally kept the UI simple—no unnecessary gradients or over-the-top animations—because I believe clarity and usability matter more than visual noise. The goal was to let the work speak for itself.
</p>
   <br>

<p>
Inside, you’ll find sections like Home, About, Projects, Key Highlights, and Blogs. Each section is designed to give a complete picture of my journey—from the systems I’ve built and the problems I’ve solved to the experiences that shaped my approach to development.
</p>
   <br>

   <p>
More than just a collection of projects, this portfolio represents how I think and work. It reflects my focus on building real-world systems, experimenting with new ideas, and continuously improving my skills. From working on institutional platforms to developing AI-driven applications, every project here has been part of my learning curve.
</p>
   <br>

<p>
I’m currently a second-year engineering student at Army Institute of Technology, Pune (Batch of 2028), actively building, learning, and contributing to real-world projects. I enjoy exploring new technologies, implementing them in practical scenarios, and pushing my limits with every project I take on.
</p>
   <br>

<p>
This portfolio is not final—it will keep evolving as I grow. And that’s exactly how I see development as well: a continuous process of learning, building, and improving.
     </p>`,
  },
  {
    id: 4,
    author: "Vertex AI, Supabase, ReactJs",
    title: "Snapexx",
    image: project9,
    description:
      "Snapexx is an AI-powered platform for generating images & videos from prompts & local images, featuring advanced editing, professional content creation, & image comparison, used by 25+ users.",
    content: `<p>
    Building SnapExx: From Idea to Real-World AI Product
   </p>

   <p>
The journey of building SnapExx started from a very simple moment—scrolling through the Play Store. I came across apps like Remini, which are widely used for image enhancement. But when I went through the user reviews, I noticed recurring complaints: poor payment experience, excessive ads, performance issues, and lack of reliability.
</p>
   <br>

<p>
That’s when I decided to build something better—not just another AI tool, but a product that actually solves these real problems.
</p>
   <br>

<p>
I started exploring how such systems work and what technologies would be required. After days of research, I decided to build SnapExx using React Native (Expo) for mobile and extend it to the web for faster adoption and feedback. The core idea was to create a platform where users can generate images and videos using AI, enhance photos, create professional content, and experiment creatively—all in one place.
</p>
   <br>

<p>
Initially, I planned to launch the mobile application directly, but I didn’t fully understand the deployment and distribution process. A batchmate suggested a smarter approach: start with a web version, gather user feedback, and then build the mobile app based on real demand. That advice changed everything.
</p>
   <br>

<p>
I built the web version using React (Vite), Supabase and vertex AI, focusing on speed and simplicity. Instead of over-engineering the backend, I used Supabase to handle authentication, database, and storage efficiently. This allowed me to focus more on features and user experience rather than infrastructure.
</p>
   <br>

<p>
After launching, I got a strong response—25+ active users started using the platform, generating images and videos regularly. To encourage adoption, I initially provided unlimited credits, which helped users explore the full potential of the product.
</p>
   <br>

   <p>
But building SnapExx wasn’t straightforward. One of the biggest challenges was handling long-running AI tasks, especially video generation using Vertex AI. These processes can take several minutes, while browsers typically timeout much earlier. My initial implementation failed—requests would drop, and users were left with broken experiences.
</p>
   <br>

   <p>
To solve this, I redesigned the system using asynchronous workflows and polling. Instead of waiting for a response, the backend tracks job status and allows users to retrieve results later. This required rethinking both backend logic and frontend behavior—handling loading states, retries, and ensuring tasks continue even if users leave the page.
</p>
   <br>

   <p>
Authentication was another challenge. Implementing secure login with Supabase and Google OAuth required careful handling of tokens and session flows. Additionally, I implemented Row Level Security (RLS) to ensure users could only access their own data, making the system more secure at the database level.
</p>
   <br>

   <p>
Storage decisions also played a key role. Images were stored using Supabase Storage for simplicity, while videos were handled through Google Cloud Storage for better scalability. Managing multiple storage systems added complexity but significantly improved performance and reliability.
</p>
   <br>

   <p>
As the application grew, performance optimization became critical. I used Vite for faster builds, optimized API calls, and implemented efficient state management to avoid redundant requests and improve responsiveness.
</p>
   <br>

   <p>
SnapExx taught me that building a real product is not just about features—it’s about making the system reliable, scalable, and user-friendly. Every decision, from architecture to deployment, has long-term consequences.
</p>
   <br>

   <p>
Today, SnapExx is actively used by real users to create and experiment with AI-generated content. More importantly, it represents a shift in my approach—from building projects for demonstration to building products that people actually use.
</p>
   <br>

   <p>
This journey showed me that real learning doesn’t come from tutorials—it comes from solving real problems, making mistakes, and continuously improving the system.
 </p>`,
  },
  {
    id: 5,
    author: "NextJs",
    title: "CIDC",
    image: project2,
    description:
      "Developed the official IT department club website for AIT, Pune, actively used by club members and faculty with 30+ regular interactions.",
    content: `<p>
    Building the CIDC Website: Solving a Real Problem Within the Club
    </p>
   <br>

<p>
CIDC (College Innovation and Development Club) is the official technical club of Army Institute of Technology, Pune. I joined the club in my first year as an FE member, and in my second year, I was promoted to Joint Secretary and selected as the Dev Lead. With this role came responsibility—not just to contribute, but to actually improve how the club functions.
</p>
<br>

<p>
One major issue I noticed was that all club information was maintained on paper. Details like team members, leadership roles, ongoing projects, and past work were not easily accessible. Anyone who wanted information—whether a student or faculty member—had to rely on manual records or word of mouth. This was clearly inefficient and not scalable.
</p>
   <br>

<p>
That’s when I decided to build the official CIDC website.
</p>
   <br>

<p>
The goal was simple: create a centralized platform where anyone could access all relevant information about the club—from team structure to projects and updates—anytime, from anywhere. Instead of solving a hypothetical problem, this was about fixing something we were actually facing.
</p>
   <br>

   <p>
I started with research, exploring different UI/UX styles and design approaches. That’s when I came across retro-themed interfaces. The style stood out to me—it was unique, visually engaging, and different from typical modern designs. I decided to go with a retro theme to give the website a distinct identity.
</p>
   <br>

   <p>
Before writing any code, I created rough sketches to plan the layout and structure. Once the design direction was clear, I started building the website using Next.js, focusing on performance, scalability, and clean routing.
</p>
   <br>

   <p>
The website includes all essential sections—team members, leadership roles, project showcases, and updates—making it a complete information hub. I also ensured the site was fully responsive and optimized for a smooth user experience across devices.
</p>
   <br>

   <p>
The biggest challenge I faced was in the design phase. Translating a retro concept into a functional, user-friendly interface wasn’t straightforward. Balancing aesthetics with usability required multiple iterations and constant refinement.
</p>
   <br>

   <p>
After deployment, the impact was immediate. The website now receives 40+ active users, and accessing club information has become seamless. Students and faculty can easily explore the club, understand its structure, and stay updated with ongoing work.
</p>
   <br>

   <p>
One of the most rewarding moments was receiving positive feedback from both users and faculty, along with a letter of appreciation for building the platform. It validated that the solution was not just functional, but genuinely useful.
</p>
   <br>

   <p>
This project taught me an important lesson: impactful projects don’t always come from big ideas—they come from solving real problems around you. As a Dev Lead, this wasn’t just about building a website—it was about creating something meaningful for the community I was part of.
</p>
   <br>

   <p>
Overall CIDC says: "Built what matters !!"
   </p>`,
  },
  {
    id: 6,
    author: "ReactJs",
    title: "DayStacks",
    image: project11,
    description:
      "Developed a smart productivity app with chatbot-driven task management, calendar integration, and in-app YouTube embedding for distraction-free learning, with 40+ active users.",
    content: `<p>
        Building Daystacks: From a Simple Todo App to a Focused Productivity System
        </p>
   <br>

   <p>
Daystacks didn’t start as something ambitious. It began as a simple goal—to build a project after learning React. Like most developers, I initially thought of creating a basic todo application, something common and easy to implement.
</p>
   <br>

   <p>
But while building it, I realized something important: most todo apps are limited. They help you list tasks, but they don’t actually help you stay focused or execute them efficiently. That’s where the idea evolved.
</p>
   <br>

   <p>
Instead of just building another checklist app, I decided to create something more practical—a workspace where planning, learning, and execution could happen in one place.
</p>
   <br>

   <p>
The first major addition was YouTube and web integration. One of the biggest distractions while studying is constantly switching tabs between tasks and learning resources. So I built a system where users can embed YouTube videos or useful links directly into the app. The logic is simple but powerful: users input a link, the system validates and converts it into an embeddable format, and it becomes a reusable in-app learning resource. This eliminates unnecessary context switching and helps maintain focus.
</p>
   <br>

   <p>
The second and most defining feature is Ethos—an AI-powered chatbot that goes beyond just answering questions. Unlike typical chatbots, Ethos is action-oriented. It doesn’t just respond; it interacts with the application itself. It can create tasks, update them, mark them complete, or delete them—all through structured commands. This transforms the app from a passive tool into an active assistant.
</p>
   <br>

   <p>
From a technical perspective, the architecture is clean and practical. The application is built using React, Vite, TailwindCSS, and React Context for global state management. All critical data—tasks, user inputs, and layout states—are persisted using localStorage, ensuring that user progress is maintained even after reloads.
</p>
   <br>

   <p>
Routing is designed to keep the experience smooth and modular. The Today view, calendar scheduling, and dynamic web/video viewer are all separated into independent routes while still maintaining a seamless single-page application feel.
</p>
   <br>

   <p>
Another important aspect was performance and usability. I ensured minimal re-renders, efficient state updates, and a clean UI that avoids unnecessary complexity. Features like dark mode, calendar planning, and quick navigation further enhance the user experience.
</p>
   <br>

   <p>
The result is not just a todo app—it’s a focused productivity system. Currently, 40+ active users, including my batchmates, use it regularly, especially for reducing distractions while studying.
</p>
   <br>

   <p>
This project taught me a key lesson: good products don’t come from building something new—they come from improving something that already exists but isn’t working well enough.
     </p>`,
  },
  {
    id: 7,
    author: "MERN Stack",
    title: "TripNow",
    image: project12,
    description:
      "TripNow is a ride-booking application inspired by real world applications that enables users to book rides, manage trips, and track journeys through a seamless and user-friendly interface. ",
    content: `<p>
       Building TripNow: From Learning MERN to Understanding Real Systems
</p>
   <br>

   <p>
TripNow was not started to solve a real-world problem. It began as a learning-driven project. After completing my core learning in the MERN stack, I wanted to go beyond tutorials and actually understand how real systems work—how frontend and backend connect, how APIs are structured, and how scalable applications are built.
</p>
   <br>

   <p>
This project became my playground to explore architecture, system design, and real-world implementation challenges.
</p>
   <br>

   <p>
TripNow is a ride-booking application inspired by real-world platforms. It includes core functionalities like ride booking, driver availability, real-time location tracking, and payment simulation. I integrated Google Maps APIs to handle geolocation, route tracking, and distance calculations, along with Razorpay (dummy integration) to simulate payment workflows.
</p>
   <br>

   <p>
While building, I focused heavily on backend structure and API design. Instead of just making things work, I tried to design scalable APIs and understand how data flows across the system. This was one of the first projects where I consciously thought about architecture, not just features.
</p>
   <br>

   <p>
During development, I also explored adding small but meaningful improvements. One such idea was introducing an online/offline mode for drivers. This is not being implemented but came into my mind that If a driver wants to take a break, they can switch to offline mode and access a section where they can listen to audio content like podcasts or YouTube-based learning. It’s a small feature, but it reflects how even simple systems can be improved with better user experience thinking.
</p>
   <br>

   <p>
The most challenging parts of this project were implementing real-time communication using sockets and deploying the application to production. Working with sockets for the first time was difficult—it required understanding event-based communication and handling real-time updates efficiently. Deployment was another major hurdle. Getting both frontend and backend to work properly in production took multiple days of debugging and configuration.
</p>
   <br>

   <p>
This project took around 62+ days of continuous work—coding, debugging, testing, and improving. It wasn’t just about completing features, but about understanding how systems behave in real scenarios.
</p>
   <br>

   <p>
TripNow taught me one of the most important lessons in development: building something from scratch forces you to understand every layer of the system. It pushes you beyond surface-level knowledge and helps you think like an engineer.
</p>
   <br>

   <p>
Even though it started as a learning project, it ended up becoming one of the most valuable experiences in my journey.
      </p>`,
  },
  {
    id: 8,
    author: "Supabase, ReactJs",
    title: "EcoTravel",
    image: project3,
    description:
      "EcoTravel is a sustainable travel planner that offers voice-based chatbot-assisted journey planning, event discovery, and community-driven discussion, notes for a smarter travel experience.",
    content: `<p>

EcoTravel wasn’t an idea I spent weeks brainstorming. It came from a problem statement assigned during one of my second-year subjects. Out of multiple options, this was the one that genuinely stood out to me—not just as an academic task, but as something with real potential.
</p>
   <br>

   <p>
The concept was simple: build a platform that helps users make more sustainable travel decisions. But as I explored deeper, I realized this wasn’t just another project—it could evolve into something meaningful.
</p>
   <br>

   <p>
This was the “vibe-coded” projects. Instead of over-planning every detail, I focused on building, experimenting, and iterating as I progressed. The goal was to create a functional and engaging system rather than getting stuck in perfect architecture from the start.
</p>
   <br>

   <p>
EcoTravel is a full-stack web application designed to promote sustainable tourism. It brings together multiple features into a single platform—eco-friendly destination discovery, community-driven notes, travel insights, and an AI-powered chatbot (EcoBot) that guides users toward better travel decisions.
</p>
   <br>

   <p>
One of the most interesting parts of this project is EcoBot. It acts as an intelligent assistant that can answer questions about sustainable travel, recommend eco-friendly options, and even interact through voice. Instead of static information, users get a conversational and interactive experience.
</p>
   <br>

   <p>
From a technical perspective, the application is built using modern tools like React, TypeScript, TailwindCSS, and Supabase. The focus was on creating a smooth user experience, fast performance, and a clean interface that doesn’t overwhelm users.
</p>
   <br>

   <p>
The biggest challenge in this project was not just implementation, but direction. Since this wasn’t a strictly defined real-world requirement, I had to decide what features actually matter and what adds value. It required balancing between building something useful and not overcomplicating the system.
</p>
   <br>

   <p>
Another limitation was backend infrastructure. Due to API and service constraints, the application is not fully active at the moment. But this doesn’t reduce its potential—in fact, it highlights how much more can be built on top of it.
</p>
   <br>

   <p>
EcoTravel made me realize that not every impactful project starts with a perfect idea. Sometimes, you discover the potential while building.
</p>
   <br>

   <p>
What started as a college assignment can be turned into a platform that can genuinely evolve into a real product.
  </p>`,
  },
  {
    id: 9,
    author: "LangChain, LangGraph, FastAPI",
    title: "Restaurant Agent",
    image: project7,
    description:
      "Restaurant Agent is an AI-powered system that automates order booking, inventory management, and customer FAQs through an conversational chat interface.",
    content: `<p>

The Restaurant AI Agent project started with a simple observation—everyone was building AI voice agents, but very few were focusing on domain-specific, practical systems. Instead of following the trend, I decided to build something different: an AI agent that could actually help automate real restaurant operations.
</p>
   <br>

   <p>
The goal of this project was to create an intelligent assistant capable of handling order bookings, answering frequently asked questions, and providing real-time stock information. Rather than building a generic chatbot, I wanted to design a system that could perform meaningful actions within a specific domain.
</p>
   <br>

<p>
The frontend of the application is intentionally simple, built using HTML, CSS, and JavaScript to keep the focus on functionality. The backend is powered by FastAPI, combined with LangChain and LangGraph to orchestrate agent workflows and decision-making. This setup allows the agent to select appropriate tools—such as retrieving menu data, checking stock, or responding to queries—based on user input.
</p>
   <br>

   <p>
One of the most unique decisions in this project was using Google Sheets as the database. The idea was to keep the system simple and easily manageable, where even non-technical users could update menu items, stock, and FAQs directly. However, this turned out to be one of the most challenging parts of the project.
</p>
   <br>

   <p>
Integrating the Google Sheets API was far more complex than expected. There was very limited guidance available on google and youtube, and even running the system on localhost required complex and careful configuration of credentials and API access. After several days of research and experimentation, I was finally able to establish a stable connection and get the system working locally.
</p>
   <br>

   <p>
But the real challenge came during deployment. While the frontend (Vercel) and backend (Render) were successfully deployed, the agent stopped functioning correctly. It behaved like a normal chatbot but failed to retrieve orders, stock data, or FAQ responses. The root cause was the Google Sheets API failing in the production environment due to authentication and connection issues.
</p>
   <br>

   <p>
Fixing this required deep debugging of API credentials, environment variables, and access permissions. After multiple iterations and nearly two days of continuous effort, I was finally able to stabilize the connection and make the system fully functional in production.
</p>
   <br>

   <p>
This project taught me an important lesson: building an AI system is not just about integrating models—it’s about making the entire pipeline reliable. From data access to deployment, every component must work seamlessly.
   </p>`,
  },
  {
    id: 11,
    author: "FastAPI, OpenEnv, HuggingFace",
    title: "Customer-Support-Agent",
    image: project4,
    description:
      "An agentic application simulates real-world customer support workflows, evaluating decision accuracy, policy compliance, and multi-step reasoning using constrained tools.",
    content: `<p>
        Building a Customer Support Agent: Surviving Constraints, Not Just Writing Code
</p>
   <br>

   <p>
This project started from a hackathon problem statement—but it quickly turned into one of the most challenging systems I’ve worked on.
</p>
   <br>

   <p>
Unlike typical projects where you have full freedom, this environment came with strict constraints at every level. The goal wasn’t just to build a working system, but to follow a predefined structure exactly—down to file names, routes, environment variables, Docker configuration, and even grading logic.
</p>
   <br>

   <p>
There were two evaluation phases. Phase 1 was relatively straightforward, and I cleared it in my second attempt. But Phase 2 was a completely different challenge. It introduced highly restrictive validation rules where even small deviations would cause failure. For example, the grading system required scores strictly between (0,1)—values like 0.0 or 1.0 were invalid. That level of precision forced me to rethink even the smallest implementation details.
</p>
   <br>

   <p>
It took me 19 submission attempts to successfully pass both phases.
</p>
   <br>

   <p>
The project itself is built around the OpenEnv framework, which simulates real-world customer support workflows. Instead of building a basic chatbot, the system evaluates how an AI agent performs under realistic constraints—handling tickets, following policies, and making multi-step decisions.
</p>
   <br>

   <p>
The agent interacts with a structured environment using a limited set of tools such as sending password resets, requesting logs, replying to customers, issuing refunds, and closing tickets. Each action is evaluated based on correctness, efficiency, and policy compliance. 
</p>
   <br>

   <p>
What makes this system different is its dense reward mechanism. Every action contributes to a score—correct steps are rewarded, while wrong actions, repeated steps, or policy violations lead to penalties or even immediate termination. This forces the agent to not only be correct but also efficient and logically consistent.
</p>
   <br>

   <p>
Technically, the system is built using FastAPI, Docker, and strict validation layers. The environment runs in a controlled setup where every interaction is tracked, validated, and scored. The architecture ensures reproducibility and realistic evaluation of agent behavior.
</p>
   <br>

   <p>
But the real difficulty wasn’t the architecture—it was the constraints.
</p>
   <br>

   <p>
Simple things like environment variable naming, API structure, or Docker configuration could break the entire system if not followed exactly. There was no room for approximation. Every submission required debugging at a granular level, understanding why something failed, and fixing it without breaking other parts.
</p>
   <br>

   <p>
This project taught me something that most tutorials don’t:
eal-world engineering is not about freedom—it’s about working within constraints.
</p>
   <br>

   <p>
After multiple failures, retries, and iterations, finally passing both phases wasn’t just about completing the project—it was about proving that the system works exactly as required.
</p>
   <br>

   <p>
More importantly, it changed how I approach development. I now focus not just on building features, but on correctness, compliance, and reliability—because that’s what real systems demand.
</p>
   <br>

   <p>
This wasn’t just a project. It was a test of patience, precision, and problem-solving under pressure.
   </p>`,
  },
  {
    id: 12,
    author: "ReactJs",
    title: "Sniffi",
    image: project10,
    description:
      "A home veterinary service platform delivering expert pet healthcare at your doorstep, including consultations, vaccinations, checkups, and diagnostics.",
    content: `<p>
        Building Sniffi: My First Real Experience with Collaboration and Failure
</p>
   <br>

   <p>
Sniffi was one of the earliest real projects I worked on, and honestly, it played a major role in shaping how I approach development today.
</p>
   <br>

   <p>
I got this project at the end of my first year through a senior. The idea was to build a home veterinary platform that provides pet healthcare services at users’ doorsteps. At that time, I was still new to development, and backend was something I had no exposure to. So this project was divided—my batchmate and I worked on the frontend, while the backend was handled by our senior.
</p>
   <br>

   <p>
We were given a Figma design and asked to implement it using React.js. Initially, we approached it very naively. Our focus was only on replicating what we saw visually, without thinking about responsiveness or real-world usability. We built the entire UI based on desktop view and felt confident about it.
</p>
   <br>

   <p>
But that confidence didn’t last long.
</p>
   <br>

   <p>
When we submitted the work, it was completely rejected. The feedback was straightforward: the application was not responsive and didn’t match the design expectations properly. At that moment, we realized a harsh truth—building something that “looks right” is not enough. It has to work correctly across devices and follow design standards precisely.
</p>
   <br>

   <p>
What followed was probably the most frustrating yet valuable phase.
</p>
   <br>

   <p>
Since we were also new to GitHub and collaboration workflows, things quickly got messy. We struggled with version control, merge conflicts, and repository management. And hence we ended up deleting the entire repository and starting from scratch.
</p>
   <br>

   <p>
That reset turned out to be the best decision.
</p>
   

   <p>
This time, we approached the project differently. We paid close attention to responsiveness, followed the design strictly, and ensured consistency across all screen sizes. At the same time, we improved our understanding of GitHub—learning how to manage branches, handle pull requests, and resolve merge conflicts properly.
</p>
   <br>

   <p>
The second iteration of the project was completely different. It was cleaner, structured, and aligned with the original design. When we submitted it again, it was accepted without major issues.
</p>
   <br>

   <p>
Sniffi wasn’t just a frontend project for me—it was my introduction to real collaboration, version control, and handling failure. It taught me that mistakes are not setbacks; they are part of the process, especially when you’re building something for the first time.
</p>
   <br>

   <p>
Looking back, this project wasn’t about React or UI—it was about learning how to work in a team, how to recover from failure, and how to build things the right way.
  </p>`,
  },
  {
    id: 13,
    author: "NextJs",
    title: "Nexabots",
    image: project5,
    description:
      "Nexabots is a B2B enterprise IT services platform that showcases infrastructure, cloud, and surveillance solutions, enabling service discovery, lead generation, and client engagement.",
    content: `<p>
        Building NexaBots: From Incomplete Designs to a Production-Ready Frontend
</p>
   <br>

   <p>
NexaBots was one of my first experiences working on something close to a real freelance project. The opportunity came through a senior who had initially taken up the project but couldn’t complete it due to academic commitments. He reached out to us via LinkedIn, and that’s how my batchmate and I got involved.
</p>
   <br>

   <p>
The project itself was a B2B enterprise IT services platform designed to showcase solutions like infrastructure, cloud services, and surveillance systems. The goal was not just to build a website, but to create a professional interface that supports service discovery, builds credibility, and helps generate leads.
</p>
   <br>

   <p>
Unlike most structured projects, this one had an unusual workflow. There was no proper repository setup initially—just a ZIP file shared over Telegram along with a partial Figma design. We set up the project in a proper repository so that both my batchmate and I could collaborate efficiently, organize the codebase, and manage development smoothly.
</p>
   <br>

   <p>
The biggest challenge, however was design ambiguity.
</p>
   <br>

   <p>
We were only given the design for one web page and one mobile view. The rest of the pages had no reference. That meant we had to step beyond implementation and take responsibility for designing the remaining sections ourselves—ensuring consistency with the existing style while maintaining usability and visual quality.
</p>
   <br>

   <p>
Our workflow was also different from typical Git-based collaboration. After completing each part, we would package the code, send it back to the senior, receive feedback, and iterate. This cycle repeated multiple times until the output matched expectations.
</p>
   <br>

   <p>
From a technical perspective, the project was built using Next.js. This was my first deep exposure to the framework, and it significantly influenced my interest in it. I started understanding concepts like routing, component structuring, and performance optimization in a more practical context.
</p>
   <br>

   <p>
We focused heavily on responsiveness and user experience. Since this was meant to represent a professional IT services company, the interface had to be clean, structured, and reliable across devices. Every section—from service listings to client engagement elements—was designed to feel consistent and purposeful.
</p>
   <br>

   <p>
What made this project valuable was not just the final output, but the process. Working with incomplete requirements, handling iterative feedback, and taking design decisions independently pushed me beyond just coding.
</p>
   <br>

   <p>
NexaBots taught me that real-world projects are rarely perfect. You don’t always get complete designs or clear instructions. Sometimes, you have to fill the gaps yourself—and that’s where actual learning happens.
  </p>`,
  },
  {
    id: 14,
    author: "React Native expo",
    title: "Farmer Assistant App",
    image: project13,
    description:
      "An AI-powered mobile app providing real-time agricultural guidance via voice and text chatbot, designed for seamless and accessible farmer support.",
    content: `<p>
      Building My First Mobile App: AI-Based Crop Recommendation System
</p>
   <br>

   <p>
This project was my first step into mobile development using React Native with Expo. It wasn’t just about learning a new framework—it was about building something meaningful for a real-world problem.
</p>
   <br>

   <p>
The idea came from the Smart India Hackathon (SIH) problem statement: AI-Based Crop Recommendation for Farmers. The core issue was clear—farmers often rely on static information or guesswork for crop decisions, pest control, and resource planning. There is a lack of accessible, personalized, and real-time guidance.
</p>
   <br>

   <p>
We wanted to change that.

The solution we built was a mobile application focused on providing AI-driven agricultural support in a simple and accessible way. The system was designed with a strong emphasis on usability, especially for farmers who may not be comfortable with complex interfaces.
</p>
   <br>

   <p>
One of the key features was a voice-first interaction system, where users could directly interact with the application through speech instead of typing. This reduces friction and makes the system more inclusive. Along with this, we integrated features like AI-based crop recommendations, pest and disease detection through images, and real-time weather-based alerts.
</p>
   <br>

   <p>
The application also included a tructured farm calendar, helping farmers plan irrigation, fertilization, and other activities throughout the season. Another important component was the AI mood coach-like system for farming decisions—providing recommendations, reminders, and guidance based on user inputs and environmental conditions.
<br>
We also explored features like:
<br>
* Image-to-advice conversion using OCR and NLP
<br>
* Localized advisories in regional languages
<br>
* Offline accessibility and community-based support
<br>
* Market price insights and government scheme awareness
</p>
   <br>

   <p>
The goal was not just to build an app, but to create a complete digital assistant for farmers.
</p>
   <br>

   <p>
From a technical perspective, this project helped me understand how to build cross-platform applications, manage navigation, handle state, and design mobile-first user experiences. It was my first exposure to structuring a mobile app beyond just UI—thinking in terms of flows, usability, and real users.
</p>
   <br>

   <p>
We worked on this project as a team of two. Although we didn’t qualify for the final round, we were selected in Round 1, where we presented both the idea and a working demo of the application. At that stage, the app was around 60% complete—core UI and features were implemented, but dynamic integrations like APIs and AI models were still in progress.
</p>
   <br>

   <p>
Even though the project wasn’t fully deployed, it served its purpose.
</p>
   <br>

   <p>
This project taught me how to convert an idea into a working product, how to think from a user’s perspective, and how to build UI friendly applications that are not just functional but meaningful.
  </p>`,
  },
  {
    id: 15,
    author: "React Native expo",
    title: "Snapexx App",
    image: project14,
    description:
      "This is the cross platform mobile version of Snapexx web application. ",
    content: `<p>
The SnapExx mobile application was actually where the entire idea started. Before the web version, my initial plan was to build and launch it directly as a mobile app using React Native (Expo). At that time, my focus was simple—create an AI-powered application where users can generate and enhance images and videos.
</p>
   <br>

   <p>
However, very early in the process, I realized something important: building an app is one thing, but successfully launching and distributing it is a completely different challenge.
</p>
   <br>

   <p>
I had limited knowledge about the Play Store publishing process, app review policies, and the costs involved. That’s when a friend suggested a much smarter approach—don’t rush to launch. First validate the idea.
</p>
   <br>

   <p>
Instead of directly pushing the mobile app, I decided to shift my focus to building a web version. The reasoning was clear:

* Faster to build and iterate
* Easier to deploy and test
* No publishing barriers
* Direct user feedback

That decision turned out to be one of the most important strategic moves in this project.
</p>
   <br>

   <p>
After launching the web version and gaining initial traction (25+ active users), I restarted work on the mobile app alongside it. This time, the approach was more mature. Instead of just building features, I focused on aligning the mobile experience with actual user behavior and feedback from the web platform.
</p>
   <br>

   <p>
The application was almost complete—core features like AI image generation, enhancement, and content creation workflows were already implemented. But at that stage, I made another critical decision: not to publish it yet.

The reason was simple but important.
</p>
   <br>

   <p>
Maintaining an AI-powered mobile app at scale requires stable backend infrastructure, optimized API usage, cost management for AI services, and consistent performance across devices. At that point, the system was still evolving, and launching the mobile app prematurely would have led to a poor user experience and unnecessary operational complexity.
</p>
   <br>

   <p>
Instead of shipping something half-ready, I chose to hold it.
</p>
   <br>

   <p>
This project taught me something that most developers overlook:
shipping fast is important, but shipping at the right time is more important.
</p>
   <br>

   <p>
SnapExx mobile is not abandoned—it’s paused with intent. The foundation is already built, and it can be launched once the backend, scalability, and cost structure are fully optimized.
</p>
   <br>

   <p>
If you want to explore the complete system and features, you can refer to the SnapExx web version, which currently serves as the primary platform.
</p>
   <br>

   <p>
This experience shifted my mindset from just building applications to thinking like a product developer—where decisions are based not only on what can be built, but what should be shipped.
  </p>`,
  },
  {
    id: 16,
    author: "Problem Statements",
    title: "Hackathons",
    image: project15,
    description:
      "In this blog you will get to know about the problem statements of various hackathons in which i have been the finalist. ",
    content: `<p>
    🔥 Global Digital Health Summit:-
    <br>
    The idea was to Built an AI-driven mental health support system focused on proactive and personalized care. Features include emotion detection through voice and behavior, conversational AI guidance, mood-based recommendations, and crisis intervention with SOS alerts. Integrated gamification and insights dashboard to improve engagement and track mental well-being over time.
          </p>
          <br>
          
          <p>
          🚀 NASA Space Apps Challenge:-
            <br>
            Participated in a global hackathon focused on solving real-world space and Earth-related challenges using data-driven and innovative technology solutions under tight timelines.
            </p>
            <br>

<p>
💥 Meta PyTorch OpenEnv Hackathon:-
<br>
Developed a customer support AI agent within a highly constrained evaluation environment, focusing on decision-making, policy compliance, and multi-step reasoning. Successfully navigated strict validation rules, Docker-based deployment, and scoring systems to build a reliable agentic solution.
</p>
<br>

<p>
🧠 Virtual Labs Hackathon:-
<br>
Designed an intelligent classroom HVAC system to optimize temperature and energy usage based on real-time occupancy and conditions. Aimed to reduce energy waste, improve thermal comfort, and provide measurable insights for efficient classroom management.
</p>
<br>

<p>
⚙️ Algofusion PartXAI Hackathon:-
<br>
Participated in an AI-focused hackathon exploring innovative problem-solving approaches using data-driven models and system design under competitive constraints.
</p>
<br>

<p>
💼 Mumbai Hacks:-
<br>
The idea is to Built an AI-powered legal and financial analysis system that simplifies complex documents into actionable insights. Features include risk detection, clause comparison, compliance validation (RBI/SEBI), and a trust score to help users make informed financial decisions.
</p>
          `,
  },
];
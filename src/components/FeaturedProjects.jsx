import React from "react";
import ProjectCard from "./ProjectCard";
import { Typewriter } from "react-simple-typewriter";

const projects = [
  {
    h1: "Gyanpath-Quiz Management System",
    p: "A full-stack microservices-based quiz platform with role-based access, student performance tracking, and dynamic dashboards.Tech Stack: Angular, Spring Boot, Eureka, Feign, Docker, MySql, Microservice, Oauth, Spring Security. ",
    year: "2024",
    role: "Full Stack Developer",
    livelink: "https://gyanpath.tapmad.space/home",
    gitlink: "https://github.com/tapanKr277/QuizManagementSystem",
    img: "./gyanpath_.png",
  },
  {
    h1: "DevSearch",
    p: (
      <>
        A platform for developers to showcase their portfolios, connect via messages, and search for talent. Built using Django and HTML templates.
        <br />
        <br />
        🔐 <strong>Login Credentials:</strong>
        <br />
        Username: <code>admin</code>
        <br />
        Password: <code>admin123</code>
      </>
    ),
    year: "2023",
    role: "Backend + Template UI",
    livelink: "https://devsearch.tapmad.space/",
    gitlink: "https://github.com/tapanKr277/DevSearch",
    img: "./devsearch.png",
  },
  {
    h1: "Greetkart",
    p: (
      <>
        A full-featured e-commerce platform with authentication, product management, cart, order placement, and payment integration. Built using Django,
        <br />
        🔐 <strong>Login Credentials:</strong>
        <br />
        Username: <code>admin@example.com</code>
        <br />
        Password: <code>admin123</code>
      </>
    ),
    year: "2024",
    role: "Full Stack Developer",
    livelink: "https://greetkart.tapmad.space/",
    gitlink: "https://github.com/tapanKr277/E-commerce",
    img: "./ecommerce_.png",
  },
  {
    h1: "Weather Broadcasting",
    p: `A Django-based weather forecast application powered by the OpenWeatherApp API. Users can search and save locations to view real-time weather, temperature, humidity, and more. Features include user authentication, personalized forecasts, and seamless API integration. Built with React, Bootstrap and Tailwind.`,
    year: "2022",
    role: "Full Stack Developer",
    livelink: "https://weather.tapmad.space/",
    gitlink: "https://github.com/tapanKr277/weather_broadcast_using_react",
    img: "./weather_broadcast.png",
  },
   {
    h1: "Notes App",
    p: `A full-stack notes manager that allows users to create, update, and delete notes in real-time. Features include rich text editing, loading indicators, and toast notifications. Built with React, Django REST API, and deployed via Render.`,
    year: "2022",
    role: "Full Stack Developer",
    livelink: "https://notes.tapmad.space/",
    gitlink: "https://github.com/tapanKr277/Notes_Using_React_Django",
    img: "./notesapp.png",
  },
];

const FeaturedProjects = () => {
  return (
    <div className="w-full pt-10 px-4" id="projects">
      <h1 className="text-black text-[42px] lg:text-7xl font-bold">
        <Typewriter
          words={["Featured Projects"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={500}
        />
      </h1>

      <p className="lg:text-lg text-base text-secondary font-manrope mb-6">
        Here are some selected projects that showcase my passion for full-stack
        development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;

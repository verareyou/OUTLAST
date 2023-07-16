import React from "react"

const About = () => {
  return (
    <div className=" bg-primary min-h-screen flex flex-col text-text ">
      <div className="p-4 tracking-wider leading-8 space-y-10">
        <div className="py-10">
          <h1 className=" text-lg md:text-xl font-semibold duration-200  cursor-pointer">
            About the project
          </h1>
          <p className="mt-2  ">
            OutLast - Crowdsourced Travel Itinerary Planner is a web platform
            revolutionizing travel planning. Users create, customize, and share
            itineraries with suggestions from a community of travelers.
            Personalized recommendations, collaborative editing, and user
            ratings enhance the planning process. The platform offers a
            user-friendly interface, responsive design, and social engagement
            features. It simplifies travel planning, provides authentic local
            insights, and fosters a vibrant community for sharing experiences
            and discovering new destinations.
          </p>
        </div>
        <div className="mt-4  border-t border-border pt-20">
          <h1 className=" text-lg md:text-xl font-semibold duration-200  cursor-pointer">
            Meet the team
          </h1>
          <div className="mt-3 ">
            <p className="font-semibold">
              UI/UX:{" "}
              <span className="font-normal">
                Himanshu Suthar & Mittal Suthar
              </span>
            </p>
            <p className="font-semibold">
              Full Stack:{" "}
              <span className="font-normal">
                Himanshu Suthar , Aadarsh Jha & Rohit Singh
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

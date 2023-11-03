import React from "react";
import "./HomeStyles.css";
import CoursesList from "../../Components/CoursesList/CoursesList";
function Home() {
  return (
    <>
      <div className="poster">
        <CoursesList />
      </div>
    </>
  );
}

export default Home;

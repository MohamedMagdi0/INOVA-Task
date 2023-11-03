import React, { useEffect, useState } from "react";
import "./CoursesList.css";
import { useParams } from "react-router-dom";
import Card from "../card/Card";

const CoursesList = () => {
  const [CoursesList, setCoursesList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setCoursesList(data.results));
  };

  return (
    <div className="Course__list">
      <div className="list__cards">
        {CoursesList.map((Course) => (
          <Card Course={Course} key={Course.id} />
        ))}
      </div>
    </div>
  );
};

export default CoursesList;

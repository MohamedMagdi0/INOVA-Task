import React, { useEffect, useState } from "react";
import "./CourseDetails.css";
import { useParams } from "react-router-dom";

const Course = () => {
  const [currentCourseDetail, setCourse] = useState();
  const { id } = useParams();

  useEffect(() => {
    console.log({ currentCourseDetail });
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setCourse(data));
  };

  return (
    <div className="Course">
      <div className="course__intro">
        <img
          className="course__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            currentCourseDetail ? currentCourseDetail.backdrop_path : ""
          }`}
        />
      </div>
      <div className="course__detail">
        <div className="course__detailLeft">
          <div className="course__posterBox">
            <img
              className="course__poster"
              src={`https://image.tmdb.org/t/p/original${
                currentCourseDetail ? currentCourseDetail.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="course__detailRight">
          <div className="course__detailRightTop">
            <div className="course__name">
              {currentCourseDetail ? currentCourseDetail.original_title : ""}
            </div>
            <div className="course__tagline">
              {currentCourseDetail ? currentCourseDetail.tagline : ""}
            </div>
            <div className="course__rating">
              {currentCourseDetail ? currentCourseDetail.vote_average : ""}{" "}
              <i class="fas fa-star" />
              <span className="course__voteCount">
                {currentCourseDetail
                  ? "(" + currentCourseDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className="course__runtime">
              {currentCourseDetail ? currentCourseDetail.runtime + " mins" : ""}
            </div>
            <div className="course__releaseDate">
              {currentCourseDetail
                ? "Release date: " + currentCourseDetail.release_date
                : ""}
            </div>
            <div className="course__genres">
              {currentCourseDetail && currentCourseDetail.genres
                ? currentCourseDetail.genres.map((genre) => (
                    <>
                      <span className="course__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="course__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{currentCourseDetail ? currentCourseDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="course__links">
        <div className="course__heading">Useful Links</div>
        {currentCourseDetail && currentCourseDetail.homepage && (
          <a
            href={currentCourseDetail.homepage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="course__homeButton course__Button">
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {currentCourseDetail && currentCourseDetail.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + currentCourseDetail.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="course__imdbButton course__Button">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>
      <div className="course__heading">Production companies</div>
      <div className="course__production">
        {currentCourseDetail &&
          currentCourseDetail.production_companies &&
          currentCourseDetail.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="productionCompanyImage">
                  <img
                    className="course__productionComapany"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default Course;

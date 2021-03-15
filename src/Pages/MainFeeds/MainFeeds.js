import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import Article from "./Components/Article/Article";
import UpdatedStories from "./Components/UpdatedStories/UpdatedStroies";
import MainFeedsProfile from "./Components/MainFeedsProfile/MainFeedsProfile";
import Suggested from "./Components/Suggested/Suggested";
import AsideNav from "./Components/AsideNav/AsideNav";
import NavBar from "../../Components/Nav/Navbar";
import { MAIN_FEEDS, MAIN_STORIES } from "../../Config";

function MainFeeds() {
  const [stories, setStories] = useState([]);
  const [feed, setFeed] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageEnd = useRef();
  const userInfo = stories?.[stories.length - 1];

  const fetchFeeds = async (pageNumber) => {
    const res = await fetch(MAIN_FEEDS + `?page=${pageNumber}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    const data = await res.json();
    setFeed((prev) => [...prev, ...data.feed]);
    setLoading(true);
  };

  useEffect(() => {
    fetchFeeds(pageNumber);
  }, [pageNumber]);

  const loadMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entires) => {
          if (entires[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 1 },
      );
      observer.observe(pageEnd.current);
    }
  }, [loading]);

  useEffect(() => {
    fetch(MAIN_STORIES, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => setStories(res.stories));
  }, []);

  return (
    <>
      <NavBar />
      <MainFeedsSection>
        <div className="content">
          <section>
            <UpdatedStories stories={stories} />
            {feed &&
              feed
                .sort((a, b) =>
                  a.created_at < b.created_at
                    ? 1
                    : a.created_at > b.created_at
                    ? -1
                    : 0,
                )
                .map((article, idx) => (
                  <Article key={idx} userInfo={userInfo} article={article} />
                ))}
            <div className="loading" ref={pageEnd}>
              {loading ? <CircularProgress /> : null}
            </div>
          </section>
          <aside>
            <MainFeedsProfile userInfo={userInfo} />
            <Suggested />
            <AsideNav />
          </aside>
        </div>
      </MainFeedsSection>
    </>
  );
}

export default MainFeeds;

const MainFeedsSection = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #fafafa;

  .content {
    display: flex;
    width: 945px;
    height: inherit;

    section {
      display: flex;
      flex-direction: column;
      max-width: 614px;
      height: inherit;
      margin-right: 28px;
      z-index: 1;

      .loading {
        display: flex;
        justify-content: center;
        width: inherit;
        margin-bottom: 15px;
      }
    }

    aside {
      position: fixed;
      left: 61vw;
      top: 8vh;
      max-width: 293px;
      height: inherit;
    }
  }

  @media screen and (max-width: 1000px) {
    .content {
      justify-content: center;
    }
    aside {
      display: none;
    }
  }
`;

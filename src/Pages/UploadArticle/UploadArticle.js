import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UPLOAD_POSTS } from "../../Config";

function UploadArticle() {
  const [postContent, setPostContent] = useState("");
  const [postfiles, setPostfiles] = useState({
    file: [],
    previewURL: "",
  });
  const history = useHistory();

  const uploadFile = (e) => {
    e.stopPropagation();
    let reader = new FileReader();
    let file = e.target.files[0];
    const filesInArr = Array.from(e.target.files);

    reader.onloadend = () => {
      setPostfiles({
        file: filesInArr,
        previewURL: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  let profile_preview = null;
  if (postfiles.file !== null) {
    profile_preview = postfiles.file[0]?.type.includes("image/") ? (
      <img src={postfiles.previewURL} />
    ) : (
      <video src={postfiles.previewURL} />
    );
  }

  const uploadContent = (e) => {
    e.stopPropagation();
    setPostContent(e.target.value);
  };

  const uploadArticle = (e) => {
    const formData = new FormData();

    postfiles?.file.map((eachfile) => {
      formData.append("path", eachfile);
    });

    // formData.append("path", postfiles.file[0]);
    // formData.append("path", postfiles.file[1]);
    // formData.append("path", postfiles.file[2]);
    // formData.append("path", postfiles.file[3]);
    // formData.append("path", postfiles.file[4]);
    // formData.append("path", postfiles.file[5]);
    // formData.append("path", postfiles.file[6]);
    // formData.append("path", postfiles.file[7]);
    // formData.append("path", postfiles.file[8]);
    // formData.append("path", postfiles.file[9]);

    formData.append("json", JSON.stringify({ content: postContent }));

    if (postContent === "" || postfiles.file.length === 0)
      alert("포스트를 등록해주세요!");

    fetch(UPLOAD_POSTS, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS") return history.push("/");
      });
  };

  return (
    <UploadArticleWrapper>
      <UploadPictureWrapper>
        <input
          id="upload-file"
          type="file"
          accept="image/*, video/*"
          multiple
          onChange={uploadFile}
        ></input>
        <label htmlFor="upload-file">파일선택</label>
      </UploadPictureWrapper>
      <UploadArticlePicture>{profile_preview}</UploadArticlePicture>
      <UploadArticleContent
        type="text"
        onChange={uploadContent}
      ></UploadArticleContent>
      <UploadArticleButtonSection>
        <button type="submit" onClick={uploadArticle}>
          게시
        </button>
      </UploadArticleButtonSection>
    </UploadArticleWrapper>
  );
}

export default UploadArticle;

const UploadArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
`;

const UploadPictureWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 614px;
  height: 70px;
  margin-top: 10px;

  input {
    width: 500px;
    height: 40px;
    padding: 10px;
    margin-right: 10px;
    background-color: white;
    border: 1px solid #dbdbdb;

    ::-webkit-file-upload-button {
      display: none;
    }
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    background-color: #1289f1;
    color: white;
    border-radius: 5px;
  }
`;

const UploadArticlePicture = styled.div`
  display: flex;
  width: 614px;
  height: 614px;
  background-color: white;
  border: 1px solid #dbdbdb;
  margin: 10px 0 20px 0;

  img {
    width: inherit;
    object-fit: contain;
  }
  video {
    width: inherit;
    object-fit: contain;
  }
`;

const UploadArticleContent = styled.textarea`
  display: flex;
  width: 614px;
  height: 150px;
  background-color: white;
  border: 1px solid #dbdbdb;
  padding: 8px;
`;

const UploadArticleButtonSection = styled.div`
  display: flex;
  justify-content: center;
  width: 614px;
  height: 100px;
  padding-top: 20px;

  button {
    width: 614px;
    height: 40px;
    background-color: #1289f1;
    color: white;
    border-radius: 5px;
  }
`;

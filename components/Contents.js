import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import posts from "../posts.json";

const Contents = () => {
  const monthName = [
    "Jaunary",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [username, setUsername] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState("");

  useEffect(() => {
    if (!username) {
      let tempUsername = localStorage.getItem("username");
      if (tempUsername) {
        setUsername(tempUsername);
        setForm(tempUsername);
      } else {
        setModalOpen(true);
      }
    }
  }, [username]);

  const onChange = (e) => {
    setForm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", e.target[0].value);
    setUsername(e.target[0].value);
    setForm(e.target[0].value);
    setModalOpen(false);
  };

  const onClick = (e) => {
    setModalOpen(true);
  };

  return (
    <Container>
      {modalOpen && (
        <Modal>
          <div>
            <h2>당신을 뭐라고 부르면 될까요?</h2>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                value={form}
                maxLength={5}
                onChange={onChange}
              />
              {username ? <button>수정</button> : <button>등록</button>}
            </form>
          </div>
        </Modal>
      )}
      <h2 style={{ paddingLeft: "3rem" }}>
        Hello, <Username onClick={onClick}>{username}</Username>
      </h2>
      {posts.map((post) => {
        let d = new Date(post.createAt);

        return (
          <Article key={post.idx}>
            <div>
              <div>
                <div>
                  <div>
                    <time
                      dateTime="2022-02-24T00:00:00.000Z"
                      style={{ color: "rgb(100 116 139/var(--text-opacity))" }}
                    >
                      {monthName[d.getMonth()] + " " + d.getDay() + ", " + d.getFullYear()}
                    </time>
                    <h2>
                      <Link href="/">
                        <a>
                          {post.idx}: {post.title}
                        </a>
                      </Link>
                    </h2>
                    <p>{post.summary}</p>

                    <div className="mt-4 flex items-center gap-4">
                      <a
                        className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                        aria-label="Show notes for episode 5: Bill Lumbergh"
                        style={{ color: "rgb(236 72 153/var(--text-opacity))" }}
                      >
                        Details 👉
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Article>
        );
      })}
    </Container>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: block;
  overflow-y: scroll;
  color: ${(props) => props.theme.textColor};
`;

const Modal = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.modalBgColor};
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-in;
  & > div {
    background-color: white;
    width: 30rem;
    height: 25rem;
    padding: 3rem;
    border-radius: 2rem;

    & > h2 {
      color: #222222;
    }

    & > form {
      & > input {
        display: block;
        width: 100%;
        border: 1px solid #eee;
        height: 3rem;
        font-size: 2rem;
        font-family: --font-mono;
      }

      & > button {
        border: none;
        cursor: pointer;
        background-color: #0d6efd;
        padding: 0.375rem 0.75rem;
        border-radius: 0.25rem;
        color: #eee;
        line-height: 1.75rem;
        margin-top: 0.83rem;
        text-align: center;
        text-decoration: none;
        vertical-align: center;
        font-weight: 600;
        letter-spacing: 0.5px;
        font-size: 14px;
        float: right;
      }
    }
  }
`;

const Username = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;

const Article = styled.article`
  padding: 3rem 0 3rem 3rem;
  border-top: ${(props) => props.theme.borderColor};
`;

export default Contents;

import styled from "styled-components";
import Image from "next/image";
import profileImage from "../public/profile.png";
import Link from "next/link";

const Profile = () => {
  return (
    <Container>
      <ImageField>
        <Link href="/">
          <a>
            <Image
              src={profileImage}
              alt="Profile Image"
              width={230}
              height={320}
              layout="fixed"
              style={{ alignItems: "center" }}
            />
          </a>
        </Link>
      </ImageField>
      <IntroField>
        <p className="name">
          <Link href="/">
            <a>Charlie</a>
          </Link>
        </p>
        <p className="selfIntro">안녕하세요. 세계 정복을 꿈꾸는 박철오입니다.</p>
        <section>
          <h2>
            <span>Info</span>
          </h2>
          <ul>
            <li>
              <a
                href="https://www.github.com/alls7554/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/%EC%B2%A0%EC%98%A4-%EB%B0%95-27415b251/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cheeeo_ro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />{" "}
                </svg>
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </section>
      </IntroField>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  border: 1px solid rgb(226 232 240 / var(--border-opacity));
  border-top-width: 0;
  border-bottom-width: 0;
  padding: 3rem;
  flex: 1 1 auto;
  min-height: 100vh;
  z-index: 10;
  position: relative;
  background-color: ${(props) => props.theme.imageBgColor};
`;

const ImageField = styled.div`
  /* display: relative; */
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid #eee;
`;

const IntroField = styled.div`
  margin-top: 3rem;
  text-align: left;

  & > .name {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  & > .selfIntro {
    margin-top: 0.75rem;
    line-height: 2rem;
    font-weight: 500;
    color: rgb(51 65 85 / var(--text-opacity));
    font-size: 1.125rem;
  }

  & > section {
    display: block;
    margin-top: 3rem;

    & > h2 {
      color: rgb(15 23 42 / var(--text-opacity));
      line-height: 1.75rem;
      font-weight: 500;
      font-size: 1rem;
      font-family: --font-mono;
      align-items: center;
      display: flex;
    }

    & > ul {
      gap: 1rem;
      flex-direction: column;
      color: rgb(51 65 85 / var(--text-opacity));
      line-height: 1.75rem;
      font-weight: 500;
      font-size: 1rem;
      justify-content: center;
      display: flex;
      margin-top: 1rem;
      list-style: none;
      padding: 0;

      & > li {
        display: flex;
        align-items: center;

        & > a {
          align-items: center;
          display: flex;

          & > svg {
            fill: #94a3b8;
            width: 1.75rem;
            height: 1.75rem;
          }

          & > span {
            margin-left: 0.75rem;
            display: block;
          }
        }

        & > a:hover {
          & > svg {
            fill: #475569;
          }
        }
      }
    }
  }
`;

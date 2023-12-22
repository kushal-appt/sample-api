import { bodyStyles } from "./body.style";
import profile from "../../assets/pic.svg";
import { cardType } from "../../types";
import AlipayImg from "../../assets/Image1.png";
import Angular from "../../assets/imag2.png";
import Alipa from "../../assets/Image6.png";
import pro from "../../assets/Image5.png";
import Bootstrap from "../../assets/Image4.png";
import React from "../../assets/Image3.png";
import { Card, Flex } from "antd";
const Body: React.FC = () => {
  const classes = bodyStyles();

  const cards: cardType[] = [
    {
      title: "Alipay",
      date: "7 days ago",
      description: "Lorem aliquet est risus pretium, cursus.",
      tag: "Ultrices at viverra",
      image: AlipayImg,
    },
    {
      title: "Angular",
      date: "3 years ago",
      description: "Sed facilisis eget elementum quis cum velit massa.",
      tag: "Quis rhoncus",
      image: Angular,
    },
    {
      title: "Alipay",
      date: "7 days ago",
      description: "Elit quam adipiscing semper orci malesuada dignissim.",
      tag: "Cras amet",
      image: Alipa,
    },
    {
      title: "Ant Design Pro",
      date: "3 years ago",
      description: "Ac mauris fermentum arcu felis facilisi.",
      tag: "Cras sed",
      image: pro,
    },
    {
      title: "Bootstrap",
      date: "3 years ago",
      description: "Purus accumsan in sed vestibulum, tellus, nisl.",
      tag: "Ultrices at viverra",
      image: Bootstrap,
    },
    {
      title: "React",
      date: "3 years ago",
      description: "Lorem aliquet est risus pretium, cursus.",
      tag: "Ultrices at viverra",
      image: React,
    },
  ];

  return (
    <div className={classes.bodyContainer}>
      <div className={classes.bodyheaderConatiner}>
        <div style={{ fontSize: "14px", font: "Roboto", fontWeight: "400" }}>
          Dashboard
        </div>
        <div style={{ fontSize: "20px", font: "Roboto", fontWeight: "500" }}>
          Workplace
        </div>
        <div className={classes.dContainer}>
          <div className={classes.descriptionContainer}>
            <img src={profile} style={{ width: "75px", height: "68px" }} />
            <div className={classes.welcomeContainer}>
              <div className={classes.ProfileIntro}>
                Good morning, Akhil, have a great day!
              </div>
              <div className={classes.profilePara}>
                User interaction expert | ant financial service - business group
                - platform department - technology department -UED
              </div>
            </div>
          </div>
          <div className={classes.profileResult}>
            <div>
              <div>Profile</div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "400",
                  textAlign: "end",
                }}
              >
                32
              </div>
            </div>
            <div>
              <div>Team Ranking</div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "400",
                  textAlign: "end",
                }}
              >
                8/24
              </div>
            </div>
            <div>
              <div>Projects Visits</div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "400",
                  textAlign: "end",
                }}
              >
                2,233
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className={classes.productContainer}>
        <div className={classes.toolsContainer}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "40px",
            }}
          >
            <span
              style={{
                fontWeight: "500",
                fontSize: "17px",
                marginLeft: "10px",
              }}
            >
              Ongoing Projects
            </span>
            <span
              style={{
                fontWeight: "400",
                fontSize: "14px",
                color: "blue",
                marginRight: "10px",
              }}
            >
              All Projects
            </span>
          </div>
          <div className={classes.product}>
            {cards.map((i, j) => (
              <Card key={j} style={{ width: "270px", height: "142px" }}>
                <div className={classes.productDetails}>
                  <div style={{ width: "28px", height: "28px" }}>
                    <img src={i.image} />
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: 400,
                      marginLeft: "9px",
                      marginBottom: 24,
                    }}
                  >
                    {i.title}
                  </p>
                </div>
                <p style={{ color: "rgba(0, 0, 0, 0.45)" }}>{i.description}</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "rgba(0, 0, 0, 0.45)" }}>{i.tag}</span>
                  <span
                    style={{
                      color: "rgba(0, 0, 0, 0.25)",
                      fontSize: 14,
                      fontWeight: "400",
                    }}
                  >
                    {i.date}
                  </span>
                </div>
              </Card>
            ))}
          </div>
          <Card title="Activity" style={{ marginTop: 25 }}>
            <Card></Card>
            <Card></Card>
          </Card>
        </div>
        <div className={classes.graphDetailsContainer}>
          <Card title="Quick start" style={{ width: 500, height: "200px" }}>
            <Card>Inner Card content</Card>
          </Card>
          <Card title="XX index" style={{ width: 500, height: "380px" }}>
            <Card>Inner Card content</Card>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Body;

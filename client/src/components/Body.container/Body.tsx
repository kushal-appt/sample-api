import { bodyStyles } from "./body.style";
import profile from "../../assets/Icon-Wrapper.png";
import { globalStyles } from "../../utilis/globalstyles";
import { cardType } from "../../types";

const Body: React.FC = () => {
  const classes = bodyStyles();

  const cards: cardType[] = [
    {
      title: "string",
      date: "string",
      description: "string",
      tag: "string",
      image: "string",
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
      <div className={classes.toolsConatiner}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Body;

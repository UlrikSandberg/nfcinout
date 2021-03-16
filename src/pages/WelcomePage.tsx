import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import LinearProgress from "@material-ui/core/LinearProgress";



    const useStyles = makeStyles((theme) => ({
      root: {
        width: "13%",
        "& > * + *": {
          marginTop: theme.spacing(2),
        },
      },
    }));

const WelcomePage = ( ) => {
    const history = useHistory();
    const currentTime = new Date();
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);


    React.useEffect(() => {

        const timer = setInterval(() => {
          setProgress((oldProgress) => {
            if (oldProgress === 100) {
              history.push("/terminal");
              return 0;
              
            }
            const diff = Math.random() * 15;
            return Math.min(oldProgress + diff, 100);
          });
        }, 500);
         return () => {
           clearInterval(timer);
         };
    }, []);

    const GetWelcomeMessage = (name: any) => {
      var date = new Date();
      var hours = date.getHours();
      if (hours < 12) {
        return <h2>Goodmorning {name} </h2>
      } else if (hours >= 12 && hours <=18) {
        return <h2>God eftermiddag {name}</h2>
      } else {
        return <h2>Velkommen {name}</h2>;
      }
    }

    const GetDeliveryMessage = () => {
    var date = new Date();
    var hours = date.getHours();
      if (hours < 12) {
        return <span style={{ color: "green" ,  }}> afleveret</span>;
      } else if (hours >= 12 && hours <= 18) {
        return <span style={{ color: "green" }}> Hentet</span>;
      } else {
        return <span style={{ color: "green" }}> afleveret</span>;
      }
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#eeeeee",
        }}
      >
        <div
          style={{
            backgroundColor: "#f3f4f6",
            padding: "15px",
            boxShadow: "box-shadow: 9px 9px 30px",
            borderRadius: "10px",
          }}
        >
          <div style={{marginBottom: "40px"}} >{GetWelcomeMessage("Heidi")}</div>
          <div style={{ fontSize: 25, marginBottom: "5px" }}>
            Oskar er nu {GetDeliveryMessage()}
          </div>
          {currentTime.toLocaleTimeString("da")}
        </div>
        <div className={classes.root}>
          <LinearProgress variant="determinate" value={progress} />
        </div>
      </div>
    );
}

export default WelcomePage;
import { Button, createStyles, FormHelperText, Grid, Input, makeStyles, Paper, TextField, Theme, Typography } from "@material-ui/core";
import { Backspace, Nfc } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      backgroundColor: "#424242",
    },
    button: {
        width: "100%",
        padding: "20px 0",
        fontSize: "38px",
        color: "white"
    },
    textField: {
        color: "white",
        textAlign: "center",
        fontSize: "20px",
    }
  }),
);

const TerminalPage = () => {

    const classes = useStyles();
    const history = useHistory();

    const [nfcFailure, setNfcFailure] = useState(false);
    const [isManualCodeError, setIsManualCodeError] = useState(false);
    const [textFieldValue, setTextFieldValue] = useState("")
    const [nfcFailureAttempts, setNfcFailureAttempts] = useState(0);

    useEffect(() => {
        setIsManualCodeError(false)
    }, [textFieldValue])

    const onManualSubmit = () => {
        const rand = Math.random();
        if(rand < 0.9) {
            setIsManualCodeError(true)
        } else {
            history.push("/welcome")
        }
    }

    const onNFCScanning = () => {
        const rand = Math.random();
        if(rand < 0.9) {
            if(nfcFailureAttempts > 2) {
                setNfcFailure(true)
            } else {
                setNfcFailureAttempts(nfcFailureAttempts +1)
            }
        } else {
            history.push("/welcome")
        }
    }

    const updateTextField = (e : string) => {
        if(nfcFailure) {
            setTextFieldValue(e);
        }
    }

    const render = () => {
        return <div style={{height: "100vh", alignContent: "center", alignItems: "center", display: "flex", backgroundColor: "#eeeeee"}}>
            <Grid justify="center" container>
                <Grid item xs={4}>
                    <Paper style={{backgroundColor: "#333333"}}>
                        <div style={{padding: "20px"}}>
                            <Typography style={{textAlign: "center", fontWeight: "bold", fontSize: "22px", color: "white"}}>Registrer ankomst</Typography>
                            <div style={{fontSize: "78px", width: "100%", display: "flex", justifyContent: "center", padding: "20px 0", color: "white"}}>
                                {nfcFailure ? (
                                    <div style={{width: "100%"}}>
                                        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                            <TextField value={textFieldValue} onChange={(e) => setTextFieldValue(e.target.value)} type="password" inputProps={{
                                                className: classes.textField
                                            }} style={{width: "100%", color: "white"}} error={isManualCodeError} variant="outlined"></TextField>
                                        </div>
                                        {isManualCodeError ? <FormHelperText style={{color: "#f44336"}} id="component-error-text">Error... Try again</FormHelperText> : null}
                                    </div>
                                ) : (
                                    <Button onClick={() => onNFCScanning()} style={{fontSize: "inherit", color: "inherit"}}>
                                        <Nfc fontSize="inherit"></Nfc>
                                    </Button>
                                )}
                            </div>
                            {nfcFailure ? 
                            <Grid container spacing={1}>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>
                                        <Button onClick={() => updateTextField(textFieldValue + "1")} className={classes.button}>1</Button>
                                    </Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>
                                        <Button onClick={() => updateTextField(textFieldValue + "2")} className={classes.button}>2</Button>
                                    </Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>
                                        <Button onClick={() => updateTextField(textFieldValue + "3")} className={classes.button}>3</Button>
                                    </Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>
                                        <Button onClick={() => updateTextField(textFieldValue + "4")} className={classes.button}>4</Button>
                                    </Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>
                                        <Button onClick={() => updateTextField(textFieldValue + "5")} className={classes.button}>5</Button>
                                    </Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>
                                        <Button onClick={() => updateTextField(textFieldValue + "6")} className={classes.button}>6</Button>
                                    </Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>
                                        <Button onClick={() => updateTextField(textFieldValue + "7")} className={classes.button}>7</Button>
                                    </Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>
                                        <Button onClick={() => updateTextField(textFieldValue + "8")} className={classes.button}>8</Button>
                                    </Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>
                                        <Button onClick={() => updateTextField(textFieldValue + "9")} className={classes.button}>9</Button>
                                    </Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>
                                        <Button onClick={() => onManualSubmit()} className={classes.button}>#</Button>
                                    </Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>
                                        <Button onClick={() => updateTextField(textFieldValue + "0")} className={classes.button}>0</Button>
                                    </Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper}>
                                        <Button onClick={() => updateTextField(textFieldValue.substring(0, textFieldValue.length - 1))} className={classes.button}>
                                            <Backspace></Backspace>
                                        </Button>
                                    </Paper>
                                </Grid>
                            </Grid> : undefined}
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    }

    return render();
}

export default TerminalPage;
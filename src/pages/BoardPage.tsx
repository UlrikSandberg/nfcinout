import { Table, TableContainer, TableHead, TableRow, Typography, TableCell, Theme, makeStyles, createStyles, TextField, TableBody, Grid } from "@material-ui/core";
import moment from 'moment';
import {kids} from "../backend/backendService"
import React from "react";



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        inOutContainer: {
            width: "80vw",
            display: "flex",
            margin: "5rem auto",

        },
        boardHeader: {
            display: "grid",
        },
        pressent: {
            height: "20px",
            width: "20px;",
            borderRadius:"50%",
            background: "green",
        },
        notPressent:{
            height: "20px",
            width: "20px;",
            borderRadius:"50%",
            background: "red",
        }
    }),
);




const BoardPage = () => {

    const classes = useStyles();

    const render = () => {
        return (
            <div className={classes.boardHeader}>
                <Typography style={{ textAlign: "center", margin: "2rem" }} variant="h3" gutterBottom>
                    List of kids
                </Typography>
                <div className={classes.inOutContainer}>
                    <TableContainer>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Kids name </TableCell>
                                    <TableCell>Arrival time </TableCell>
                                    <TableCell>Who is picking up </TableCell>
                                    <TableCell>Status </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {kids.map((kid) => {
                                    return (
                                        <TableRow key={kid.id}>
                                            <TableCell>{kid.name}</TableCell>
                                            <TableCell>{moment().format('kk:mm:s')}</TableCell>
                                            <TableCell>{kid.parents[0]}</TableCell>
                                            <TableCell>
                                            <Grid container 
                                                spacing={2}
                                                direction="row"
                                                alignItems="center"
                                                >
                                                <Grid item xs={3}>{kid.isPressent ? <div className={classes.pressent} /> : <div className={classes.notPressent}/>}</Grid>
                                                <Grid item >{kid.isPressent && kid.id > 2 ? <Typography variant="overline" gutterBottom>Pick-up is here!</Typography> : undefined}</Grid>
                                            </Grid>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
            </div>
        )
    }

    return render()
}

export default BoardPage;
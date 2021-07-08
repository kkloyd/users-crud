import {
  Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  withStyles,
} from "@material-ui/core"
import styles from "./Users.module.css"
import { useHistory } from "react-router-dom"

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

const StyledTypography = withStyles(theme => ({
  root: {
    marginRight: "15px",
  },
}))(Typography)

const GENDER = {
  FEMALE: 0,
  MALE: 1,
}

const rows = [
  {
    id: 1,
    fullname: "testname",
    gender: GENDER.MALE,
    email: "test@gmail.com",
  },
  {
    id: 2,
    fullname: "testname2",
    gender: GENDER.FEMALE,
    email: "test@gmail.com",
  },
]

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
})

const Users = () => {
  const classes = useStyles()
  const history = useHistory()

  const handleEdit = values => {
    console.log("The Values that you wish to edit ", values)
  }

  const getGenderTextByKey = key => {
    if (key === GENDER.MALE) return "М"
    else if (key === GENDER.FEMALE) return "Ж"
  }

  return (
    <div className={styles.wrapper}>
      <div className={`${styles["title-block"]} flex`}>
        <StyledTypography variant="h4">Пользователи</StyledTypography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/create")}
        >
          Добавить пользователя
        </Button>
      </div>
      <TableContainer component={Paper} className="w-min">
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ФИО</StyledTableCell>
              <StyledTableCell align="center">Пол</StyledTableCell>
              <StyledTableCell align="center">Почта</StyledTableCell>
              <StyledTableCell align="center" />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.fullname}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {getGenderTextByKey(row.gender)}
                </StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button aria-label="edit" onClick={() => handleEdit(row)}>
                    Edit
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Users

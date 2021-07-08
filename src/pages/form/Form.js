import { Button, TextField } from "@material-ui/core"
import { useForm, Controller } from "react-hook-form"

const Form = () => {
  const { control, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        render={props => <TextField {...props} />}
        name="location"
        label="Location name"
        control={control}
        defaultValue=""
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  )
}

export default Form

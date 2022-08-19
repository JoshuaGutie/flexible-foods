import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";


function FindCalculate(props) {
  const handleChange = (event) => {
    setCalories({ ...calories, [event.target.name]: event.target.value });
  };

  const [calories, setCalories] = useState({
    bodyWeight: 0,
    feet: 0,
    inches: 0,
    age: 0,
    limit: "Check Your",
    gender: 0,
    activity:0
  });

  const handleSubmit = (event, props) => {
    event.preventDefault();
    setCalories({
      bodyWeight: event.target.value,
      feet: event.target.value,
      inches: event.target.value,
      age: event.target.value,
      activity: event.target.value
    });
    if (calories.gender === "male") {
      setCalories({
        limit: (66 + (6.3 * calories.bodyWeight) + (12.9 *(12*calories.feet)) + (-6.8 *calories.age)) * calories.activity
      });
    } else {
        setCalories({
            limit: (655 + (4.3 * calories.bodyWeight) + (4.7 *(12*calories.feet)) + (-4.7 *calories.age)) * calories.activity
          });
    }
    console.log(calories);
  };

  return (
    <div className="findContainer">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={calories.gender || ""}
              name="gender"
              label="gender"
              onChange={handleChange}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>{" "}
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Activity Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={calories.activity || ""}
              name="activity"
              label="gender"
              onChange={handleChange}
            >
              <MenuItem value={1.2}>Little to none</MenuItem>
              <MenuItem value={1.375}>1-3 workouts/week</MenuItem>
              <MenuItem value={1.55}>3-5 workouts/week</MenuItem>
              <MenuItem value={1.725}>6-7 workouts/week</MenuItem>
              <MenuItem value={1.9}>2 workouts per day</MenuItem>



            </Select>{" "}
          </FormControl>
          <div>
            <TextField
              type="number"
              name="bodyWeight"
              placeholder="Body Weight"
              value={calories.bodyWeight || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              type="number"
              name="feet"
              placeholder="Feet"
              value={calories.feet || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              type="number"
              name="inches"
              placeholder="Inches"
              value={calories.inches || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              type="number"
              name="age"
              placeholder="Age"
              value={calories.age || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <Button color="primary" variant="outlined" onClick={handleSubmit}>Submit Contact</Button>
          </div>
        </form>
      </div>
      <div className="calorieCount">
        <h2 className="calorieNum">{calories.limit} Calories Per Day</h2>
      </div>
    </div>
  );
}

export default FindCalculate;

import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

function FindCalculate(props) {
  const handleChange = (event) => {
    setCalories({ ...calories, [event.target.name]: event.target.value });
  };

  const [calories, setCalories] = useState({
    bodyWeight: 0,
    feet: 0,
    inches: 0,
    age: 0,
    limit: 0,
    gender: "",
  });

  const handleSubmit = (event, props) => {
    event.preventDefault();
    setCalories({
      bodyWeight: event.target.value,
      feet: event.target.value,
      inches: event.target.value,
      age: event.target.value,
    });
    if (calories.gender === "male") {
      setCalories({
        limit: (66 + (6.3 * calories.bodyWeight) + (12.9 *(12*calories.feet)) + (-6.8 *calories.age)) * 1.55
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
            <button>Submit Contact</button>
          </div>
        </form>
      </div>
      <div className="calorieCount">
        <h2>{calories.limit} Calories Per Day</h2>
      </div>
    </div>
  );
}

export default FindCalculate;

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateExercise() {
  //   constructor(props) {
  //     super(props);

  //     onChangeUsername = onChangeUsername.bind(this);
  //     onChangeDescription = onChangeDescription.bind(this);
  //     onChangeDuration = onChangeDuration.bind(this);
  //     onChangeDate = onChangeDate.bind(this);
  //     onSubmit = onSubmit.bind(this);

  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [user, setUser] = useState([]);

  //     state = {
  //       username: "",
  //       description: "",
  //       duration: 0,
  //       date: new Date(),
  //       users: [],
  //     };
  //   }

    componentDidMount() {
    axios.get('http://localhost:8000/users/')
  .then(response => {
    if (response.data.length > 0) {
      this.setState({ 
        users: response.data.map(user => user.username),
        username: response.data[0].username
      });
    }
  })
  .catch((error) => {
    console.log(error);
  })
    }

  onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  onChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  onChangeDate = (date) => {
    setDate(date);
  };

  onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/exercises/add', exercise)
  .then(res => console.log(res.data));
  };
  //     const exercise = {
  //       username: username,
  //       description: description,
  //       duration: duration,
  //       date: date,
  //     };

  //     console.log(exercise);

  //     window.location = "/";
  //   }

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <select
            ref="userInput"
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          >
            {users.map(function (user) {
              return (
                <option
                  key={user}
                  value={user}
                >
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes):</label>
          <input
            type="text"
            className="form-control"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <div>
            <DatePicker
              selected={date}
              onChange={onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

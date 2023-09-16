export default function User() {
// constructor(props) {
//   super(props);
//   this.onChangeUsername = this.onChangeUsername.bind(this);
//   this.onSubmit = this.onSubmit.bind(this);
//   this.state = {
//     username: ''
//   };
// }

  const [username, setUsername] = useState("");

    onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
  };


//   const newUser = {
//     username: this.state.username,
//   };
//   console.log(newUser);
  
//   this.setState({
//     username: ''
//   })
// }
return(
<div>
  <h3>Create New User</h3>
  <form onSubmit={this.onSubmit}>
    <div className="form-group"> 
      <label>Username: </label>
      <input  type="text"
          required
          className="form-control"
          value={.username}
          onChange={onChangeUsername}
          />
    </div>
    <div className="form-group">
      <input type="submit" value="Create User" className="btn btn-primary" />
    </div>
  </form>
</div>
)}
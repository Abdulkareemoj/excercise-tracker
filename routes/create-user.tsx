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
    axios.post('http://localhost:8000/users/add', user)
  .then(res => console.log(res.data))
  
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
    <div className=""> 
      <label>Username: </label>
      <input  type="text"
          required
          className=""
          value={.username}
          onChange={onChangeUsername}
          />
    </div>
    <div className="">
      <input type="submit" value="Create User" className="" />
    </div>
  </form>
</div>
)}
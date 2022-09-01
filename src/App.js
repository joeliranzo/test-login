import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import './App.css';
import PasswordFieldMUI from './components/PasswordFieldMUI';
import TextFieldMUI from './components/TextFieldMUI';
import validateLogin from "./validation/login";

const App = () => {
	const methods = useForm();
	const { handleSubmit, reset, control, setValue } = methods;
	const onSubmit = (data) => validateLogin({data});

  return (
    <div className="App">
		<div className="container">
			<h1>Mall Patrol - Ultimate</h1>
			<h3>Sign In</h3>

			<form>
				<div className="field">
					<p className="label">Email or username</p>
					<TextFieldMUI name="username" control={control} setValue={setValue} />
				</div>

				<div className="field">
				<p className="label">Password</p>
					<PasswordFieldMUI name="password" control={control} setValue={setValue} />
				</div>
				<a href='#'>Forgot your password?</a><br/><br/>
				
				<Button onClick={handleSubmit(onSubmit)} variant="contained">Sign In</Button>
			</form>
		</div>

		<p>This sign-in is for staff only.</p>
		<a href="">Looking to book a service?</a>

		<footer>
			<p>©2022 MINDBODY, Inc.</p>
			<p><a href=''>Privacy Policy and Your Privacy Rights</a>| <a href=''>Terms of Service</a> </p>
		</footer>
    </div>
  );
}

export default App;

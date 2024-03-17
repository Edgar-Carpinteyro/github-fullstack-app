import { Link } from "react-router-dom";
import { handleLoginWithGithub } from "../lib/function";

const LoginPage = () => {
	return (
		<div className="main-page full-page">
			<div>
				<div>
					<h1>Login to your account</h1>
					<button
						type='button'
						onClick={handleLoginWithGithub}
					>
						Login with Github
					</button>
					<p>
						{"Don't"} have an account?{" "}
						<Link to='/signup'>
							Sign Up
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginPage
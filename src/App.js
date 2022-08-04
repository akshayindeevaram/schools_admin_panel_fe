import './App.css';
import { Provider } from 'react-redux';
import store from './redux/Store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ViewAdmission from './component/admission/ViewAdmission';
import ViewUserAdmission from './pages/admission/ViewUserAdmission';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Route exact path="/" component={ViewAdmission} />
					<Route
						path="/useradmission/:id"
						component={ViewUserAdmission}
					/>
				</Router>
			</div>
		</Provider>
	);
}

export default App;

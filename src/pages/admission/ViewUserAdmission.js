import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchViewUserAdmission } from '../../redux/useradmission/actions/viewUserAdmissionAction';
import { useParams } from 'react-router-dom';

function ViewUserAdmission({ viewUserAdmissionData, fetchViewUserAdmission }) {
	const { id } = useParams();

	const data = viewUserAdmissionData;
	// console.log(data&&data,"gggggggggggggggggggggggggggggggggggggggg");
	// console.log(viewUserAdmissionData,"viewwwwwwwwwwwwwwwwwwwwwwwwwwwww");
	// console.log(data,"uuuuuuuuuuuuuuuuuuuuuuuuuu");

	useEffect(() => {
		fetchViewUserAdmission(id);
	}, []);

	// console.log(viewUserAdmissionData,"ccccccccccccccccccccccccc");

	return (
		<div className="viewuser">
			{data &&
				data.map((val, key) => {
					return (
						<div key={key}>
							<h4>Admission id : {val.id}</h4>
							<h4>Name : {val.name}</h4>
							<h4>Phone number : {val.phone_number}</h4>
							<h4>Qualification : {val.qualification}</h4>
							{/* <h4>Result file : <img src="http://localhost:5000/1658816175299.jpg" alt="error"/></h4> */}
							<h4>
								Result file :{' '}
								<img
									src={`http://localhost:5000/${val.result}`}
									alt="error"
								/>
							</h4>
						</div>
					);
				})}
		</div>
	);
}

const mapStateToProps = (state) => {
	// console.log(ViewUserAdmission,"444444444444444--------------------");
	// console.log(state?.viewUserAdmission?.viewUserAdmission?.message,"55555555555555555555555555555555555555555555555555555");
	// console.log(state,"4444444444444");

	return {
		viewUserAdmissionData:
			state?.viewUserAdmission?.viewUserAdmission?.message,
	};
};

const mapDispatchToProps = {
	fetchViewUserAdmission,
};

// const mapDispatchToProps  = (dispatch)=> {

//   return{
//     fetchViewUserAdmission:()=>dispatch(fetchViewUserAdmission())
// }
// }

export default connect(mapStateToProps, mapDispatchToProps)(ViewUserAdmission);

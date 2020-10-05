import { connect } from "react-redux";
import DashboardComponent from "../../components/Dashboard/Dashboard.jsx";
import {fetchFiles,removeFile} from '../../redux/eventReducer/actions'

const mapStateToProps = (state) => {
    return ({
        fileArr : state.event.fileArr
    })
}
const mapDispatchToProps = (dispatch) => {
    // console.log('dospactf',dispatch())
    return ({
        fetchFiles :() => dispatch(fetchFiles()) ,
        removeFile: (data) => dispatch(removeFile(data)),
    })
}


const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);

export default Dashboard;

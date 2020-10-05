import React, { Component } from "react";
import "./Dashboard.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import URL from "../../common/api";

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loaded: 0,
      fileArr: [],
    };
  }

  componentDidMount() {
    this.props.fetchFiles();
  }
  checkMimeType = (event) => {
    //getting file object
    let files = event.target.files;
    //define message container
    let err = [];
    // list allow mime type
    const types = ["image/png", "image/jpeg", "image/jpg"];
    // loop access array
    for (var x = 0; x < files.length; x++) {
      // compare file type find doesn't matach
      if (types.every((type) => files[x].type !== type)) {
        // create error message and assign to container
        err[x] = files[x].type + " is not a supported format\n";
      }
    }
    for (var z = 0; z < err.length; z++) {
      // if message not same old that mean has error
      // discard selected file
      toast.error(err[z]);
      event.target.value = null;
    }
    return true;
  };

  checkFileSize = (event) => {
    let files = event.target.files;
    let size = 2000000;
    let err = [];
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        err[x] = files[x].type + "is too large, please pick a smaller file\n";
      }
    }
    for (var z = 0; z < err.length; z++) {
      // if message not same old that mean has error
      // discard selected file
      toast.error(err[z]);
      event.target.value = null;
    }
    return true;
  };
  onChangeHandler = (event) => {
    var files = event.target.files;
    if (this.checkMimeType(event) && this.checkFileSize(event)) {
      // if return true allow to setState
      this.setState({
        selectedFile: files,
        loaded: 0,
      });
    }
  };
  onClickHandler = () => {
    const { fileArr } = this.props;
    if (this.state.selectedFile.length > 0) {
    if (fileArr && fileArr.length > 5) {
      toast.error(
        "You cannot upload more than 6 files in order to upload more delete existing"
      );
    } else {
      const data = new FormData();

      for (var x = 0; x < this.state.selectedFile.length; x++) {
        data.append("file", this.state.selectedFile[x]);
      }
        axios
          .post(URL.postFile, data)
          .then((res) => {
            // then print response status
            document.getElementById("myFile").value = "";
            this.setState({
              loaded: 0,
            });
            this.props.fetchFiles();
            toast.success("upload success");
          })
          .catch((err) => {
            // then print response status
            console.log("err", err);
            let msg = "";
            msg = "Please upload file upto 1Mb";

            toast.error(msg);
            this.setState({
              selectedFile: null,
            });
          });
      }
    } 
      else {
        toast.error("Please upload a file");
      }
    
  };

  reset = () => {
    this.setState({
      selectedFile: null,
      loaded: 0,
    });
    document.getElementById("myFile").value = "";
  };

  removeFile = (e, fileName) => {
    this.props.removeFile({ fileName: fileName });
    this.props.fetchFiles();
  };

  displayImages = () => {
    const { fileArr } = this.props;
    return (
      fileArr &&
      fileArr.map((val, i) => {
        let url = `${URL.filePath}${val}`;
        return (
          <span key={i}>
            <img className="cards" src={url} alt={val} />
            <button
              onClick={(e) => this.removeFile(e, val)}
              className="btn btn-icon"
            >
              <i className="fa fa-trash"></i>
            </button>
          </span>
        );
      })
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6">
            <div className="form-group files">
              <label>Upload Your File </label>
              <input
                id="myFile"
                type="file"
                className="form-control"
                onChange={this.onChangeHandler}
              />
            </div>
            <div className="form-group">
              <ToastContainer />
            </div>
            {this.state.selectedFile ? (
              <div>
                <button
                  type="button"
                  className="btn btn-success btn-block"
                  onClick={this.onClickHandler}
                >
                  Upload
                </button>
                <button
                  type="button"
                  className="btn btn-default btn-block"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>
            ) : null}
          </div>
        </div>
        <div className="card-display">{this.displayImages()}</div>
      </div>
    );
  }
}

export default DashboardComponent;

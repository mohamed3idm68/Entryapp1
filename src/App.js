import React , {Component} from "react";
import "./index.css";
import CourseForm from "./comp/CourseForm";
import CourseList from "./comp/CourseList";

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      courses: [{ name: "html" }, { name: "css" }, { name: "js" }],
      current: "",
    };
  }

  // update course
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    });
  };

  // add course
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
      courses.push({ name: current });
      if (current = current ) {
        this.setState({
          courses,
          current: ""
        });
      }
      
   
    }
    


  // delete course

  deleteCourse = (index) => {
      let courses = this.state.courses;
      let length = courses.length;
      courses.splice(index , 1);
      
       this.setState({
        courses
      });
       
    
      
  }

  // edit course 
  editCourse = (index , value) => {
    let courses = this.state.courses;
    let course =courses[index];
    course['name'] = value;
  

      this.setState({
        courses: courses,
      })
    }
    
   

  render() {
    const { courses } = this.state;

    const courseList = courses.map((course, index) => (
      <CourseList det={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    ));

    return (
      <div className="App">
        <CourseForm
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
          current={this.state.current}
        />
        <ul>{this.state.courses.length> 0 ? courseList : <p>there is no courses to show</p>} </ul>
      </div>
    );
  }
}

export default App;

function CourseForm(props) {
  return (
    <>
      <h1>Add course</h1>
      <form onSubmit={props.addCourse}>
        <input type="text" value={props.current} onChange={props.updateCourse} />
        <button type="submit" >add course</button>
      </form>
    </>
  );
}

export default CourseForm;

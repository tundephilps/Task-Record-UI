import React from "react";

const TaskProgress = () => {
  return (
    <div class="tag-progress">
      <h2>Task Progress</h2>
      <div class="tag-progress">
        <p>
          Copywriting <span>3/8</span>
        </p>
        <progress class="progress progress--copyright" max="8" value="3">
          {" "}
          3{" "}
        </progress>
      </div>
      <div class="tag-progress">
        <p>
          Illustration <span>6/10</span>
        </p>
        <progress class="progress progress--illustration" max="10" value="6">
          {" "}
          6{" "}
        </progress>
      </div>
      <div class="tag-progress">
        <p>
          UI Design <span>2/7</span>
        </p>
        <progress class="progress progress--design" max="7" value="2">
          {" "}
          2{" "}
        </progress>
      </div>
    </div>
  );
};

export default TaskProgress;

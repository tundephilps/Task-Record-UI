import React from "react";

const Activity = () => {
  return (
    <div class="task-activity">
      <h2>Recent Activity</h2>
      <ul>
        <li>
          <span class="task-icon task-icon--attachment">
            <i class="fas fa-paperclip"></i>
          </span>
          <b>Andrea </b>uploaded 3 documents
          <time datetime="2021-11-24T20:00:00">Aug 10</time>
        </li>
        <li>
          <span class="task-icon task-icon--comment">
            <i class="fas fa-comment"></i>
          </span>
          <b>Karen </b> left a comment
          <time datetime="2021-11-24T20:00:00">Aug 10</time>
        </li>
        <li>
          <span class="task-icon task-icon--edit">
            <i class="fas fa-pencil-alt"></i>
          </span>
          <b>Karen </b>uploaded 3 documents
          <time datetime="2021-11-24T20:00:00">Aug 11</time>
        </li>
        <li>
          <span class="task-icon task-icon--attachment">
            <i class="fas fa-paperclip"></i>
          </span>
          <b>Andrea </b>uploaded 3 documents
          <time datetime="2021-11-24T20:00:00">Aug 11</time>
        </li>
        <li>
          <span class="task-icon task-icon--comment">
            <i class="fas fa-comment"></i>
          </span>
          <b>Karen </b> left a comment
          <time datetime="2021-11-24T20:00:00">Aug 12</time>
        </li>
      </ul>
    </div>
  );
};

export default Activity;

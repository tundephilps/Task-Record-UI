import React from "react";
import "./App.scss";
import Activity from "./components/Activity";
import TaskProgress from "./components/TaskProgress";

function App() {
  return (
    <div class="app">
      <main class="project">
        <div class="project-info">
          <h1>Homepage Design</h1>
          <div class="project-participants">
            <span></span>
            <span></span>
            <span></span>
            <button class="project-participants__add">Add Participant</button>
          </div>
        </div>
        <div class="project-tasks">
          <div class="project-column">
            <div class="project-column-heading">
              <h2 class="project-column-heading__title">Task Ready</h2>
              <button class="project-column-heading__options">
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </div>
            <div class="task" draggable="true">
              <div class="task__tags">
                <span class="task__tag task__tag--copyright">Copywriting</span>
                <button class="task__options">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </div>
              <p>Konsep hero title yang menarik</p>
              <div class="task__stats">
                <span>
                  <time datetime="2021-11-24T20:00:00">
                    <i class="fas fa-flag"></i>Nov 24
                  </time>
                </span>
                <span>
                  <i class="fas fa-comment"></i>3
                </span>
                <span>
                  <i class="fas fa-paperclip"></i>7
                </span>
                <span class="task__owner"></span>
              </div>
            </div>

            <div class="task" draggable="true">
              <div class="task__tags">
                <span class="task__tag task__tag--design">UI Design</span>
                <button class="task__options">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </div>
              <p>Icon di section our services</p>
              <div class="task__stats">
                <span>
                  <time datetime="2021-11-24T20:00:00">
                    <i class="fas fa-flag"></i>Nov 24
                  </time>
                </span>
                <span>
                  <i class="fas fa-comment"></i>2
                </span>
                <span>
                  <i class="fas fa-paperclip"></i>5
                </span>
                <span class="task__owner"></span>
              </div>
            </div>

            <div class="task" draggable="true">
              <div class="task__tags">
                <span class="task__tag task__tag--copyright">Copywriting</span>
                <button class="task__options">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </div>
              <p>Konsep hero title yang menarik</p>
              <div class="task__stats">
                <span>
                  <time datetime="2021-11-24T20:00:00">
                    <i class="fas fa-flag"></i>Nov 24
                  </time>
                </span>
                <span>
                  <i class="fas fa-comment"></i>2
                </span>
                <span>
                  <i class="fas fa-paperclip"></i>3
                </span>
                <span class="task__owner"></span>
              </div>
            </div>
          </div>
          <div class="project-column">
            <div class="project-column-heading">
              <h2 class="project-column-heading__title">In Progress</h2>
              <button class="project-column-heading__options">
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </div>

            <div class="task" draggable="true">
              <div class="task__tags">
                <span class="task__tag task__tag--design">UI Design</span>
                <button class="task__options">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </div>
              <p>Replace lorem ipsum text in the final designs</p>
              <div class="task__stats">
                <span>
                  <time datetime="2021-11-24T20:00:00">
                    <i class="fas fa-flag"></i>Nov 24
                  </time>
                </span>
                <span>
                  <i class="fas fa-comment"></i>5
                </span>
                <span>
                  <i class="fas fa-paperclip"></i>5
                </span>
                <span class="task__owner"></span>
              </div>
            </div>

            <div class="task" draggable="true">
              <div class="task__tags">
                <span class="task__tag task__tag--illustration">
                  Illustration
                </span>
                <button class="task__options">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </div>
              <p>Create and generate the custom SVG illustrations.</p>
              <div class="task__stats">
                <span>
                  <time datetime="2021-11-24T20:00:00">
                    <i class="fas fa-flag"></i>Nov 24
                  </time>
                </span>
                <span>
                  <i class="fas fa-comment"></i>8
                </span>
                <span>
                  <i class="fas fa-paperclip"></i>7
                </span>
                <span class="task__owner"></span>
              </div>
            </div>

            <div class="task" draggable="true">
              <div class="task__tags">
                <span class="task__tag task__tag--copyright">Copywriting</span>
                <button class="task__options">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </div>
              <p>Proof read the legal page and check for and loopholes</p>
              <div class="task__stats">
                <span>
                  <time datetime="2021-11-24T20:00:00">
                    <i class="fas fa-flag"></i>Nov 24
                  </time>
                </span>
                <span>
                  <i class="fas fa-comment"></i>12
                </span>
                <span>
                  <i class="fas fa-paperclip"></i>11
                </span>
                <span class="task__owner"></span>
              </div>
            </div>

            <div class="task" draggable="true">
              <div class="task__tags">
                <span class="task__tag task__tag--illustration">
                  Illustration
                </span>
                <button class="task__options">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </div>
              <p>Create the landing page graphics for the hero slider.</p>
              <div class="task__stats">
                <span>
                  <time datetime="2021-11-24T20:00:00">
                    <i class="fas fa-flag"></i>Nov 24
                  </time>
                </span>
                <span>
                  <i class="fas fa-comment"></i>4
                </span>
                <span>
                  <i class="fas fa-paperclip"></i>8
                </span>
                <span class="task__owner"></span>
              </div>
            </div>
          </div>
          <div class="project-column">
            <div class="project-column-heading">
              <h2 class="project-column-heading__title">Needs Review</h2>
              <button class="project-column-heading__options">
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </div>

            <div class="task" draggable="true">
              <div class="task__tags">
                <span class="task__tag task__tag--copyright">Copywriting</span>
                <button class="task__options">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </div>
              <p>Check the company we copied doesn't think we copied them.</p>
              <div class="task__stats">
                <span>
                  <time datetime="2021-11-24T20:00:00">
                    <i class="fas fa-flag"></i>Nov 24
                  </time>
                </span>
                <span>
                  <i class="fas fa-comment"></i>4
                </span>
                <span>
                  <i class="fas fa-paperclip"></i>0
                </span>
                <span class="task__owner"></span>
              </div>
            </div>
            <div class="task" draggable="true">
              <div class="task__tags">
                <span class="task__tag task__tag--design">UI Design</span>
                <button class="task__options">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </div>
              <p>Design the about page.</p>
              <div class="task__stats">
                <span>
                  <time datetime="2021-11-24T20:00:00">
                    <i class="fas fa-flag"></i>Nov 24
                  </time>
                </span>
                <span>
                  <i class="fas fa-comment"></i>0
                </span>
                <span>
                  <i class="fas fa-paperclip"></i>5
                </span>
                <span class="task__owner"></span>
              </div>
            </div>
            <div class="task" draggable="true">
              <div class="task__tags">
                <span class="task__tag task__tag--illustration">
                  Illustration
                </span>
                <button class="task__options">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </div>
              <p>Move that one image 5px down to make Phil Happy.</p>
              <div class="task__stats">
                <span>
                  <time datetime="2021-11-24T20:00:00">
                    <i class="fas fa-flag"></i>Nov 24
                  </time>
                </span>
                <span>
                  <i class="fas fa-comment"></i>2
                </span>
                <span>
                  <i class="fas fa-paperclip"></i>2
                </span>
                <span class="task__owner"></span>
              </div>
            </div>
          </div>
          <div class="project-column">
            <div class="project-column-heading">
              <h2 class="project-column-heading__title">Done</h2>
              <button class="project-column-heading__options">
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </div>

            <div class="task" draggable="true">
              <div class="task__tags">
                <span class="task__tag task__tag--illustration">
                  Illustration
                </span>
                <button class="task__options">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </div>
              <p>Send Advert illustrations over to production company.</p>
              <div class="task__stats">
                <span>
                  <time datetime="2021-11-24T20:00:00">
                    <i class="fas fa-flag"></i>Nov 24
                  </time>
                </span>
                <span>
                  <i class="fas fa-comment"></i>12
                </span>
                <span>
                  <i class="fas fa-paperclip"></i>5
                </span>
                <span class="task__owner"></span>
              </div>
            </div>

            <div class="task" draggable="true">
              <div class="task__tags">
                <span class="task__tag task__tag--illustration">
                  Illustration
                </span>
                <button class="task__options">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </div>
              <p>Dawn wants to move the text 3px to the right.</p>
              <div class="task__stats">
                <span>
                  <time datetime="2021-11-24T20:00:00">
                    <i class="fas fa-flag"></i>Nov 24
                  </time>
                </span>
                <span>
                  <i class="fas fa-comment"></i>3
                </span>
                <span>
                  <i class="fas fa-paperclip"></i>7
                </span>
                <span class="task__owner"></span>
              </div>
            </div>

            <div class="task" draggable="true">
              <div class="task__tags">
                <span class="task__tag task__tag--copyright">Copywriting</span>
                <button class="task__options">
                  <i class="fas fa-ellipsis-h"></i>
                </button>
              </div>
              <p>Amend the contract details.</p>
              <div class="task__stats">
                <span>
                  <time datetime="2021-11-24T20:00:00">
                    <i class="fas fa-flag"></i>Nov 24
                  </time>
                </span>
                <span>
                  <i class="fas fa-comment"></i>8
                </span>
                <span>
                  <i class="fas fa-paperclip"></i>16
                </span>
                <span class="task__owner"></span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <aside class="task-details">
        <TaskProgress />
        <Activity />
      </aside>
    </div>
  );
}

export default App;

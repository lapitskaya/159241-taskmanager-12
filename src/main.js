import {createBoardLoadMoreBtnTemplate} from "./view/board-load-more-btn";
import {createBoardSortTemplate} from "./view/board-sort";
import {createBoardTasksTemplate} from "./view/board-tasks";
import {createCardFormTemplate} from "./view/card-form";
import {createSiteBoardTemplate} from "./view/site-board";
import {createSiteFilterTemplate} from "./view/site-filter";
import {createSiteMenuTemplate} from "./view/site-menu";
import {createTaskCardTemplate} from "./view/task-card";

const TASK_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createSiteFilterTemplate());
render(siteMainElement, createSiteBoardTemplate());

const boardElement = siteMainElement.querySelector(`.board`);

render(boardElement, createBoardSortTemplate());
render(boardElement, createBoardTasksTemplate());

const boardTasksElement = boardElement.querySelector(`.board__tasks`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(boardTasksElement, createTaskCardTemplate());
}

const taskCardElement = boardTasksElement.querySelector(`.card`);

render(taskCardElement, createCardFormTemplate(), `beforebegin`);
render(boardElement, createBoardLoadMoreBtnTemplate());

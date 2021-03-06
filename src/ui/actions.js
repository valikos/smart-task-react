export const OPEN_NEW_PROJECT_MODAL = 'OPEN_NEW_PROJECT_MODAL';
export const CLOSE_NEW_PROJECT_MODAL = 'CLOSE_NEW_PROJECT_MODAL';
export const OPEN_EDIT_PROJECT_MODAL = 'OPEN_EDIT_PROJECT_MODAL';
export const CLOSE_EDIT_PROJECT_MODAL = 'CLOSE_EDIT_PROJECT_MODAL';
export const OPEN_EDIT_TASK_MODAL = 'OPEN_EDIT_TASK_MODAL';
export const CLOSE_EDIT_TASK_MODAL = 'CLOSE_EDIT_TASK_MODAL';
export const OPEN_NEW_COMMENT_MODAL = 'OPEN_NEW_COMMENT_MODAL';
export const CLOSE_NEW_COMMENT_MODAL = 'CLOSE_NEW_COMMENT_MODAL';

export function openNewProjectModal() {
  return {
    type: OPEN_NEW_PROJECT_MODAL
  };
};

export function closeNewProjectModal() {
  return {
    type: CLOSE_NEW_PROJECT_MODAL
  };
};

export function openEditProjectModal() {
  return {
    type: OPEN_EDIT_PROJECT_MODAL
  };
};

export function closeEditProjectModal() {
  return {
    type: CLOSE_EDIT_PROJECT_MODAL
  };
};

export function openEditTaskModal() {
  return {
    type: OPEN_EDIT_TASK_MODAL
  };
};

export function closeEditTaskModal() {
  return {
    type: CLOSE_EDIT_TASK_MODAL
  };
};

export function openNewCommentModal() {
  return {
    type: OPEN_NEW_COMMENT_MODAL
  };
};

export function closeNewCommentModal() {
  return {
    type: CLOSE_NEW_COMMENT_MODAL
  };
};

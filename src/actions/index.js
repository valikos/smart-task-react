let nextProjectId = 0

export const addProject = (text) => {
  return {
    type: 'ADD_PROJECT',
    id: nextProjectId++,
    text
  }
}

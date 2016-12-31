export function handleJSONErrorMessage(response) {
  if (!response.ok) {
    return response.json().then(json => {
      throw Error(json.error);
    });
  }

  return response;
}

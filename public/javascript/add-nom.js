async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="nom-title"]').value;
// need all variables

  const response = await fetch(`/api/noms`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_url,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-nom-form")
  .addEventListener("submit", newFormHandler);

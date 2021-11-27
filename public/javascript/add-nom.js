async function newFormHandler(event) {
  event.preventDefault();

const title = document.querySelector('input[name="nom-title"]').value.trim();
const bargeName = document.querySelector('input[name="barge_name"]').value.trim();
const moveDate = document.querySelector('input[name="move_date"]').value.trim();
const quantityAmt = document.querySelector('input[name="quantity"]').value.trim();
const productName = document.querySelector('input[name="product_name"]').value.trim();
const tankNumber = document.querySelector('input[name="tank_number"]').value.trim();
const inspectorName = document.querySelector('input[name="inspector_name"]').value.trim();
const counterpartyName = document.querySelector('input[name="counterparty_name"]').value.trim();

  const response = await fetch(`/api/noms`, {
    method: "POST",
    body: JSON.stringify({
      title,
      bargeName,
      moveDate,
      quantityAmt,
      productName,
      tankNumber,
      inspectorName,
      counterpartyName,
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

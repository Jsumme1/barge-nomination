async function newFormHandler(event) {
  event.preventDefault();

  const title = document.getElementById('nom-title').value.trim();
  const bargeName = document.getElementById('barge_name').value.trim();
  const moveDate = document.getElementById('move_date').value.trim();
  const quantityAmt = document.getElementById('quantity').value.trim();
  const productName = document.getElementById('product_name').value.trim();
  const tankNumber = document.getElementById('tank_number').value.trim();
  const inspectorName = document.getElementById('inspector_name').value.trim();
  const counterpartyName = document.getElementById('counterparty_name').value.trim();

  const response = await fetch(`/api/noms`, {
    method: "POST",
    body: JSON.stringify({
      'title': title,
      'barge_name': bargeName,
      'move_date': moveDate,
      'quantity': quantityAmt,
      'product_name': productName,
      'tank_number': tankNumber,
      'inspector_name': inspectorName,
      'counterparty_name': counterpartyName,
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
  .querySelector("#new-nom-form")
  .addEventListener("submit", newFormHandler);
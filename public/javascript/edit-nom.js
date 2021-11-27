async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="nom-title"]').value.trim();
  const bargeName = document.querySelector('input[name="barge_name"]').value.trim();
  const moveDate = document.querySelector('input[name="move_date"]').value.trim();
  const quantityAmt = document.querySelector('input[name="quantity"]').value.trim();
  const productName = document.querySelector('input[name="product_name"]').value.trim();
  const tankNumber = document.querySelector('input[name="tank_number"]').value.trim();
  const inspectorName = document.querySelector('input[name="inspector_name"]').value.trim();
  const counterpartyName = document.querySelector('input[name="counterparty_name"]').value.trim();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/noms/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      bargeName,
      moveDate,
      quantityAmt,
      productName,
      tankNumber,
      inspectorName,
      counterpartyName
    
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-nom-form")
  .addEventListener("submit", editFormHandler);

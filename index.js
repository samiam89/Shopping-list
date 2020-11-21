function addToList() {
  $("#js-shopping-list-form").submit(function (e) {
    e.preventDefault();
    var userInput = $("input#shopping-list-entry").val();

    let template = `
     <li>
         <span class="shopping-item">${userInput}</span>
         <div class="shopping-item-controls">
             <button class="shopping-item-toggle">
                 <span class="button-label">check</span>
             </button>
             <button class="shopping-item-delete">
                  <span class="button-label">delete</span>
             </button>
         </div>
     </li>
     `;
    // Add item to list.
    console.log('Item_Added');
    $('.shopping-list').append('<li><div class="shopping-item-controls"><span class="shopping-item">' +
      userInput + '</span><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');

  });
};
$(addToList())

/* ---------- b) Checking Item Function ---------- */

function checkItem() {
  // Check Item.
  $(".shopping-list").on("click", ".shopping-item-toggle", function (e) {
    console.log('Check');
    e.preventDefault();
    $(this).closest('li').find(".shopping-item").toggleClass("shopping-item__checked");
  });
};
$(checkItem());


/* ---------- c) Deleting Item Function ---------- */

function deleteItem() {
  $(".shopping-list").on("click", ".shopping-item-delete", function (e) {
    console.log('Delete');
    e.preventDefault();
    $(this).closest('li').remove();
  });
};
$(deleteItem());
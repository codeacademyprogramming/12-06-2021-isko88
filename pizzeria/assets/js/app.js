document.querySelector(".basket-icon").addEventListener("click",function(){
    document.querySelector(".inner-basket").classList.toggle("active");
})
fetch("https://isko88.github.io/apipizza.json")
  .then((res) => res.json())
  .then((json) => {
    let radioid = 0;
    json.forEach((p) => {
      radioid++;
      const product = document.createElement("div");
      product.classList.add("product");
      product.setAttribute("data-id", p.id);
      const item = `
        <div class="item">
          <div class="item-img">
            <img src="${p.image}" alt="item image" />
          </div>
          <div class="item-details">
            <div class="item-name">
              <span>${p.name}</span>
            </div>
            <div class="item-ingredients">
              <p>${p.topping.join(",")}</p>
            </div>
            <div class="item-price">
              <span>${p.price} UAH</span>
            </div>
            <div class="item-bottom-icon">
              <img
                src="./assets/images/icons/item-bottom-icon.svg"
                alt=""
              />
            </div>
          </div>
          <div class="overlay">
            <div class="sizes">
              <h4>Sizes:</h4>

              <div class="small">
                <input
                  type="radio"
                  name="size-${radioid}"
                  id="small_size-${radioid}"
                  value="small"
                />
                <label for="small_size-${radioid}">small - 20cm</label>
              </div>
              <div class="medium">
                <input
                  type="radio"
                  name="size-${radioid}"
                  id="medium_size-${radioid}"
                  value="medium"
                />
                <label for="medium_size-${radioid}">medium - 25cm</label>
              </div>
              <div class="big">
                <input
                  type="radio"
                  name="size-${radioid}"
                  id="big_size-${radioid}"
                  value="big"
                />
                <label for="big_size-${radioid}">big - 32cm</label>
              </div>
              <div class="text-center">
                <button data-item-id="${p.id}"
                  class="add-to-basket-btn"
                  type="submit"
                >
                  Add to basket
                </button>
              </div>
            </div>
          </div>
          <div class="item-bottom-rectangle"></div>
        </div>`;
      product.innerHTML = item;
      document.querySelector("section#items .items .row").append(product);
      setEvent();
      basketbtn();
    });
  });

function setEvent() {
  const items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("click", function () {
      const overlay = this.querySelector(".overlay");
      overlay.style.display = "block";
    });
  });
}

function basketbtn(){
const addbasketbtns = document.querySelectorAll("add-to-basket-btn");
addbasketbtns.forEach(btn=>{
btn.addEventListener("click",function(){
    const itemid = this.getAttribute("data-item-id");
})
});
}
function setLocalStorage(){

}
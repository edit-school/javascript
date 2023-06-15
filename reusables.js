// Navbar

removeDefaultCategories = () => {
  const navbarMenuItems = Array.from(document.getElementsByClassName("menu__item"));
  for (k = 0; k < navbarMenuItems.length; k++) {
    navbarMenuItems[k].remove();
  }
}
removeDefaultCategories();

getAPICategories = async () => {
  fetch("https://fakestoreapi.com/products/categories")
  .then((response) => response.json())
  .then((data) => data);

  const response = await fetch("https://fakestoreapi.com/products/categories");
  const data = await response.json();
  const categoryBoard = document.getElementById("category_board") 
  const navbarMenuItems = document.getElementsByClassName("menu__item")

  return data.forEach(element => {
    const menu = document.getElementsByClassName("menu");
    const menuItem = document.createElement("li");
    menu[0].append(menuItem);
    const menuItemTitle = document.createElement("a")
    menuItem.append(menuItemTitle);
    menuItemTitle.innerHTML = element;
    menuItem.setAttribute("class", "menu__item");
    menuItemTitle.setAttribute("href", `category-page.html?category=${element}`)
  });
}
getAPICategories()


// Newsletter

const subscribeForm = document.getElementById("subscribeForm");

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const email = formData.get("emailField");
  console.log(email)

  const request = new XMLHttpRequest();
  request.open("POST", "https://fakeNewsletter.com");
  request.send(email)

  request.onload = () => {
    console.log("request sent");
  };
});


// Date

const date = new Date().getFullYear();
const copyrightsSpan = document.getElementById("copyrights");
copyrightsSpan.innerText = `© ${date} Template`;
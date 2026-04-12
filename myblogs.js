const blogData = [
  {
    title: 'First Blog Post',
    date: 'January 1, 2022',
    content: 'this is content of the first blog page.'
  },
  {
    title: 'Second Blog Post',
    date: 'February 1, 2022',
    content: 'This is the content of the second blog post.'
  },
  {
    title: 'Third Blog Post',
    date: 'March 1, 2022',
    content: 'This is the content of the third blog post.'
  }
];
//Create your function here with the name addBlog which takes a blog object as parameter
function addBlog(blogData) {
    const division1 = document.createElement("div");
    division1.classList.add("blog-post");
    const division2 = document.createElement("div");
    division2.classList.add("blog-header");
    const element = document.createElement("h2");
    element.textContent = blogData.title;
    element.classList.add("blog-title");
    const p1 = document.createElement("p");
    p1.textContent = blogData.date;
    p1.classList.add("blog-date");
    const p2 = document.createElement("p");
    p2.textContent = blogData.content;
    p2.classList.add("blog-content");
    division2.append(element, p1);
    division1.append(division2);
    division1.append(p2);

    const ulelement = document.querySelector("ul.blog-list");
    ulelement.appendChild(division1);
}

//Call each object present in blogData with addBlog.

//If page does not update the changes automatically please refresh

//calling the function
blogData.forEach(blogData => addBlog(blogData));
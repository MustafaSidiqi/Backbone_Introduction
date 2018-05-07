//Backbone model

var Blog = Backbone.Model.extend({
  defaults: {
    author: "",
    title: "",
    url: ""
  }
})

//Backbone Collection

var Blogs = Backbone.Collection.extend({});

//Instantiate two blogs

var blog1 = new Blog({
  author: "Mustafa",
  title: "Mustafa's Blog",
  url: "Mustafa@test.com"
});

var blog2 = new Blog({
  author: "John",
  title: "John's Blog",
  url: "John@test.com"
});

var blogs = new Blogs([blog1, blog2]);

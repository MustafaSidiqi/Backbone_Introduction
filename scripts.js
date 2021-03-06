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
/*
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
*/

var blogs = new Blogs();

// Backbone View for one blog
var BlogView = Backbone.View.extend({
  model: new Blog(),
  tagName: 'tr',
  initialize: function () {
    this.template = _.template($('.blogs-list-template').html());
  },
  render: function() {
    this.$el.html(this.template({model: this.model.toJSON()}))
    return this;
  }
});

// Backbone View for all blogs

var BlogsView = Backbone.View.extend({
  model: blogs,
  el: $('.blogs-list'),
  initialize: function() {
    this.model.on('add', this.render, this);
  },
  render: function() {
    this.$el.html('');
    _.each(this.model.toArray(), function(blogs) {
      self.$el.append((new BlogView({model: blog})).render().$el);
    });
    return this;
  }
});


$(document).ready(function() {
  $('.add-blog').on('click', function() {
    var blog = new Blog({
      author: $('.author-input').val(),
      title: $('.title-input').val(),
      url: $('.url-input').val()
    });
    $('.author-input').val('');
    $('.title-input').val('');
    $('.url-input').val('');
    console.log(blog.toJSON());
    blogs.add(blog);
  })
})

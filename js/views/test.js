/**
 * Created by bad4iz on 19.02.2017.
 */

var TestView = Backbone.View.extend({
  initialize:function() {
    this.render()
  },
  render: function() {
    this.$el.html(this.model.get('title'));
    return this;
  }
});


var TestsView = Backbone.View.extend({
  el: '#todoapp',
  render: function(model) {
    this.collection.each(function(model) {
      var testView = new TestView({model: model});
      $(document.body).append(testView.render().el);
    }, this);
    return this;
  }
});

window.app.Todos.create({ title: 'My second Todo item'});
window.app.Todos.create({ title: 'My second Todo item'});
window.app.Todos.create({ title: 'My second Todo item'});


var tt = new TestsView({collection: app.Todos});
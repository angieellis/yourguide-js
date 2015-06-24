// // **************************************************************************
// // TOUR ALL HANDLEBARS MODEL
// // **************************************************************************


// var Tour = Backbone.Model.extend({
//   idAttribute: "_id"
// });

// var TourCollection = Backbone.Collection.extend({
//   url: "/tours/show"
// })

// var tourCollections = new TourCollection()

// var TourView = Backbone.View.extend({
//   model: new Tour(),
//   tagName: "div",
//   render: function() {
//     var template = $("#tour-template").html();
//     var compiled = Handlebars.compile(template);
//     var html = compiled(this.model.attributes);
//     this.$el.html(html);
//     return this;
//   }
// })

// var ToursView = Backbone.View.extend({
//   model: tourCollections,
//   el: $('.tours-list'),
//   initialize: function() {
//     var self = this;
//     this.model.fetch({
//       success: function( collection, response, options ) {
//         _.each(collection.toJSON(), function(item){
//           // console.log("Successfully got tour with _id: " + item.title);
//         })
//       },
//       error: function() {
//         console.log("Failed to get tours!");
//       }
//     });
//     this.listenTo(this.model, 'sync', this.render)
//   },
//   render: function() {
//     var self = this;
//     var allModels = this.model.models
//     for (var i=0; i < allModels.length; i++) {
//       var tourView = new TourView({model: allModels[i]})
//       this.$el.append(tourView.render().el)
//     };
//     return this;
//   }
// })

// var toursView = new ToursView()


// // **************************************************************************
// // SEARCH BY CITY
// // **************************************************************************


// var searchCollections = new TourCollection()

// var SearchView = Backbone.View.extend({
//   el: ".browse-container",
//   model: searchCollections,
//   events: {
//     "submit #browse-search-form" : "createSearch",
//   },
//   initialize: function() {
//     console.log("ALSDKFJGAFKGJDAFKGJ")
//     // this.collection = searchCollections;
//   },

//   createSearch: function(event) {
//     console.log("INSIDE createSearch")
//     event.preventDefault();
//     var searchInput = $(".browse-search-input").val();
//     var correspondingList = tourCollections.where({ city: searchInput })
//     console.log(correspondingList)
//     searchCollections.reset(correspondingList)
//     console.log("break")
//     console.log(searchCollections)
//     this.render()
//   },

//   render: function() {
//     var self = this;
//     var allModels = searchCollections
//     $(".browse-container").empty()

//     for (var i=0; i < allModels.length; i++) {
//       var template = $("#search-result-template").html();
//       var compiled = Handlebars.compile(template);
//       var html = compiled(allModels.models[i].attributes);
//       $(".browse-container").append(html);
//     };
//     return this;
//   }

// })

// var searchView = new SearchView()


// // **************************************************************************
// // LIST CITIES
// // **************************************************************************

// // **************************************************************************
// // LIST INTERESTS
// // **************************************************************************


// // **************************************************************************
// // TOUR/:ID PAGE
// // **************************************************************************

// var tourMongoId = window.location.pathname.slice(15)

// var IndividualTour = Backbone.Model.extend({
//   idAttribute: "_id",
//   urlRoot: "/tours"
// })

// var individualTour = new IndividualTour({
//   _id: tourMongoId
// })

// individualTour.fetch()

// console.log(individualTour)

// var IndividualTourView = Backbone.View.extend({
//   model: individualTour,
//   el: "#individual-tour-display",
//   initialize: function() {
//     this.model.fetch({
//       success: function(response) {
//         console.log(response)
//       },
//       error: function() {
//         console.log("Failed")
//       }
//     })
//     this.listenTo(this.model, 'sync', this.render)
//   },
//   render: function() {
//     var template = $("#individual-tour-template").html();
//     var compiled = Handlebars.compile(template);
//     var html = compiled(this.model.attributes);
//     $("#individual-tour-display").html(html);
//   }
// })

// var individualTourView = new IndividualTourView()


// // **************************************************************************
// // USER/:ID PAGE
// // **************************************************************************

// var IndividualUser = Backbone.Model.extend({
//   idAttribute: "_id",
//   urlRoot: "/users"
// })

// var userMongoId = window.location.pathname.slice(12)

// var individualUser = new IndividualUser({
//   _id: userMongoId
// })

// var IndividualUserView = Backbone.View.extend({
//   model: individualUser,
//   el: "#individual-user-display",
//   initialize: function() {
//     this.model.fetch({
//       success: function(response) {
//         console.log("Successful")
//       },
//       error: function() {
//         console.log("Failed to get user")
//       }
//     })
//     this.listenTo(this.model, 'sync', this.render)
//   },
//     render: function() {
//     var template = $("#individual-user-template").html();
//     var compiled = Handlebars.compile(template);
//     var html = compiled(this.model.attributes);
//     $("#individual-user-display").html(html)

//     var userTourTemplate = $("#individual-user-authored-template").html();
//     var compiledTours = Handlebars.compile(userTourTemplate);

//     for (var i=0; i < this.model.attributes.authored_tours.length; i++) {
//       var loopedAuthoredList = compiledTours(this.model.attributes.authored_tours[i])
//       $("#user-authored-list").append(loopedAuthoredList)
//     }
//   }
// })

// var individualUserView = new IndividualUserView()


// // **************************************************************************
// // DASHBOARD
// // **************************************************************************

// var CurrentUser = Backbone.Model.extend({
//   idAttribute: "_id",
//   url: "/dashboard"
// })

// var currentUser = new CurrentUser()

// var CurrentUserView = Backbone.View.extend({
//   model: currentUser,
//   el: "#current-user-information",
//   initialize: function() {
//     this.model.fetch({
//       success: function(response) {
//         console.log("Successful")
//       },
//       error: function() {
//         console.log("Failed to get user")
//       }
//     })
//     this.listenTo(this.model, 'sync', this.render)
//   },
//   render: function() {
//     var template = $("#current-user-info-template").html();
//     console.log(this.model.attributes[0].user)
//     var compiled = Handlebars.compile(template);
//     var html = compiled(this.model.attributes[0].user);
//     $("#current-user-information").html(html)


//     var recommendedTourTemplate = $("#recommended-tour-template").html();
//     var compiledTours = Handlebars.compile(recommendedTourTemplate);
//     for (var i=0; i < this.model.attributes[1].recommended_tours.length; i++) {
//       var recommendedToursList = compiledTours( this.model.attributes[1].recommended_tours[i])
//       $("#recommended-" + i ).html(recommendedToursList)
//     }

//     var dashboardWishlistTourTemplate = $("#dashboard-wishlist-tour-template").html();
//     var compiledWishlistTours = Handlebars.compile(dashboardWishlistTourTemplate);
//     for (var i=0; i < this.model.attributes[0].user.wishlist.length; i++) {
//       var dashboardWishlist = compiledWishlistTours( this.model.attributes[0].user.wishlist[i])
//       console.log(this.model.attributes[0].user.wishlist[i])
//       $("#dashboard-wishlist").append(dashboardWishlist)
//     }
//   }
// })

// var currentUserView = new CurrentUserView()
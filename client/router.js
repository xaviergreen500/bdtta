FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("main", {content: "home"});
    }
});

FlowRouter.route('/pennant', {
    action: function() {
        BlazeLayout.render("main", {content: "pennant"});
    }
});
FlowRouter.route('/admin', {
    action: function() {
        BlazeLayout.render("main", {content: "admin"});
    }
});

FlowRouter.route('/login', {
    action: function() {
        BlazeLayout.render("main", {content: "login"});
    }
});

FlowRouter.route('/signup', {
    action: function() {
        BlazeLayout.render("main", {content: "signup"});
    }
});
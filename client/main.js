import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click #buttonsub'(event, instance) {
      var name=$("#name").val();
              var email=$("#email").val();
              var subject=$("#subject").val();
              var message=$("#message").val();
    Meteor.call("sendmail",name,subject,email,message,function(res){
        alert("Mail Send Successfully");
    })
  },
});

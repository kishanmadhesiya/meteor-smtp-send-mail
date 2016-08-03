import { Meteor } from 'meteor/meteor';

Meteor.methods({
    "sendmail":function(name,subject,email,message){
        Email.send({
      to: "kishanmadhesiya@gmail.com",
      from: email,
      subject: subject,
      html: message,
      replyTo:email
    });
    return "Mail Send Successfully";
    }
})
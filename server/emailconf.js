Meteor.startup(function () {
  smtp = {
  username: 'Your Gmail Id',
  password: '*********', // masked - a gmail application-specific 16 character password to use for two-factor auth
  server:   'smtp.gmail.com',
  port: 465 // also tried 465 to no avail
  };
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
Accounts.emailTemplates.siteName = "KISHAN";
Accounts.emailTemplates.from     = "KISHAN <kishanmadhesiya@gmail.com>";


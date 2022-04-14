let user = {
  name: "kek",
  puper: "stopper",
  email: "some@milo.com",
  blogs: ["1", "2", "3"],
  loginfo: function () {
    console.log(this.email);
  },
};

user.loginfo();

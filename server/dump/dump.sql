CREATE TABLE movies (
  id int(11) AUTO_INCREMENT,
  external_id int(11),
  title varchar(255),
  poster varchar(255),
  description varchar(8000),
  director varchar(255),
  producer varchar(255),
  PRIMARY KEY(id)
);
create database cap;
use cap;
drop database cap;
create table users(
profileid integer primary key auto_increment,
username varchar(30),
phonenum  long,
Dob date,
password varchar(33));

drop table users;






insert into users(profileid,username,phonenum,Dob,password) values(1,"manju",8374295339,"3000-03-03","manju369"),(2,"cde",9014322170,"333-03-30","man369");




select * from users;

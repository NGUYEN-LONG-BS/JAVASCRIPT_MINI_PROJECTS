CREATE DATABASE QLSV
GO
USE QLSV
GO
CREATE TABLE student
(
    Id int primary key Identity,
    Name nvarchar(100) NOT NULL,
    email varchar(100) NOT NULL UNIQUE,
    Phone varchar(20) NOT NULL UNIQUE
)
GO
INSERT INTO Student(Name, Email, Phone) VALUES
(N'Nguyễn Đức Duy', 'duy@gmail.com','2121321'),
(N'Đỗ Văn Lợi', 'loi@gmail.com','215131')
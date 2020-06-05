DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE IF NOT EXISTS burgers (
     item_id INT AUTO_INCREMENT,
     burger_name VARCHAR(50) NOT NULL,
     devoured BOOLEAN NOT NULL,
     PRIMARY KEY(item_id)
);

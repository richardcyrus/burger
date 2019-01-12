--
-- Create the application's database, and if necessary an associated
-- User. When creating the user, please supply a password and update
-- your .env file accordingly.
--
CREATE DATABASE IF NOT EXISTS burgers_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci;

-- CREATE USER 'burgers_app'@'localhost' IDENTIFIED BY '';
-- GRANT ALL PRIVILEGES ON burgers_db.* TO 'burgers_app'@'localhost';
-- FLUSH PRIVILEGES;

USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
)  ENGINE=INNODB;

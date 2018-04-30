DROP DATABASE IF EXISTS contact_info_db;
-- Create a database called programming_db --
CREATE DATABASE contact_info_db;

-- Use programming db for the following statements --
USE contact_info_db;

CREATE TABLE contactInfo(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
id INTEGER(0) AUTO_INCREMENT NOT NULL,
name VARCHAR(150),
email VARCHAR(150),
message text,
-- creates the time when database was created
created_at TIMESTAMP default NOW(),
PRIMARY KEY (id)

)
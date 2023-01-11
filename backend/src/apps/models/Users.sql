CREATE TABLE 'user' (
    'id' INT NOT NULL PRIMARY KEY UNIQUE AUTO_INCREMENT,
    'username' VARCHAR(45) NOT NULL,
    'email' VARCHAR(45) NOT NULL,
    'password' VARCHAR(200) NOT NULL,
    'name' VARCHAR(45) NOT NULL,
    'profilePicture' VARCHAR(100) NULL,
    'coverPicture' VARCHAR(100) NULL,
    'website' VARCHAR(100) NULL,
    "city" VARCHAR(100) NULL,
);
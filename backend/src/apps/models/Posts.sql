CREATE TAbLE posts (
    id INT NOT NULL AUTO_INCREMENT,
    description VARCHAR(200) NULL,
    image VARCHAR(200) NULL,
    userId INT NULL,
    PRIMARY KEY (id),
    UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE,
    INDEX userId_idx (userId ASC) VISIBLE,
    CONSTRAINT userId foreign key (userId) references users(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);
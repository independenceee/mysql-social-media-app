CREATE TABLE commnets (
    id INT NOT NULL AUTO_INCREMENT,
    description VARCHAR(200) NOT NULL,
    createdAt DATETIME NULL,
    userId INT NOT NULL,
    postId INT NOT NULL,

    PRIMARY KEY (id),
    UNIQUE INDEX 'id_UNIQUE' ('id' ASC) VISIBLE,
    INDEX 'postId_idx' ('postId' ASC) VISIBLE,
    INDEX 'commnetUserId_idx'('userId' ASC) VISIBLE,
    CONSTRAINT 'commnetUserId'
        FOREIGN KEY ('userId')
        REFERENCES 'social','users' ('id')
        ON DELETE CASCADE,
        ON UPDATE CASCADE,
    CONSTRAINT 'postId'
        FOREIGN KEY ('postId')
        REFERENCES 'social','posts' ('id')
        ON DELETE CASCADE,
        ON UPDATE CASCADE,
)
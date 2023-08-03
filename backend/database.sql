

CREATE TABLE users (
    id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at DATE DEFAULT(current_date),
    salt VARCHAR(16),
    updated_at DATE
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- INSERT INTO users (username, email, password_hash, salt)
-- VALUES
-- (
--     "john", 
--     "john@doe.com", 
--     "test"
-- ),
-- (
--     "username", 
--     "test@toto.com", 
--     "$argon2id$v=19$m=65536,t=3,p=1$fmp/Gd7SJg8YgJRx1YuaHA$uC95VzNdeAItzKOJylDl/jGfVNS0cBdw8elcDgKBQZ4"
-- ),
-- (
--     "ada",
--     "dad@r.com",
--     "$argon2id$v=19$m=65536,t=3,p=1$BVGr0dpPh8GpEsCnCiUwSw$JGlv5BoJqXpYeyep97EiA1JKVCjBsvG889iuFRkfBV4"
-- );
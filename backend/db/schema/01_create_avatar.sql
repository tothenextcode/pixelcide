DROP TABLE IF EXISTS avatars CASCADE;

CREATE TABLE avatars (
  id SERIAL PRIMARY KEY,
  img_url VARCHAR(255) NOT NULL
);
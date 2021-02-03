CREATE TABLE rankings (
    id serial PRIMARY KEY,
    phrase text NOT NULL,
    ranking integer
);

CREATE TABLE topics (
    id serial PRIMARY KEY,
    topic text NOT NULL,
    score integer REFERENCES rankings (id)
);
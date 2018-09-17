
DROP TABLE IF EXISTS art_media_xref CASCADE;
DROP TABLE IF EXISTS exhibits CASCADE;
DROP TABLE IF EXISTS museums_styles_xref CASCADE;
DROP TABLE IF EXISTS art CASCADE;
DROP TABLE IF EXISTS artist CASCADE;
DROP TABLE IF EXISTS museums CASCADE;
DROP TABLE IF EXISTS styles CASCADE;
DROP TABLE IF EXISTS countries CASCADE;
DROP TABLE IF EXISTS media CASCADE;


-- ************************************** styles

CREATE TABLE styles (
 id         SERIAL PRIMARY KEY,
 style_name VARCHAR(64) UNIQUE
);



-- ************************************** countries

CREATE TABLE countries (
 code CHAR(3) PRIMARY KEY,
 name VARCHAR(64) UNIQUE
);



-- ************************************** media

CREATE TABLE media (
 id   SERIAL PRIMARY KEY,
 name VARCHAR(64) UNIQUE
);

-- ************************************** artist

CREATE TABLE artist (
 id           SERIAL PRIMARY KEY,
 name         VARCHAR(64) NOT NULL,
 description  TEXT,
 birth_date   DATE,
 birth_place  CHAR(3) REFERENCES countries (code)
);



-- ************************************** museums

CREATE TABLE museums (
 id           SERIAL PRIMARY KEY,
 name         VARCHAR(64) UNIQUE,
 description  TEXT,
 address      VARCHAR(128),
 country_code CHAR(3) REFERENCES countries (code)
);


-- ************************************** museums_styles_xref

CREATE TABLE museums_styles_xref (
  museum_id INT REFERENCES museums (id),
  style_id  INT REFERENCES styles (id),
  PRIMARY KEY (museum_id, style_id)
);



-- ************************************** art

CREATE TABLE art (
  id          SERIAL PRIMARY KEY,
  title       VARCHAR(255) NOT NULL DEFAULT 'untitled',
  description TEXT,
  artist_id   INT REFERENCES artist (id)
);




-- ************************************** art_media

CREATE TABLE art_media_xref  (
  art_id   INT REFERENCES art (id),
  media_id INT REFERENCES media (id),
  PRIMARY KEY (art_id, media_id)
);

-- ************************************** museums_art

CREATE TABLE exhibits (
  id            SERIAL PRIMARY KEY,
  exhibit_start DATE,
  exhibit_end   DATE,
  museum_id     INT REFERENCES museums (id),
  art_id        INT REFERENCES art (id)
);






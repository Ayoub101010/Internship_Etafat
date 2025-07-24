CREATE EXTENSION IF NOT EXISTS postgis;



CREATE TABLE autres_infrastructures (
  id SERIAL PRIMARY KEY,
  pistes_id INTEGER NOT NULL,
  x_autre_infrastructure FLOAT,
  y_autre_infrastructure FLOAT,
  type_2 TEXT,
  date_creation TIME,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);


CREATE TABLE bacs (
  id SERIAL PRIMARY KEY,
  pistes_id INTEGER NOT NULL,
  x_debut_traversee_bac FLOAT,
  y_debut_traversee_bac FLOAT,
  x_fin_traversee_bac FLOAT,
  y_fin_traversee_bac FLOAT,
  type_bac TEXT,
  nom_cours_eau TEXT,
  created_at FLOAT,
  updated_at FLOAT
);


CREATE TABLE batiments_administratifs (
  id SERIAL PRIMARY KEY,
  pistes_id INTEGER NOT NULL,
  x_batiment_administratif FLOAT,
  y_batiment_administratif FLOAT,
  nom TEXT,
  type_2 INTEGER,
  date_creation INTEGER,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);


CREATE TABLE buses (
  id SERIAL PRIMARY KEY,
  pistes_id INTEGER NOT NULL,
  x_buse FLOAT,
  y_buse FLOAT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE chaussees (
  id SERIAL PRIMARY KEY,
  pistes_id INTEGER NOT NULL,
  x_debut_chaussee FLOAT,
  y_debut_chaussee FLOAT,
  type_chaussee FLOAT,
  etat_piste TEXT,
  x_point_coupure FLOAT,
  y_point_coupure FLOAT,
  causes_coupures TEXT,
  x_debut_deviation FLOAT,
  y_debut_deviation FLOAT,
  x_point_critique FLOAT,
  y_point_critique FLOAT,
  type_point_critique TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE communes_rurales (
  id SERIAL PRIMARY KEY,
  prefectures_id INTEGER NOT NULL,
  nom TEXT,
  geom GEOMETRY,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);


CREATE TABLE dalots (
  id SERIAL PRIMARY KEY,
  pistes_id INTEGER NOT NULL,
  x_dalot FLOAT,
  y_dalot FLOAT,
  situation_dalot TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);


CREATE TABLE ecoles (
  id SERIAL PRIMARY KEY,
  pistes_id INTEGER NOT NULL,
  x_ecole FLOAT,
  y_ecole FLOAT,
  nom TEXT,
  type_2 TEXT,
  date_creation TIME,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);


CREATE TABLE infrastructures_hydrauliques (
  id SERIAL PRIMARY KEY,
  pistes_id INTEGER NOT NULL,
  x_infrastructure_hydraulique FLOAT,
  y_infrastructure_hydraulique_2 FLOAT,
  nom TEXT,
  type_2 TEXT,
  date_creation TIME,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);


CREATE TABLE localites (
  id SERIAL PRIMARY KEY,
  pistes_id INTEGER NOT NULL,
  x_localite FLOAT,
  y_localite FLOAT,
  nom TEXT,
  type_2 TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);


CREATE TABLE marches (
  id SERIAL PRIMARY KEY,
  pistes_id INTEGER NOT NULL,
  x_marche FLOAT,
  y_marche FLOAT,
  nom TEXT,
  type_2 TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE passages_submersibles (
  id SERIAL PRIMARY KEY,
  pistes_id INTEGER NOT NULL,
  x_debut_passage_submersible FLOAT,
  y_debut_passage_submersible FLOAT,
  x_fin_passage_submersible FLOAT,
  y_fin_passage_submersible FLOAT,
  type_materiau TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);


CREATE TABLE pistes (
  id SERIAL PRIMARY KEY,
  communes_rurales_id INTEGER NOT NULL,
  code_piste INTEGER,
  user_login TEXT,
  heure_debut TIMESTAMP,
  heure_fin TIMESTAMP,
  nom_origine_piste TEXT,
  y_origine FLOAT,
  nom_destination_piste TEXT,
  x_destination FLOAT,
  y_destination FLOAT,
  existence_intersection INTEGER,
  x_intersection FLOAT,
  y_intersection FLOAT,
  type_occupation TEXT,
  debut_occupation TIMESTAMP,
  fin_occupation TIMESTAMP,
  largeur_emprise FLOAT,
  frequence_trafic FLOAT,
  type_trafic TEXT,
  travaux_realises TEXT,
  date_travaux TEXT,
  entreprise TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);


CREATE TABLE ponts (
  id SERIAL PRIMARY KEY,
  pistes_id INTEGER NOT NULL,
  x_pont FLOAT,
  y_pont FLOAT,
  situation_pont INTEGER,
  type_pont TEXT,
  nom_cours_eau TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);


CREATE TABLE prefectures (
  id SERIAL PRIMARY KEY,
  regions_id INTEGER NOT NULL,
  nom TEXT,
  geom GEOMETRY,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);


CREATE TABLE regions (
  id SERIAL PRIMARY KEY,
  nom TEXT,
  geom INTEGER,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);


CREATE TABLE services_santes (
  id SERIAL PRIMARY KEY,
  pistes_id INTEGER NOT NULL,
  x_sante FLOAT,
  y_sante FLOAT,
  nom TEXT,
  type_2 TEXT,
  date_creation TIME,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);



CREATE TABLE login (
  id SERIAL PRIMARY KEY,
  nom TEXT,
  prenom TEXT,
  mail TEXT,
  mdp TEXT,
  role TEXT
);
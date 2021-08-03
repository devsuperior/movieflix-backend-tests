INSERT INTO tb_user (name, email, password) VALUES ('Ana', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Bob', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);

INSERT INTO tb_genre (name) VALUES ('Crime');
INSERT INTO tb_genre (name) VALUES ('Drama');
INSERT INTO tb_genre (name) VALUES ('Romance');
INSERT INTO tb_genre (name) VALUES ('Thriller');
INSERT INTO tb_genre (name) VALUES ('Comedy');
INSERT INTO tb_genre (name) VALUES ('Action');


INSERT INTO tb_movie (title, director, year, img_Url, synopsis, genre_id) VALUES ('The Godfather', 'Francis Ford Coppola', 1972, 'https://www.themoviedb.org/t/p/w220_and_h330_face/3Tf8vXykYhzHdT0BtsYTp570JGQ.jpg', 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.', 1);
INSERT INTO tb_movie (title, director, year, img_Url, synopsis, genre_id) VALUES ('12 Angry Men', 'Sidney Lumet', 1957, 'https://www.themoviedb.org/t/p/w220_and_h330_face/ppd84D2i9W8jXmsyInGyihiSyqz.jpg', 'The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors’ prejudices and preconceptions about the trial, the accused, and each other.', 2);
INSERT INTO tb_movie (title, director, year, img_Url, synopsis, genre_id) VALUES ('Casablanca', 'Michael Curtiz', 1942, 'https://www.themoviedb.org/t/p/w220_and_h330_face/pQjUifS7GXimKOtRwPf8nXWw1bd.jpg', 'In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications.', 3);
INSERT INTO tb_movie (title, director, year, img_Url, synopsis, genre_id) VALUES ('Citizen Kane', 'Orson Welles', 1941, 'https://www.themoviedb.org/t/p/w220_and_h330_face/sav0jxhqiH0bPr2vZFU0Kjt2nZL.jpg', 'Newspaper magnate, Charles Foster Kane is taken from his mother as a boy and made the ward of a rich industrialist. As a result, every well-meaning, tyrannical or self-destructive move he makes for the rest of his life appears in some way to be a reaction to that deeply wounding event.', 2);
INSERT INTO tb_movie (title, director, year, img_Url, synopsis, genre_id) VALUES ('The Godfather: Part II', 'Francis Ford Coppola', 1974, 'https://www.themoviedb.org/t/p/w220_and_h330_face/yB3AkkGMFplGlnPqQZ38W7bdD10.jpg', 'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.', 1);
INSERT INTO tb_movie (title, director, year, img_Url, synopsis, genre_id) VALUES ('Rear Window', 'Alfred Hitchcock', 1954, 'https://www.themoviedb.org/t/p/w220_and_h330_face/ILVF0eJxHMddjxeQhswFtpMtqx.jpg', 'Professional photographer L.B. ‘Jeff’ Jeffries breaks his leg while getting an action shot at an auto race. Confined to his New York apartment, he spends his time looking out of the rear window observing the neighbors. When he begins to suspect that a man across the courtyard may have murdered his wife, Jeff enlists the help of his high society fashion-consultant girlfriend and his visiting nurse to investigate.', 4);
INSERT INTO tb_movie (title, director, year, img_Url, synopsis, genre_id) VALUES ('Psycho', 'Alfred Hitchcock', 1960, 'https://www.themoviedb.org/t/p/w220_and_h330_face/5j5tdV8tMTy7FBdSNiYxp9Fj1Or.jpg', 'When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.', 4);
INSERT INTO tb_movie (title, director, year, img_Url, synopsis, genre_id) VALUES ('Vertigo', 'Alfred Hitchcock', 1958, 'https://www.themoviedb.org/t/p/w220_and_h330_face/9CUtuP2U5JsaZynXLqN3IucdJds.jpg', 'A retired San Francisco detective suffering from acrophobia investigates the strange activities of an old friend’s wife, all the while becoming dangerously obsessed with her.', 4);
INSERT INTO tb_movie (title, director, year, img_Url, synopsis, genre_id) VALUES ('City Lights', 'Charlie Chaplin', 1931, 'https://www.themoviedb.org/t/p/w220_and_h330_face/bXNvzjULc9jrOVhGfjcc64uKZmZ.jpg', 'City Lights is the first silent film that Charlie Chaplin directed after he established himself with sound accompanied films. The film is about a penniless man who falls in love with a flower girl.', 5);
INSERT INTO tb_movie (title, director, year, img_Url, synopsis, genre_id) VALUES ('Seven Samurai', 'Akira Kurosawa', 1954, 'https://www.themoviedb.org/t/p/w220_and_h330_face/tGLc7BE56VkIfDJVRoT9GLMBUr9.jpg', 'A samurai answers a village’s request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food. A giant battle occurs when 40 bandits attack the village.', 6);

INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Filme muito bom, recomendo', 1, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Filme nota 10!!!!', 2, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Melhor que esse não tem!', 3, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Esse filme me faz lembrar da Maria Chiquinha', 4, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Esse filme me faz lembrar da Maria Chiquinha', 5, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Filme assustador!', 6, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Esse diretor é d+', 7, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Esse filme é de comédia, mas me deixa triste', 8, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Filme de ação hahaha', 9, 1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Esse filme é para os fortes', 10, 1);






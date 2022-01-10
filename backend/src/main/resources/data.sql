INSERT INTO tb_user (name, email, password) VALUES ('Bob Brown', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Ana Green', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_genre (name) VALUES ('Aventura');
INSERT INTO tb_genre (name) VALUES ('Ficção');
INSERT INTO tb_genre (name) VALUES ('Romance');
    
INSERT INTO tb_movie (title, sub_title, year, synopsis, img_url, genre_id) VALUES ('The flash', 'O futuro favorece o mais rápido', 2014, 'Um perito forense desperta de um coma com poderes especiais que serão postos à prova na luta contra forças que ameaçam a cidade.', 'https://www.themoviedb.org/t/p/w500_and_h282_face/4lFnO2gAuypakvm82WKzqCqwl1D.jpg', 1 );
INSERT INTO tb_movie (title, sub_title, year, synopsis, img_url, genre_id) VALUES ('A filha de Osiris', 'Corrida contra o tempo', 2016, 'A história se passa no futuro, em tempos de colonização interplanetária. Sy Lombrok (Kellan Lutz), um ex-enfermeiro e que agora é um andarilho,com um passado assombrado, forma uma aliança improvável com Kane Sommerville (Daniel MacPherson), um tenente que trabalha fora do mundo militar Exor.', 'https://www.themoviedb.org/t/p/original/5HlTix2YQw24NCGZ7D83VJeRkLh.jpg', 2);
INSERT INTO tb_movie (title, sub_title, year, synopsis, img_url, genre_id) VALUES ('The walking dead', 'Lute contra os mortos. Tema os vivos.', 2010, 'Nos Estados Unidos pós-apocalíptico, um pequeno grupo de sobreviventes segue viajando à procura de uma nova casa longe dos mortos-vivos. O desespero por segurança e suprimentos os coloca constantemente à beira da sanidade.', 'https://www.themoviedb.org/t/p/original/ghGic3JMdgg1fSuPMj45S0QYUl9.jpg', 2);
INSERT INTO tb_movie (title, sub_title, year, synopsis, img_url, genre_id) VALUES ('Alerta vermelho', 'Roubar é uma arte', 2021, 'No mundo do crime internacional, a INTERPOL lança um Alerta Vermelho, o que inicia uma caçada para capturar a mais notória ladra de artes do globo.', 'https://www.themoviedb.org/t/p/original/vBEpnpabTNAD4Boum5JIomBJYJy.jpg', 1);
INSERT INTO tb_movie (title, sub_title, year, synopsis, img_url, genre_id) VALUES ('Romance', 'Love is desolate. Sex is forever.', 1999, 'Although deeply in love with her boyfriend — and indeed sleeping in the same bed with him — a schoolteacher cannot handle the almost complete lack of intimacy he will allow.Increasingly frustrated, she gradually finds her sexual appetites leading her into ever more risky situations, including a developing one with the headmaster.', 'https://www.themoviedb.org/t/p/original/aU9iL972Kow2mib9utE5YHcM400.jpg', 3);
INSERT INTO tb_movie (title, sub_title, year, synopsis, img_url, genre_id) VALUES ('As cores do amor', 'Em busca da felicidade', 2021, 'Quando a bibliotecária Taylor Harris de repente perde o emprego, volta para a sua pequena cidade natal em Montana. Aí, envolve-se no combate para ajudar a salvar o pequeno hotel do irmão do magnata Joel Sheehan,que o quer remodelar - mas as coisas acabam por se complicar quando ela se apaixona por Joel.', 'https://www.themoviedb.org/t/p/original/4mDxw3jcPVXfdtsZr3JOoKLfIhX.jpg', 3);
INSERT INTO tb_movie (title, sub_title, year, synopsis, img_url, genre_id) VALUES ('A perseguição', 'Live or Die on This Day', 2011, 'Ottway (Liam Neeson) trabalha em um lugar isolado no Alasca e seu papel é manter os lobos afastados dos funcionários de sua empresa. Certo dia, quando retornava à cidade para matar a saudade da esposa (Anne Openshaw), o avião cai. Feridos e sem alimentos, os sobreviventes lutam pela vida e tentam reencontrar a civilização.', 'https://www.themoviedb.org/t/p/original/c9VuAhIVz51NJnQnkdj8TDwFcTz.jpg', 1);
INSERT INTO tb_movie (title, sub_title, year, synopsis, img_url, genre_id) VALUES ('Isto não é uma ficção', 'Você sabe o que é tribusfobia?', 2018, 'Uma equipe de filmagem acompanha a rotina nada convencional de Heleno (Júlio César Perrud), portador de uma doença desconhecida pela maioria da população.No decorrer da sufocante tentativa de Heleno em se adaptar ao mundo, surgem conflitos que, a princípio, aparentam ser absurdos e fora do que a nossa sociedadeestá familiarizada.', 'https://www.themoviedb.org/t/p/original/7IMcwJmSD1ELgE34LkoAI9u5uPK.jpg', 2);
INSERT INTO tb_movie (title, sub_title, year, synopsis, img_url, genre_id) VALUES ('Meu romance perfeito', 'O conto de fada se torna realidade', 2018, 'Com o Dia dos Namorados se aproximando, uma programadora propõe um algoritmo de namoro revolucionário ao novo CEO, e os dois decidem servir de cobaia para o produto.Mas as coisas acabam por se complicar quando ela se apaixona por seu amigo.', 'https://www.themoviedb.org/t/p/original/uOFhqMldmiZ3i1LCv7Vu7VMLGr0.jpg', 3);
INSERT INTO tb_movie (title, sub_title, year, synopsis, img_url, genre_id) VALUES ('Viúva negra', 'Seu mundo. Seus segredos. Seu legado', 2021, 'Natasha Romanoff, também conhecida como Viúva Negra, confronta o lado mais sombrio de sua história quando surge uma perigosa conspiração ligada ao seu passado.Perseguida por uma força implacável disposta a tudo para destruí-la.', 'https://www.themoviedb.org/t/p/original/cU5W7N5yfenDFbWX3NSuSrmD1WE.jpg', 1);

INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Excelente filme eu recomendo assistir', 1, 1);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Bom filme e tem um ótimo elenco', 2, 1);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Muito interessante eu assistirei novamente', 2, 2);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Excelente filme eu recomendo assistir', 1, 2);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Muito interessante eu assistirei novamente', 2, 3);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Excelente filme eu recomendo assistir', 2, 4);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Muito interessante eu assistirei novamente', 1, 3);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Bom filme e tem um ótimo elenco', 2, 5);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Muito interessante eu assistirei novamente', 2, 6);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Excelente filme eu recomendo assistir', 1, 4);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Bom filme e tem um ótimo elenco', 1, 5);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Muito interessante eu assistirei novamente', 1, 6);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Muito interessante eu assistirei novamente', 2, 7);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Bom filme e tem um ótimo elenco', 2, 8);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Excelente filme eu recomendo assistir', 2, 9);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Muito interessante eu assistirei novamente', 2, 10);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Excelente filme eu recomendo assistir', 1, 7);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Bom filme e tem um ótimo elenco', 1, 8);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Excelente filme eu recomendo assistir', 1, 9);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Muito interessante eu assistirei novamente', 1, 10);
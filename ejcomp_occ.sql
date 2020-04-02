-- phpMyAdmin SQL Dump
-- version 4.2.12deb2+deb8u3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Tempo de geração: 12/02/2020 às 23:29
-- Versão do servidor: 10.0.35-MariaDB-0+deb8u1
-- Versão do PHP: 5.6.36-0+deb8u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de dados: `ejcomp_occ`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `admins`
--

CREATE TABLE IF NOT EXISTS `admins` (
`id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `admins`
--

INSERT INTO `admins` (`id`, `email`, `password_hash`, `created_at`, `updated_at`) VALUES
(1, 'admin@occ.com', '$2a$08$RlNGGZkuhaBvMkIRDMmWoun6iy88/wVCFaGsmHdzzpFOaC4HEVOVC', '2020-01-05 19:58:20', '2020-01-05 19:58:20');

-- --------------------------------------------------------

--
-- Estrutura para tabela `classes`
--

CREATE TABLE IF NOT EXISTS `classes` (
`id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(500) NOT NULL,
  `link` varchar(255) NOT NULL,
  `course_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
`id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `status` int(11) NOT NULL,
  `approved` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `courses`
--

CREATE TABLE IF NOT EXISTS `courses` (
`id` int(11) NOT NULL,
  `module_id` int(11) NOT NULL,
  `path` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(500) NOT NULL,
  `hours` double NOT NULL,
  `book` varchar(255) NOT NULL,
  `assistance` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `highlight` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `modules`
--

CREATE TABLE IF NOT EXISTS `modules` (
`id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `courses_quantity` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `modules`
--

INSERT INTO `modules` (`id`, `name`, `courses_quantity`, `created_at`, `updated_at`) VALUES
(2, 'Kabbalah 1/2', 0, '2020-02-06 01:23:34', '2020-02-06 01:23:34');

-- --------------------------------------------------------

--
-- Estrutura para tabela `publications`
--

CREATE TABLE IF NOT EXISTS `publications` (
`id` int(11) NOT NULL,
  `path` varchar(255) NOT NULL,
  `title` varchar(500) NOT NULL,
  `text` varchar(50000) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `publications`
--

INSERT INTO `publications` (`id`, `path`, `title`, `text`, `created_at`, `updated_at`) VALUES
(1, 'ffa69263405381da622fa85dcb72490f.png', 'Rabi Shimon Bar Yochai na caverna', '<p>"[...] Quando jovem, Shimon estudou na grande academia dos estudiosos de Yavneh, fundada pelo rabino Yochanan ben Zakkai, que morreu na época em que Shimon nasceu. O professor principal de Shimon era o famoso Rabino Akiva, que tinha sua academia em Benei Berak. Shimon tornou-se tão apegado ao seu mestre, Rabi Akiva, que este o chamou de "meu filho". Durante a cruel perseguição do imperador romano Adriano, quando as Academias Talmúdicas foram encerradas e o estudo do Talmud foi proibido sob pena de morte. Rabi Akiva continuou a ensinar publicamente o Talmud, e seu dedicado aluno Shimon permaneceu ao seu lado, até que Rabi Akiva foi preso. Mesmo assim, Shimon continuou a visitar seu mestre na prisão para receber instruções lá. Somente a morte foi capaz de finalmente separa-los, pois o Rabi Akiva foi condenado à morte de um mártir por Kiddush Hashem (a santificação do nome de D''us). Shimon fugiu para salvar sua vida junto com seu filho, o rabino Elazar. Por algum tempo, eles ficaram escondidos na Bet Hamedrash (academia), onde a esposa do rabino Shimon lhes trouxe pão e água diariamente. Quando a busca foi intensificada, eles decidiram procurar um esconderijo melhor. Sem contar a ninguém sobre o seu paradeiro, eles se esconderam em uma caverna. D''us fez com que uma alfarrobeira brotasse na entrada da caverna, além de uma fonte de água fresca. Por doze anos, o rabino Shimon bar Yochai e seu filho Elazar moraram na caverna, sustentando-se em alfarroba e água. É dito que eles penduravam suas túnicas, se enterravam até a cabeça abaixo da terra e estudavam a Torah em níveis extraordinários de percepção; no momento da reza "Shema Israel" (ao amanhecer e ao anoitecer) eles desenterravam seus corpos da terra, trajavam a túnica e realizavam a reza. Durante o Shabat, Rabi Shimon e Rabi Elazar comiam 36g de alfarrobas e 40ml de água, sendo o único dia que trajavam suas túnicas o dia inteiro (justamente para honrar o Shabat). Durante treze anos eles estudaram, jejuaram e oraram, até se tornarem os sábios mais sagrados de seus dias. [...]" - <strong>Aleph Yaakov.</strong></p>', '2020-02-06 01:15:50', '2020-02-06 01:15:50'),
(2, 'e2ade5e08ee61d258fb29cb3e10c344a.png', 'A escada de Jacó', '<p>"[...] Bereshit 28:10: "E tomou das pedras do lugar, e colocou-as à sua cabeceira, e deitou-se naquele lugar. E sonhou, e eis que uma escada estava apoiada na terra, e seu topo chegava aos céus: eis que anjos de Deus subiam e desciam por ela. E eis que o Eterno estava sobre ela, e dizia: “Eu sou o Eterno, Deus de Abraão, teu patriarca, e Deus de Isaac. A terra sobre a qual tu estás deitado , a ti darei-a, e à tua semente . E será tua semente como o pó da terra, e te espalharás ao oeste, e ao leste, e ao norte, e ao sul. E se abençoarão em ti todas<br>as famílias da terra, e em tua semente. E despertou Jacob de seu sono, e disse: “Certamente o Eterno está neste lugar, e eu não sabia. E temeu e disse; “Quão espantoso é este lugar! Este não é outro que a casa de D''us, e esta é o portal dos Céus ... e chamou o nome daquele lugar Bet-El." - Atentemos para alguns símbolos místicos revelados nesta passagem. A pedra da qual Jacó deitou-se sobre, é a pedra filosofal da alquimia, a pedra angular lapidada. Ao deitar-se sobre ela, Jacó nos revela a sua leveza para a contemplação e a sua sapiência como um homem reto, um verdadeiro tsadiq (justo). Os anjos, primeiramente, subiam para depois descer. Isso nos revela que os anjos estão entre nós e eles sobem com as orações dos justos para entregar ao Eterno, que distribui Suas bênçãos aos anjos, que descem ao plano material para fazê-las valer Sua glória. Então, D''us revela Sua magnificência no portão celestial que se abriu diante seus olhos, revelando Sua Santa Aliança com o patriarca Abraão e Isaac. O mistério da escada de jacó e a pedra de Bet-El está na lapidação do Eu bruto (alma animal) para que assim o corpo possa cessar (shabbat) e repousar sobre a pedra lapidada. Desta forma, o Adepto recebe a revelação dos portões dos céus, e é agraciado com a sua promessa. Os místicos degraus da escada de Jacó são as vinte e duas potências de elevação que unificam-no com o Eterno. [...]" - <strong>Aleph Yaakov.</strong></p>', '2020-02-06 01:17:49', '2020-02-06 01:17:49'),
(3, 'd0445115a3bc761f1916cb4d44b783a4.png', 'Cosmovisão Semita', '<p>"A Bíblia é popularmente interpretada de maneira alegórica pela grande maioria de fiéis, sejam católicos, evangélicos ou judeus messiânicos. O leitor da Bíblia que desconhece o contexto histórico do qual ela foi escrita pode se deparar com termos como "as comportas do céu", "os pilares que sustentam o mundo", "as águas de cima da expansão e as águas debaixo da expansão", e assim, invocam uma interpretação alegórica equivocada quando imaginam o contexto de tais "alegorias". No entanto, para o semita do Antigo Oriente Médio, todas essas passagens eram literais, de forma que as comportas do céu são aberturas do céu do qual o Eterno faz cair a chuva, mesmo sendo hoje entendido como algo alegórico, quando falado por alguns religiosos "o Eterno derrama suas bênçãos pelas comportas do céu". O "derramar" é justamente porque eles acreditavam que a chuva só poderia vir ao chão por conta das águas de cima que eram derramadas no povo, e assim, a chuva molhava a terra que dava grãos e por isso a chuva era para eles um milagre de grande importância para o desenvolvimento da nação. É imprescindível ter o conhecimento adequado sobre o contexto histórico do qual o livro mais importante do mundo foi escrito, justamente para que você não sirva de capacho na mão de aproveitadores que desviam o sentido correto das passagens. Não seja um incauto, explore a fundo o contexto através de um estudo arqueológico, filosófico e histórico da tradição, de forma a alimentar a sua fé com Verdade e assim, avançar para um entendimento mais profundo da tradição, sem o idealismo político-religioso alimentado pelas grandes religiões atuais. De nada vale ao homem incauto estudar a Kabbalah e as entranhas da Torá, se ele não entende o contexto histórico do qual a sua fé está inserida, e a cosmovisão necessária para o exercício desta fé." - Aleph Yaakov.</p>', '2020-02-06 01:18:28', '2020-02-06 01:18:28'),
(4, '2f5e6c0f7dd3870bc83e4574b2c0a406.png', 'O Manifesto Monoteísta', '<p>"Desde quando houve a primeira queda do Homem Primordial (Adão), a humanidade estaria dividida em dois pólos: aqueles que buscam retornar (Semitas) e aqueles que buscam se estabelecer (Sumérios). Primeiramente, Abel agradou aos olhos de D''us por buscar sua dissolução na Unidade, diferente de Caim que buscava sua própria adoração. Caim foi enviado ao oriente do Éden, que teoricamente, pode estar associado as Plêiades. Da mesma forma ocorreu nos tempos de Noé, que era um justo entre as nações de sua época e serviu como fundamento para a nova humanidade. Após o dilúvio, no quarto milênio antes de Cristo, encontramos o Oriente Médio dividido entre os Semitas, filhos de Sam, que viviam nas periferias, eram pastores nômades que não assimilavam sua cultura, e no perímetro urbano nós tínhamos os sumérios, cuja origem não é rastreável até hoje, mas podem estar diretamente relacionados a Caim e o "povo das Plêiades". O código de leis que orientava a população suméria era extremamente rigoroso e de grandes abusos, muito distante de ser um relacionamento justo para o povo. Segundo as tábuas sumérias, a humanidade foi criada exclusivamente para servir os deuses, e os únicos que tinham o respeito dos ditos deuses eram os reis das cidades-estados que, desta forma, conduzia pelo medo a civilização. Deles eram cobrados altas taxas de impostos. Para cada grão da colheita, 4/5 era enviado para o rei como pagamento de imposto, pois ele é o único de descendência divina. Tal como o código de Hamurabi da Babilônia, que também está associado ao dito "olho por olho, dente por dente", e tamanha exploração das pessoas comuns. Diante deste caos social nasce a Torá, onde o protagonista, em direção oposta as leis sumérias, não são heróis, reis e deuses, mas o Eterno, bendito seja, o Deus Único. A Torá, diante do inferno político propagado pelo paganismo, que explorava o trabalhador, apresenta que toda a humanidade foi feita a imagem e semelhança dele, e portanto, não existem reis diante d''Ele. O Eterno apresenta leis para que o povo possa se ver livre da tirania dos reis, que escravizam sua alma e sua Santidade. [...]” - <strong>Aleph Yaakov</strong></p>', '2020-02-06 01:21:31', '2020-02-06 01:21:31');

-- --------------------------------------------------------

--
-- Estrutura para tabela `services`
--

CREATE TABLE IF NOT EXISTS `services` (
`id` int(11) NOT NULL,
  `path` varchar(500) NOT NULL,
  `name` varchar(500) NOT NULL,
  `description` varchar(500) NOT NULL,
  `link` varchar(500) NOT NULL,
  `price` double NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `service_purchases`
--

CREATE TABLE IF NOT EXISTS `service_purchases` (
`id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `paid` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `student_courses`
--

CREATE TABLE IF NOT EXISTS `student_courses` (
`id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `paid` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `module` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `users`
--

INSERT INTO `users` (`id`, `email`, `password_hash`, `name`, `birth_date`, `city`, `state`, `country`, `phone_number`, `module`, `type`, `created_at`, `updated_at`) VALUES
(1, 'guilherme.couto@unesp.br', '$2a$08$W7DN7bCuyrNKz.LiNQ3PBeaR0UXCUNd1sW.2EH854WcPynH.r5542', 'Guilherme Couto', '1994-08-08', 'Galia', 'Sao Paulo', 'Brasil', '14996903532', 1, 0, '2020-01-24 23:49:45', '2020-02-07 18:05:01'),
(2, 'matheus7thompson@gmail.com', '$2a$08$diHjKwpRh2Dl4d8QR1Vhe.jrH.ALpXvIT6tlg6V5ZR.ErK/FFDXq6', 'Matheus Emmanuel Thompson de Almeida', '1978-10-11', 'Aracaju', 'Sergipe', 'Brasil', '79998862876', 1, 0, '2020-01-30 00:32:54', '2020-01-30 00:32:54'),
(3, 'antunesaraujo@gmail.com', '$2a$08$3gUBao4P6AQ0CiXWVqP/7.kU3mIiU7sdrFlCNejJ.lxmwko3wZ6Q2', 'Marcelo Antunes de Araujo', '1969-07-08', 'Cabo Frio', 'Rio de Janeiro', 'Brasil', '(22) 97402-6815', 1, 0, '2020-01-30 12:54:27', '2020-02-03 22:22:55'),
(4, 'pedrooctavio.g.r@gmal.com', '$2a$08$wQmJLWHFeLGWQJHz7IYEVuim0AAndkAHFzUHMelFUB./1BgGbApn2', 'Pedro Octávio Gonzaga Rodrigues', '1987-03-17', 'Montes Claros', 'MG', 'Brasil', '38984220166', 1, 0, '2020-01-30 14:11:05', '2020-01-30 14:11:05'),
(5, 'paullaizel@hotmail.com', '$2a$08$wfDnZf3n5UG55tWIFcfiUe9HZQ6c1zgTtcWdSe2AbLlKkK6YMjJk2', 'Paula Valéria de Oliveira Izel ', '1983-05-04', 'Manaus', 'Amazonas', 'Brasil', '92993032382', 1, 0, '2020-01-30 16:10:59', '2020-01-30 16:10:59'),
(6, 'kayke_martin@hotmail.com', '$2a$08$bOR9gCi/i44/1XRkabznOO45fq.ABsGcYc/Vbo3XEIrZv/otpyIjK', 'Carlos Henrique Martin', '1993-08-04', 'Arapongas', 'Paraná', 'Brasil', '43 999768162', 1, 0, '2020-01-30 16:14:59', '2020-01-30 16:14:59'),
(8, 'contatobrunobrizola@gmail.com', '$2a$08$OVf.5oapWh1XPvSIEo/RkOQmuAn7oyWYWUFLnWx4SfrRT4OJi1xCW', 'Gabriela Chaves', '1991-09-08', 'Avare', 'SP', 'Brasil', '18998221354', 1, 0, '2020-01-30 16:24:38', '2020-01-30 16:24:38'),
(9, 'victorcoltrane@gmail.com', '$2a$08$ZQwAYJE6au7.uOTMf5qc1.WPbay8DbJ7eL.GCMtcbkhXGasEUY3Du', 'Victor Alexandre Pascoal de Medeiros. ', '1989-09-11', 'Recife ', 'Pernambuco', 'Brasil', '81998127147', 1, 0, '2020-01-30 19:12:46', '2020-01-30 19:12:46'),
(10, 'gabrielcoimbra9@Gmail.com', '$2a$08$kngEXkWJsyawJPxyD9Ld/uaYi3ApR9C9m06Lons7UuSHzb16Tk8.a', 'Gabriel Coimbra Bacha', '1999-02-02', 'Ribeirão Preto ', 'São Paulo ', 'Brasil ', '+5516991151339', 1, 0, '2020-01-30 22:04:11', '2020-01-30 22:04:11'),
(11, 'gabriela.chfigueira@gmail.com', '$2a$08$wvVwaRqWfAw..KLVLCSJvu7eQtcwYjJrOHpF8jaU2J2mEEhkR1lNK', 'Gabriela Chaves Figueira', '1994-09-08', 'São José do Rio Preto', 'SP', 'Brasil', '18998221354', 1, 0, '2020-02-06 01:31:54', '2020-02-06 01:31:54'),
(12, 'amellom@hotmail.com', '$2a$08$IOZvzcgFo8cJuE/J1lVjOuyvIHsgItf//6RDbeaTENkEXYPZ0y1fu', 'Antonio Medeiros', '1995-10-13', 'São Paulo', 'Sp', 'Brasil', '', 1, 0, '2020-02-06 01:58:45', '2020-02-06 01:58:45'),
(13, 'mlauriano11@gmail.com', '$2a$08$dMQv0FQkVpvPYOwBiTnsyOLoMcLUipfSTX7Aeg/pJDineLOf/nAla', 'Marcos Lauriano', '1986-06-18', 'itabaianinha', 'sergipe', 'Brasil', '79999563414', 1, 0, '2020-02-07 13:31:45', '2020-02-07 13:31:45'),
(14, 'better.lunting@gmail.com', '$2a$08$v/kD1K41Civc7pWAJ8BeiujD92cw0W/pD6S9piEvwPjgJRP69ue/m', 'Brenno Ariel Da Silva Castro', '1998-04-18', 'NOVA FRIBURGO', 'RJ', 'Brasil', '22 992073207', 1, 0, '2020-02-08 21:52:48', '2020-02-08 21:52:48');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `admins`
--
ALTER TABLE `admins`
 ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `classes`
--
ALTER TABLE `classes`
 ADD PRIMARY KEY (`id`), ADD KEY `course_id` (`course_id`);

--
-- Índices de tabela `comments`
--
ALTER TABLE `comments`
 ADD PRIMARY KEY (`id`), ADD KEY `user_id` (`user_id`,`course_id`), ADD KEY `course_id` (`course_id`);

--
-- Índices de tabela `courses`
--
ALTER TABLE `courses`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `name` (`name`), ADD KEY `module_id` (`module_id`);

--
-- Índices de tabela `modules`
--
ALTER TABLE `modules`
 ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `publications`
--
ALTER TABLE `publications`
 ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `services`
--
ALTER TABLE `services`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `name` (`name`);

--
-- Índices de tabela `service_purchases`
--
ALTER TABLE `service_purchases`
 ADD PRIMARY KEY (`id`), ADD KEY `user_id` (`user_id`,`service_id`), ADD KEY `service_id` (`service_id`);

--
-- Índices de tabela `student_courses`
--
ALTER TABLE `student_courses`
 ADD PRIMARY KEY (`id`), ADD KEY `user_id` (`user_id`), ADD KEY `course_id` (`course_id`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `admins`
--
ALTER TABLE `admins`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de tabela `classes`
--
ALTER TABLE `classes`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `comments`
--
ALTER TABLE `comments`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `courses`
--
ALTER TABLE `courses`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `modules`
--
ALTER TABLE `modules`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de tabela `publications`
--
ALTER TABLE `publications`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de tabela `services`
--
ALTER TABLE `services`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `service_purchases`
--
ALTER TABLE `service_purchases`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `student_courses`
--
ALTER TABLE `student_courses`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `classes`
--
ALTER TABLE `classes`
ADD CONSTRAINT `fk_course_id` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `comments`
--
ALTER TABLE `comments`
ADD CONSTRAINT `fk_comments_course_id` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `fk_comments_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `courses`
--
ALTER TABLE `courses`
ADD CONSTRAINT `fk_module_id` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `service_purchases`
--
ALTER TABLE `service_purchases`
ADD CONSTRAINT `fk_service_id` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `fk_userId` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `student_courses`
--
ALTER TABLE `student_courses`
ADD CONSTRAINT `fk_courseId` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 27 2024 г., 13:19
-- Версия сервера: 8.0.19
-- Версия PHP: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `city_portal`
--

-- --------------------------------------------------------

--
-- Структура таблицы `statements`
--

CREATE TABLE `statements` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(3000) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `statements`
--

INSERT INTO `statements` (`id`, `user_id`, `title`, `description`, `created_at`) VALUES
(22, 55, 'Городские урны', 'Нет мусорок на многих улицах', '2024-03-27 03:59:57'),
(23, 54, 'Проблема с дорогами', 'Дороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужасДороги ужас', '2024-03-27 04:01:46');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `fio` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `login` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `fio`, `login`, `email`, `password`, `created_at`) VALUES
(54, 'Шубников Даниил Николавич', 'shubneckin', 'shubnechkin@mail.ru', '12345678', '2024-03-27 03:58:03'),
(55, 'Иванов Иван Иванович', 'Ivanov', 'ivanov@mail.ru', 'test', '2024-03-27 03:59:31');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `statements`
--
ALTER TABLE `statements`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `statements`
--
ALTER TABLE `statements`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

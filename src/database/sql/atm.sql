CREATE TABLE `tbl_atm` (
  `id` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `codigo` (`codigo`),
  UNIQUE KEY `codigo_2` (`codigo`),
  UNIQUE KEY `codigo_3` (`codigo`),
  UNIQUE KEY `codigo_4` (`codigo`),
  UNIQUE KEY `codigo_5` (`codigo`),
  UNIQUE KEY `codigo_6` (`codigo`),
  UNIQUE KEY `codigo_7` (`codigo`),
  UNIQUE KEY `codigo_8` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
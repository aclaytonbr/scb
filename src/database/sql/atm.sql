CREATE TABLE `tbl_atm` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `codigo` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_atm_UN` (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
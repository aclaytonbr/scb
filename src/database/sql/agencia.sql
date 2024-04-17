-- financeiro.tbl_agencia definition

CREATE TABLE `tbl_agencia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_banco` int NOT NULL,
  `codigo` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_banco` (`id_banco`),
  CONSTRAINT `tbl_agencia_ibfk_1` FOREIGN KEY (`id_banco`) REFERENCES `tbl_banco` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
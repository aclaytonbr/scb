-- financeiro.tbl_agencia definition

CREATE TABLE `tbl_agencia` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_banco` int unsigned NOT NULL,
  `numero` varchar(10)  NOT NULL,
  `nome` varchar(100)  NOT NULL,
  `endereco` varchar(100)  NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_agencia_UN` (`numero`),
  KEY `tbl_agencia_FK` (`id_banco`),
  CONSTRAINT `tbl_agencia_FK` FOREIGN KEY (`id_banco`) REFERENCES `tbl_banco` (`id`)
);
-- financeiro.tbl_credenciamento definition

CREATE TABLE `tbl_credenciamento` (
  `id_banco` int NOT NULL,
  `id_atm` int NOT NULL,
  PRIMARY KEY (`id_banco`,`id_atm`),
  KEY `tbl_atm_banco_FK_1` (`id_atm`),
  CONSTRAINT `tbl_atm_banco_FK` FOREIGN KEY (`id_banco`) REFERENCES `tbl_banco` (`id`),
  CONSTRAINT `tbl_atm_banco_FK_1` FOREIGN KEY (`id_atm`) REFERENCES `tbl_atm` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
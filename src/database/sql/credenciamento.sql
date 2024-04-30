-- financeiro.tbl_credenciamento definition
CREATE TABLE `tbl_credenciamento` (
  `id_banco` int unsigned NOT NULL,
  `id_atm` int unsigned NOT NULL,
  KEY `tbl_credenciamento_FK` (`id_banco`),
  KEY `tbl_credenciamento_FK_1` (`id_atm`),
  CONSTRAINT `tbl_credenciamento_FK` FOREIGN KEY (`id_banco`) REFERENCES `tbl_banco` (`id`),
  CONSTRAINT `tbl_credenciamento_FK_1` FOREIGN KEY (`id_atm`) REFERENCES `tbl_atm` (`id`)
);
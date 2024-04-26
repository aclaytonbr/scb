-- financeiro.tbl_agencia definition

CREATE TABLE `tbl_agencia` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_banco` int unsigned NOT NULL,
  `numero` varchar(10) CHARACTER SET NOT NULL,
  `nome` varchar(100) CHARACTER SET NOT NULL,
  `endereco` varchar(100) CHARACTER SET NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_agencia_UN` (`numero`)
)
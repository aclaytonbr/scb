-- financeiro.tbl_conta definition

CREATE TABLE `tbl_conta` (
  `id` int NOT NULL COMMENT 'Correntista ao qual a conta está vinculada',
  `id_agencia` int NOT NULL COMMENT 'Agencia a qual a conta está vinculada',
  `numero` varchar(10) NOT NULL COMMENT 'Número da conta perante o banco',
  `nome_completo` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `password` varchar(10) NOT NULL DEFAULT '123456',
  `limite_especial` decimal(10,0) DEFAULT '0' COMMENT 'Armazena o valor do limite extra do correntista',
  `saldo` decimal(10,0) DEFAULT '0' COMMENT 'Armazena o saldo da conta de um correntista',
  PRIMARY KEY (`id`),
  KEY `tbl_conta_FK` (`id_agencia`),
  CONSTRAINT `tbl_conta_FK` FOREIGN KEY (`id_agencia`) REFERENCES `tbl_agencia` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Armazena as contas bancárias de um correntista';
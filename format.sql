-- DROP DATABASE IF EXISTS burger_db;

-- CREATE DATABASE burger_db;

-- USE burger_db;

-- DROP TABLE IF EXISTS `burgers`;
-- CREATE TABLE `burgers` (
--      `id` INT(12) NOT NULL AUTO_INCREMENT,
--      `burger_name` VARCHAR(50) NOT NULL,
--      `devoured` TINYINT(1) DEFAULT NULL,
--      `createdAt` DATETIME NOT NULL
--      `updatedAt` DATETIME NOT NULL
--      `deletedAt` DATETIME DEFAULT NULL,
--      `CustomerId` INT(11) DEFAULT NULL,
--      PRIMARY KEY(`id`),
--      KEY `CustomerId` (`CustomerId`),
--      CONSTRAINT `burgers_ibfk_1` FOREIGN KEY (`CustomerId`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
-- ) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- --  Dumping data for table burgers
-- LOCK TABLES `burgers` WRITE;
-- INSERT INTO `burgers` VALUES (1,'Poblano Picasso Burger',1,'2017-01-28 02:56:38','2017-01-28 02:57:57',NULL,5),(2,'Eggers Can\'t Be Cheesers',1,'2017-01-28 02:56:42','2017-01-28 02:57:48',NULL,3),(3,'Chile Relleno-You-Didn\'t Burger',1,'2017-01-28 02:56:46','2017-01-28 02:57:45',NULL,2),(4,'Beets of Burden Burger',1,'2017-01-28 02:57:05','2017-01-28 02:58:32',NULL,7),(5,'Gourdon-Hamsey Burger',1,'2017-01-28 02:57:24','2017-01-28 02:57:52',NULL,4),(6,'Cheeses Is Born Burger',0,'2017-01-28 02:58:21','2017-01-28 02:58:21',NULL,NULL);
-- UNLOCK TABLES;

-- -- Table structure for table `customers`
-- DROP TABLE IF EXISTS `customers`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!40101 SET character_set_client = utf8 */;
-- CREATE TABLE `customers` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `customer_name` varchar(255) NOT NULL,
--   `createdAt` datetime NOT NULL,
--   `updatedAt` datetime NOT NULL,
--   `deletedAt` datetime DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- -- Dumping data for table `customers`

-- LOCK TABLES `customers` WRITE;
-- /*!40000 ALTER TABLE `customers` DISABLE KEYS */;
-- INSERT INTO `customers` VALUES (1,'Bryce','2017-01-28 02:57:41','2017-01-28 02:57:41',NULL),(2,'Kevin','2017-01-28 02:57:45','2017-01-28 02:57:45',NULL),(3,'Kris','2017-01-28 02:57:48','2017-01-28 02:57:48',NULL),(4,'Cristian','2017-01-28 02:57:52','2017-01-28 02:57:52',NULL),(5,'Ken','2017-01-28 02:57:57','2017-01-28 02:57:57',NULL),(6,'','2017-01-28 02:58:27','2017-01-28 02:58:27',NULL),(7,'Bryce','2017-01-28 02:58:32','2017-01-28 02:58:32',NULL);
-- /*!40000 ALTER TABLE `customers` ENABLE KEYS */;
-- UNLOCK TABLES;
-- /*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

-- -- VALUES ('Hawaiian BBQ Burger', FALSE),
-- -- ('Little Bacon Cheeseburger', FALSE),
-- -- ('Scrum-Delicious Burger', FALSE),
-- -- ('Chile Veggie Burger', FALSE),
-- -- ('Black Bean Tofu Burger', FALSE);


-- /*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
-- /*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
-- /*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- /*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- -- Dump completed on 2017-01-27 19:00:18


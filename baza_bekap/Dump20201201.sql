CREATE DATABASE  IF NOT EXISTS `oglasi_db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `oglasi_db`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: oglasi_db
-- ------------------------------------------------------
-- Server version	5.7.29-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `kategorije`
--

DROP TABLE IF EXISTS `kategorije`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kategorije` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `naziv` char(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kategorije`
--

LOCK TABLES `kategorije` WRITE;
/*!40000 ALTER TABLE `kategorije` DISABLE KEYS */;
INSERT INTO `kategorije` VALUES (2,'Vozila'),(3,'Nekretnine'),(4,'Mobilni telefoni'),(6,'proba222'),(7,'Razno');
/*!40000 ALTER TABLE `kategorije` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `komentari`
--

DROP TABLE IF EXISTS `komentari`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `komentari` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tekst` text NOT NULL,
  `datum` date NOT NULL,
  `oglas_id` int(11) NOT NULL,
  `korisnik_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `oglas_id` (`oglas_id`),
  KEY `korisnik_id` (`korisnik_id`),
  CONSTRAINT `komentari_ibfk_1` FOREIGN KEY (`oglas_id`) REFERENCES `oglasi` (`id`),
  CONSTRAINT `komentari_ibfk_2` FOREIGN KEY (`korisnik_id`) REFERENCES `korisnici` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `komentari`
--

LOCK TABLES `komentari` WRITE;
/*!40000 ALTER TABLE `komentari` DISABLE KEYS */;
INSERT INTO `komentari` VALUES (2,'probni komentar 2','2020-11-07',1,11),(3,'probni komentar 333','2020-11-07',1,12);
/*!40000 ALTER TABLE `komentari` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `korisnici`
--

DROP TABLE IF EXISTS `korisnici`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `korisnici` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ime` varchar(50) NOT NULL,
  `prezime` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `hashed_password` text NOT NULL,
  `is_admin` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `korisnici`
--

LOCK TABLES `korisnici` WRITE;
/*!40000 ALTER TABLE `korisnici` DISABLE KEYS */;
INSERT INTO `korisnici` VALUES (11,'adm','adm','adm','65dde25a25139bd3a899ad1f24bd921a3b04409acc72381780093d9545979c6f2102d5d73c8eeed050894ffac17230c40f42b366b713c1cee92272ffe6091daa',1),(12,'usr','usr','usr','65dde25a25139bd3a899ad1f24bd921a3b04409acc72381780093d9545979c6f2102d5d73c8eeed050894ffac17230c40f42b366b713c1cee92272ffe6091daa',0);
/*!40000 ALTER TABLE `korisnici` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oglasi`
--

DROP TABLE IF EXISTS `oglasi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oglasi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tekst` text NOT NULL,
  `dat_objave` date NOT NULL,
  `dat_vazenja` date DEFAULT NULL,
  `kategorija_id` int(11) NOT NULL,
  `korisnik_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `kategorija_id` (`kategorija_id`),
  KEY `korisnik_id` (`korisnik_id`),
  CONSTRAINT `oglasi_ibfk_1` FOREIGN KEY (`kategorija_id`) REFERENCES `kategorije` (`id`),
  CONSTRAINT `oglasi_ibfk_2` FOREIGN KEY (`korisnik_id`) REFERENCES `korisnici` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oglasi`
--

LOCK TABLES `oglasi` WRITE;
/*!40000 ALTER TABLE `oglasi` DISABLE KEYS */;
INSERT INTO `oglasi` VALUES (1,'probni tekst oglasa 1','2020-11-06','2020-11-10',4,11),(3,'probni tekst oglasa 3','2020-11-06','2020-11-10',4,11),(4,'probni tekst oglasa 444','2020-11-06','2020-11-10',4,11),(5,'Probni tekst oglasa.','2020-11-27',NULL,2,12),(6,'Probni tekst 2.','2020-11-27',NULL,6,12),(7,'Tekst. Proba.','2020-11-27',NULL,6,12);
/*!40000 ALTER TABLE `oglasi` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-01 16:09:37

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
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kategorije`
--

LOCK TABLES `kategorije` WRITE;
/*!40000 ALTER TABLE `kategorije` DISABLE KEYS */;
INSERT INTO `kategorije` VALUES (2,'Vozila'),(3,'Nekretnine'),(4,'Mobilni telefoni'),(7,'Razno'),(38,'proba3_izmjena');
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `korisnici`
--

LOCK TABLES `korisnici` WRITE;
/*!40000 ALTER TABLE `korisnici` DISABLE KEYS */;
INSERT INTO `korisnici` VALUES (11,'Administrator','Administratorovic','adm','65dde25a25139bd3a899ad1f24bd921a3b04409acc72381780093d9545979c6f2102d5d73c8eeed050894ffac17230c40f42b366b713c1cee92272ffe6091daa',1),(12,'Korisnik','Korisnikovic','usr','65dde25a25139bd3a899ad1f24bd921a3b04409acc72381780093d9545979c6f2102d5d73c8eeed050894ffac17230c40f42b366b713c1cee92272ffe6091daa',0),(13,'Test','Test','test','65dde25a25139bd3a899ad1f24bd921a3b04409acc72381780093d9545979c6f2102d5d73c8eeed050894ffac17230c40f42b366b713c1cee92272ffe6091daa',0);
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
  `naslov` varchar(45) NOT NULL,
  `tekst` text NOT NULL,
  `fotografije` text NOT NULL,
  `dat_objave` date NOT NULL,
  `dat_vazenja` date DEFAULT NULL,
  `arhiviran` int(11) NOT NULL,
  `kategorija_id` int(11) NOT NULL,
  `potkategorija_id` int(11) NOT NULL,
  `korisnik_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `kategorija_id` (`kategorija_id`),
  KEY `korisnik_id` (`korisnik_id`),
  KEY `potkategorija_id` (`potkategorija_id`),
  CONSTRAINT `oglasi_ibfk_1` FOREIGN KEY (`kategorija_id`) REFERENCES `kategorije` (`id`),
  CONSTRAINT `oglasi_ibfk_2` FOREIGN KEY (`korisnik_id`) REFERENCES `korisnici` (`id`),
  CONSTRAINT `oglasi_ibfk_3` FOREIGN KEY (`potkategorija_id`) REFERENCES `podkategorije` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oglasi`
--

LOCK TABLES `oglasi` WRITE;
/*!40000 ALTER TABLE `oglasi` DISABLE KEYS */;
INSERT INTO `oglasi` VALUES (16,'Nokia 800 Tough','Na prodaju polovan mobilni telefon, Nokia 800 Tough...','1636467704103-n1.PNG;1636467710557-n2.PNG;','2021-11-09','2021-12-31',0,4,11,11),(17,'Vivo X60 Pro','Potpuno nov mobilni telefon. Neraspakovan...','1636748768592-vx60p_1.jpg;1636748795405-vx60p_2.jpg;1636748805963-vx60p_3.jpg;','2021-11-12',NULL,0,4,7,11),(22,'Kia Spotrage (2021)','Kia Sportage. 2021. godište. Fabricka garancija. Kupljen nov u Crnoj Gori. Drugi vlasnik. 15.000 predenih kilometara. Cijena 30.000 eura.','1640188109860-kia01.PNG;1640188121349-kia02.PNG;1640188129500-kia03.PNG;1640188138859-kia04.PNG;','2021-12-22','2022-06-01',0,2,3,12),(26,'aaa','bbb 12345','','2021-12-27',NULL,0,3,13,13),(28,'BW Scala','Retke su urbane celine u kojima se sve komponente zivotnog stila savrseno uklapaju. BW Scala je jedan takav dragulj: besprekoran spoj savremene stambene arhitekture i prirodnog okruzenja, gradske vreve i spokojstva, funkcionalnog komfora i obilja mogucnosti. To je zivot po meri coveka. To je BW SCALA!\n\nVec od 238.888 eura.','1641306143074-bgwf01.PNG;1641306148591-bgwf02.PNG;1641306154334-bgwf03.PNG;1641306160863-bgwf04.PNG;1641306167304-bgwf05.PNG;','2022-01-04',NULL,0,3,12,12);
/*!40000 ALTER TABLE `oglasi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `podkategorije`
--

DROP TABLE IF EXISTS `podkategorije`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `podkategorije` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `kategorija_id` int(11) NOT NULL,
  `naziv` char(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `kategorija_id` (`kategorija_id`),
  CONSTRAINT `podkategorije_ibfk_1` FOREIGN KEY (`kategorija_id`) REFERENCES `kategorije` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `podkategorije`
--

LOCK TABLES `podkategorije` WRITE;
/*!40000 ALTER TABLE `podkategorije` DISABLE KEYS */;
INSERT INTO `podkategorije` VALUES (1,2,'sedan'),(2,2,'hatchback'),(3,2,'SUV'),(6,7,'Razno'),(7,4,'Smart'),(11,4,'Feature'),(12,3,'Stan'),(13,3,'Plac'),(14,2,'Razno'),(15,4,'Razno'),(16,3,'Razno'),(17,38,'Razno'),(22,38,'proba 07'),(23,3,'Kuca');
/*!40000 ALTER TABLE `podkategorije` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-04 15:25:44

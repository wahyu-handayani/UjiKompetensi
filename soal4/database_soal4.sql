-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 16, 2020 at 05:57 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `soal4`
--

-- --------------------------------------------------------

--
-- Table structure for table `obat`
--

CREATE TABLE `obat` (
  `id_obat` int(50) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `satuan` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `obat`
--

INSERT INTO `obat` (`id_obat`, `nama`, `satuan`) VALUES
(1, 'PARACETAMOL', 'TABLET'),
(2, 'ACHROMYCIN', 'SYRUP'),
(3, '	ACARBOSE', 'TABLET'),
(4, '	ACYCLOvir', 'TABLET'),
(5, '	DERMASOLON', 'CREAM');

-- --------------------------------------------------------

--
-- Table structure for table `persediaan`
--

CREATE TABLE `persediaan` (
  `id_unit` int(50) NOT NULL,
  `id_obat` int(50) NOT NULL,
  `stock` int(50) NOT NULL,
  `tanggal_kadaluarsa` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `persediaan`
--

INSERT INTO `persediaan` (`id_unit`, `id_obat`, `stock`, `tanggal_kadaluarsa`) VALUES
(1, 3, 15, '2020-02-21'),
(1, 5, 8, '2021-12-08'),
(2, 1, 19, '2022-08-09'),
(2, 5, 5, '2021-01-01'),
(2, 4, 11, '2020-02-19'),
(3, 2, 6, '2022-01-01'),
(3, 5, 22, '2021-01-01'),
(4, 1, 20, '2020-02-17');

-- --------------------------------------------------------

--
-- Table structure for table `unit`
--

CREATE TABLE `unit` (
  `id_unit` int(50) NOT NULL,
  `nama_unit` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `unit`
--

INSERT INTO `unit` (`id_unit`, `nama_unit`) VALUES
(1, 'IGD'),
(2, 'KIARA'),
(3, 'KIRANA'),
(4, 'KENCANA');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `obat`
--
ALTER TABLE `obat`
  ADD PRIMARY KEY (`id_obat`);

--
-- Indexes for table `persediaan`
--
ALTER TABLE `persediaan`
  ADD KEY `idx_unit` (`id_unit`),
  ADD KEY `idx_obat` (`id_obat`);

--
-- Indexes for table `unit`
--
ALTER TABLE `unit`
  ADD PRIMARY KEY (`id_unit`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `persediaan`
--
ALTER TABLE `persediaan`
  ADD CONSTRAINT `persediaan_ibfk_1` FOREIGN KEY (`id_unit`) REFERENCES `unit` (`id_unit`),
  ADD CONSTRAINT `persediaan_ibfk_2` FOREIGN KEY (`id_obat`) REFERENCES `obat` (`id_obat`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

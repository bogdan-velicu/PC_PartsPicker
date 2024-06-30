DROP TYPE IF EXISTS categorie_mare;
DROP TYPE IF EXISTS subcategorie;

CREATE TYPE categorie_mare AS ENUM (
    'gaming',
    'office',
    'server'
);

CREATE TYPE subcategorie AS ENUM (
    'Procesor',
    'Placa Video',
    'Memorie RAM',
    'Placa de Baza',
    'SSD',
    'HDD'
);

CREATE TABLE IF NOT EXISTS produse (
    id SERIAL PRIMARY KEY,
    nume VARCHAR(255) NOT NULL,
    descriere TEXT,
    imagine VARCHAR(255),
    categorie_mare categorie_mare,
    subcategorie subcategorie,
    pret NUMERIC(10,2),
    caracteristica_numerica2 NUMERIC(10,2),
    data_inregistrare DATE,
    caracteristica_unica VARCHAR(255),
    caracteristica_multipla TEXT,
    caracteristica_booleana BOOLEAN
);

INSERT INTO produse VALUES
(1,'AMD Ryzen 5 3600','Procesor cu 6 nuclee si 12 thread-uri, frecventa de baza 3.6 GHz','ryzen5_3600.png','gaming','Procesor',899.99,65.00,'2023-01-01','Socket AM4','Cooler inclus',true),
(2,'AMD Ryzen 7 3700X','Procesor cu 8 nuclee si 16 thread-uri, frecventa de baza 3.6 GHz','ryzen7_3700x.png','gaming','Procesor',1399.99,65.00,'2023-02-01','Socket AM4','Cooler inclus',true),
(3,'Intel Core i5-10400F','Procesor cu 6 nuclee si 12 thread-uri, frecventa de baza 2.9 GHz','i5_10400f.png','office','Procesor',799.99,65.00,'2023-03-01','Socket LGA1200','Fara cooler',false),
(4,'Intel Core i7-10700K','Procesor cu 8 nuclee si 16 thread-uri, frecventa de baza 3.8 GHz','i7_10700k.png','gaming','Procesor',1599.99,95.00,'2023-04-01','Socket LGA1200','Fara cooler',false),
(5,'NVIDIA GeForce RTX 3070','Placa video cu 8GB GDDR6, suport Ray Tracing','rtx3070.png','gaming','Placa Video',2499.99,220.00,'2023-05-01','PCI Express 4.0','HDMI, DisplayPort',true),
(6,'NVIDIA GeForce RTX 3080','Placa video cu 10GB GDDR6X, suport Ray Tracing','rtx3080.png','gaming','Placa Video',3499.99,320.00,'2023-06-01','PCI Express 4.0','HDMI, DisplayPort',true),
(7,'AMD Radeon RX 6800','Placa video cu 16GB GDDR6, suport Ray Tracing','rx6800.png','gaming','Placa Video',2999.99,250.00,'2023-07-01','PCI Express 4.0','HDMI, DisplayPort',true),
(8,'AMD Radeon RX 6900 XT','Placa video cu 16GB GDDR6, suport Ray Tracing','rx6900xt.png','gaming','Placa Video',4999.99,300.00,'2023-08-01','PCI Express 4.0','HDMI, DisplayPort',true),
(9,'Corsair Vengeance LPX 16GB','Memorie RAM DDR4, 3200MHz, CL16','corsair16gb.png','gaming','Memorie RAM',499.99,16.00,'2023-09-01','DDR4','3200MHz, CL16',false),
(10,'G.Skill Trident Z RGB 32GB','Memorie RAM DDR4, 3600MHz, CL18','gskill32gb.png','gaming','Memorie RAM',999.99,32.00,'2023-10-01','DDR4','3600MHz, CL18',false),
(11,'ASUS ROG Strix B550-F','Placa de baza pentru AMD, Socket AM4, ATX','asus_b550f.png','gaming','Placa de Baza',799.99,1.00,'2023-11-01','Socket AM4','PCI Express 4.0, USB 3.2',true),
(12,'MSI MPG Z490 Gaming Edge','Placa de baza pentru Intel, Socket LGA1200, ATX','msi_z490.png','gaming','Placa de Baza',899.99,1.00,'2023-12-01','Socket LGA1200','PCI Express 4.0, USB 3.2',true),
(13,'Samsung 970 EVO Plus 1TB','SSD M.2 NVMe, 1TB, PCI Express 3.0','970evo1tb.png','gaming','SSD',699.99,1.00,'2024-01-01','1TB','M.2, NVMe',false),
(14,'Western Digital Blue 2TB','HDD 3.5\", 2TB, 5400 RPM','wd2tb.png','office','HDD',299.99,2.00,'2024-02-01','2TB','3.5\", SATA',false),
(15,'Intel Xeon E-2236','Procesor cu 6 nuclee, 12 thread-uri, frecventa de baza 3.4 GHz','xeon_e2236.png','server','Procesor',1899.99,80.00,'2024-03-01','Socket LGA1151','Fara cooler',false),
(16,'Samsung PM983 3.84TB','SSD NVMe, 3.84TB, PCI Express 3.0','pm983.png','server','SSD',9999.99,1.00,'2024-04-01','3.84TB','M.2, NVMe',false),
(17,'Kingston Server Premier 128GB','Memorie RAM DDR4, 2666MHz, CL19','kingston128gb.png','server','Memorie RAM',2999.99,128.00,'2024-05-01','DDR4','2666MHz, CL19',false),
(18,'Supermicro X11SPA-T','Placa de baza pentru server, Socket LGA2066, ATX','x11spa_t.png','server','Placa de Baza',1599.99,1.00,'2024-06-01','Socket LGA2066','PCI Express 3.0, USB 3.2',true);
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema hoptrackdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `hoptrackdb` ;

-- -----------------------------------------------------
-- Schema hoptrackdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hoptrackdb` DEFAULT CHARACTER SET utf8 ;
USE `hoptrackdb` ;

-- -----------------------------------------------------
-- Table `beer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beer` ;

CREATE TABLE IF NOT EXISTS `beer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `ABV` DOUBLE NOT NULL,
  `brewery` VARCHAR(45) NULL,
  `type` VARCHAR(45) NULL,
  `description` TEXT NULL,
  `color` VARCHAR(100) NULL,
  `rating` DOUBLE NULL,
  `food_pairing` TEXT NULL,
  `image_url` VARCHAR(2000) NULL,
  `availability` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS hoptrackuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'hoptrackuser'@'localhost' IDENTIFIED BY 'hoptrackuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'hoptrackuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `beer`
-- -----------------------------------------------------
START TRANSACTION;
USE `hoptrackdb`;
INSERT INTO `beer` (`id`, `name`, `ABV`, `brewery`, `type`, `description`, `color`, `rating`, `food_pairing`, `image_url`, `availability`) VALUES (1, 'Voodoo Ranger Juicy Haze', 8.0, 'New Belgium Brewing Company', 'IPA', 'It\'s known for its hazy appearance, juicy and tropical fruit flavors, and a relatively lower bitterness compared to some traditional IPAs.', 'hazy-orange', 3, 'grilled meat', NULL, 'year-round');
INSERT INTO `beer` (`id`, `name`, `ABV`, `brewery`, `type`, `description`, `color`, `rating`, `food_pairing`, `image_url`, `availability`) VALUES (2, 'Dogfish Head 90 Minute', 9.0, 'Dogfish Head', 'IPA', 'maltiness and hop bitterness', 'amber', 5, 'burgers', NULL, 'year-round');
INSERT INTO `beer` (`id`, `name`, `ABV`, `brewery`, `type`, `description`, `color`, `rating`, `food_pairing`, `image_url`, `availability`) VALUES (3, 'Goose Island IPA', 6.0, 'Goose Island Beer Co.', 'IPA', 'balanced flavor profile that combines malt sweetness with hop bitterness. It typically has a moderate to strong hop presence, offering citrusy, piney, and floral notes. The malt backbone provides a touch of caramel sweetness, creating a well-rounded and approachable IPA.\n\n', 'copper', 1, 'wings', NULL, 'year-round');
INSERT INTO `beer` (`id`, `name`, `ABV`, `brewery`, `type`, `description`, `color`, `rating`, `food_pairing`, `image_url`, `availability`) VALUES (4, 'Stone IPA', 7.7, 'Stone Brewing', 'IPA', 'It features a blend of citrus, pine, and floral hop aromas, often accompanied by notes of grapefruit and tropical fruit.', 'amber', 2, 'cheese', NULL, 'year-round');
INSERT INTO `beer` (`id`, `name`, `ABV`, `brewery`, `type`, `description`, `color`, `rating`, `food_pairing`, `image_url`, `availability`) VALUES (5, 'Mosaic ', 7.0, 'Karl Strauss Brewing Company', 'IPA', 'It features prominent tropical fruit and citrus notes, including aromas of mango, pineapple, and grapefruit.', 'golden', 5, 'barbecue', NULL, 'year-round');
INSERT INTO `beer` (`id`, `name`, `ABV`, `brewery`, `type`, `description`, `color`, `rating`, `food_pairing`, `image_url`, `availability`) VALUES (6, 'Dogfish Head 160 Minute IPA', 15.0, 'Dogfish Head', 'IPA', 'It features a robust malt backbone with notes of caramel, toffee, and dark fruits.', 'copper', 5, 'chocolate', NULL, 'year-round');
INSERT INTO `beer` (`id`, `name`, `ABV`, `brewery`, `type`, `description`, `color`, `rating`, `food_pairing`, `image_url`, `availability`) VALUES (7, 'Bitburger Pilsner', 4.9, 'Bitburger Brauerei Th. Simon GmbH', 'Pilsner', 'It features a mild hop bitterness that is well-integrated with a light and slightly sweet maltiness.', 'pale-golden', 3, 'sausage', NULL, 'year-round');
INSERT INTO `beer` (`id`, `name`, `ABV`, `brewery`, `type`, `description`, `color`, `rating`, `food_pairing`, `image_url`, `availability`) VALUES (8, 'Vienna Lager', 5.5, 'Devils Backbone Brewing Co.', 'Lager', 'The malt sweetness is often accompanied by subtle hints of biscuit, nuttiness, and sometimes a touch of roasted malt character.', 'reddish-brown', 4, 'grilled chicken', NULL, 'year-round');
INSERT INTO `beer` (`id`, `name`, `ABV`, `brewery`, `type`, `description`, `color`, `rating`, `food_pairing`, `image_url`, `availability`) VALUES (9, 'Dogfish Head Pumpkin Ale', 7.5, 'Dogfish Head', 'Pumpkin Ale', 'It features notes of pumpkin, brown sugar, cinnamon, and nutmeg, creating a profile reminiscent of pumpkin pie.', 'amber', 5, 'stews', NULL, 'seasonal');
INSERT INTO `beer` (`id`, `name`, `ABV`, `brewery`, `type`, `description`, `color`, `rating`, `food_pairing`, `image_url`, `availability`) VALUES (10, 'Summer Ale', 5.3, 'Samuel Adams', 'Ale', 'It features a blend of malt sweetness and a hint of citrus, often accompanied by notes of lemon zest and other bright flavors.\n', 'pale-golden', 4, 'grilled shrimp', NULL, 'seasonal');

COMMIT;


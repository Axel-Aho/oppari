var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('foods.db');

db.serialize(function() {

	let sql = "CREATE TABLE food (" +
			  "id integer PRIMARY KEY NOT NULL, " +
			  "otsikko text NOT NULL, " +
			  "kuvaus text NOT NULL, " +
			  "hinta text NOT NULL)";

	db.run(sql, function(err) {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Taulu tehtiin");
	});

	sql = "INSERT INTO `food` (`id`, `otsikko`, `kuvaus`, `hinta`) "+
	" VALUES (1, 'Pippuripihvi', 'Naudan ulkofileepihvi, chorizo-maustevoita, coleslawta ja pariloitu maissintähkä. Ranskalaisia perunoita.', '32,00')";
	db.run(sql, function(err) {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	sql = "INSERT INTO `food` (`id`, `otsikko`, `kuvaus`, `hinta`) "+
	" VALUES (2, 'Pasta Carbonara', 'Formaggio pastaa,  guancialesta, pecorinosta ja kananmunista tehty kastike.', '14,00')";
	db.run(sql, function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	sql = "INSERT INTO `food` (`id`, `otsikko`, `kuvaus`, `hinta`) "+
	" VALUES (3, 'Kalakeitto', 'kermainen kalakeitto', '10,00')";
	db.run(sql, function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	sql = "INSERT INTO `food` (`id`, `otsikko`, `kuvaus`, `hinta`) "+
	" VALUES (3, 'Kalakeitto', 'kermainen kalakeitto', '10,00')";
	db.run(sql, function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	sql = "INSERT INTO `food` (`id`, `otsikko`, `kuvaus`, `hinta`) "+
	" VALUES (3, 'Kalakeitto', 'kermainen kalakeitto', '10,00')";
	db.run(sql, function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	sql = "INSERT INTO `food` (`id`, `otsikko`, `kuvaus`, `hinta`) "+
	" VALUES (3, 'Kalakeitto', 'kermainen kalakeitto', '10,00')";
	db.run(sql, function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	sql = "INSERT INTO `food` (`id`, `otsikko`, `kuvaus`, `hinta`) "+
	" VALUES (3, 'Kalakeitto', 'kermainen kalakeitto', '10,00')";
	db.run(sql, function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	db.each("SELECT id, otsikko FROM food", function(err, row) {
		if (err) {
		  return console.log(err.message);
		}
		console.log(row.id + ", " + row.otsikko);
	});

	db.close();
});

-- Super Power table
CREATE TABLE super_powers (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
	description VARCHAR(150) NOT NULL
);

-- Super Power content
INSERT INTO super_powers (name, description)
VALUES ('Invisibility', 'Subject is able to become completely unseen to the unaided eye. Usually remains detectible with infrared sensors as well as auditory.'),
('Flight', 'Can fly'),
('Super Speed', 'Runs very fast'),
('Super Strength', 'Very strong'),
('Accelerated Healing', 'Subject is able to heal physical wounds or illnesses at a rapid pace'),
('Power Blast', 'General. Subject can emit a dangerous energy from various parts of their body. Energy types vary.'),
('Animal Affinity', 'Subject can communicate with various animals. Sometimes this is limited to specific types of animals. ie: rodents, fish, etc.');

-- Heroes table
CREATE TABLE heroes (
	id SERIAL PRIMARY KEY,
	persona VARCHAR(120) NOT NULL,
	alias VARCHAR(200) NOT NULL DEFAULT 'Unknown',
	power_id INTEGER NOT NULL
);

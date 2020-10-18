



-- SELECT *
-- FROM listings;


-- INSERT INTO listings
--     (address, category, rent, available, pic)
-- VALUES('1625 Gaylord Dr, Austin, TX 78728', 'house', 1000, true, 'https://16b4xb3m2i8y3oxuu2aw0wmx-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/pasted-image-0-6.png');


-- CREATE TABLE listings 
-- (
--     listing_id int, address varchar(200) NOT NULL,
--                                                     city varchar(200) NOT NULL,
--                                                                       state varchar(4) NOT NULL,
--                                                                                        zip int NOT NULL,
--                                                                                                category varchar(200),
--                                                                                                         rent int DEFAULT 1000  NOT NULL,
--                                                                                                                          pic varchar(600)  NOT NULL,
--                                                                                                                              available BOOLEAN DEFAULT true  NOT NULL);







-- CREATE TABLE listings
-- (
--     listing_id smallint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 ),
--     address character varying,
--     city character varying,
--     state character varying,
--     zip smallint,
--     rent smallint,
--     pic character varying,
--     available boolean DEFAULT true,
--     category character varying,
--     CONSTRAINT "Property" PRIMARY KEY (listing_id)
-- );





INSERT INTO listings(
	address, city, state, zip, rent, pic, available, category)
	VALUES ('7403 Attar Cv', 'Austin', 'TX', 78759, 1000, 'https://16b4xb3m2i8y3oxuu2aw0wmx-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/pasted-image-0-6.png', true, 'house'),
    ('10817 Hammond St,', 'Austin', 'TX', 78728, 1000, 'https://16b4xb3m2i8y3oxuu2aw0wmx-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/pasted-image-0-6.png', true, 'house'),
    ('14409 Deaf Smith Blvd', 'Austin', 'TX', 78725, 1000, 'https://16b4xb3m2i8y3oxuu2aw0wmx-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/pasted-image-0-6.png', true, 'house'),
    ('1000 TEST STREET', 'Austin', 'TX', 78728, 1000, 'https://16b4xb3m2i8y3oxuu2aw0wmx-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/pasted-image-0-6.png', true, 'house'),
    ('1000 TEST STREET', 'Austin', 'TX', 78728, 1000, 'https://16b4xb3m2i8y3oxuu2aw0wmx-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/pasted-image-0-6.png', true, 'house'),
    ('1000 TEST STREET', 'Austin', 'TX', 78728, 1000, 'https://16b4xb3m2i8y3oxuu2aw0wmx-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/pasted-image-0-6.png', true, 'house'),
    ('1000 TEST STREET', 'Austin', 'TX', 78728, 1000, 'https://16b4xb3m2i8y3oxuu2aw0wmx-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/pasted-image-0-6.png', true, 'house'),
    ('1000 TEST STREET', 'Austin', 'TX', 78728, 1000, 'https://16b4xb3m2i8y3oxuu2aw0wmx-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/pasted-image-0-6.png', true, 'house'),
    ('1000 TEST STREET', 'Austin', 'TX', 78728, 1000, 'https://16b4xb3m2i8y3oxuu2aw0wmx-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/pasted-image-0-6.png', true, 'house');






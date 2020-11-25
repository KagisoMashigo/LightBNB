INSERT INTO users (name, email, password)
VALUES ('Jamie Jones', 'jj@jones.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
VALUES ('Tommy-Lee Jones', 'tl@jones.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');
VALUES ('Sam Jones', 'sj@jones.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');


INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES (1, 'Dreamy Palace', 'Dreamy', 'https://thumbs.dreamstime.com/b/foggy-window-closeup-shot-steamy-water-drops-abstract-background-close-up-115637315.jpg', 'https://barineauac.com/wp-content/uploads/bfi_thumb/steamy-windows-31tk7i04lgmtzitfclgpr3l76iuzqq9vm8seo5ahdalrgd5de.jpg', 500, 5, 3, 3, 'Canada', 'Dury', 'Guelph', 'BC', "H2GUIU", true);
VALUES (2, 'Steamy Palace', 'Steamy', 'https://i.redd.it/tkelj7oyluj01.jpg', 'https://i.ytimg.com/vi/pFDV04HObg0/hqdefault.jpg' 400, 6, 1, 2, 'Canada', 'Surry', 'Gattineua', 'ON', "H2GJHU", true);
VALUES (3, 'Sweaty Palace', 'Sweaty', 'https://vitalrecord.tamhsc.edu/wp-content/uploads/2016/05/w_sweating_thefacialfitness.jpg', 'https://thoughtcatalog.com/wp-content/uploads/2014/09/sweat.gif?resize=625,350&quality=95&strip=all&crop=1', 800, 7, 5, 4, 'Canada', 'Fury', 'Monterray', 'QC', "H2GTUT", true);


INSERT INTO reservations (guest_id, property_id, start_date, end_date)
VALUES (1, 1, '2018-09-11', '2018-09-26'),
(2, 2, '2019-01-04', '2019-02-01'),
(3, 3, '2021-10-01', '2021-10-14');


INSERT INTO property_reviews (name, birth_year)
VALUES ('Jamie Jones', 1985);
VALUES ('Jamie Jones', 1985);
VALUES ('Jamie Jones', 1985);

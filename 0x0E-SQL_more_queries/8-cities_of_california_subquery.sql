--  lists all the cities of California that can be found in the database 
-- Results must be sorted in ascending order by cities.id
SELECT `id`, `name`
  FROM `cities`
 WHERE `state_id` IN
	(SELECT `id`
 	   FROM `states`
	  WHERE `name` = "California")
 ORDER BY `id`;
		

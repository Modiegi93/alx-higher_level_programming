-- lists all cities contained in the database
-- Results must be sorted in ascending order by cities.id
SELECT c.`id`, c.`name`, s.`name`
  FROM `cities` AS c
	INNER JOIN `states` AS s
	ON c.`state_id` = s.`id`
 ORDER BY c.id;

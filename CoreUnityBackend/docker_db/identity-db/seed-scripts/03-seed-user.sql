\connect core_unity;

Insert Into security.user
	(username, login, password_hash, first_name, second_name, first_last_name, second_last_name,
	 email, company_id, role_id, master_flag, created_by)
Values
	('AFLORES', 'AFLORES', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', /*123*/
	 'Antonio', '', 'Flores', '', 'antoniocodemaster@gmail.com', 1, 1, true, 1);
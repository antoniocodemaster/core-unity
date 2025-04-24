\connect core_unity;

DROP SCHEMA IF EXISTS security;

CREATE SCHEMA IF NOT EXISTS security;

DROP DOMAIN IF EXISTS public.flag;

CREATE DOMAIN public.flag AS boolean;
  
DROP DOMAIN IF EXISTS public.name;

CREATE DOMAIN public.name AS VARCHAR(50)

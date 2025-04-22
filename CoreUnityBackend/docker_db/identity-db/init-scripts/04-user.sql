\connect core_unity_identity;

DROP TABLE IF EXISTS security.user;

CREATE TABLE security.user (
    user_id         SERIAL PRIMARY KEY,
    username        public.name UNIQUE NOT NULL,
    login           VARCHAR(100) UNIQUE NOT NULL,
    password_hash   VARCHAR(350) NOT NULL,
    first_name      public.name NOT NULL,
    second_name     public.name NOT NULL,
    first_last_name public.name NOT NULL,
    second_last_name public.name NOT NULL,
    email           VARCHAR(100) UNIQUE NOT NULL,
    company_id      INTEGER REFERENCES security.company(company_id) ON DELETE CASCADE,
    role_id         INTEGER REFERENCES security.role(role_id) ON DELETE CASCADE,
    master_flag     public.flag DEFAULT FALSE,
    active_flag     public.flag DEFAULT TRUE,
    created_on      TIMESTAMP DEFAULT NOW(),
    created_by      INTEGER NOT NULL,
    created_at_ip   INET DEFAULT '127.0.0.1' NOT NULL,
    modified_on     TIMESTAMP NULL,
    modified_by     INTEGER NULL,
    modified_at_ip  INET NULL
);

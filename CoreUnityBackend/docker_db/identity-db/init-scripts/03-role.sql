\connect core_unity_identity;

DROP TABLE IF EXISTS security.role;

CREATE TABLE security.role (
    role_id         SERIAL PRIMARY KEY,
    company_id      INTEGER REFERENCES security.company(company_id) ON DELETE CASCADE,
    name            public.name UNIQUE NOT NULL,
    active_flag     public.flag DEFAULT TRUE,
    created_on      TIMESTAMP DEFAULT NOW(),
    created_by      INTEGER NOT NULL,
    created_at_ip   INET DEFAULT '127.0.0.1' NOT NULL,
    modified_on     TIMESTAMP NULL,
    modified_by     INTEGER NULL,
    modified_at_ip  INET NULL
);
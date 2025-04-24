\connect core_unity;

DROP TABLE IF EXISTS security.department;

CREATE TABLE security.department (
    department_id SERIAL                    PRIMARY KEY,
    branch_office_id    INTEGER REFERENCES security.branch_office(branch_office_id) ON DELETE CASCADE,
    name                public.name   NOT NULL,
    phone               public.name   NULL,
    active_flag         public.flag DEFAULT TRUE,
    created_on          TIMESTAMP DEFAULT NOW(),
    created_by          INTEGER NOT NULL,
    created_at_ip       INET DEFAULT '127.0.0.1' NOT NULL
);

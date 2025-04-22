\connect core_unity;

DROP TABLE IF EXISTS security.branch_office;

CREATE TABLE security.branch_office (
    branch_office_id SERIAL PRIMARY KEY,
    company_id      INTEGER                                     NOT NULL,
    abbreviation    public.name     UNIQUE                      NOT NULL,
    name            public.name   NOT NULL,
    active_flag     public.flag DEFAULT TRUE,
    created_on      TIMESTAMP DEFAULT NOW(),
    created_by      INTEGER NOT NULL,
    created_at_ip   INET DEFAULT '127.0.0.1' NOT NULL
);

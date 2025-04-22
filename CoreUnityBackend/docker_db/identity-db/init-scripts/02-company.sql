\connect core_unity_identity;

DROP TABLE IF EXISTS security.company;

CREATE TABLE security.company (
    company_id          SERIAL                  PRIMARY KEY,
    logo_url            CHARACTER VARYING(350)                      NULL,
    abbreviation        public.name     UNIQUE                      NOT NULL,       
    name                public.name     UNIQUE                      NOT NULL,
    active_flag         public.flag     DEFAULT TRUE,
    created_on          TIMESTAMP       DEFAULT NOW(),
    created_by          INTEGER                                     NOT NULL,
    created_at_ip       INET            DEFAULT '127.0.0.1'         NOT NULL,
    modified_on         TIMESTAMP                                   NULL,
    modified_by         INTEGER                                     NULL,
    modified_at_ip      INET                                        NULL
);
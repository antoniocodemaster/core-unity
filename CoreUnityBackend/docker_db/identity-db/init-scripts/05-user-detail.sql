\connect core_unity_identity;

DROP TABLE IF EXISTS security.user_detail;

CREATE TABLE security.user_detail (
    user_detail_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    user_authentication_type_flag public.flag DEFAULT FALSE,
    number_failed_attempts INTEGER,
    factor_authentication_value VARCHAR(350),
    authentication_factor_expiration_date TIMESTAMP,
    blocking_date TIMESTAMP,
    failed_attempts_flag public.flag DEFAULT FALSE,
    factor_authentication_type_flag public.flag DEFAULT FALSE,
    factor_authentication_flag public.flag DEFAULT FALSE,
    temporary_key_flag public.flag DEFAULT FALSE,
    change_key_flag public.flag DEFAULT FALSE,
    active_flag public.flag DEFAULT TRUE,
    created_on TIMESTAMP DEFAULT NOW(),
    created_by INTEGER NOT NULL,
    created_at_ip INET DEFAULT '127.0.0.1' NOT NULL,
    modified_on TIMESTAMP,
    modified_by INTEGER,
    modified_at_ip INET
);

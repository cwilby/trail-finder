psql -U trailfinder -tc "SELECT 1 FROM pg_roles WHERE rolname='trailfinder'" | grep -q 1 || \
    psql -U trailfinder -c "CREATE ROLE trailfinder LOGIN PASSWORD 'secret';"

psql -U trailfinder -tc "SELECT 1 from pg_database WHERE datname='trailfindertest';" | grep -q 1 || \
    psql -U trailfinder -c "CREATE DATABASE trailfindertest;"

psql -U trailfinder -tc "SELECT 1 from pg_database WHERE datname='trailfinder';" | grep -q 1 || \
    psql -U trailfinder -c "CREATE DATABASE trailfinder;"

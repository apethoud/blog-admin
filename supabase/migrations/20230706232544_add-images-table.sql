create table "public"."images" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone default now(),
    "url" text,
    "ui_order" smallint,
    "post_id" bigint
);


alter table "public"."images" enable row level security;

CREATE UNIQUE INDEX images_pkey ON public.images USING btree (id);

alter table "public"."images" add constraint "images_pkey" PRIMARY KEY using index "images_pkey";

alter table "public"."images" add constraint "images_post_id_fkey" FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE not valid;

alter table "public"."images" validate constraint "images_post_id_fkey";

create policy "Enable insert for authenticated users only"
on "public"."images"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable read access for all users"
on "public"."images"
as permissive
for select
to public
using (true);




create policy "Enable insert for authenticated users only"
on "public"."paragraphs"
as permissive
for insert
to authenticated
with check (true);


create policy "Enable insert for authenticated users only"
on "public"."posts"
as permissive
for insert
to authenticated
with check (true);




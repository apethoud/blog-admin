create policy "Enable read access for all users"
on "public"."paragraphs"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."posts"
as permissive
for select
to public
using (true);




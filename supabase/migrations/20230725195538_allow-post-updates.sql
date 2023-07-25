create policy "Enable update for authenticated users only"
on "public"."posts"
as permissive
for update
to authenticated
using (true)
with check (true);




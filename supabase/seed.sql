INSERT INTO posts (title, slug)
VALUES 
  ('10 things I love about Supabase', '10-things-i-love-about-supabase'),
  ('Learning Javascript the easy way', 'learning-javascript-the-easy-way'),
  ('Setting up Docker for the first time', 'setting-up-docker-for-the-first-time');

INSERT INTO paragraphs (body, ui_order, post_id)
VALUES
  ('Supabase is really easy to setup. The official documentation is really helpful and clear, and they have lots of helpful content for integrating Supabase with lots of JS frameworks like Next.js.', 1, (SELECT id from posts WHERE slug='10-things-i-love-about-supabase')),
  ('Supabase provides a fantastic way to view the database using Studio.', 2, (SELECT id from posts WHERE slug='10-things-i-love-about-supabase')),
  ('Supabase also has other things that are great which I''ll expound upon eventually.', 3, (SELECT id from posts WHERE slug='10-things-i-love-about-supabase')),
  ('Learning Javascript can be a daunting task, especially if you''ve never learned a programming language before. But there are some fundamentals that you can learn early on that will make the process much easier.', 1, (SELECT id from posts WHERE slug='learning-javascript-the-easy-way')),
  ('First, we''ll discuss primitives. Primitives are things that can be added for various reasons that I''ll describe later.', 2, (SELECT id from posts WHERE slug='learning-javascript-the-easy-way')),
  ('Javascript is a great first language to learn since it''s really easy to experiment with it on the web and with tools like Codepen.', 3, (SELECT id from posts WHERE slug='learning-javascript-the-easy-way')),
  ('Docker is a container machine and it does things really well. You can make containers and stuff and things, which will make your life easier.', 1, (SELECT id from posts WHERE slug='setting-up-docker-for-the-first-time')),
  ('When setting up Docker for the first time, you might get confused as to where to start. The first thing you''re going to want to do is install Docker.', 2, (SELECT id from posts WHERE slug='setting-up-docker-for-the-first-time')),
  ('Once you learn the basics of Docker, you can move onto learning how to write a docker compose file, which will help you set up things more easily.', 3, (SELECT id from posts WHERE slug='setting-up-docker-for-the-first-time'));
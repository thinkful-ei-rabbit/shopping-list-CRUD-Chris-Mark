BEGIN;

INSERT INTO blogful_articles (title, content, date_published)

VALUES
('First Post' , 'This is a Post', now() - '21 days'::INTERVAL),
('Second Post' , 'This is a Post', now() - '21 days'::INTERVAL),
('Third Post' , 'This is a Post', now() - '21 days'::INTERVAL),
('Fourth Post' , 'This is a Post', now() - '18 days'::INTERVAL),
('Fifth Post' , 'This is a Post', now() - '18 days'::INTERVAL),
('Sixth Post' , 'This is a Post', now() - '18 days'::INTERVAL),
('Seventh Post' , 'This is a Post', now() - '10 days'::INTERVAL),
('Eigth Post' , 'This is a Post', now() - '9 days'::INTERVAL),
('Ninth Post' , 'This is a Post', now() - '9 days'::INTERVAL),
('Tenth Post' , 'This is a Post', now() - '9 days'::INTERVAL),
('New Post' , 'This is a Post', now() - '8 days'::INTERVAL),
('Newer Post' , 'This is a Post', now() - '7 days'::INTERVAL),
('Newerer Post' , 'This is a Post', now() - '6 days'::INTERVAL),
('Even Newerer Post' , 'This is a Post', now() - '5 days'::INTERVAL),
('You got post? I do!' , 'This is a Post', now() - '4 days'::INTERVAL),
('Hitting you with that post' , 'This is a Post', now()),
('This is my last post. . . ' , 'This is a Post', now()),
('Sike, here is a post!' , 'This is a Post', now());



COMMIT;
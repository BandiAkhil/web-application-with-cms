--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1 (Debian 12.1-1.pgdg100+1)
-- Dumped by pg_dump version 12.1 (Debian 12.1-1.pgdg100+1)

-- SET statement_timeout = 0;
-- SET lock_timeout = 0;
-- SET idle_in_transaction_session_timeout = 0;
-- SET client_encoding = 'UTF8';
-- SET standard_conforming_strings = on;
-- SELECT pg_catalog.set_config('search_path', '', false);
-- SET check_function_bodies = false;
-- SET xmloption = content;
-- SET client_min_messages = warning;
-- SET row_security = off;

--
-- Data for Name: uploaded_files; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.uploaded_files (id, name, path, fileable_type, fileable_id, created_at, updated_at) VALUES (1, 'February 2016.pdf', 'uploaded-files/178fae5d2495f7ac674d185d75cb0254/February 2016.pdf', 'page', 7, '2020-04-03 20:26:43', '2020-04-03 20:26:43');
INSERT INTO public.uploaded_files (id, name, path, fileable_type, fileable_id, created_at, updated_at) VALUES (2, 'January 2018.pdf', 'uploaded-files/57dbd640ee2b919c49c3525e469d7c4d/January 2018.pdf', 'page', 7, '2020-04-03 20:26:44', '2020-04-03 20:26:44');
INSERT INTO public.uploaded_files (id, name, path, fileable_type, fileable_id, created_at, updated_at) VALUES (3, 'January 2019.pdf', 'uploaded-files/f30ca1a35ad0d374a38c53137df8825e/January 2019.pdf', 'page', 7, '2020-04-03 20:26:44', '2020-04-03 20:26:44');
INSERT INTO public.uploaded_files (id, name, path, fileable_type, fileable_id, created_at, updated_at) VALUES (4, 'June 2017.pdf', 'uploaded-files/795957f6fb97715ab9641ac2b3adc96c/June 2017.pdf', 'page', 7, '2020-04-03 20:26:44', '2020-04-03 20:26:44');
INSERT INTO public.uploaded_files (id, name, path, fileable_type, fileable_id, created_at, updated_at) VALUES (5, 'March 2017.pdf', 'uploaded-files/3239d32faf86cdf729784ab61d7af906/March 2017.pdf', 'page', 7, '2020-04-03 20:26:44', '2020-04-03 20:26:44');
INSERT INTO public.uploaded_files (id, name, path, fileable_type, fileable_id, created_at, updated_at) VALUES (6, 'October 2019.pdf', 'uploaded-files/9e7184dff0b0442bb6c4da803efdd94c/October 2019.pdf', 'page', 7, '2020-04-03 20:26:44', '2020-04-03 20:26:44');
INSERT INTO public.uploaded_files (id, name, path, fileable_type, fileable_id, created_at, updated_at) VALUES (7, 'Statutes (Dutch).pdf', 'uploaded-files/4f34d966b48e368146981817e211cc98/Statutes (Dutch).pdf', 'page', 8, '2020-04-03 20:28:51', '2020-04-03 20:28:51');
INSERT INTO public.uploaded_files (id, name, path, fileable_type, fileable_id, created_at, updated_at) VALUES (8, 'Rules of Procedure (Dutch).pdf', 'uploaded-files/6c07d82b9fbe1c931df3902cbe014594/Rules of Procedure (Dutch).pdf', 'page', 8, '2020-04-03 20:28:51', '2020-04-03 20:28:51');
INSERT INTO public.uploaded_files (id, name, path, fileable_type, fileable_id, created_at, updated_at) VALUES (9, 'Rules of Procedure (English).pdf', 'uploaded-files/d85591c5603e9b40ed2a1bfa57e69717/Rules of Procedure (English).pdf', 'page', 8, '2020-04-03 20:28:51', '2020-04-03 20:28:51');


--
-- Name: uploaded_files_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.uploaded_files_id_seq', 9, true);


--
-- PostgreSQL database dump complete
--


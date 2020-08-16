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
-- Data for Name: page_groups; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.page_groups (id, name) VALUES (1, 'Association');
INSERT INTO public.page_groups (id, name) VALUES (2, 'Companies');


--
-- Name: page_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.page_groups_id_seq', 2, true);


--
-- PostgreSQL database dump complete
--


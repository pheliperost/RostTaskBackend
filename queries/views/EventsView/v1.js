module.exports.up = `
-- View: public.EventView

-- DROP VIEW public."EventView";

CREATE OR REPLACE VIEW public."EventView"
 AS
 SELECT events.id,
    events.date,
    events."StartedAtSch",
    events."endedAtSch",
    events."startedAt",
    events."endedAt",
    events."Obs",
    events."eventType",
    events.student,
    stu.name,
    evttype.type
   FROM events
     JOIN students stu ON stu.id = events.student
     JOIN "eventType" evttype ON evttype.id = events."eventType";

ALTER TABLE public."EventView"
    OWNER TO postgres;
`;
module.exports.down = 'DROP VIEW "EventView";';
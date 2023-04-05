-- maintenance_timeslot
CREATE TABLE [maintenance_timeslot] (
    [id] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    [maintenance_id] INTEGER NOT NULL CONSTRAINT [FK_maintenance] REFERENCES [maintenance]([id]) ON DELETE CASCADE ON UPDATE CASCADE,
    [start_date] DATETIME NOT NULL,
    [end_date] DATETIME,
    [generated_next] BOOLEAN DEFAULT 0
);
